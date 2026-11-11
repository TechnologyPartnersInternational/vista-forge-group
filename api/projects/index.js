// GET  /api/projects — list all projects (newest first)
// POST /api/projects — create a project (admin only)

import { collectionHandler } from '../_lib/crud.js';
import { Project } from '../_lib/models.js';

export default collectionHandler(Project, { tag: '/api/projects', sort: { createdAt: -1 } });
