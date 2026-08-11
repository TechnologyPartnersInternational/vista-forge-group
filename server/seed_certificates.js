/**
 * Seed script — populates the certificates collection in MongoDB.
 * Run from the server directory:
 *   node seed_certificates.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Certificate = require('./models/Certificate');

const CERTIFICATES = [
  {
    certNumber: "TPI-TRN-2026-A001",
    name: "Akpan Silas Dan",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A002",
    name: "Akpan Christopher Iboro",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A003",
    name: "Tayo Adetunji",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A004",
    name: "Teniola Adeyemi Turton",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A005",
    name: "Gilpin Okesiyesinma",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A006",
    name: "Ogunojemite Abayomi",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B001",
    name: "Azode Francis Chidi",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B002",
    name: "Alalibo Fredrick Ibinabo",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B003",
    name: "Mark Joyful Ofoinbo",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B004",
    name: "Casmir Chilaka Anochioronye",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B005",
    name: "Adedolapo Ejire Abdulazeez",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B006",
    name: "Promise Williams Dakoru",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B007",
    name: "Okoh Onyeisi",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B008",
    name: "Nicholas Fatumore Tolulope",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B009",
    name: "Taiwo Aiyelero Samson",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B010",
    name: "Chibuenyim Ojimadu Ikemba",
    role: "Participant",
    training: "White Products Quality Analysis & Quality Assurance for ISO Certification",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A007",
    name: "Awoero Joyce Lolo",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A008",
    name: "Ogieriakhi Greg Osaro",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A009",
    name: "Udo Savior Udo",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A010",
    name: "Chibueze Godwin Agbowo",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-A011",
    name: "Tolulope Oyekunle Emmanuel",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Aug. 12 - 14, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B011",
    name: "Sotonye Dan-Jumbo",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B012",
    name: "Usunobun Famous Efehi",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B013",
    name: "Gbenga Michael Adeosun",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B014",
    name: "Peter Chima Nna",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B015",
    name: "Udo Godwin Spathian",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B016",
    name: "Idowu Oluwakayode Abolade",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
  {
    certNumber: "TPI-TRN-2026-B017",
    name: "Olakunle Olowolehin Oluwafemi",
    role: "Participant",
    training: "Petroleum Lab Management, Equipment Handling, Fundamentals and Principals of Sampling and Labeling",
    location: "Port Harcourt, Nigeria",
    duration: "21 Training Hours",
    dates: "Sept. 2 - 4, 2026"
  },
];

async function seedCertificates() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Upsert each certificate (update if exists, insert if new)
    for (const cert of CERTIFICATES) {
      await Certificate.findOneAndUpdate(
        { certNumber: cert.certNumber },
        cert,
        { upsert: true, new: true }
      );
      console.log(`  ✓ ${cert.certNumber} — ${cert.name}`);
    }

    console.log(`\nDone! ${CERTIFICATES.length} certificates seeded.`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seedCertificates();
