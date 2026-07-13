// GET    /api/insights/:id — get one insight
// PUT    /api/insights/:id — update an insight
// DELETE /api/insights/:id — delete an insight

import { connectDB } from '../../_lib/db.js';
import { Insight } from '../../_lib/models.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;

  try {
    await connectDB();

    if (req.method === 'GET') {
      const insight = await Insight.findOne({ id });
      if (!insight) return res.status(404).json({ message: 'Insight not found' });
      return res.status(200).json(insight);
    }

    if (req.method === 'PUT') {
      const updated = await Insight.findOneAndUpdate({ id }, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Insight not found' });
      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      await Insight.findOneAndDelete({ id });
      return res.status(200).json({ message: 'Insight deleted' });
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });

  } catch (err) {
    console.error(`[/api/insights/${id}]`, err);
    return res.status(err.name === 'ValidationError' ? 400 : 500).json({ message: err.message });
  }
}
