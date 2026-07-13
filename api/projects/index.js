// GET /api/projects  — list all projects (newest first)
// POST /api/projects — create a new project

import { connectDB } from '../_lib/db.js';
import { Project } from '../_lib/models.js';

export default async function handler(req, res) {
  // Allow same-origin and Vercel preview URLs
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    await connectDB();

    if (req.method === 'GET') {
      const projects = await Project.find().sort({ createdAt: -1 });
      return res.status(200).json(projects);
    }

    if (req.method === 'POST') {
      const project = new Project(req.body);
      const saved = await project.save();
      return res.status(201).json(saved);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });

  } catch (err) {
    console.error('[/api/projects]', err);
    return res.status(err.name === 'ValidationError' ? 400 : 500).json({ message: err.message });
  }
}
