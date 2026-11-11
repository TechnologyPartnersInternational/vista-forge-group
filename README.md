# Vista Forge Group

TPI Group delivers integrated environmental, laboratory, engineering, and digital solutions across West Africa.

## Architecture

- `src/` — Vite + React + TypeScript frontend (shadcn/ui, Tailwind).
- `api/` — Vercel serverless functions. **This is the only backend code.** Production runs these directly.
- `server/` — local dev server that mounts the same `api/` handlers on Express, plus one-off seed/maintenance scripts.

## Local Development

```sh
npm i
(cd server && npm i)

# Configure secrets for the API (see server/.env.example)
cp server/.env.example server/.env

# Terminal 1 — API on http://localhost:5000
cd server && npm run dev

# Terminal 2 — frontend on http://localhost:8080 (proxies /api to :5000)
npm run dev
```

## Environment variables

Set these in Vercel (Settings → Environment Variables) for production, and in `server/.env` locally:

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | Projects, insights, certificates |
| `RESEND_API_KEY` | Contact form email |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Gallery |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD` | Admin portal login (checked server-side) |
| `ADMIN_TOKEN_SECRET` | Signs admin session tokens; random, 32+ chars |

Never put secrets in `VITE_*` variables — those are bundled into the public JavaScript.

## Admin portal

Sign in at `/tpi-admin-portal`. Sessions last 8 hours. All create/update/delete API calls require the admin token; reads stay public.

## Scripts

- `npm run build` — production build
- `npm run lint` / `npm test`
- `npm run build:seo` — build, then prerender pages with Puppeteer (requires `npm i -D puppeteer` first)
