const mongoose = require('mongoose');

mongoose.set('debug', true);

async function run() {
  await mongoose.connect('mongodb://localhost:27017/test_db');
  
  const CertificateSchema = new mongoose.Schema({
    certNumber: String,
  });
  
  const Certificate = mongoose.model('Certificate', CertificateSchema);
  
  try {
    await Certificate.findOne({ certNumber: { $regex: new RegExp('^TPI$', 'i') } });
  } catch (e) {
    console.error('Error 1:', e.message);
  }

  try {
    await Certificate.findOne({ certNumber: new RegExp('^TPI$', 'i') });
  } catch (e) {
    console.error('Error 2:', e.message);
  }

  process.exit(0);
}
run();
