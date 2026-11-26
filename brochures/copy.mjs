// Brochure-only copy. Service details (capabilities, deliverables, scope)
// come from src/data/marineServices.ts so the brochures and website agree.

export const contacts = {
  emails: ["info@tpinigeria.com", "info@tpigrp.com"],
  phones: ["+234 803 303 0049", "+234 817 766 8572"],
  web: "www.tpigrp.com",
  address: "52/54 Oluwaleyimu Street, Off Toyin Street, Ikeja, Lagos, Nigeria",
  offices: "Lagos · Port Harcourt · Warri · Conakry",
};

export const general = {
  title: "Underwater Inspection & Survey Services",
  coverLine: "ROV inspection, testing and seabed survey for offshore, coastal and inland water assets.",
  cover: "cover-jacket-underwater",

  introHeading: "Every finding tied to the place it came from.",
  intro: [
    "Our remotely operated vehicles carry cameras, imaging sonar and measurement tools to submerged steel, concrete and seabed. Pilots hold position for close work, mark each observation against a component, route section, hull zone or survey station, and log anything that could not be reached.",
    "You get a record your team can act on now, and a baseline to compare against at the next campaign.",
  ],
  introImage: "photo-offshore-field-dusk",
  onEveryDive: [
    { title: "Cleaning at up to 500 bar", desc: "A cavitation water jet clears marine growth from test points and connections, at a pressure suited to the coating." },
    { title: "Sizing on screen", desc: "Scaled images and a live on-screen ruler let us measure a feature during the dive or mark it for later." },
    { title: "Sonar in murky water", desc: "Imaging sonar keeps the structure in view when visibility drops." },
    { title: "Long, steady runs", desc: "Surface-supplied power and position holding keep the vehicle on station for close-ups." },
  ],

  indexHeading: "Six services, one way of recording.",
  indexLine: "Each service has its own brochure with full scope, deliverables and limits.",

  receiveHeading: "What lands on your desk",
  receiveLine: "Deliverables follow the agreed asset list, coverage and measurements. Every report states what was covered and what was not.",
  outputs: ["rov-imaging-sonar", "coating-defect-measure", "colonisation-area-measure"],

  sectorsHeading: "Where we work",
  sectors: [
    "Offshore oil and gas facilities",
    "Export pipelines and flowlines",
    "Power and telecom cables",
    "Ports, jetties and quay walls",
    "Vessels and floating assets",
    "Bridges and coastal defences",
    "Dams, reservoirs and intakes",
    "EIA, EES and marine monitoring",
  ],

  processHeading: "How a job runs",
  process: [
    { title: "You share what you know", desc: "Asset or survey area, location, water depth and what you need to find out. Drawings and earlier findings help." },
    { title: "We fix the scope", desc: "Coverage, measurements, methods and report format are agreed before we mobilise." },
    { title: "We inspect and record", desc: "Every observation is referenced to its location, with gaps in coverage logged as we go." },
    { title: "You receive the record", desc: "Imagery, registers, measurements and a technical report, ready for maintenance planning or engineering review." },
  ],
};

/** Cover images and lines for each service brochure, keyed by sub-service id. */
export const serviceCovers = {
  "offshore-subsea-inspection": {
    cover: "cover-offshore-platform",
    line: "Condition evidence for jackets, subsea equipment, risers and moorings, tied to the component it came from.",
  },
  "underwater-ndt-corrosion": {
    cover: "cover-sacrificial-anode",
    line: "Thickness, protection potential and coating condition, measured at the test points that matter.",
  },
  "pipeline-cable-inspection": {
    cover: "cover-platform-risers",
    line: "Every finding carries a route reference, so a crew can go straight back to it.",
  },
  "hull-marine-structure-inspection": {
    cover: "cover-drydock-propeller",
    line: "Hulls, propellers, jetties and intakes inspected in the water, zone by zone.",
  },
  "bathymetric-seabed-surveys": {
    cover: "cover-multibeam-seabed",
    line: "Depth, terrain and seabed change, measured on a datum you can compare against.",
  },
  "underwater-environmental-surveys": {
    cover: "cover-healthy-reef",
    line: "Underwater baselines and monitoring you can repeat, station by station and season by season.",
  },
};
