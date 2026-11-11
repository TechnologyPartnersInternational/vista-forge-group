// Local development server.
//
// Production runs the Vercel serverless functions in ../api. This server mounts
// those SAME handlers on Express so local behaviour (auth, validation, errors)
// can never drift from production. Add new endpoints in ../api, then register
// them in ROUTES below.

const path = require('path');
const { pathToFileURL } = require('url');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');

const PORT = process.env.PORT || 5000;
const API_DIR = path.join(__dirname, '..', 'api');

const ROUTES = [
  ['/api/auth/login', 'auth/login.js'],
  ['/api/projects', 'projects/index.js'],
  ['/api/projects/:id', 'projects/[id].js'],
  ['/api/insights', 'insights/index.js'],
  ['/api/insights/:id', 'insights/[id].js'],
  ['/api/gallery', 'gallery.js'],
  ['/api/contact', 'contact.js'],
  ['/api/certificates/verify', 'certificates/verify.js'],
];

// Vercel exposes dynamic path segments on req.query; mirror that here.
function adapt(handler) {
  return async (req, res, next) => {
    try {
      Object.defineProperty(req, 'query', {
        value: { ...req.query, ...req.params },
        writable: true,
        configurable: true,
      });
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
}

async function main() {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '1mb' }));

  for (const [route, file] of ROUTES) {
    const mod = await import(pathToFileURL(path.join(API_DIR, file)).href);
    app.all(route, adapt(mod.default));
  }

  app.use((req, res) => res.status(404).json({ message: 'Not found' }));
  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'Invalid JSON body' });
    }
    console.error('[server]', err);
    res.status(500).json({ message: 'Internal server error' });
  });

  app.listen(PORT, () => console.log(`API dev server running on http://localhost:${PORT}`));
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
