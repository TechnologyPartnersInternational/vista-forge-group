export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
}

export const insights: Insight[] = [
  {
    id: "carbon-reporting-west-africa",
    title: "Navigating Carbon Reporting Requirements in West Africa",
    excerpt: "As global ESG frameworks tighten, West African operations face new demands for greenhouse gas accounting and disclosure. Here's what operators need to know.",
    category: "Regulatory",
    date: "2026-01-15",
    readTime: "6 min",
    featured: true,
    content: "Carbon reporting is rapidly evolving from a voluntary exercise to a regulatory requirement across West Africa. Nigeria's Climate Change Act 2021 and subsequent regulations are establishing mandatory reporting frameworks for large emitters. Operators in the oil and gas, power, and manufacturing sectors must prepare for scope 1 and scope 2 emissions disclosure, with scope 3 requirements on the horizon.\n\nTPI has been working with clients to establish baseline emissions inventories, implement continuous monitoring systems, and build internal capacity for annual GHG reporting. Our digital solutions team has developed a cloud-based carbon accounting platform that integrates with operational data systems to streamline the reporting process.\n\nKey considerations for operators include understanding the regulatory timeline, selecting appropriate emission factors, establishing robust data collection protocols, and engaging with verification bodies early. Companies that invest in carbon reporting infrastructure now will be better positioned for carbon pricing mechanisms expected in the medium term.",
  },
  {
    id: "bioremediation-advances",
    title: "Advances in Bioremediation for Tropical Environments",
    excerpt: "New microbial consortia and nutrient amendment strategies are delivering faster, more cost-effective remediation outcomes in tropical soils.",
    category: "Technical",
    date: "2025-11-20",
    readTime: "8 min",
    featured: false,
    content: "Bioremediation in tropical environments presents both advantages and challenges compared to temperate regions. Higher ambient temperatures accelerate microbial metabolism, but intense rainfall can cause contaminant migration and nutrient leaching. TPI's environmental team has been refining bioremediation protocols specifically optimised for West African conditions.\n\nRecent field trials in the Niger Delta have demonstrated that locally-sourced microbial consortia, combined with controlled-release nutrient amendments, can reduce total petroleum hydrocarbon (TPH) concentrations by 85% within 12 months — a significant improvement over conventional land farming approaches.\n\nThe key innovation is a site-specific microbial profiling approach that identifies and cultivates indigenous hydrocarbon-degrading bacteria, rather than relying on commercial bioaugmentation products designed for temperate soils.",
  },
  {
    id: "digital-twin-environmental",
    title: "Digital Twins for Environmental Monitoring: From Concept to Practice",
    excerpt: "How real-time sensor networks and digital twin technology are transforming environmental compliance monitoring on industrial sites.",
    category: "Digital",
    date: "2025-10-05",
    readTime: "5 min",
    featured: false,
    content: "Digital twin technology is moving beyond asset management into environmental monitoring. TPI has deployed digital twin platforms on three major industrial sites, integrating real-time data from air quality sensors, groundwater monitoring wells, and meteorological stations into a unified 3D visualisation environment.\n\nThe result is a step-change in how operators and regulators interact with environmental data. Instead of reviewing quarterly reports weeks after sampling, stakeholders can access real-time environmental performance dashboards, receive automated alerts for exceedances, and run predictive scenarios for planned operational changes.",
  },
  {
    id: "waste-circular-economy",
    title: "Circular Economy Opportunities in Nigeria's Industrial Waste Streams",
    excerpt: "Moving beyond disposal: how industrial operators are finding value in waste streams through material recovery and industrial symbiosis.",
    category: "Sustainability",
    date: "2025-08-12",
    readTime: "7 min",
    featured: false,
    content: "Nigeria generates an estimated 32 million tonnes of industrial waste annually, with recovery rates below 15%. TPI's waste management team has been working with manufacturing and oil and gas clients to identify circular economy opportunities within their waste streams.\n\nRecent projects have demonstrated commercial viability for catalyst recovery, spent solvent reclamation, and drill cuttings reprocessing. In one case, a refinery client reduced waste disposal costs by 40% while generating additional revenue from recovered materials.",
  },
  {
    id: "maritime-ballast-water",
    title: "Ballast Water Management: Compliance Strategies for West African Ports",
    excerpt: "With IMO BWM Convention enforcement intensifying, port operators and vessel owners need practical compliance pathways.",
    category: "Maritime",
    date: "2025-06-28",
    readTime: "4 min",
    featured: false,
    content: "The International Maritime Organisation's Ballast Water Management Convention is now fully in force, and enforcement is increasing across West African ports. TPI's maritime environmental team has been supporting port authorities and vessel operators with compliance assessments, treatment system evaluation, and monitoring programmes.\n\nKey challenges in the region include the diversity of vessel types calling at ports, limited shore-based reception facilities, and the need for risk assessments tailored to tropical marine ecosystems.",
  },
  {
    id: "iso-17025-journey",
    title: "The Road to ISO 17025: Lessons from Three Laboratory Accreditations",
    excerpt: "Practical insights from TPI's experience guiding laboratories through the accreditation process in Nigeria.",
    category: "Laboratory",
    date: "2025-05-10",
    readTime: "6 min",
    featured: false,
    content: "Achieving ISO 17025 accreditation is a rigorous process that typically takes 18–24 months. TPI has guided multiple laboratories through the journey, and the lessons learned are consistent: start with a thorough gap assessment, invest heavily in staff competency, and treat the quality management system as a living document rather than a compliance exercise.\n\nThe most common stumbling blocks are measurement uncertainty estimation, method validation for non-standard matrices, and maintaining proficiency testing participation. Our laboratory consulting team has developed a structured 12-month readiness programme that addresses each of these areas systematically.",
  },
];
