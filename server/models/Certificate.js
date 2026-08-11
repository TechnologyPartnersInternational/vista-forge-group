const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  certNumber: { type: String, required: true, unique: true },
  name:       { type: String, required: true },
  role:       { type: String, default: 'Participant' },
  training:   { type: String, required: true },
  location:   { type: String, required: true },
  duration:   { type: String, required: true },
  dates:      { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
