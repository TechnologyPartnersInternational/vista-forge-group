// GET    /api/projects/:id — get one project
// PUT    /api/projects/:id — update a project (admin only)
// DELETE /api/projects/:id — delete a project (admin only)

import { itemHandler } from '../_lib/crud.js';
import { Project } from '../_lib/models.js';

export default itemHandler(Project, { tag: '/api/projects', notFound: 'Project not found' });
