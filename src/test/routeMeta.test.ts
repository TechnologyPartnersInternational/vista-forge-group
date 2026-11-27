import { describe, expect, it } from "vitest";
import { buildRouteMetas } from "@/seo/routeMeta";

describe("route metadata", () => {
  const routes = buildRouteMetas();

  it("gives every route a unique title and description", () => {
    const titles = routes.map((r) => r.title);
    const descriptions = routes.map((r) => r.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("keeps titles and descriptions within search display limits", () => {
    for (const r of routes) {
      expect(r.title.length, `${r.path} title`).toBeLessThanOrEqual(65);
      expect(r.description.length, `${r.path} description`).toBeLessThanOrEqual(165);
    }
  });

  it("targets Nigeria on every underwater inspection page", () => {
    const marine = routes.filter((r) => r.path.startsWith("/what-we-do/marine-underwater"));
    expect(marine).toHaveLength(7);
    for (const r of marine) {
      expect(r.title, r.path).toMatch(/Nigeria/);
      expect(r.description.length, `${r.path} description`).toBeGreaterThanOrEqual(110);
      expect(r.image, `${r.path} share image`).toBeTruthy();
    }
  });
});
