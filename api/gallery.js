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
    // - Specific category → filter by asset_folder.
    // - "all" / no category → leave expression empty so Cloudinary returns everything,
    //   then filter out default sample images from the results.
    let expression = '';
    if (category && category !== 'all') {
      expression = `asset_folder="${category}"`;
    }

    let searchBuilder = cloudinary.search
      .with_field('tags')
      .sort_by('created_at', 'desc')
      .max_results(30);

    if (expression) searchBuilder = searchBuilder.expression(expression);
    if (next_cursor) searchBuilder = searchBuilder.next_cursor(next_cursor);

    const result = await searchBuilder.execute();

    // Filter out Cloudinary default demo/sample images
    const filtered = result.resources.filter((resource) => {
      const id = (resource.public_id || '').toLowerCase();
      const folder = (resource.asset_folder || resource.folder || '').toLowerCase();
      // Exclude well-known Cloudinary demo assets
      if (id === 'sample' || id.startsWith('samples/') || id.startsWith('cld-sample')) return false;
      if (folder === 'samples') return false;
      return true;
    });

    return res.status(200).json({
      resources: filtered.map((resource) => ({
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
