// GET    /api/insights/:id — get one insight
// PUT    /api/insights/:id — update an insight (admin only)
// DELETE /api/insights/:id — delete an insight (admin only)

import { itemHandler } from '../_lib/crud.js';
import { Insight } from '../_lib/models.js';

export default itemHandler(Insight, { tag: '/api/insights', notFound: 'Insight not found' });
