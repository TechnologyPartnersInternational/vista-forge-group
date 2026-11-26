// Builds the TPI marine brochures: one overview and six service brochures.
//   node brochures/build.mjs            render HTML + PDF (PDFs go to public/brochures)
//   node brochures/build.mjs --html     render HTML only
// Service content is read from src/data/marineServices.ts (same as the website).

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as esbuild from "esbuild";
import { contacts, general, serviceCovers } from "./copy.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const htmlDir = path.join(here, "html");
const pdfDir = path.join(root, "public", "brochures"); // served at /brochures/*.pdf
const cacheDir = path.join(here, ".cache");
for (const d of [htmlDir, pdfDir, cacheDir]) fs.mkdirSync(d, { recursive: true });

// ── Load service data from the website source ──────────────────────────────
const bundled = path.join(cacheDir, "marine.mjs");
esbuild.buildSync({
  entryPoints: [path.join(root, "src/data/marineServices.ts")],
  bundle: true, format: "esm", platform: "node", outfile: bundled, logLevel: "error",
});
const { marineService, marineOverview, MARINE_PHOTO_CREDITS } = await import(pathToFileURL(bundled).href + `?t=${Date.now()}`);
const subs = marineService.subServices;

// ── Helpers ─────────────────────────────────────────────────────────────────
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const key = (p) => path.basename(p).replace(/\.(webp|jpg)$/, "");
/** Image name or site path → src relative to brochures/html/. */
// Brochures use JPEG copies of the site images (brochures/assets/img), so
// Chrome embeds them compressed instead of re-encoding WebP losslessly.
const src = (p) => (p.startsWith("cover-") ? `../assets/${p}.jpg` : `../assets/img/${key(p)}.jpg`);

function credits(used) {
  const seen = new Set();
  const list = [];
  for (const u of used) {
    const k = key(u).replace(/^cover-/, "photo-");
    if (seen.has(k) || !MARINE_PHOTO_CREDITS[k]) continue;
    seen.add(k);
    const c = MARINE_PHOTO_CREDITS[k];
    list.push(`${esc(c.by)} (${esc(c.licence)})`);
  }
  return list.length ? `Photographs: ${list.join(", ")}, via Wikimedia Commons.` : "";
}

/** "Send the a, b, c and d." → ["The a", "B", "C", "D"] */
function sendList(prompt) {
  const body = prompt.replace(/^Send (us )?/, "").replace(/\.$/, "");
  const parts = body.split(/, (?![^()]*\))/);
  const last = parts.pop();
  const andIdx = last.lastIndexOf(" and ");
  if (andIdx > -1) parts.push(last.slice(0, andIdx), last.slice(andIdx + 5));
  else parts.push(last);
  return parts.map((s) => s.trim()).filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1));
}

const img = (p, alt = "", cls = "photo") => `<img class="${cls}" src="${src(p)}" alt="${esc(alt)}">`;
const folio = (label, n) =>
  `<div class="folio"><span>${esc(label)}</span><span class="num">${String(n).padStart(2, "0")}</span></div>`;

function cover({ image, series, title, line }) {
  return `
<section class="page cover">
  ${img(image, "", "bg")}
  <div class="shade"></div>
  <div class="top">
    <img class="logo" src="../assets/logo-white.png" alt="TPI Group, Technology Partners International">
    <span class="series">${esc(series)}</span>
  </div>
  <div class="title">
    <div class="bar"></div>
    <h1>${esc(title)}</h1>
    <p class="line">${esc(line)}</p>
  </div>
  <div class="foot"><span>${contacts.web}</span><span>${contacts.emails.join("  ·  ")}</span></div>
</section>`;
}

const contactGrid = (cols = 3) => `
  <div class="contact-grid">
    <div><div class="k">Email</div><div class="v">${contacts.emails.join("<br>")}</div></div>
    <div><div class="k">Phone</div><div class="v">${contacts.phones.join("<br>")}</div></div>
    ${cols === 3
      ? `<div><div class="k">Head office</div><div class="v sm">${esc(contacts.address)}<br>${contacts.web}</div></div>`
      : `<div><div class="k">Head office</div><div class="v sm">${esc(contacts.address)}</div></div>
         <div><div class="k">Offices</div><div class="v sm">${esc(contacts.offices)}<br>${contacts.web}</div></div>`}
  </div>`;

