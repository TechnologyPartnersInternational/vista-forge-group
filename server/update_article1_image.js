const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Insight = require('./models/Insight');

async function updateArticle1Image() {
  if (!process.env.MONGODB_URI) {
    console.error('Please define MONGODB_URI in server/.env');
    process.exit(1);
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully.');

    const oldUrl = 'https://res.cloudinary.com/dettdsy4j/image/upload/v1784621713/vista_forge_articles/Article_1_Picture_-1.jpg';
    const newUrl = '/assets/Article 1 Picture -1.jpg';

    // Find all insights that might be the target article or contain the old URL
    const insights = await Insight.find({
      $or: [
        { id: 'enabling-responsible-seismic-exploration-private-block' },
        { id: 'enabling-responsible-seismic-exploration-oml-100' },
        { title: { $regex: 'Seismic Exploration', $options: 'i' } },
        { bannerImage: oldUrl },
        { content: { $regex: oldUrl } }
      ]
    });

    if (insights.length === 0) {
      console.log('No matching Article 1 record found in database.');
    } else {
      for (const insight of insights) {
        insight.bannerImage = newUrl;
        if (insight.content) {
          insight.content = insight.content.replaceAll(oldUrl, newUrl);
        }
        await insight.save();
        console.log(`Successfully updated insight [${insight.id}]: "${insight.title}" -> ${newUrl}`);
      }
    }

    await mongoose.disconnect();
    console.log('Database connection closed. Update complete.');
  } catch (error) {
    console.error('Error updating insight images in MongoDB:', error.message);
    if (error.name === 'MongooseServerSelectionError') {
      console.error('\nNOTE: Could not connect to MongoDB Atlas. Your current IP address is likely not whitelisted.');
    }
    process.exit(1);
  }
}

updateArticle1Image();
