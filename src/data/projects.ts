// Project image imports
import projectEnvPlanning from "@/assets/Projects/project-env-planning.png";
import projectEcm from "@/assets/Projects/project-ecm.png";
import projectLabGeneral from "@/assets/Projects/project-lab-general.png";
import projectMobileLab from "@/assets/Projects/project-mobile-lab.png";
import projectIswm from "@/assets/Projects/project-iswm.png";
import projectIncinerator from "@/assets/Projects/project-incinerator.png";
// Featured project images (re-export for FeaturedProjects component)
import projectRemediation from "@/assets/Featured Projects/20131028_173122-scaled.jpg";
import projectLng from "@/assets/Featured Projects/IMG-20230620-WA0013.jpg";
import projectLab from "@/assets/Featured Projects/file-13323803-870x580-1.png";

export interface Project {
  id: string;
  title: string;
  client: string;
  service: string;
  category: string; // For filtering: "Environmental Planning & Management" | "Environmental Compliance Monitoring (ECM)" | etc.
  industry: string;
  location: string;
  year: string;
  status: "ongoing" | "completed";
  heroImage: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  // ─── FEATURED (used in FeaturedProjects component) ────────────────────────
  {
    id: "niger-delta-remediation",
    title: "Niger Delta Soil Remediation Programme",
    client: "Major International Oil Company",
    service: "Environment",
    category: "Environmental Planning & Management",
    industry: "Oil & Gas",
    location: "Rivers State, Nigeria",
    year: "2023",
    status: "completed",
    heroImage: projectRemediation,
    summary:
      "Phased remediation of 14 hydrocarbon-contaminated sites in the Niger Delta, achieving full regulatory closure within 18 months.",
    problem:
      "Decades of oil production activities had resulted in widespread hydrocarbon contamination across 14 sites, threatening local water sources and agricultural land.",
    approach:
      "TPI deployed a multidisciplinary team to conduct baseline contamination assessments using grid sampling and tier-2 risk assessment.",
    result:
      "All 14 sites achieved regulatory closure within 18 months. Community engagement programmes resulted in 120+ local hires.",
    metrics: [
      { label: "Sites Remediated", value: "14" },
      { label: "Timeline", value: "18 months" },
      { label: "Local Jobs Created", value: "120+" },
      { label: "Regulatory Closures", value: "100%" },
    ],
  },
  {
    id: "lng-terminal-eia",
    title: "LNG Terminal Expansion: Environmental & Social Impact Assessment",
    client: "West African LNG Consortium",
    service: "Environment",
    category: "Environmental Planning & Management",
    industry: "Oil & Gas",
    location: "Bonny Island, Nigeria",
    year: "2022",
    status: "completed",
    heroImage: projectLng,
    summary:
      "Comprehensive ESIA for a US$2.8B LNG terminal expansion, meeting both Nigerian and international lender requirements.",
    problem:
      "A proposed US$2.8 billion LNG terminal expansion required a comprehensive ESIA to satisfy Nigerian regulatory requirements and international lender standards.",
    approach:
      "TPI led a 40-person study team covering air quality modelling, noise assessment, marine ecology surveys, and a stakeholder engagement programme spanning 23 communities.",
    result:
      "The ESIA was approved by the Federal Ministry of Environment with commendation for thoroughness.",
    metrics: [
      { label: "Project Value", value: "$2.8B" },
      { label: "Communities Engaged", value: "23" },
      { label: "Study Team Size", value: "40" },
      { label: "Approval Timeline", value: "On schedule" },
    ],
  },
  {
    id: "industrial-lab-network",
    title: "Regional Laboratory Network Modernisation",
    client: "Government Environmental Agency",
    service: "Laboratory Services",
    category: "General Laboratory Services",
    industry: "Government & Regulators",
    location: "Multi-State, Nigeria",
    year: "2024",
    status: "completed",
    heroImage: projectLab,
    summary:
      "Design, renovation, and ISO 17025 accreditation of three government environmental laboratories across six Nigerian states.",
    problem:
      "The client's existing laboratory network lacked ISO accreditation and experienced average sample turnaround times of 21 days.",
    approach:
      "TPI designed and project-managed the renovation of three laboratories, specifying modern analytical instrumentation and implementing a LIMS system.",
    result:
      "All three laboratories achieved ISO 17025 accreditation. Average turnaround time dropped from 21 days to 5 days.",
    metrics: [
      { label: "Labs Accredited", value: "3" },
      { label: "Turnaround Reduction", value: "76%" },
      { label: "Capacity Increase", value: "300%" },
      { label: "Staff Trained", value: "45" },
    ],
  },

