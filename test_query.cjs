const mongoose = require('mongoose');

const q1 = new mongoose.Query().find({ certNumber: { $regex: new RegExp('^TPI$', 'i') } });
const q2 = new mongoose.Query().find({ certNumber: new RegExp('^TPI$', 'i') });

console.log('q1 (with $regex and new RegExp):', JSON.stringify(q1.getFilter()));
console.log('q2 (with new RegExp directly):', JSON.stringify(q2.getFilter()));
