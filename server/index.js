const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Project = require('./models/Project');
const Insight = require('./models/Insight');
const cloudinary = require('cloudinary').v2;

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
    // - If a specific category is selected, filter by asset_folder (the fixed-folder system).
    // - If "all" is selected, return everything (no folder filter).
    let expression = '';
    if (category && category !== 'all') {
      // asset_folder: matches images stored in Cloudinary's fixed folder system.
      // Use double-quotes to handle folder names with spaces (e.g. "waste management").
      expression = `asset_folder="${category}"`;
    }
    // For "all", leave expression empty — Cloudinary returns all resources.

    let searchBuilder = cloudinary.search
      .with_field('tags')
      .sort_by('created_at', 'desc')
      .max_results(15);

    if (expression) {
      searchBuilder = searchBuilder.expression(expression);
    }

    if (next_cursor) {
      searchBuilder = searchBuilder.next_cursor(next_cursor);
    }

    const result = await searchBuilder.execute();

    res.json({
      resources: result.resources.map(resource => ({
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
