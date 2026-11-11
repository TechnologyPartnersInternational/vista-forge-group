// Shared handlers for simple Mongo-backed collections (projects, insights).
// Reads are public; every write requires an admin bearer token.

import { connectDB } from './db.js';
import { requireAdmin } from './auth.js';
import { cleanBody, handleError, methodNotAllowed, setCors } from './http.js';

const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,199}$/;

// GET list / POST create
export function collectionHandler(Model, { tag, sort }) {
  const methods = ['GET', 'POST'];
  return async function handler(req, res) {
    setCors(res, methods);
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (!methods.includes(req.method)) return methodNotAllowed(res, methods);
    if (req.method !== 'GET' && !requireAdmin(req, res)) return;

    const body = req.method === 'POST' ? cleanBody(req.body) : null;
    if (body && (typeof body.id !== 'string' || !ID_PATTERN.test(body.id))) {
      return res.status(400).json({ message: 'A valid slug id (lowercase letters, numbers, dashes) is required.' });
    }

    try {
      await connectDB();

      if (req.method === 'GET') {
        return res.status(200).json(await Model.find().sort(sort));
      }

      const saved = await new Model(body).save();
      return res.status(201).json(saved);
    } catch (err) {
      return handleError(res, err, tag);
    }
  };
}

// GET one / PUT update / DELETE remove
export function itemHandler(Model, { tag, notFound }) {
  const methods = ['GET', 'PUT', 'DELETE'];
  return async function handler(req, res) {
    setCors(res, methods);
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (!methods.includes(req.method)) return methodNotAllowed(res, methods);
    if (req.method !== 'GET' && !requireAdmin(req, res)) return;

    const id = String(req.query.id || '');

    try {
      await connectDB();

      if (req.method === 'GET') {
        const doc = await Model.findOne({ id });
        if (!doc) return res.status(404).json({ message: notFound });
        return res.status(200).json(doc);
      }

      if (req.method === 'PUT') {
        // The URL id is authoritative; don't let the body rename the record.
        const { id: _ignored, ...update } = cleanBody(req.body);
        const updated = await Model.findOneAndUpdate({ id }, update, {
          new: true,
          runValidators: true,
        });
        if (!updated) return res.status(404).json({ message: notFound });
        return res.status(200).json(updated);
      }

      const deleted = await Model.findOneAndDelete({ id });
      if (!deleted) return res.status(404).json({ message: notFound });
      return res.status(200).json({ message: 'Deleted' });
    } catch (err) {
      return handleError(res, err, `${tag}/${id}`);
    }
  };
}