function page(title, body) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)} | TPI Group</title>
<meta name="author" content="Technology Partners International (TPI Group)">
<link rel="stylesheet" href="../brochure.css">
</head>
<body>
${body}
</body>
</html>`;
}

// ── Overview brochure ───────────────────────────────────────────────────────
function buildGeneral() {
  const used = [];
  const use = (p) => (used.push(p), p);
  const series = "Marine & Underwater Services";
  const label = "TPI Group  ·  Underwater Inspection & Survey";

  const thumbs = {
    "offshore-subsea-inspection": "rov-marked-jacket-member",
    "underwater-ndt-corrosion": "anode-length-scale",
    "pipeline-cable-inspection": "rov-exposed-flowline",
    "hull-marine-structure-inspection": "hull-propeller-rudder",
    "bathymetric-seabed-surveys": "bathymetry-terrain-model",
    "underwater-environmental-surveys": "reef-transect",
  };
  const pageOf = (i) => 4 + Math.floor(i / 2);

  const p1 = cover({ image: use(general.cover), series, title: general.title, line: general.coverLine });

  const p2 = `
<section class="page">
  <div class="inner">
    <div class="grid intro-top">
      <h2>${esc(general.introHeading)}</h2>
      <div class="body">
        <p class="lede">${esc(general.intro[0])}</p>
        <p class="muted">${esc(general.intro[1])}</p>
      </div>
    </div>
    <div class="dive rules">
      ${general.onEveryDive.map((d) => `<div><h3>${esc(d.title)}</h3><p class="small">${esc(d.desc)}</p></div>`).join("")}
    </div>
  </div>
  <div class="foot-photo" style="height:128mm">${img(use(general.introImage), "Work-class ROV being lowered from a survey vessel")}</div>
</section>`;

  const p3 = `
<section class="page">
  <div class="inner">
    <div class="index-head">
      <h2>${esc(general.indexHeading)}</h2>
      <p>${esc(general.indexLine)}</p>
    </div>
    <div>
      ${subs.map((s, i) => `
      <div class="index-row">
        <div class="frame thumb">${img(use(thumbs[s.id]), s.title)}</div>
        <div><h3>${esc(s.title)}</h3><p>${esc(s.shortDesc)}</p></div>
        <div class="pg">p. ${pageOf(i)}</div>
      </div>`).join("")}
    </div>
  </div>
  ${folio(label, 3)}
