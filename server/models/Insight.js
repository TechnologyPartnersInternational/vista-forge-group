const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
}, { _id: false });

const InsightSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  category: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['Article', 'Issues', 'Story', 'News'], 
    default: 'Article' 
  },
  date: { type: String, required: true },
  readTime: String,
  featured: { type: Boolean, default: false },
  content: { type: String, required: true },
  bannerImage: String,
  author: AuthorSchema,
  lastUpdated: String
}, { timestamps: true });

module.exports = mongoose.model('Insight', InsightSchema);
