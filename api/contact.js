// POST /api/contact — sends the website enquiry form to the TPI inbox via Resend.

import { Resend } from 'resend';
import { methodNotAllowed } from './_lib/http.js';

const resend = new Resend(process.env.RESEND_API_KEY);

// The sender MUST use a domain verified in Resend (Domains page), otherwise
// every send is rejected. The verified domain is enquiry.tpinigeria.com.
// Both can be overridden in Vercel env vars without a code change.
const FROM = process.env.CONTACT_FROM_EMAIL || 'TPI Website Enquiry <noreply@enquiry.tpinigeria.com>';
const TO = (process.env.CONTACT_TO_EMAIL || 'info@tpinigeria.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const LIMITS = { name: 200, email: 254, company: 200, phone: 50, service: 200, message: 5000 };
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// User input is interpolated into HTML, so it must be escaped.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Header values (subject) must be single-line.
const oneLine = (value) => String(value).replace(/[\r\n]+/g, ' ').trim();

const row = (label, value) =>
  value
    ? `<tr><td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; width: 140px; border: 1px solid #e5e7eb; vertical-align: top;">${label}</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(value)}</td></tr>`
    : '';

const emailHtml = ({ name, email, company, phone, service, message }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #1a1a2e; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
      New Enquiry from TPI Website
    </h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
      ${row('Full Name', name)}
      ${row('Email', email)}
      ${row('Company', company)}
      ${row('Phone', phone)}
      ${row('Service Interest', service)}
      ${row('Message', message)}
    </table>
    <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
      This email was sent from the enquiry form on the TPI website.
    </p>
  </div>
`;

function validate(body) {
  const fields = {};
  for (const key of Object.keys(LIMITS)) {
    const raw = body?.[key];
    if (raw != null && typeof raw !== 'string') return { error: `Invalid ${key}.` };
    const value = (raw || '').trim();
    if (value.length > LIMITS[key]) return { error: `${key} is too long (max ${LIMITS[key]} characters).` };
    fields[key] = value;
  }
  if (!fields.name || !fields.email || !fields.message) {
    return { error: 'Name, email, and message are required.' };
  }
  if (!EMAIL_RE.test(fields.email)) return { error: 'Please enter a valid email address.' };
  return { fields };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const { fields, error: validationError } = validate(req.body);
  if (validationError) return res.status(400).json({ message: validationError });

  try {
    // Resend SDK returns { data, error } — it does NOT throw on API failure.
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: fields.email,
      subject: oneLine(`New Enquiry from ${fields.name}${fields.service ? ` – ${fields.service}` : ''}`),
      html: emailHtml(fields),
    });

    if (error) {
      console.error('[contact] Resend error:', JSON.stringify(error));
      return res.status(502).json({ message: 'Failed to send enquiry. Please try again later.' });
    }

    console.log('[contact] Email sent. ID:', data?.id);
    return res.status(200).json({ message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('[contact]', err);
    return res.status(500).json({ message: 'Failed to send enquiry. Please try again later.' });
  }
}
