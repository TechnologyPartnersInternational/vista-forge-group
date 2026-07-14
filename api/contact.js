import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Enquiry Form <enquiry@tpinigeria.com>',
      to: ['kennedyifeadi@gmail.com'],
      subject: `New Enquiry from ${name}${service ? ` – ${service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
            New Enquiry from TPI Website
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; width: 140px; border: 1px solid #e5e7eb;">Full Name</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Email</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Company</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${company}</td>
            </tr>` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Phone</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${phone}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Service Interest</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
            This email was sent from the enquiry form on the TPI website.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Enquiry sent successfully.' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ message: 'Failed to send enquiry. Please try again.' });
  }
}
