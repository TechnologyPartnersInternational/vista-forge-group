/**
 * ─── TPI Nigeria — Post-Build Prerender Script ──────────────────────────────
 *
 * This script runs AFTER `vite build` to generate static HTML files for all
 * key pages. It:
 *   1. Starts a local static server serving the `dist/` folder
 *   2. Opens each route in a headless browser (Puppeteer)
 *   3. Waits for React to render
 *   4. Saves the fully-rendered HTML to the correct file path in `dist/`
 *
 * This ensures search engine crawlers and AI bots see fully rendered content
 * (meta tags, JSON-LD, headings, text) instead of an empty SPA shell.
 *
 * Usage: node prerender.cjs  (run after `npm run build`)
 * ─────────────────────────────────────────────────────────────────────────────
 */

const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const PORT = 4173;

// ─── All public routes to prerender ──────────────────────────────────────────
const ROUTES = [
  '/',
  '/what-we-do',
  '/what-we-do/environment',
  '/what-we-do/environment/environmental-planning-management',
  '/what-we-do/environment/environmental-compliance-monitoring',
  '/what-we-do/environment/environmental-site-assessment',
  '/what-we-do/environment/climate-change-sustainability',
  '/what-we-do/environment/health-social-engagement',
  '/what-we-do/environment/air-quality-acoustics',
  '/what-we-do/environment/cleanup-remediation',
  '/what-we-do/environment/hydrological-services',
  '/what-we-do/environment/geophysical-services',
  '/what-we-do/environment/gis-services',
  '/what-we-do/laboratory',
  '/what-we-do/laboratory/general-laboratory-services',
  '/what-we-do/laboratory/remote-mobile-laboratory',
  '/what-we-do/laboratory/eco-toxicity',
  '/what-we-do/laboratory/production-chemistry',
  '/what-we-do/laboratory/geochemical-fingerprinting',
  '/what-we-do/waste-management',
  '/what-we-do/waste-management/integrated-solid-waste',
  '/what-we-do/waste-management/incinerator',
  '/what-we-do/waste-management/thermal-desorption',
  '/what-we-do/waste-management/waste-policy-formulation',
  '/what-we-do/engineering',
  '/what-we-do/engineering/engineering-design',
  '/what-we-do/engineering/asset-integrity-management',
  '/what-we-do/digital-solutions',
  '/what-we-do/digital-solutions/security-software-solutions',
  '/what-we-do/digital-solutions/data-management-reporting',
  '/what-we-do/training',
  '/what-we-do/training/esg-training',
  '/what-we-do/training/customised-training',
  '/what-we-do/training/environmental-laboratory-training',
  '/company',
  '/contact',
  '/projects',
  '/insights',
  '/gallery',
  '/verify',
  '/privacy-policy',
];

// ─── Simple static file server ───────────────────────────────────────────────
function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
    '.webp': 'image/webp',
  };

  return http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

    // SPA fallback: if file doesn't exist, serve index.html
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, 'index.html');
    } else if (fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST_DIR, 'index.html');
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}

// ─── Prerender a single route ────────────────────────────────────────────────
async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  // Block heavy assets to speed up rendering
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    if (['image', 'media', 'font'].includes(resourceType)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const url = `http://localhost:${PORT}${route}`;

  try {
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render (wait for content inside #root)
    await page.waitForSelector('#root > *', { timeout: 10000 });

    // Give a bit more time for meta tags and JSON-LD to inject
    await new Promise((r) => setTimeout(r, 1500));

    // Get the full rendered HTML
    const html = await page.content();

    // Determine output file path
    const outputDir = path.join(DIST_DIR, route === '/' ? '' : route);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = route === '/'
      ? path.join(DIST_DIR, 'index.html')
      : path.join(outputDir, 'index.html');

    fs.writeFileSync(outputFile, html);
    console.log(`  ✓ ${route} → ${path.relative(DIST_DIR, outputFile)}`);
  } catch (err) {
    console.error(`  ✗ ${route} — ${err.message}`);
  } finally {
    await page.close();
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔍 TPI Prerender: Generating static HTML for SEO...\n');

  // Verify dist exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Start static server
  const server = createStaticServer();
  server.listen(PORT, () => {
    console.log(`📡 Static server running at http://localhost:${PORT}\n`);
  });

  // Launch headless browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  console.log(`📄 Pre-rendering ${ROUTES.length} routes...\n`);

  // Process routes sequentially (to avoid memory issues)
  for (const route of ROUTES) {
    await prerenderRoute(browser, route);
  }

  await browser.close();
  server.close();

  console.log(`\n✅ Pre-rendering complete! ${ROUTES.length} static HTML files generated in dist/\n`);
}

main().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
