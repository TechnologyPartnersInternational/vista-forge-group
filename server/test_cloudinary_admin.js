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
    // 1. List all folders
    const rootFolders = await cloudinary.api.root_folders();
    console.log("Root Folders:", rootFolders.folders.map(f => f.name));

    // 2. List resources in 'laboratory' folder specifically
    try {
      const labResources = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'laboratory/',
        max_results: 10
      });
      console.log("\nFiles in 'laboratory/':", labResources.resources.length);
      labResources.resources.forEach(r => console.log(r.public_id));
    } catch (e) {
      console.log("\nError listing 'laboratory/' prefix:", e.message);
    }
    
    // 3. List resources with 'Laboratory' (capital L)
    try {
      const labResources2 = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'Laboratory/',
        max_results: 10
      });
      console.log("\nFiles in 'Laboratory/':", labResources2.resources.length);
    } catch (e) {
      console.log("\nError listing 'Laboratory/' prefix:", e.message);
    }

  } catch (e) {
    console.error(e);
  }
}

run();
