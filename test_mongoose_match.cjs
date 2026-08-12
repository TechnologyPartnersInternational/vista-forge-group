const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb://localhost:27017/test_db');
  
  const CertificateSchema = new mongoose.Schema({
    certNumber: String,
  });
  
  // Re-create the collection
  if (mongoose.models.Certificate) {
    delete mongoose.models.Certificate;
  }
  const Certificate = mongoose.model('Certificate', CertificateSchema);
  
  await Certificate.deleteMany({});
  await Certificate.create({ certNumber: 'TPI-TRN-2026-A001' });

  console.log('Testing query 1: { $regex: new RegExp(...) }');
  const doc1 = await Certificate.findOne({ certNumber: { $regex: new RegExp('^TPI-TRN-2026-A001$', 'i') } });
  console.log('Result 1:', doc1 ? 'FOUND' : 'NOT FOUND');

  console.log('Testing query 2: new RegExp(...) directly');
  const doc2 = await Certificate.findOne({ certNumber: new RegExp('^TPI-TRN-2026-A001$', 'i') });
  console.log('Result 2:', doc2 ? 'FOUND' : 'NOT FOUND');

  process.exit(0);
}
run();