</section>`;

  const svcBlock = (s) => `
    <article class="svc">
      <div class="frame">${img(use(s.heroImage), s.title)}</div>
      <div class="text">
        <div>
          <h2>${esc(s.title)}</h2>
          <p class="short">${esc(s.shortDesc)}</p>
        </div>
        <div>
          <ul>${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          <p class="use"><b>Used for</b> ${esc(s.applications.replace(/\.$/, "").replace(/^./, (c) => c.toLowerCase()))}.</p>
        </div>
      </div>
    </article>`;

  const duos = [0, 2, 4].map((i, k) => `
<section class="page">
  <div class="inner duo">
    ${svcBlock(subs[i])}
    ${svcBlock(subs[i + 1])}
  </div>
  ${folio(label, 4 + k)}
</section>`).join("");

  const p7 = `
<section class="page">
  <div class="inner">
    <div class="grid" style="align-items:end">
      <h2 style="grid-column:1 / span 6">${esc(general.receiveHeading)}</h2>
      <p class="muted" style="grid-column:7 / span 6">${esc(general.receiveLine)}</p>
    </div>
    <div class="receive-grid rules">
      ${marineOverview.record.map((r) => `<div><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p></div>`).join("")}
    </div>
    <div class="outputs">
      ${general.outputs.map((o) => `<div class="frame">${img(use(o), "Inspection output")}</div>`).join("")}
    </div>
  </div>
  <div class="sectors">
    <h2>${esc(general.sectorsHeading)}</h2>
    <ul>${general.sectors.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
  </div>
  ${folio(label, 7)}
</section>`;

  const p8 = `
<section class="page back">
  <h2>${esc(general.processHeading)}</h2>
  <div class="steps">
    ${general.process.map((p, i) => `<div><div class="n">${i + 1}</div><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>`).join("")}
  </div>
  <div class="band">${img(use("structure-colonisation"), "Marine growth on a submerged structure")}</div>
  <div class="contact-block">
    <h2>Tell us about the asset. We&#8217;ll scope the survey.</h2>
    ${contactGrid(3)}
  </div>
  <div class="end">
    <img src="../assets/logo-white.png" alt="TPI Group">
    <p class="credits">${esc(contacts.offices)}<br>${credits(used)}</p>
  </div>
</section>`;

  return { file: path.basename(marineOverview.brochure, ".pdf"), html: page(general.title, p1 + p2 + p3 + duos + p7 + p8) };
}

// ── Service brochures ───────────────────────────────────────────────────────
function buildService(s) {
  const meta = serviceCovers[s.id];
  const used = [];
  const use = (p) => (used.push(p), p);
  const [lede, second] = s.fullDesc.split("\n\n");

  const p1 = cover({ image: use(meta.cover), series: "Marine & Underwater Services", title: s.title, line: meta.line });

  const p2 = `
<section class="page ov">
  <div class="inner col">
    <p class="lede">${esc(lede)}</p>
    ${second ? `<p class="second">${esc(second)}</p>` : ""}
    <div class="caps-head"><h2>What we cover</h2></div>
    <div class="caps rules">
      ${s.capabilities.map((c) => `<div><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></div>`).join("")}
    </div>
  </div>
  ${folio(s.title, 2)}
</section>`;

  const left = { h: "Where it is used", p: s.applications };
  const right = s.addOns ? { h: "Measurement and follow-up", p: s.addOns } : { h: "Scope and limits", p: s.limits };
  const p3 = `
<section class="page ev">
  <div class="hero">${img(use(s.image), s.title)}</div>
  <div class="body">
    <div class="strip">
      ${s.gallery.map((g) => `<div class="frame">${img(use(g.src), g.alt)}</div>`).join("")}
    </div>
    <div class="cols">
      <div><h3>${left.h}</h3><p>${esc(left.p)}</p></div>
      <div><h3>${right.h}</h3><p>${esc(right.p)}</p></div>
    </div>
    ${s.addOns ? `<div class="limits"><h3>Scope and limits</h3><p>${esc(s.limits)}</p></div>` : ""}
  </div>
  ${folio(s.title, 3)}
</section>`;

  const others = subs.filter((o) => o.id !== s.id);
  const p4 = `
<section class="page dl">
  <div class="inner">
    <h2>What you receive</h2>
    <div class="grid2 rules">
      ${s.deliverables.map((d) => `<div><h3>${esc(d.title)}</h3><p>${esc(d.desc)}</p></div>`).join("")}
    </div>
    <div class="send">
      <h3>To scope the work, send us</h3>
      <ul>${sendList(s.enquiryPrompt).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </div>
  </div>
  <div class="panel">
    <div class="row">
      <div>
        <h2>Talk to our marine team</h2>
        ${contactGrid(4)}
      </div>
      <div class="also">
        <h3>Also from TPI</h3>
        <ul>${others.map((o) => `<li>${esc(o.title)}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="end">
      <img src="../assets/logo-white.png" alt="TPI Group">
      <p class="credits">${credits(used)}</p>
    </div>
  </div>
</section>`;

  return { file: path.basename(s.brochure, ".pdf"), html: page(s.title, p1 + p2 + p3 + p4) };
}

// ── Render ──────────────────────────────────────────────────────────────────
const docs = [buildGeneral(), ...subs.map(buildService)];
for (const d of docs) fs.writeFileSync(path.join(htmlDir, `${d.file}.html`), d.html);
console.log(`HTML: ${docs.length} brochures → ${path.relative(root, htmlDir)}`);

if (!process.argv.includes("--html")) {
  const chrome = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
  ].find((p) => fs.existsSync(p));
  if (!chrome) throw new Error("Chrome or Edge not found");
  const profile = path.join(cacheDir, "chrome-profile");
  for (const d of docs) {
    const out = path.join(pdfDir, `${d.file}.pdf`);
    execFileSync(chrome, [
      "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--no-first-run",
      `--user-data-dir=${profile}`, "--allow-file-access-from-files",
      "--virtual-time-budget=20000", `--print-to-pdf=${out}`,
      pathToFileURL(path.join(htmlDir, `${d.file}.html`)).href,
    ], { stdio: "ignore", timeout: 120000 });
    console.log(`PDF: ${path.relative(root, out)} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`);
  }
}
