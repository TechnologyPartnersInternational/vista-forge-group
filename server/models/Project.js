const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  label: String,
  value: String
}, { _id: false });

const MainContentSchema = new mongoose.Schema({
  heading: String,
  text: String
}, { _id: false });

const TestimonialSchema = new mongoose.Schema({
  quote: String,
  author: String,
  role: String
}, { _id: false });

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: String,
  client: { type: String, required: true },
  service: { type: String, required: true },
  category: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  year: { type: String, required: true },
  status: { type: String, enum: ['ongoing', 'completed'], default: 'completed' },
  heroImage: String,
  summary: { type: String, required: true },
  problem: String,
  approach: String,
  result: String,
  metrics: [MetricSchema],
  delivered: [String],
  collaborators: [String],
  mainContent: [MainContentSchema],
  testimonial: TestimonialSchema,
  galleryImages: [String]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
