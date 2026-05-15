const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function run() {
  try {
    const lab1 = await cloudinary.search.expression('folder:"laboratory"').with_field('tags').execute();
    console.log("Found:", lab1.resources.length);
    lab1.resources.forEach(r => console.log(r.public_id, r.tags));
  } catch (e) {
    console.error(e);
  }
}

run();
