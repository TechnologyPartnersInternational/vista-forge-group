// GET /api/gallery?category=all|environments|laboratory|...
// Fetches images from Cloudinary using asset_folder filter.
// Supports cursor-based pagination via next_cursor query param.

import cloudinary from './_lib/cloudinary.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { category, next_cursor } = req.query;

  try {
    // Build search expression:
    // - Specific category → filter by asset_folder (fixed-folder system).
    // - "all" / no category → return everything (no filter).
    let expression = '';
    if (category && category !== 'all') {
      expression = `asset_folder="${category}"`;
    }

    let searchBuilder = cloudinary.search
      .with_field('tags')
      .sort_by('created_at', 'desc')
      .max_results(15);

    if (expression) searchBuilder = searchBuilder.expression(expression);
    if (next_cursor) searchBuilder = searchBuilder.next_cursor(next_cursor);

    const result = await searchBuilder.execute();

    return res.status(200).json({
      resources: result.resources.map((resource) => ({
        id:          resource.public_id,
        title:       resource.context?.caption ||
                     resource.public_id
                       .split('/')
                       .pop()
                       .replace(/_[a-z0-9]{6,}$/i, '')  // strip Cloudinary hash suffix
                       .replace(/[-_]/g, ' '),
        category:    category || 'all',
        image:       resource.secure_url,
        description: resource.context?.description || '',
        location:    resource.context?.location    || '',
      })),
      next_cursor:  result.next_cursor || null,
      total_count:  result.total_count,
    });

  } catch (err) {
    console.error('[/api/gallery]', err);
    return res.status(500).json({ message: 'Failed to fetch gallery images', detail: err.message });
  }
}
