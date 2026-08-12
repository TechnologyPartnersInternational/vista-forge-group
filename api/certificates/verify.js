// GET /api/certificates/verify?certNumber=TPI-TRN-2026-A001
// Looks up a certificate by its number (case-insensitive, trimmed).

import { connectDB } from '../_lib/db.js';
import { Certificate } from '../_lib/models.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { certNumber } = req.query;

  if (!certNumber || !certNumber.trim()) {
    return res.status(400).json({ message: 'certNumber query parameter is required.' });
  }

  try {
    await connectDB();

    // Case-insensitive lookup
    const cert = await Certificate.findOne({
      certNumber: new RegExp(`^${certNumber.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'),
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
    console.error('[/api/certificates/verify]', err);
    return res.status(500).json({ message: err.message });
  }
}
