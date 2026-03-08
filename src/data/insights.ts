export type InsightType = "Article" | "Issues" | "Story" | "News";

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: InsightType;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
  bannerImage?: string;
  author?: {
    name: string;
    role: string;
    image?: string;
  };
  lastUpdated?: string;
}

export const insights: Insight[] = [
  {
    id: "eshia-gas-field-development",
    title: "Why Early ESHIA Engagement Accelerates Gas Field Development Timelines",
    excerpt: "Operators who commission Environmental, Social and Health Impact Assessments before front-end engineering can shave months off permitting. We share lessons from recent gas field projects in the Niger Delta.",
    category: "Environmental Planning",
    type: "Article",
    date: "2026-02-10",
    readTime: "6 min",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    author: {
      name: "Andrew Went",
      role: "Former Global High Speed Rail Leader",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    lastUpdated: "February 2024",
    content: "High-speed rail is one of the fastest growing infrastructure sectors in the world, and for good reason.\n\nIt can be used to unlock economic and social benefits for whole regions and even countries and help square the circle of meeting decarbonisation targets while satisfying society's demands for increased mobility.\n\nIn Nigeria's upstream sector, the Environmental, Social and Health Impact Assessment is often treated as a regulatory hurdle to clear once engineering is underway. That approach routinely leads to permit delays, costly redesigns, and strained community relations.\n\nTPI's experience across dozens of ESHIA studies for major operators, including field development projects, infill drilling campaigns, and pipeline installations, points to a different model. When environmental and social baseline work begins in parallel with concept selection, the resulting EIA submissions are stronger, regulator queries are fewer, and the path to Federal Ministry approval is significantly shorter.\n\nThree factors drive the difference. First, early ecological and social baseline surveys capture seasonal variation that single-season studies miss, producing datasets regulators trust. Second, stakeholder mapping conducted before land access negotiations gives operators a clearer picture of community expectations. Third, integrating environmental constraints into engineering design from the outset avoids the rework that comes when impact mitigation is bolted on after the fact.\n\nFor operators planning new field developments or facility expansions, the message is clear: ESHIA is not a downstream task. It is a project enabler that, when sequenced correctly, compresses timelines and reduces total project cost.",
  },
  {
    id: "methane-monitoring-offshore",
    title: "Point Source Methane Monitoring: Closing the Gap on Fugitive Emissions Offshore",
    excerpt: "Regulatory pressure and investor scrutiny are pushing operators to quantify methane emissions at source. Here is how continuous monitoring programmes are changing the picture on offshore platforms.",
    category: "Air Quality & Emissions",
    type: "Issues",
    date: "2026-01-18",
    readTime: "5 min",
    featured: false,
    content: "Methane is responsible for roughly 30% of global warming since pre-industrial times, and the oil and gas sector is one of the largest industrial sources. In Nigeria, the regulatory landscape is shifting. The updated Flare Gas Regulations and commitments under the Global Methane Pledge are moving the industry toward mandatory emissions quantification.\n\nTPI has been deploying point source identification and GHG methane emissions monitoring programmes on offshore and onshore facilities, using optical gas imaging, continuous ambient monitors, and engineering calculations to build facility-level emissions inventories.\n\nThe challenge offshore is practical: platforms are complex, multi-source environments where fugitive emissions from valves, flanges, compressor seals, and storage tanks can be difficult to isolate. Our approach combines top-down screening with bottom-up component surveys, giving operators both the aggregate picture regulators want and the source-level detail maintenance teams need.\n\nOperators investing in structured methane monitoring today are not just meeting compliance requirements. They are building the data foundation for carbon credit eligibility, ESG reporting, and future carbon pricing mechanisms across the West African market.",
  },
  {
    id: "dangote-ecm-industrial-scale",
    title: "Environmental Compliance at Industrial Scale: Lessons from Refinery and Fertilizer Operations",
    excerpt: "Continuous environmental compliance monitoring for large-scale industrial facilities requires a systems approach. We outline the framework that keeps complex operations ahead of regulatory requirements.",
    category: "Compliance Monitoring",
    type: "Article",
    date: "2025-11-22",
    readTime: "7 min",
    featured: false,
    content: "Large-scale industrial facilities, refineries, fertilizer plants, and marine terminals, generate environmental data across dozens of discharge and emission points simultaneously. Managing that data stream while maintaining continuous regulatory compliance is a challenge that outgrows spreadsheet-based systems quickly.\n\nTPI's ongoing environmental compliance monitoring programmes for major industrial complexes have required us to develop a structured approach that scales. The framework rests on three pillars: automated data capture from monitoring stations, exception-based alerting that flags exceedances before they become violations, and integrated reporting that aligns with both NESREA requirements and international lender standards.\n\nThe most common failure mode we see in industrial ECM programmes is not technical, it is organisational. When environmental monitoring sits in a silo, disconnected from operations and maintenance planning, corrective actions are slow and root causes persist. The programmes that work embed environmental data into daily operational decision-making, treating compliance indicators with the same urgency as production metrics.\n\nFor facilities operating under IFC Performance Standards or Equator Principles requirements, the bar is higher still. Monitoring programmes must demonstrate not just compliance, but continuous improvement, a standard that demands robust baseline data, trend analysis, and transparent reporting to stakeholders.",
  },
  {
    id: "bioremediation-niger-delta",
    title: "Bioremediation in the Niger Delta: What Works, What Doesn't, and What's Next",
    excerpt: "After two decades of remediation projects across the Niger Delta, clear patterns have emerged in what drives successful site clean-up outcomes in tropical wetland environments.",
    category: "Remediation",
    type: "Story",
    date: "2025-09-15",
    readTime: "8 min",
    featured: false,
    content: "The Niger Delta presents some of the most challenging remediation conditions anywhere in the world. High water tables, tidal influence, dense mangrove ecosystems, and layered contamination histories make conventional remediation approaches unreliable.\n\nTPI has conducted post-impact assessments, contamination characterisation, and remediation oversight across dozens of sites in the region, from major spill incidents to legacy contamination dating back decades. The data from these projects tells a consistent story about what separates successful remediation from the projects that stall.\n\nFirst, site characterisation depth matters more than treatment technology selection. Sites where detailed contaminant profiling, including hydrocarbon fingerprinting and source differentiation, was conducted before remediation design consistently achieved closure targets faster. Second, bioremediation using locally-adapted microbial communities outperforms imported bioaugmentation products in tropical soils, provided nutrient amendment is carefully managed to prevent leaching during heavy rainfall.\n\nThird, and perhaps most critically, community engagement during remediation is not optional. Clean-up programmes that involve local stakeholders in monitoring and verification achieve faster site access, fewer disruptions, and more durable outcomes.\n\nLooking ahead, integration of remote sensing data with ground-truth sampling is enabling more efficient long-term monitoring of remediated sites, reducing the cost of post-remediation verification while improving confidence in outcomes.",
  },
  {
    id: "biological-monitoring-offshore-discharge",
    title: "Biological Monitoring of Offshore Discharges: Building a Regional Evidence Base",
    excerpt: "Toxicity testing and bioaccumulation studies around offshore platforms are producing valuable ecological data. But are we using it effectively to inform discharge management decisions?",
    category: "Laboratory & Marine Science",
    type: "News",
    date: "2025-07-08",
    readTime: "6 min",
    featured: false,
    content: "Every offshore oil and gas facility operating in Nigerian waters is required to conduct biological monitoring studies to assess the ecological impact of produced water and drilling fluid discharges. Over the years, TPI's laboratory and marine science teams have conducted biological monitoring across multiple offshore facilities, building one of the most comprehensive datasets on tropical marine ecological responses to industrial discharges in West Africa.\n\nThe standard biological monitoring programme involves sediment sampling, water column analysis, benthic community assessment, and toxicity testing using multiple trophic level organisms. Our laboratory conducts these analyses under rigorous quality assurance protocols, generating data that stands up to both regulatory and scientific scrutiny.\n\nWhat is becoming clear from the accumulated evidence is that discharge impacts are highly site-specific. Current, depth, substrate type, and proximity to sensitive habitats all influence the spatial extent and severity of ecological effects. One-size-fits-all discharge limits may not be the most effective regulatory tool.\n\nThe opportunity now is to move from compliance-driven monitoring toward adaptive discharge management, using the biological monitoring data to optimise treatment levels, discharge locations, and timing to minimise ecological impact while maintaining operational efficiency.",
  },
  {
    id: "environmental-evaluation-asset-transactions",
    title: "Environmental Due Diligence in Upstream Asset Transactions: What Buyers Miss",
    excerpt: "As Nigeria's upstream sector sees increased asset divestments and acquisitions, environmental liabilities are emerging as a significant factor in deal valuation. Thorough evaluation studies are essential.",
    category: "Site Assessment",
    type: "Issues",
    date: "2025-05-20",
    readTime: "5 min",
    featured: false,
    content: "The wave of upstream asset transactions in Nigeria, driven by IOC divestments and indigenous operator acquisitions, has put environmental due diligence in the spotlight. Buyers who underestimate legacy environmental liabilities risk acquiring obligations that erode the value of the deal.\n\nTPI has conducted Environmental Evaluation Studies across onshore, swamp, and offshore assets for both sellers and buyers. These comprehensive assessments examine soil and groundwater contamination, facility emissions profiles, waste management practices, community obligations, and regulatory compliance status.\n\nThe most common gap we see in transaction due diligence is the failure to distinguish between current compliance status and accumulated environmental liability. A facility can hold all its current permits while carrying significant decommissioning obligations, unresolved community claims, or legacy contamination that will require remediation when operations change.\n\nFor buyers, the Environmental Evaluation Study should be treated with the same rigour as a reserves audit. The findings directly inform deal valuation, post-acquisition capital planning, and risk allocation in the sale and purchase agreement. For sellers, conducting a pre-divestment environmental evaluation demonstrates transparency and can accelerate transaction timelines by reducing buyer uncertainty.",
  },
  {
    id: "ghg-reporting-climate-act",
    title: "GHG Reporting Under Nigeria's Climate Change Act: What Operators Need to Prepare Now",
    excerpt: "With mandatory greenhouse gas reporting requirements taking shape, operators who build emissions inventories today will avoid the compliance scramble tomorrow.",
    category: "Climate & Sustainability",
    type: "News",
    date: "2025-04-12",
    readTime: "5 min",
    featured: false,
    content: "Nigeria's Climate Change Act 2021 established the legal framework for mandatory greenhouse gas reporting, and implementing regulations are steadily filling in the detail. For operators across the oil and gas, power, and heavy industry sectors, the question is no longer whether GHG reporting will be required, but how soon.\n\nTPI has been working with clients to establish baseline emissions inventories using the GHG Protocol framework and ISO 14064 standards. The process starts with identifying all Scope 1 and Scope 2 emission sources, establishing measurement or estimation methodologies for each, and building the data collection infrastructure to support annual reporting.\n\nThe operators best positioned are those already conducting emissions monitoring as part of their environmental compliance programmes. For these clients, the step from compliance monitoring to structured GHG reporting is incremental. For operators starting from scratch, the lead time to build a credible emissions inventory is typically 12 to 18 months.\n\nBeyond compliance, robust GHG data opens doors to carbon credit markets, green financing, and ESG ratings that increasingly influence investor and partner decisions in the African energy sector.",
  },
  {
    id: "mobile-laboratory-remote-operations",
    title: "Taking the Lab to the Field: Mobile Laboratory Services for Remote Operations",
    excerpt: "When sample integrity depends on rapid analysis and logistics make laboratory transport impractical, mobile and remote laboratory deployments bridge the gap.",
    category: "Laboratory Services",
    type: "Story",
    date: "2025-03-05",
    readTime: "4 min",
    featured: false,
    content: "Environmental monitoring in remote locations, whether offshore platforms, inland drilling sites, or mining operations, presents a fundamental logistics challenge. Sample degradation during transport can compromise analytical results, and the turnaround time from collection to laboratory reporting can stretch beyond the window that operational decisions require.\n\nTPI's mobile laboratory capability addresses this by deploying fully equipped analytical units to site, staffed by trained chemists and equipped for key parameters including TPH, heavy metals, pH, dissolved oxygen, and basic microbiological indicators. The units operate under the same quality assurance protocols as our fixed laboratories.\n\nThe value is clearest in three scenarios: spill response, where rapid characterisation of contamination extent guides clean-up priorities; drilling operations, where mud and cuttings analysis is needed within hours; and compliance monitoring campaigns at facilities far from established laboratory infrastructure.\n\nFor clients operating in the Niger Delta creeks, offshore deepwater, or across West Africa's expanding mining frontier, mobile laboratory services reduce the risk of data quality issues while compressing decision timelines from weeks to days.",
  },
  {
    id: "waste-management-circular-economy",
    title: "From Disposal to Recovery: Rethinking Industrial Waste Streams in Nigeria",
    excerpt: "Thermal desorption, material recovery, and integrated waste management systems are shifting the economics of industrial waste from pure cost to potential value.",
    category: "Waste Management",
    type: "Article",
    date: "2025-01-28",
    readTime: "6 min",
    featured: false,
    content: "For most industrial operators in Nigeria, waste management has historically been a cost line: collect, transport, dispose. The regulatory environment, rising disposal costs, and growing corporate sustainability commitments are changing that equation.\n\nTPI's waste management division has been deploying integrated solid waste management systems and thermal desorption units that recover value from waste streams previously destined for landfill or incineration. Drill cuttings processed through thermal desorption yield clean solids suitable for construction material and recovered hydrocarbons that can re-enter the production cycle.\n\nThe shift requires a different way of thinking about waste. Rather than treating all waste as a single problem, effective integrated waste management starts with characterisation and segregation, identifying which streams have recovery potential and which require treatment or containment.\n\nFor operators managing large facilities, the business case is becoming compelling. Reduced disposal volumes lower transport and tipping costs, recovered materials offset procurement spending, and demonstrable waste reduction strengthens both regulatory relationships and ESG performance. The circular economy in Nigeria's industrial sector is not a distant aspiration. It is already operational at facilities that have invested in the right systems.",
  },
  {
    id: "stakeholder-engagement-infrastructure",
    title: "Community Engagement in Infrastructure Projects: Moving Beyond the Checkbox",
    excerpt: "Resettlement planning and stakeholder engagement done well can accelerate project delivery. Done poorly, they become the single largest source of delay and reputational risk.",
    category: "Social & Health Impact",
    type: "Story",
    date: "2024-11-15",
    readTime: "7 min",
    featured: false,
    content: "Every major infrastructure and energy project in West Africa involves some degree of community interaction, whether through land acquisition, environmental impact, employment expectations, or cultural heritage considerations. The projects that manage these interactions well tend to proceed on schedule. The ones that treat stakeholder engagement as a regulatory formality often face delays that dwarf any time saved by cutting corners.\n\nTPI's social impact and resettlement teams have supported projects ranging from industrial parks and modular refineries to pipeline installations and offshore developments. The consistent lesson across all of them is that early, transparent, and structured engagement produces better outcomes for both the project and the affected communities.\n\nEffective stakeholder engagement starts with proper social baseline studies and stakeholder mapping, not with public hearings. Understanding the social and economic dynamics of affected communities before formal consultation begins allows project proponents to anticipate concerns, design appropriate mitigation measures, and establish credible grievance mechanisms.\n\nFor projects requiring physical or economic displacement, Resettlement Action Plans aligned with IFC Performance Standard 5 provide a structured framework that protects both community livelihoods and project timelines. The cost of doing this properly is a fraction of the cost of project delays caused by unresolved community grievances.",
  },
  {
    id: "iso-17025-laboratory-accreditation",
    title: "The Path to ISO 17025: What Nigerian Laboratories Should Know Before Starting",
    excerpt: "Laboratory accreditation is a rigorous process with a high abandonment rate. Understanding the common pitfalls before you begin can make the difference between certification and frustration.",
    category: "Laboratory Quality",
    type: "Issues",
    date: "2024-09-20",
    readTime: "5 min",
    featured: false,
    content: "ISO 17025 accreditation is the international benchmark for laboratory competence, and it is increasingly becoming a prerequisite for laboratories serving the oil and gas, mining, and manufacturing sectors in Nigeria. Clients and regulators want assurance that analytical results are reliable, and accreditation provides that assurance.\n\nThe accreditation journey typically takes 18 to 24 months and requires sustained commitment from laboratory management and staff. TPI's laboratory operations have been through this process, and our consulting teams have guided other laboratories through it. The lessons are consistent.\n\nThe most common stumbling block is not technical capability but documentation discipline. ISO 17025 requires a quality management system that documents every procedure, tracks every deviation, and demonstrates traceability from sample receipt to final report. Laboratories with strong analytical skills but weak documentation habits face the steepest learning curve.\n\nMeasurement uncertainty estimation is the second major challenge. Many laboratories can produce accurate results but cannot quantify the uncertainty associated with those results, a core requirement of the standard. Building uncertainty budgets for each test method requires statistical competence that may need to be developed through targeted training.\n\nOur recommendation for laboratories considering accreditation: start with a thorough gap assessment, invest in staff competency before system documentation, and treat the quality management system as a tool for continuous improvement rather than a compliance burden.",
  },
  {
    id: "geophysical-surveys-pipeline-routing",
    title: "Geophysical Surveys in Pipeline Route Selection: Reducing Risk Below the Surface",
    excerpt: "Subsurface conditions along pipeline corridors can make or break construction timelines. Modern geophysical survey techniques identify risks before the first trench is dug.",
    category: "Geophysical & Engineering",
    type: "News",
    date: "2024-07-10",
    readTime: "5 min",
    featured: false,
    content: "Pipeline construction in West Africa's diverse terrain, from the Niger Delta's alluvial soils and high water tables to the laterite formations of the interior, carries significant geotechnical risk. Unexpected subsurface conditions are among the most common causes of construction delays and cost overruns.\n\nTPI's geophysical and geotechnical teams use a combination of seismic refraction, ground penetrating radar, electromagnetic surveys, and conventional borehole investigations to characterise subsurface conditions along proposed pipeline routes. The objective is to identify problem zones, such as areas of shallow bedrock, loose saturated soils, buried utilities, or unstable slopes, before detailed engineering design is finalised.\n\nThe value of this work is measured in problems avoided. A geophysical anomaly identified during the survey phase can be addressed through route adjustment or engineering design at a fraction of the cost of dealing with the same issue during construction. For river and creek crossings, bathymetric surveys and sub-bottom profiling provide the data needed to design horizontal directional drilling or open-cut crossings with confidence.\n\nAs pipeline networks expand to support gas monetisation and export infrastructure across the region, the demand for reliable subsurface data is growing. Operators who invest in comprehensive geophysical surveys during the planning phase consistently report smoother construction execution and fewer change orders.",
  },
];
