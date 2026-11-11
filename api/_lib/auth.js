// Admin authentication for write endpoints.
//
// Credentials and the token signing secret live ONLY in server-side env vars:
//   ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_TOKEN_SECRET (>= 32 chars)
//
// Tokens are stateless: base64url(JSON payload) + "." + HMAC-SHA256 signature.
// No database or session store needed, so they work across serverless instances.

import crypto from 'node:crypto';

export const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

const b64url = (buf) => Buffer.from(buf).toString('base64url');

function getSecret() {
  const secret = process.env.ADMIN_TOKEN_SECRET;
  if (!secret || secret.length < 32) return null;
  return secret;
}

export function isAuthConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && getSecret());
}

// Constant-time comparison that also hides length differences.
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function sign(payload, secret) {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

export function checkCredentials(username, password) {
  if (!isAuthConfigured()) return false;
  // Evaluate both so timing doesn't reveal which one was wrong.
  const userOk = safeEqual(username ?? '', process.env.ADMIN_USERNAME);
  const passOk = safeEqual(password ?? '', process.env.ADMIN_PASSWORD);
  return userOk && passOk;
}

export function issueToken(username) {
  const secret = getSecret();
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const payload = b64url(JSON.stringify({ sub: username, exp: expiresAt }));
  return { token: `${payload}.${sign(payload, secret)}`, expiresAt };
}

export function verifyToken(token) {
  const secret = getSecret();
  if (!secret || typeof token !== 'string') return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  if (!safeEqual(signature, sign(payload, secret))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (typeof data.exp !== 'number' || data.exp < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

/**
 * Guard for admin-only handlers. Returns true when the request carries a valid
 * bearer token; otherwise sends the error response and returns false.
 */
export function requireAdmin(req, res) {
  if (!isAuthConfigured()) {
    console.error('[auth] ADMIN_USERNAME / ADMIN_PASSWORD / ADMIN_TOKEN_SECRET not configured');
    res.status(503).json({ message: 'Admin access is not configured on the server.' });
    return false;
  }
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!verifyToken(token)) {
    res.status(401).json({ message: 'Unauthorized' });
    return false;
  }
  return true;
}
