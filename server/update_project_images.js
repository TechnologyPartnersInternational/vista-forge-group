const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Project = require('./models/Project');

async function updateProjectImages() {
  if (!process.env.MONGODB_URI) {
    console.error('Please define MONGODB_URI in server/.env');
    process.exit(1);
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully.');

    // 1. Update Environmental Evaluation Study (EES)
    const eesUpdate = await Project.findOneAndUpdate(
      { $or: [{ id: 'dangote-fertilizer-ees' }, { title: { $regex: 'Environmental Evaluation Study', $options: 'i' } }] },
      { $set: { heroImage: '/src/assets/GeneralPictures/NavPicture.png' } },
      { new: true }
    );
    if (eesUpdate) {
      console.log('Successfully updated EES project image:', eesUpdate.title, '->', eesUpdate.heroImage);
    } else {
      console.log('No matching EES project record found in database.');
    }

    // 2. Update Environmental Baseline Study (EBS)
    const ebsUpdate = await Project.findOneAndUpdate(
      { $or: [{ id: 'totalenergies-egina-south-ebs-eia' }, { title: { $regex: 'Environmental Baseline', $options: 'i' } }] },
      { $set: { heroImage: '/src/assets/GeneralPictures/Importance-Of-Technology-In-Oil-And-Gas-Industry.jpg' } },
      { new: true }
    );
    if (ebsUpdate) {
      console.log('Successfully updated EBS project image:', ebsUpdate.title, '->', ebsUpdate.heroImage);
    } else {
      console.log('No matching EBS project record found in database.');
    }

    await mongoose.disconnect();
    console.log('Database connection closed. Update complete.');
  } catch (error) {
    console.error('Error updating project images in MongoDB:', error.message);
    if (error.name === 'MongooseServerSelectionError') {
      console.error('\nNOTE: Could not connect to MongoDB Atlas. Your current IP address is likely not whitelisted. Please whitelist your IP or add 0.0.0.0/0 under Network Access -> IP Access List in your MongoDB Atlas console.');
    }
    process.exit(1);
  }
}

updateProjectImages();
