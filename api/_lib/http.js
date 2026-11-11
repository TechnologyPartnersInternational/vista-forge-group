// Small shared helpers for API handlers.

export function setCors(res, methods) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', [...methods, 'OPTIONS'].join(', '));
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export function methodNotAllowed(res, methods) {
  res.setHeader('Allow', methods.join(', '));
  return res.status(405).json({ message: 'Method not allowed' });
}

// Log the real error server-side; never leak internals (stack, DB messages) to clients.
export function handleError(res, err, tag) {
  console.error(`[${tag}]`, err);
  if (err?.name === 'ValidationError' || err?.name === 'CastError') {
    return res.status(400).json({ message: err.message });
  }
  if (err?.code === 11000) {
    return res.status(409).json({ message: 'A record with this id already exists.' });
  }
  return res.status(500).json({ message: 'Internal server error' });
}

// Strip fields clients must never set directly.
export function cleanBody(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return {};
  const { _id, __v, createdAt, updatedAt, ...rest } = body;
  return rest;
}
