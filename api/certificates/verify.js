// GET /api/certificates/verify?certNumber=TPI-TRN-2026-A001
// Looks up a certificate by its number (case-insensitive, trimmed).

import { connectDB } from '../_lib/db.js';
import { Certificate } from '../_lib/models.js';
import { handleError, methodNotAllowed, setCors } from '../_lib/http.js';

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default async function handler(req, res) {
  setCors(res, ['GET']);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  // A repeated query param arrives as an array; only accept a single string.
  const raw = req.query.certNumber;
  const certNumber = typeof raw === 'string' ? raw.trim() : '';

  if (!certNumber) {
    return res.status(400).json({ message: 'certNumber query parameter is required.' });
  }
  if (certNumber.length > 64) {
    return res.status(400).json({ message: 'certNumber is too long.' });
  }

  try {
    await connectDB();

    const cert = await Certificate.findOne({
      certNumber: new RegExp(`^${escapeRegex(certNumber)}$`, 'i'),
    });

    if (!cert) {
      return res.status(404).json({ found: false, message: 'Certificate not found.' });
    }

    return res.status(200).json({
      found: true,
      certificate: {
        certNumber: cert.certNumber,
        name: cert.name,
        role: cert.role,
        training: cert.training,
        location: cert.location,
        duration: cert.duration,
        dates: cert.dates,
      },
    });
  } catch (err) {
    return handleError(res, err, '/api/certificates/verify');
  }
}
