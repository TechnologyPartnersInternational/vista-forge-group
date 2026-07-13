// Mongoose models — shared across all API functions.
// The `mongoose.models.X || mongoose.model('X', Schema)` pattern
// prevents "OverwriteModelError" on hot reloads / warm serverless containers.

import mongoose from 'mongoose';

// ── Project ────────────────────────────────────────────────────────────────

const MetricSchema = new mongoose.Schema(
  { label: String, value: String },
  { _id: false }
);

const MainContentSchema = new mongoose.Schema(
  { heading: String, text: String },
  { _id: false }
);

const TestimonialSchema = new mongoose.Schema(
  { quote: String, author: String, role: String },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    id:            { type: String, required: true, unique: true },
    title:         { type: String, required: true },
    subtitle:      String,
    client:        { type: String, required: true },
    service:       { type: String, required: true },
    category:      { type: String, required: true },
    industry:      { type: String, required: true },
    location:      { type: String, required: true },
    year:          { type: String, required: true },
    status:        { type: String, enum: ['ongoing', 'completed'], default: 'completed' },
    heroImage:     String,
    summary:       { type: String, required: true },
    problem:       String,
    approach:      String,
    result:        String,
    metrics:       [MetricSchema],
    delivered:     [String],
    collaborators: [String],
    mainContent:   [MainContentSchema],
    testimonial:   TestimonialSchema,
    galleryImages: [String],
  },
  { timestamps: true }
);

// ── Insight ────────────────────────────────────────────────────────────────

const AuthorSchema = new mongoose.Schema(
  { name: String, role: String, image: String },
  { _id: false }
);

const InsightSchema = new mongoose.Schema(
  {
    id:          { type: String, required: true, unique: true },
    title:       { type: String, required: true },
    excerpt:     { type: String, required: true },
    category:    { type: String, required: true },
    type:        { type: String, enum: ['Article', 'Issues', 'Story', 'News'], default: 'Article' },
    date:        { type: String, required: true },
    readTime:    String,
    featured:    { type: Boolean, default: false },
    content:     { type: String, required: true },
    bannerImage: String,
    author:      AuthorSchema,
    lastUpdated: String,
  },
  { timestamps: true }
);

// Guard against model re-registration on warm containers
export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const Insight = mongoose.models.Insight || mongoose.model('Insight', InsightSchema);
