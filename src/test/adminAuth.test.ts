import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { checkCredentials, issueToken, requireAdmin, verifyToken } from "../../api/_lib/auth.js";
import { slugify } from "@/lib/api";

const ENV = {
  ADMIN_USERNAME: "admin",
  ADMIN_PASSWORD: "correct horse battery staple",
  ADMIN_TOKEN_SECRET: "x".repeat(40),
};

function mockRes() {
  const res = { statusCode: 0, body: undefined as unknown };
  return Object.assign(res, {
    status(code: number) { res.statusCode = code; return this; },
    json(body: unknown) { res.body = body; return this; },
  });
}

describe("admin auth", () => {
  beforeEach(() => Object.assign(process.env, ENV));
  afterEach(() => {
    for (const k of Object.keys(ENV)) delete process.env[k];
    vi.useRealTimers();
  });

  it("checks credentials", () => {
    expect(checkCredentials("admin", ENV.ADMIN_PASSWORD)).toBe(true);
    expect(checkCredentials("admin", "wrong")).toBe(false);
    expect(checkCredentials("other", ENV.ADMIN_PASSWORD)).toBe(false);
    expect(checkCredentials(undefined, undefined)).toBe(false);
  });

  it("rejects everything when not configured", () => {
    delete process.env.ADMIN_TOKEN_SECRET;
    expect(checkCredentials("admin", ENV.ADMIN_PASSWORD)).toBe(false);
    const res = mockRes();
    expect(requireAdmin({ headers: {} }, res)).toBe(false);
    expect(res.statusCode).toBe(503);
  });

  it("issues tokens that verify, and rejects tampered ones", () => {
    const { token } = issueToken("admin");
    expect(verifyToken(token)?.sub).toBe("admin");

    const [payload, sig] = token.split(".");
    const forged = Buffer.from(JSON.stringify({ sub: "admin", exp: Date.now() + 1e12 })).toString("base64url");
    expect(verifyToken(`${forged}.${sig}`)).toBeNull();
    expect(verifyToken(`${payload}.AAAA`)).toBeNull();
    expect(verifyToken("garbage")).toBeNull();
  });

  it("expires tokens", () => {
    vi.useFakeTimers();
    const { token } = issueToken("admin");
    vi.advanceTimersByTime(9 * 60 * 60 * 1000);
    expect(verifyToken(token)).toBeNull();
  });

  it("guards requests by bearer header", () => {
    const { token } = issueToken("admin");
    const ok = mockRes();
    expect(requireAdmin({ headers: { authorization: `Bearer ${token}` } }, ok)).toBe(true);
    const denied = mockRes();
    expect(requireAdmin({ headers: {} }, denied)).toBe(false);
    expect(denied.statusCode).toBe(401);
  });
});

describe("slugify", () => {
  it("produces ids the API accepts", () => {
    expect(slugify("  Ima Gas Field Reaches FID!  ")).toBe("ima-gas-field-reaches-fid");
    expect(slugify("Café — Lagos & Port Harcourt")).toBe("cafe-lagos-port-harcourt");
    expect(slugify("---")).toBe("");
  });
});
