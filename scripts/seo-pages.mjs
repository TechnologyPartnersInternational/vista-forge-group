// ─── Static per-route HTML for search engines and link previews ──────────────
// Runs after `vite build` (see package.json "build"). The app is a single-page
// app, so without this every URL serves the homepage <head>. For each public
// route in src/seo/routeMeta.ts this writes dist/<route>/index.html: the built
// shell with that page's title, description, keywords, canonical URL, Open Graph
// and Twitter tags, JSON-LD, and a <noscript> summary with internal links.
//
// Tags carry data-rh="true", so react-helmet-async replaces them in the browser
// instead of duplicating them. Vercel serves these files ahead of the SPA
// rewrites in vercel.json (with "cleanUrls", /route serves route.html). No
// browser is needed, so this runs on any host, including Vercel's build.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as esbuild from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const cacheDir = path.join(root, "node_modules", ".cache", "seo-pages");
fs.mkdirSync(cacheDir, { recursive: true });

const bundle = path.join(cacheDir, "routeMeta.mjs");
esbuild.buildSync({
  entryPoints: [path.join(root, "src/seo/routeMeta.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  jsx: "automatic",
  alias: { "@": path.join(root, "src") },
  outfile: bundle,
  logLevel: "error",
});
const { buildRouteMetas, absoluteUrl, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } = await import(
  pathToFileURL(bundle).href + `?t=${Date.now()}`
);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")}</script>`;

const shellPath = path.join(dist, "index.html");
if (!fs.existsSync(shellPath)) {
  console.error("seo-pages: dist/index.html not found; run vite build first.");
  process.exit(1);
}
const shell = fs.readFileSync(shellPath, "utf8");

function render(meta) {
  const url = `${SITE_URL}${meta.path}`;
  const image = absoluteUrl(meta.image) || DEFAULT_OG_IMAGE;
  const head = [
    `<link data-rh="true" rel="canonical" href="${esc(url)}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<meta data-rh="true" property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta data-rh="true" property="og:title" content="${esc(meta.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${esc(meta.description)}" />`,
    `<meta data-rh="true" property="og:image" content="${esc(image)}" />`,
    `<meta data-rh="true" property="og:image:width" content="1200" />`,
    `<meta data-rh="true" property="og:image:height" content="630" />`,
    `<meta data-rh="true" property="og:url" content="${esc(url)}" />`,
    `<meta data-rh="true" property="og:locale" content="en_NG" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="${esc(image)}" />`,
    ...meta.jsonLd.map(jsonLd),
  ].join("\n    ");

  const noscript = `<noscript>
      <div>
        <h1>${esc(meta.h1)}</h1>
        <p>${esc(meta.summary)}</p>
        ${meta.points?.length ? `<ul>${meta.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        <ul>${meta.links.map((l) => `<li><a href="${esc(SITE_URL + l.path)}">${esc(l.label)}</a></li>`).join("")}</ul>
        <p>Technology Partners International (TPI), Lagos, Nigeria. Email: info@tpinigeria.com. <a href="${SITE_URL}/contact">Contact TPI</a></p>
      </div>
    </noscript>`;

  let html = shell;
  const swap = (re, value, what) => {
    if (!re.test(html)) throw new Error(`seo-pages: could not find ${what} in dist/index.html`);
    html = html.replace(re, value);
  };
  swap(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`, "<title>");
  swap(
    /<meta data-rh="true" name="description" content="[^"]*" \/>/,
    `<meta data-rh="true" name="description" content="${esc(meta.description)}" />`,
    "meta description",
  );
  swap(
    /<meta data-rh="true" name="keywords" content="[^"]*" \/>/,
    `<meta data-rh="true" name="keywords" content="${esc(meta.keywords || "")}" />`,
    "meta keywords",
  );
  swap(/<noscript>[\s\S]*?<\/noscript>/, noscript, "<noscript> fallback");
  swap(/<\/head>/, `    ${head}\n  </head>`, "</head>");
  return html;
}

const routes = buildRouteMetas();
for (const meta of routes) {
  const dir = path.join(dist, ...meta.path.split("/").filter(Boolean));
  const html = render(meta);
  fs.mkdirSync(dir, { recursive: true });
  // route.html is what Vercel serves at /route with "cleanUrls"; route/index.html
  // covers hosts that resolve directory indexes instead.
  fs.writeFileSync(`${dir}.html`, html);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
console.log(`seo-pages: wrote static HTML for ${routes.length} routes`);
