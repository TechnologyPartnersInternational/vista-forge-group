// GET /api/insights  — list all insights (newest first by date)
// POST /api/insights — create a new insight

import { connectDB } from '../_lib/db.js';
import { Insight } from '../_lib/models.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    await connectDB();

    if (req.method === 'GET') {
      const insights = await Insight.find().sort({ date: -1 });
      return res.status(200).json(insights);
    }

    if (req.method === 'POST') {
      const insight = new Insight(req.body);
      const saved = await insight.save();
      return res.status(201).json(saved);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });

  } catch (err) {
    console.error('[/api/insights]', err);
    return res.status(err.name === 'ValidationError' ? 400 : 500).json({ message: err.message });
  }
}
