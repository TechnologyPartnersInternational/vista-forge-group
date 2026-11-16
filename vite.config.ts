import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Vercel serves dist/404.html, with a real 404 status, for any URL that isn't a
// file or a known route (see the rewrites in vercel.json). Making it a copy of
// the app shell lets React render the styled NotFound page, while search
// engines get a true 404 instead of a "soft 404".
const spaNotFoundPage = (): Plugin => ({
  name: "spa-404-page",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    fs.copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), spaNotFoundPage()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
