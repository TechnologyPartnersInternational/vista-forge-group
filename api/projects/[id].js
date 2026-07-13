// GET    /api/projects/:id — get one project
// PUT    /api/projects/:id — update a project
// DELETE /api/projects/:id — delete a project

import { connectDB } from '../../_lib/db.js';
import { Project } from '../../_lib/models.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;

  try {
    await connectDB();

    if (req.method === 'GET') {
      const project = await Project.findOne({ id });
      if (!project) return res.status(404).json({ message: 'Project not found' });
      return res.status(200).json(project);
    }

    if (req.method === 'PUT') {
      const updated = await Project.findOneAndUpdate({ id }, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Project not found' });
      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      await Project.findOneAndDelete({ id });
      return res.status(200).json({ message: 'Project deleted' });
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });

  } catch (err) {
    console.error(`[/api/projects/${id}]`, err);
    return res.status(err.name === 'ValidationError' ? 400 : 500).json({ message: err.message });
  }
}
