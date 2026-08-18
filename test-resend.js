const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
  console.log("Using API key:", process.env.RESEND_API_KEY ? "YES" : "NO");
  const { data, error } = await resend.emails.send({
    from: 'Enquiry Form <enquiry@tpigrp.com>',
    to: ['chiedu.ifeadi@tpigrp.com'],
    subject: 'Test Enquiry',
    html: '<p>Test</p>'
  });
  console.log("Data:", data);
  console.log("Error:", error);
}

test();