  // ─── ADDITIONAL MOCK PROJECTS ──────────────────────────────────────────────
  {
    id: "port-harcourt-ecm",
    title: "Port Harcourt Refinery Environmental Compliance Monitoring",
    client: "NNPC Refining Limited",
    service: "Environment",
    category: "Environmental Compliance Monitoring (ECM)",
    industry: "Oil & Gas",
    location: "Port Harcourt, Rivers State",
    year: "2024",
    status: "ongoing",
    heroImage: projectEcm,
    summary:
      "Continuous environmental compliance monitoring programme for the Port Harcourt refinery, covering air, water, and soil parameters across 32 monitoring stations.",
    problem:
      "The refinery required a robust, real-time monitoring programme to comply with DPR and FMEnv regulations while minimising operational disruptions.",
    approach:
      "TPI deployed IoT-enabled monitoring sensors at 32 stations, establishing a real-time data dashboard and monthly compliance reporting system.",
    result:
      "Zero regulatory infractions recorded over 18 months. Data-driven insights enabled a 22% reduction in fugitive emissions.",
    metrics: [
      { label: "Monitoring Stations", value: "32" },
      { label: "Parameters Tracked", value: "18+" },
      { label: "Emissions Reduction", value: "22%" },
      { label: "Regulatory Infractions", value: "0" },
    ],
  },
  {
    id: "nda-environmental-planning",
    title: "Coastal Infrastructure Environmental Planning Study",
    client: "Nigerian Ports Authority",
    service: "Environment",
    category: "Environmental Planning & Management",
    industry: "Infrastructure",
    location: "Lagos, Nigeria",
    year: "2023",
    status: "completed",
    heroImage: projectEnvPlanning,
    summary:
      "Strategic environmental planning for a major coastal infrastructure expansion covering 3 ports, ensuring IFC Performance Standards compliance and community acceptance.",
    problem:
      "The port expansion threatened fragile coastal ecosystems and livelihoods of 8 fishing communities, requiring comprehensive environmental pre-planning.",
    approach:
      "TPI conducted baseline biodiversity surveys, social impact mapping, and developed site-specific environmental management frameworks for each port location.",
    result:
      "All three port EIA approvals obtained ahead of schedule. Biodiversity offset plan praised by the World Bank as a model for Nigeria.",
    metrics: [
      { label: "Ports Covered", value: "3" },
      { label: "Communities Engaged", value: "8" },
      { label: "EIA Approvals", value: "100%" },
      { label: "Approval Time saved", value: "3 months" },
    ],
  },
  {
    id: "remote-lab-niger",
    title: "Mobile Laboratory Deployment – Niger Delta Operations",
    client: "Shell Petroleum Development Company",
    service: "Laboratory Services",
    category: "Remote & Mobile Laboratory Services",
    industry: "Oil & Gas",
    location: "Bayelsa State, Nigeria",
    year: "2024",
    status: "ongoing",
    heroImage: projectMobileLab,
    summary:
      "Deployment of two fully equipped mobile laboratory units to remote Niger Delta flow stations for on-site, real-time sample analysis.",
    problem:
      "Remote field operations required rapid turnaround analytical results that were impossible with centralised laboratory logistics, causing production delays.",
    approach:
      "TPI designed and equipped two ISO-compliant mobile laboratory vehicles, each capable of performing 45+ analytical parameters, and embedded dedicated field analysts.",
    result:
      "Sample turnaround time reduced from 14 days to 4 hours. Field compliance improved by 89% within the first quarter of deployment.",
    metrics: [
      { label: "Mobile Labs Deployed", value: "2" },
      { label: "Parameters Supported", value: "45+" },
      { label: "Turnaround Time", value: "4 hrs" },
      { label: "Compliance Improvement", value: "89%" },
    ],
  },
  {
    id: "waste-management-imo",
    title: "Integrated Solid Waste Management System – Imo State",
    client: "Imo State Government",
    service: "Waste Management Services",
    category: "Integrated Solid Waste Management (ISWM) system",
    industry: "Government & Regulators",
    location: "Owerri, Imo State",
    year: "2023",
    status: "completed",
    heroImage: projectIswm,
    summary:
      "Design and implementation of a comprehensive ISWM system for Owerri metropolis, covering waste collection, sorting, and resource recovery for a population of 2 million.",
    problem:
      "The state capital faced a solid waste crisis with landfills at 140% capacity and no structured collection system, creating significant public health risks.",
    approach:
      "TPI designed a sector-based collection system, constructed a centralized sorting facility, and established community-based recycling networks with revenue-sharing models.",
    result:
      "Waste collected increased by 340%. Landfill diversion rate reached 65% through recycling and composting. 850 direct employment positions created.",
    metrics: [
      { label: "Population Served", value: "2M" },
      { label: "Waste Collection Increase", value: "340%" },
      { label: "Landfill Diversion", value: "65%" },
      { label: "Jobs Created", value: "850" },
    ],
  },
  {
    id: "incinerator-abuja",
    title: "Medical Waste Incinerator – National Hospital Abuja",
    client: "Federal Ministry of Health",
    service: "Waste Management Services",
    category: "Incinerator",
    industry: "Government & Regulators",
    location: "Abuja, FCT",
    year: "2024",
    status: "completed",
    heroImage: projectIncinerator,
    summary:
      "Supply, installation, and commissioning of a WHO-compliant high-temperature medical waste incinerator with energy recovery capability at Nigeria's busiest federal hospital.",
    problem:
      "National Hospital Abuja generated over 800kg of hazardous medical waste daily with no safe disposal solution, posing significant infection risks.",
    approach:
      "TPI procured and installed a 1,200°C dual-chamber incinerator with scrubber technology, trained 12 hospital staff, and established a waste segregation protocol.",
    result:
      "100% safe disposal of all hazardous medical waste. WHO and FEPA standards exceeded. Heat recovery system now powers the hospital laundry.",
    metrics: [
      { label: "Waste Processed/Day", value: "800kg" },
      { label: "Temperature", value: "1,200°C" },
      { label: "Staff Trained", value: "12" },
      { label: "Standards Compliance", value: "100%" },
    ],
  },
  {
    id: "ecm-petrochemical-warri",
    title: "Warri Petrochemical Complex ECM Programme",
    client: "Notore Chemical Industries",
    service: "Environment",
    category: "Environmental Compliance Monitoring (ECM)",
    industry: "Manufacturing",
    location: "Warri, Delta State",
    year: "2022",
    status: "completed",
    heroImage: projectEcm,
    summary:
      "Two-year environmental compliance monitoring programme for a major petrochemical complex, ensuring compliance with SON and FMEnv standards across 5 environmental media.",
    problem:
      "The complex faced mounting regulatory pressure following community complaints about air quality and river pollution from industrial discharges.",
    approach:
      "TPI established a comprehensive monitoring programme covering air quality, surface water, groundwater, soil, and noise with quarterly reporting to regulators.",
    result:
      "Full regulatory compliance achieved within 6 months. Community relations improved significantly, with zero formal complaints in the final 12 months.",
    metrics: [
      { label: "Media Monitored", value: "5" },
      { label: "Monitoring Points", value: "28" },
      { label: "Complaints (Final yr)", value: "0" },
      { label: "Compliance Duration", value: "24 months" },
    ],
  },
  {
    id: "lab-petrochemical",
    title: "Petrochemical Product Testing Laboratory Setup",
    client: "Dangote Refinery",
    service: "Laboratory Services",
    category: "General Laboratory Services",
    industry: "Oil & Gas",
    location: "Lekki, Lagos State",
    year: "2023",
    status: "completed",
    heroImage: projectLabGeneral,
    summary:
      "Establishment of a world-class in-house analytical laboratory for Africa's largest oil refinery, including equipment procurement, fit-out, and staff training.",
    problem:
      "Sending samples to external laboratories created delays in quality control, impacting production scheduling and product conformance verification.",
    approach:
      "TPI provided end-to-end laboratory consulting — from design to equipment specification to analyst recruitment and ISO 17025 readiness assessment.",
    result:
      "Laboratory passed ISO 17025 audit on first attempt. In-house testing eliminated 3-day delay, saving an estimated $4.2M annually in production efficiency.",
    metrics: [
      { label: "QC Parameters", value: "60+" },
      { label: "Turnaround Time", value: "Same day" },
      { label: "Annual Savings", value: "$4.2M" },
      { label: "ISO 17025", value: "Accredited" },
    ],
  },
  {
    id: "iswm-cross-river",
    title: "Calabar ISWM System Upgrade",
    client: "Cross River State Waste Management Authority",
    service: "Waste Management Services",
    category: "Integrated Solid Waste Management (ISWM) system",
    industry: "Government & Regulators",
    location: "Calabar, Cross River State",
    year: "2024",
    status: "ongoing",
    heroImage: projectIswm,
    summary:
      "Phased upgrade of Calabar's solid waste management system, including fleet modernisation, transfer station construction, and a digital waste tracking platform.",
    problem:
      "Ageing collection fleet (avg. 22 years old) and inefficient routing led to 40% uncollected waste and citizen dissatisfaction.",
    approach:
      "TPI designed a smart waste management system with GPS-tracked collection vehicles, QR-coded bins, and a citizen reporting app for missed collections.",
    result:
      "Collection efficiency improved from 60% to 94%. Operational costs reduced by 31% through optimised routing algorithms.",
    metrics: [
      { label: "Collection Efficiency", value: "94%" },
      { label: "Cost Reduction", value: "31%" },
      { label: "Fleet Modernised", value: "12 vehicles" },
      { label: "Citizens Served", value: "400K+" },
    ],
  },
];

export type { Project as ProjectType };
