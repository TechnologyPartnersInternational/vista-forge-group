// GET  /api/insights — list all insights (newest first by date)
// POST /api/insights — create an insight (admin only)

import { collectionHandler } from '../_lib/crud.js';
import { Insight } from '../_lib/models.js';

export default collectionHandler(Insight, { tag: '/api/insights', sort: { date: -1 } });
