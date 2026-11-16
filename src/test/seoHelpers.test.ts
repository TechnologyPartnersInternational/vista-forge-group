import { describe, expect, it } from "vitest";
import { PAGE_SEO, clampDescription, localTitle } from "@/seo/seo.config";

describe("localTitle", () => {
  it("adds the location when it fits", () => {
    expect(localTitle("Eco-Toxicity")).toBe("Eco-Toxicity in Nigeria | TPI");
  });
  it("skips the location when the topic already names one", () => {
    expect(localTitle("Waste Policy for Nigeria")).toBe("Waste Policy for Nigeria | TPI");
  });
  it("skips the location when the title would get too long", () => {
    const topic = "Environmental Laboratory Training and Certification Programmes";
    expect(localTitle(topic)).toBe(`${topic} | TPI`);
  });
});

describe("clampDescription", () => {
  it("leaves short text alone and collapses whitespace", () => {
    expect(clampDescription("  EIA   services\n in Lagos ")).toBe("EIA services in Lagos");
  });
  it("cuts long text at a word boundary within the limit", () => {
    const text = "word ".repeat(60);
    const out = clampDescription(text);
    expect(out.length).toBeLessThanOrEqual(160);
    expect(out.endsWith("word…")).toBe(true);
  });
});

describe("PAGE_SEO", () => {
  it("keeps every indexable title and description within Google's display limits", () => {
    for (const [key, page] of Object.entries(PAGE_SEO)) {
      if (key === "notFound" || key === "privacyPolicy") continue;
      expect(page.title.length, `${key} title`).toBeLessThanOrEqual(65);
      expect(page.description.length, `${key} description`).toBeLessThanOrEqual(165);
      expect(page.description.length, `${key} description`).toBeGreaterThanOrEqual(110);
    }
  });
});
