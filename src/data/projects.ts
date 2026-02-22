export interface Project {
  id: string;
  title: string;
  client: string;
  service: string;
  industry: string;
  location: string;
  year: string;
  heroImage: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "niger-delta-remediation",
    title: "Niger Delta Soil Remediation Programme",
    client: "Major International Oil Company",
    service: "Environment",
    industry: "Oil & Gas",
    location: "Rivers State, Nigeria",
    year: "2023",
    heroImage: "/project-remediation",
    problem: "Decades of oil production activities had resulted in widespread hydrocarbon contamination across 14 sites, threatening local water sources and agricultural land. Regulatory pressure demanded a phased remediation programme aligned with NOSDRA guidelines.",
    approach: "TPI deployed a multidisciplinary team to conduct baseline contamination assessments using grid sampling and tier-2 risk assessment. We designed site-specific remediation strategies combining bioremediation, land farming, and enhanced natural attenuation, with continuous monitoring through our IoT-enabled environmental data platform.",
    result: "All 14 sites achieved regulatory closure within 18 months. Community engagement programmes resulted in 120+ local hires. Post-remediation monitoring confirmed contaminant levels well below intervention values, and the approach has since been adopted as a model for the client's West Africa operations.",
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
    industry: "Oil & Gas",
    location: "Bonny Island, Nigeria",
    year: "2022",
    heroImage: "/project-lng",
    problem: "A proposed US$2.8 billion LNG terminal expansion required a comprehensive ESIA to satisfy Nigerian regulatory requirements (FMEnv) and international lender standards (IFC Performance Standards, Equator Principles).",
    approach: "TPI led a 40-person study team covering air quality modelling, noise assessment, marine ecology surveys, livelihood impact analysis, and a stakeholder engagement programme spanning 23 communities. The project integrated GIS-based cumulative impact mapping and climate risk screening.",
    result: "The ESIA was approved by the Federal Ministry of Environment with commendation for thoroughness. The Environmental and Social Management Plan (ESMP) was adopted without amendment by the project's international lending syndicate, enabling financial close on schedule.",
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
    service: "Laboratory",
    industry: "Government & Regulators",
    location: "Multi-State, Nigeria",
    year: "2024",
    heroImage: "/project-lab",
    problem: "The client's existing laboratory network lacked ISO accreditation, had outdated equipment, and experienced average sample turnaround times of 21 days, impeding enforcement of environmental regulations across six states.",
    approach: "TPI designed and project-managed the renovation of three laboratories, specifying modern analytical instrumentation (ICP-MS, GC-MS, IC), implementing a Laboratory Information Management System (LIMS), and delivering an 18-month staff competency programme aligned with ISO 17025 requirements.",
    result: "All three laboratories achieved ISO 17025 accreditation. Average turnaround time dropped from 21 days to 5 days. Analytical capacity increased by 300%, directly supporting the agency's enforcement and compliance monitoring activities.",
    metrics: [
      { label: "Labs Accredited", value: "3" },
      { label: "Turnaround Reduction", value: "76%" },
      { label: "Capacity Increase", value: "300%" },
      { label: "Staff Trained", value: "45" },
    ],
  },
];
