const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Resend } = require('resend');

const Project = require('./models/Project');
const Insight = require('./models/Insight');
const cloudinary = require('cloudinary').v2;

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes - Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/projects', async (req, res) => {
  const project = new Project(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes - Insights
app.get('/api/insights', async (req, res) => {
  try {
    const insights = await Insight.find().sort({ date: -1 });
    res.json(insights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/insights/:id', async (req, res) => {
  try {
    const insight = await Insight.findOne({ id: req.params.id });
    if (!insight) return res.status(404).json({ message: 'Insight not found' });
    res.json(insight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/insights', async (req, res) => {
  const insight = new Insight(req.body);
  try {
    const newInsight = await insight.save();
    res.status(201).json(newInsight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/insights/:id', async (req, res) => {
  try {
    const updatedInsight = await Insight.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.json(updatedInsight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/insights/:id', async (req, res) => {
  try {
    await Insight.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Insight deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes - Gallery (Cloudinary)

app.get('/api/gallery', async (req, res) => {
  const { category, next_cursor } = req.query;
  
  try {
    // Build the search expression:
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

    if (expression) {
      searchBuilder = searchBuilder.expression(expression);
    }

    if (next_cursor) {
      searchBuilder = searchBuilder.next_cursor(next_cursor);
    }

    const result = await searchBuilder.execute();

    // Filter out Cloudinary default demo/sample images
    const filtered = result.resources.filter((resource) => {
      const id = (resource.public_id || '').toLowerCase();
      const folder = (resource.asset_folder || resource.folder || '').toLowerCase();
      if (id === 'sample' || id.startsWith('samples/') || id.startsWith('cld-sample')) return false;
      if (folder === 'samples') return false;
      return true;
    });

    res.json({
      resources: filtered.map(resource => ({
        id: resource.public_id,
        title: resource.context?.caption || resource.public_id.split('/').pop().replace(/_[a-z0-9]{6,}$/i, '').replace(/[-_]/g, ' '),
        category: category || 'all',
        image: resource.secure_url,
        description: resource.context?.description || '',
        location: resource.context?.location || ''
      })),
      next_cursor: result.next_cursor || null,
      total_count: result.total_count
    });
  } catch (err) {
    console.error('Cloudinary Search Error:', err);
    res.status(500).json({ message: 'Failed to fetch gallery images', detail: err.message });
  }
});


// Routes - Contact Enquiry
app.post('/api/contact', async (req, res) => {
  console.log('[contact] Route hit. Body:', req.body);
  console.log('[contact] RESEND_API_KEY loaded:', !!process.env.RESEND_API_KEY);

  const { name, email, company, phone, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  // Resend SDK v2 returns { data, error } — it does NOT throw on failure.
  const { data, error } = await resend.emails.send({
    from: 'Enquiry Form <noreply@enquiry.tpinigeria.com>',
    to: ['info@tpinigeria.com'],
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
          ${company ? `<tr><td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Company</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${company}</td></tr>` : ''}
          ${phone ? `<tr><td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Phone</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${phone}</td></tr>` : ''}
          ${service ? `<tr><td style="padding: 8px 12px; background: #f9fafb; font-weight: bold; border: 1px solid #e5e7eb;">Service Interest</td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${service}</td></tr>` : ''}
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

  if (error) {
    console.error('[contact] Resend error:', JSON.stringify(error));
    return res.status(500).json({ message: error.message || 'Failed to send enquiry.' });
  }

  console.log('[contact] Email sent successfully. ID:', data?.id);
  return res.status(200).json({ message: 'Enquiry sent successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
