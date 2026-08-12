const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  certNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, default: 'Participant' },
  training: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  dates: { type: String, required: true },
}, { timestamps: true });

const Certificate = mongoose.model('Certificate', CertificateSchema);

async function check() {
  console.log('Connecting to MongoDB URI:', process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected! DB name:', mongoose.connection.db.databaseName);

  const count = await Certificate.countDocuments();
  console.log('Total certificate documents:', count);

  const cert = await Certificate.findOne({ certNumber: 'TPI-TRN-2026-A001' });
  console.log('Found TPI-TRN-2026-A001:', cert ? JSON.stringify(cert) : 'NOT FOUND');

  const all = await Certificate.find().limit(5);
  console.log('First 5 certificates:', all.map(c => c.certNumber));

  process.exit(0);
}

check().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
