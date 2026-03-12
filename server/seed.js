require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Insight = require('./models/Insight');

// Minimal mock data for seeding (simplified from .ts files)
const initialProjects = [
  {
    id: "niger-delta-remediation",
    title: "Niger Delta Soil Remediation Programme",
    client: "Major International Oil Company",
    service: "Environment",
    category: "Environmental Planning & Management",
    industry: "Oil & Gas",
    location: "Rivers State, Nigeria",
    year: "2023",
    status: "completed",
    summary: "Phased remediation of 14 hydrocarbon-contaminated sites in the Niger Delta."
  }
];

const initialInsights = [
  {
    id: "eshia-gas-field-development",
    title: "Why Early ESHIA Engagement Accelerates Gas Field Development Timelines",
    category: "Environmental Planning",
    type: "Article",
    date: "2026-02-10",
    excerpt: "Operators who commission Environmental, Social and Health Impact Assessments..."
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB for seeding');

  await Project.deleteMany({});
  await Project.insertMany(initialProjects);
  console.log('Projects seeded');

  await Insight.deleteMany({});
  await Insight.insertMany(initialInsights);
  console.log('Insights seeded');

  await mongoose.disconnect();
  console.log('Seeding complete');
}

seed().catch(err => console.error(err));
