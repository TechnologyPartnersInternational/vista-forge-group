const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Insight = require('./models/Insight');

// Images hosted on Cloudinary (folder: vista_forge_articles)
const COVER_IMAGE = 'https://res.cloudinary.com/dettdsy4j/image/upload/v1792400103/vista_forge_articles/Ima_Gas_FID_Cover_Bonny_Island.jpg';
const LOCATION_MAP = 'https://res.cloudinary.com/dettdsy4j/image/upload/v1792400106/vista_forge_articles/Ima_Gas_FID_Location_Map.png';
const PATHWAY_DIAGRAM = 'https://res.cloudinary.com/dettdsy4j/image/upload/v1792400108/vista_forge_articles/Ima_Gas_FID_Assessment_Pathway.png';

const content = `On 23 September 2026, TotalEnergies and AMNI International took the Final Investment Decision (FID) on the Ima gas field, a US$800 million development in the shallow waters off Bonny Island, Rivers State. After 53 years in waiting, Ima will now deliver gas to Nigeria LNG and play a central part in the Train 7 expansion.

At Technology Partners International (TPI) Nigeria Limited, we warmly congratulate both partners. Since February 2025, TPI has served as environmental consultants on Ima, leading the regulatory environmental assessment from first screening through to a full two-season Environmental and Social Impact Assessment (ESIA) delivered to International Finance Corporation (IFC) standards. Seeing the project reach FID is a proud moment for everyone on our team.

### A discovery whose time has come
Ima will produce around 350 million cubic feet of gas per day at plateau, more than 60,000 barrels of oil equivalent per day. The gas will travel through a 22 km pipeline to the Nigeria LNG plant on Bonny Island, supplying about one third of the feedgas needed for Train 7, which lifts the plant's capacity from 22 to 30 million tonnes per annum. First gas is targeted for 2028.

[IMG]${LOCATION_MAP}[/IMG]

Ima lies in shallow water off Bonny Island, with gas exported by pipeline to the Nigeria LNG plant at Finima. Field position and pipeline route are indicative.

The project's significance reaches well beyond its volumes. Nigerian banks arranged about 77 per cent of the financing, all key contracts have gone to Nigerian companies, and around 60 per cent of the development workforce is expected to come from the host communities. The partners expect Ima to generate between US$2 billion and US$4 billion in value over its life.

Ima has also been designed as a low-emissions development: a single simplified platform powered by electricity from shore, no routine flaring, and permanent methane detection and monitoring. It is the fourth gas FID in Nigeria in two years, following the Federal Government's 2024 incentives for offshore non-associated gas, and a meaningful step towards the Decade of Gas ambition of 12 billion cubic feet per day by 2030.

### Clearing the environmental pathway
No oil and gas development in Nigeria can move into construction without regulatory approval of its environmental assessment, and partners and lenders look to that assessment as part of the investment case. TPI was engaged in February 2025 to lead this process for Ima, working closely with the Federal Ministry of Environment (FMEnv) and the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) at every stage.

The programme ran in three stages, each one opening the way to the next:

1. **Environmental Screening Report (ESR).** TPI screened the project to establish its likely environmental and social footprint and the level of assessment it required. Approval of the ESR set the scope for the next stage.

2. **Preliminary Impact Assessment Report (PIAR).** TPI prepared the PIAR and took it through the NUPRC joint panel review. The panel approved it, clearing the way for the full EIA.

3. **Two-season Environmental and Social Impact Assessment (ESIA).** TPI characterised the marine and coastal environment across both the dry and wet seasons, assessed the project's impacts and prepared the draft ESIA report for regulatory review.

[IMG]${PATHWAY_DIAGRAM}[/IMG]

TPI's environmental assessment pathway for Ima

In about 14 months, TPI took Ima from screening of the project concept to a completed two-season baseline and submission of the draft ESIA report, so that the environmental groundwork was firmly in place ahead of the September 2026 FID. The ESIA is now at the final stage of review ahead of approval by FMEnv.

### Two seasons in the field, alongside the communities
TPI field teams carried out a two-season environmental sampling campaign. Covering both seasons shows how water quality, sediments, marine biology and fisheries change through the year, and gives regulators and partners a defensible, year-round picture of the environment the project will operate in.

Throughout the study, TPI engaged the host communities so that their concerns and expectations were captured in the assessment. With most of Ima's workforce expected to come from those same communities, that engagement forms part of the project's foundation rather than a formality.

### Built to IFC standards
Because Ima is operated and financed to international standards, its environmental assessment had to satisfy more than Nigerian regulation. TPI delivered the Ima ESIA in line with the IFC Performance Standards on Environmental and Social Sustainability and the World Bank Group Environmental, Health and Safety (EHS) Guidelines, including the guidelines for offshore oil and gas development.

These requirements go well beyond a national ESIA. They call for documented stakeholder engagement, a grievance mechanism for affected communities, assessment of biodiversity and sensitive habitats, community health and safety, greenhouse gas emissions, and a management system that carries commitments through construction and operation. Meeting the Nigerian and IFC frameworks in a single study gave the partners and their financiers one assessment they could rely on.

TPI delivered the Ima studies under its ISO 9001:2015 certified quality management system, with laboratory analysis carried out under ISO/IEC 17025:2017. Sampling, analysis and reporting followed documented quality assurance and quality control procedures, so that the data behind each regulatory submission could withstand both regulatory panel review and international scrutiny.

That discipline matters to clients such as TotalEnergies and AMNI, and it is what allows an environmental assessment to keep pace with a project schedule without cutting corners.

### Ima at a glance
**Field:** Ima gas field, discovered 1973
**Location:** Shallow water about 8 km off Bonny Island, Rivers State, across OML 112 and OML 117
**Partners:** AMNI International (60%), TotalEnergies (40%, operator)
**Investment:** About US$800 million; FID signed 23 September 2026
**Plateau output:** 350 million cubic feet of gas per day (over 60,000 boe/d)
**Export route:** 22 km pipeline to Nigeria LNG; about one third of Train 7 feedgas
**First gas:** Targeted for 2028
**TPI scope:** ESR, PIAR and two-season ESIA to IFC standards, from February 2025

Project figures: TotalEnergies and THISDAY.

### Looking ahead
With FID taken, Ima now moves into construction on the way to first gas in 2028. Once the ESIA is approved, the commitments it sets out will carry into execution through environmental management and monitoring plans designed to protect the coastal environment and the communities of Bonny and its neighbours. TPI looks forward to continuing to support the project through that next phase.

"We are proud to have supported TotalEnergies and AMNI in bringing the Ima gas field to this milestone. Our two-season baseline, delivered to IFC standards, gave regulators and partners a clear, year-round picture of the project environment, and our team worked hard to ensure the environmental groundwork was in place well ahead of FID. Projects like Ima show what Nigeria's gas sector can achieve, and TPI remains committed to supporting it from screening through to first gas."

**Ifeadi Chifum**, Managing Director, Technology Partners International Nigeria Limited

Cover photo: Bonny Island. Credits to KIAGreenPhotography.`;

const article = {
  id: 'ima-gas-field-reaches-final-investment-decision',
  title: 'Ima Gas Field Reaches Final Investment Decision',
  excerpt: 'A discovery made in 1973 is finally on its way to production. Technology Partners International congratulates TotalEnergies and AMNI International on a landmark decision for Nigerian gas, and reflects on the environmental programme TPI led to help bring Ima to this point.',
  category: 'Environmental Planning',
  type: 'News',
  date: '2026-10-09',
  readTime: '6 min',
  featured: false,
  bannerImage: COVER_IMAGE,
  content,
  author: { name: 'TPI Insights', role: 'Publication Team' },
  lastUpdated: 'October 2026',
};

async function publishImaArticle() {
  if (!process.env.MONGODB_URI) {
    console.error('Please define MONGODB_URI in server/.env');
    process.exit(1);
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully.');

    // Upsert so re-running the script updates the article instead of duplicating it
    const saved = await Insight.findOneAndUpdate({ id: article.id }, article, {
      upsert: true,
      new: true,
      runValidators: true,
    });
    console.log(`Published insight [${saved.id}]: "${saved.title}"`);

    await mongoose.disconnect();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error publishing article to MongoDB:', error.message);
    process.exit(1);
  }
}

publishImaArticle();
