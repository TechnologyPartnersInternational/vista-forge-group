// POST /api/auth/login  { username, password } -> { token, expiresAt }

import { checkCredentials, isAuthConfigured, issueToken } from '../_lib/auth.js';
import { methodNotAllowed, setCors } from '../_lib/http.js';

export default async function handler(req, res) {
  setCors(res, ['POST']);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  if (!isAuthConfigured()) {
    console.error('[auth] ADMIN_USERNAME / ADMIN_PASSWORD / ADMIN_TOKEN_SECRET not configured');
    return res.status(503).json({ message: 'Admin access is not configured on the server.' });
  }

  const { username, password } = req.body || {};
  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (!checkCredentials(username, password)) {
    // Small fixed delay to slow down brute-force attempts.
    await new Promise((r) => setTimeout(r, 750));
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json(issueToken(username));
}
