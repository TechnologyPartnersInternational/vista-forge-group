import { LucideIcon, Leaf, FlaskConical, Trash2, Wrench, Monitor, GraduationCap, TreePine, ShieldCheck, Microscope, CloudSun, Users, Wind, Droplets, Mountain, Map, Beaker, Truck, Bug, Fuel, Fingerprint, PenTool, ShoppingCart, Shield, Cable, ClipboardList, Monitor as MonitorIcon, ShieldCheck as ShieldCheckIcon, Database, Wifi, GraduationCap as GradIcon, Leaf as LeafIcon, FlaskConical as FlaskIcon, Settings } from "lucide-react";

export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDesc?: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  icon?: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
  hasDetailedPage: boolean;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: "environment",
    title: "Environment",
    slug: "environment",
    icon: Leaf,
    shortDesc: "Environmental impact assessments, remediation, and compliance.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "environmental-planning",
        slug: "environmental-planning-management",
        title: "Environmental Planning & Management",
        fullDesc: "Projects are exposed to several risks with potential for value erosion in business, litigation and damage to natural resources. There is a renewed focus on compliance and protection of nature with an approach that aligns with sustainability outcomes in key environmental aspects. Through the project lifecycle, project proponents are duty bound to comply with statutory requirements and treaties, policy documentation, duty of care to the environment, and guarantees license to operate.\n\nTechnology Partners International (TPI) is positioned to provide clients with best-in-class expert advice that guarantees accelerated permit turnaround time, build investors’ confidence, work within budget and schedule constraints. With over 30 years’ experience and a global diverse team across Africa partnering and delivering sustainable projects across the oil and non-oil sectors, TPI is delivering sustainable value through risks identifications and mitigation end-to-end of a project lifecycle. In addition, the company high-grades a sustainable approach to Environmental Compliance monitoring program which supports compliance efficiency, improvements and end-to-end management of environmental risks in projects. Leveraging on technology and data analytics tools, the company provides business insights from the repository of datasets acquired during the monitoring program, encourages standardization of process systems, sustainable resource efficiency and management.",
        highlights: [
          "Site feasibility studies",
          "Risk reviews and mitigations",
          "Environmental, Social, and Health Impact Assessments (ESHIA)",
          "Environmental Management Plans (EMP), Audits (EA) & Evaluation Studies (EES)",
          "IFC/World Bank Performance Standards compliance",
          "Stakeholders mapping and management",
          "Regulatory Permitting and Approvals",
          "Environmental risk modeling",
        ],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "compliance-monitoring",
        slug: "environmental-compliance-monitoring",
        title: "Environmental Compliance Monitoring (ECM)",
        fullDesc: "Routine environmental monitoring is a critical aspect of ensuring the safety and compliance of industrial operations. The service, offered routinely, includes the collection and analysis of samples from various environmental media, such as air, water, and soil, to detect the presence of any harmful pollutants or contaminants emanating from associated operations and facilities.\n\nOur environmental monitoring service is more than just a service, it is a product designed to provide industrial operations with a comprehensive and proactive approach to environmental compliance. It is a cost-effective, reliable, and customizable solution that can help customers stay ahead of potential issues and ensure they are in compliance with all relevant regulations.",
        highlights: [
          "Aqueous: Surface water, Groundwater, Effluents & Runoffs",
          "Gaseous: Ambient/Indoor air, Stack emissions, Particulates",
          "Solids: Soil, Sediments, Waste & Landfill monitoring",
          "Bioaccumulated contaminants in organisms",
          "Bundled compliance audits, emergency response & training",
        ],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "site-assessment",
        slug: "environmental-site-assessment",
        title: "Environmental Site Assessment & Characterization",
        fullDesc: "In asset portfolio investment decisions, mergers, and acquisitions, ESG exposures can be a barrier to eroding the value of investments. TPI is a regional leader offering comprehensive Environmental Site Assessment (ESA), and Characterization services to help businesses and organizations identify and mitigate potential environmental risks.\n\nOur experienced team of project managers, scientists, and engineers use cutting-edge technologies and techniques to thoroughly assess and characterize a site’s environmental condition, including soil and groundwater testing, air quality, and hazardous materials assessments.",
        highlights: [
          "Phase I and II Environmental Site Assessments",
          "Transaction-screening assessments",
          "Soil and groundwater sampling & analysis",
          "Air quality and hazardous materials assessments",
          "Detailed reporting with actionable recommendations",
          "ESG risk and liability reduction strategies",
        ],
        image: "https://images.unsplash.com/photo-1581094751159-ca913009762a?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "climate-sustainability",
        slug: "climate-change-sustainability",
        title: "Climate Change, Sustainability & GHG Reporting",
        fullDesc: "As the world becomes increasingly focused on sustainability, companies are under pressure to demonstrate their commitment to reducing their environmental impact. TPI offers expert ESG advisory services that help clients navigate changing environmental and social challenges through proven solutions that result in improved sustainability outcomes, reduced impacts, and increased social development, while maintaining strong business growth.\n\nOur team of experts works closely with you to understand your specific needs and develop customized solutions that address unique challenges, helping you achieve sustainability goals while saving money and increasing competitiveness in the marketplace.",
        highlights: [
          "GHG Inventory and Reporting (GHG Protocol, ISO 14064)",
          "ESG Risk Assessment and Training",
          "Carbon Footprint Reduction strategies",
          "Sustainability Strategy and Planning",
          "Energy efficiency and renewable energy implementation",
          "Compliance with international and industry-specific standards",
        ],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "health-social",
        slug: "health-social-engagement",
        title: "Health, Social Engagement & Resettlement",
        fullDesc: "Development projects can impact local communities significantly. TPI helps clients and partners drive transformational social and health impacts based on the UN Sustainable Development Goals. We act in culturally knowledgeable and tenable ways, demonstrating that organizations are meeting the demands of customers, operators, and financiers for responsible social conduct.\n\nOur team carry out Social Impact Assessments (SIA), develops Resettlement Action Plans (RAP) and Environmental Social Management Frameworks (ESMF) that guide clients through making strategic decisions on health, social engagement, and resettlement.",
        highlights: [
          "Social Impact Assessments (SIA)",
          "Resettlement Action Plans (RAP)",
          "Environmental Social Management Frameworks (ESMF)",
          "Stakeholder mapping and community engagement",
          "Regional network of social and health impact specialists",
          "Utilization of Data and Analytics for informed decision making",
        ],
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "air-quality",
        slug: "air-quality-acoustics",
        title: "Air Quality & Acoustics",
        fullDesc: "TPI offers a wide array of air quality and acoustic measurement services for ambient and indoor locations, helping you navigate complex regulations and ensure compliance with local and international standards. Our experience spans compliance monitoring and detailed environmental assessments using a combination of hand-held meters and IoT-based active monitoring systems (AQMS).\n\nWe specialize in identifying sources of pollutants and providing comprehensive stack emission monitoring (CEMS) and advanced computer modeling techniques to predict the fate and transport of contaminants in air, surface water, and groundwater.",
        highlights: [
          "Ambient Air Quality (O3, NOx, SO2, CO, PM2.5, PM10, NH3, VOCs)",
          "Indoor Air Quality (IAQ) monitoring and certification",
          "Acoustics (Noise & Vibration) assessments (BS 4142)",
          "Stack Emission Monitoring (CEMS) and Extractive Sampling",
          "Air, Surface Water, and Groundwater Modeling",
          "GIS mapping and 3D visualization of subsurface conditions",
        ],
        image: "https://images.unsplash.com/photo-1523496929152-416a78e99332?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "remediation",
        slug: "cleanup-remediation",
        title: "Clean-Up & Remediation Services",
        fullDesc: "TPI is your trusted partner for innovative and cost-effective Clean-up, spill control, and remediation of hazardous contamination sites, particularly from accidental spills in mining and oil and gas. Our team is dedicated to restoring sites to stringent regulatory limits and protecting the environment from further harm.\n\nOur plans are tailored to client assets and regulatory standards, using techniques and materials that pose no negative environmental impact. We work closely with regulatory agencies to ensure full compliance and maintain effective communication throughout the project.",
        highlights: [
          "Site assessment and evaluation",
          "Contaminant identification and testing",
          "Remediation planning and design",
          "Remediation implementation and monitoring",
          "Spill response and containment",
          "Regulatory agency coordination",
        ],
        image: "https://images.unsplash.com/photo-1532094349884-543bb1198c33?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "hydrology",
        slug: "hydrological-services",
        title: "Hydrological & Hydrogeological Services",
        fullDesc: "Welcome to TPI, your trusted partner in hydrological and hydrogeological consulting. Our team provides expert solutions for water resources optimization, development impact assessment, and contaminated site remediation. We use state-of-the-art tools and techniques to collect and analyze data, ensuring all projects comply with applicable laws and regulations.\n\nWe work closely with regulatory agencies to ensure sustainable water management and identify subsurface conditions for informed decision-making.",
        highlights: [
          "Water resources assessments and modeling",
          "Groundwater assessments and modeling",
          "Surface water recharge analyses",
          "Aquifer testing and monitoring",
          "Water quality assessments",
        ],
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "geophysical",
        slug: "geophysical-services",
        title: "Geophysical & Geotechnical Services",
        fullDesc: "TPI and its consultants have over 20 years of experience in delivering geophysical and geotechnical consulting solutions. Our team of experienced professionals is dedicated to providing expert solutions for all your earth-related needs.\n\nOur team of geologists and engineers use state-of-the-art tools and techniques to collect and analyze data, and to provide our clients with technical advice backed by science and data. We work closely with regulatory agencies to ensure that all our solutions are in compliance with applicable laws and regulations.",
        highlights: [
          "Geophysical surveys (seismic, electromagnetic, GPR)",
          "Geotechnical investigations and testing",
          "Bathymetry Survey & Morphology studies",
          "Soil and rock mechanics",
          "Slope stability analysis",
          "Foundation design",
        ],
        image: "https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "gis",
        slug: "gis-services",
        title: "Geographic Information System (GIS)",
        fullDesc: "GIS is a systematic tool for acquiring and managing critical spatial data for supporting informed business decisions relating to business cases such as situational awareness, engineering, and environmental services, policy formulation and execution, security, planning, etc.\n\nAt TPI, we provide a cutting-edge GIS and Remote Sensing services to cater for various position and location-based services cutting across various industries including but not limited to Oil and Gas, Telecommunications, Engineering planning such as Pipeline route determination, Engineering Planning and Construction, Risk Management, Optimal location determination and Site Suitability Analysis.",
        highlights: [
          "Spatial data analysis and modeling",
          "GIS database development and management",
          "Custom mapping and visualization",
          "Web mapping and GIS applications",
          "GIS training and support",
          "Pipeline route determination & Site Suitability Analysis",
        ],
        image: "https://images.unsplash.com/photo-1524666643752-b381eb00effb?auto=format&fit=crop&q=80&w=1200",
      },
    ]
  },
  {
    id: "laboratory",
    title: "Laboratory Services",
    slug: "laboratory",
    icon: FlaskConical,
    shortDesc: "Accredited analytical testing for soil, water, air, and industrial samples.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "general-lab",
        slug: "general-laboratory-services",
        title: "General Laboratory Services",
        fullDesc: "TPI is a world-class laboratory services provider with 30+ years of experience in West and Central Africa. We provide a wide variety of laboratory investigations by combining the right methods, state-of-the-art equipment, and expertise to support your environmental performance. Our laboratories are accredited and meet necessary local and international regulatory requirements (ASTM, APHA, and USEPA).\n\nWe carry out internal quality checks, interlaboratory comparisons, and proficiency tests to generate reliable and quality-assured data. The laboratory services performed include high-quality testing of water (potable and non-potable), soil, sediment, plankton and benthic fauna, air, contaminants, and other environmental matrices. Fast-track processing is available for some tests.",
        highlights: [
          "Microbiological Analysis (Bacterial/Fungal, Coliform, SRB)",
          "Physico-chemical Analysis (pH, EC, TDS/TSS, Hardness)",
          "Nutrients (Sulphate, Nitrate, Phosphate, Potassium, etc.)",
          "Metal Analysis (Fe, Zn, Cr, Pb, Cu, Cd, Hg, V, Ni, Ba, Co, As)",
          "Organics (PAH, TPH, Volatile & Semi-volatile constituents)",
          "Inter-laboratory comparisons & Proficiency testing",
        ],
        image: "https://images.unsplash.com/photo-1579154212600-0382305549e7?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "mobile-lab",
        slug: "remote-mobile-laboratory",
        title: "Remote & Mobile Laboratory Services",
        fullDesc: "In addition to the full scope of analysis, we offer on-site support by providing mobile laboratories to provide turnkey solutions for our clients in the most challenging environments. Our mobile laboratories are fully equipped with AAS, GC, and other testing equipment, following approved methodologies required by national and international agencies.\n\nTPI adheres to strict QA/QC procedures on-site to ensure analytical precision and reliability, enabling decision-makers to make informed decisions without the delay of transporting samples to central facilities.",
        highlights: [
          "Mobile laboratory unit deployment (AAS, GC)",
          "Turnkey analytical solutions for remote sites",
          "National & International agency compliance",
          "Strict on-site QA/QC procedures",
          "Rapid turnaround in challenging environments",
        ],
        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "ecotoxicity",
        slug: "eco-toxicity",
        title: "Eco-Toxicity, Bioaccumulation & Biodegradability",
        fullDesc: "TPI provides a full range of eco-toxicity and biodegradability testing, ensuring operations meet strict environmental safety standards like EGASPIN, OECD, and ISO. We deliver precise environmental toxicology analyses across various matrices including water, soils, sediments, and effluent.\n\nOur team has over 15 years of experience with freshwater and marine organisms in both acute and chronic studies. We assist companies in avoiding sanctions and environmental degradation by rigorously testing by-products and identifying exposure levels in biological organisms over time.",
        highlights: [
          "Acute Toxicity (Fish, Daphnia, Algae)",
          "Biodegradability Studies (Ready and Inherent)",
          "Bioaccumulation Studies & Effluent Monitoring",
          "EGASPIN, OECD, ISO & EPA compliance",
          "Over 15 years of ecotoxicological test design experience",
        ],
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "petroleum-testing",
        slug: "production-chemistry",
        title: "Production Chemistry, Petroleum Product Testing & Crude Oil Assays",
        fullDesc: "As a leading regional provider, TPI specializes in production chemistry, petroleum product testing, and crude oil assays. In production chemistry, we offer process optimization, scale-up support, and troubleshooting with techniques like titration and gas chromatography.\n\nOur petroleum product testing ensures quality for everything from gasoline and diesel to lubricants and additives, assessing flash point, viscosity, and corrosion. Our crude oil assay services provide critical data on API gravity, sulfur content, and distillation to optimize refining processes and business decisions.",
        highlights: [
          "Production Chemistry troubleshooting & optimization",
          "Petroleum Product Quality (Flash point, Viscosity, Corrosion)",
          "Crude Oil Assay (API gravity, Sulfur, Distillation)",
          "Gas Chromatography & specialized Titration",
          "Refinery process optimization support",
        ],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "fingerprinting",
        slug: "geochemical-fingerprinting",
        title: "Geochemical / Fingerprinting",
        fullDesc: "Crude oil fingerprinting is a critical tool for determining the geological origin and history of oil, as well as its refining potential. By analyzing biomarkers and other chemical compounds, we can identify specific characteristics that enable critical spill source identification and source rock attribution.\n\nOur laboratory utilizes advanced technology to provide accurate results on organic matter types and environmental history, helping clients make informed decisions during environmental incidents or exploration.",
        highlights: [
          "Hopanes and steranes biomarker analysis",
          "Isotope ratio determination for age and origin",
          "Saturated hydrocarbon distribution studies",
          "Asphaltenes for refining potential assessment",
          "Spill source identification & attribution",
        ],
        image: "https://images.unsplash.com/photo-1581093583449-8045610ec39d?auto=format&fit=crop&q=80&w=1200",
      },
    ]
  },
  {
    id: "waste-management",
    title: "Waste Management Services",
    slug: "waste-management",
    icon: Trash2,
    shortDesc: "End-to-end waste management solutions from audit to disposal.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "iswm",
        slug: "integrated-solid-waste",
        title: "Integrated Solid Waste Management (ISWM)",
        fullDesc: "We support our clients by providing an Integrated Solid Waste Management (ISWM) system designed to be both economical and effective. Our strategic approach to sustainable management of solid waste covers all sources and aspects including waste generation, segregation, transfer, sorting, treatment, recovery, and disposal in an integrated manner, with emphasis on maximizing resource use efficiency.",
        highlights: [
          "Waste generation & segregation systems",
          "Transfer, sorting, and treatment",
          "Resource recovery and disposal management",
          "Maximizing resource use efficiency",
          "Sustainable management of solid waste",
        ],
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "incinerator",
        slug: "incinerator",
        title: "Incineration Systems",
        fullDesc: "TPI has extensive experience in designing and implementing safe and effective incineration systems for a variety of waste streams. Incineration is a thermal treatment technology used to destroy a wide range of waste types, ensuring complete destruction of hazardous contaminants with stringent emission controls.",
        highlights: [
          "Medical waste incineration",
          "Industrial process waste treatment",
          "Organic waste (food, agricultural)",
          "Chemical waste (pesticides, solvents)",
          "Municipal solid waste destruction",
          "Emission control and monitoring",
        ],
        image: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "thermal-desorption",
        slug: "thermal-desorption",
        title: "Thermal Desorption",
        fullDesc: "We help you manage hazardous waste using thermal desorption techniques, which use heat to separate contaminants from waste materials such as soil and sludge. This advanced management method enables safe remediation of PCB materials and oily wastes across various industrial sectors.",
        highlights: [
          "Contaminated soil treatment",
          "Sludge & slurry processing",
          "Spent catalysts management",
          "Asbestos & PCB material treatment",
          "Oily waste remediation",
        ],
        image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "waste-policy",
        slug: "waste-policy-formulation",
        title: "Policy Formulation & Compliance",
        fullDesc: "Our team is well-versed in the latest regulations and guidelines related to waste management in the mining and oil and gas industry. We help you develop policies and procedures that ensure compliance and protect the environment, from planning to final approvals.",
        highlights: [
          "Waste management plans development",
          "Regulatory permitting and approvals",
          "Compliance auditing and procedures",
          "Industry-specific guideline alignment",
          "Environmental protection strategies",
        ],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        icon: ShieldCheck,
      },
    ]
  },
  {
    id: "engineering",
    title: "Engineering / EPC & Asset Integrity",
    slug: "engineering",
    icon: Wrench,
    shortDesc: "Procurement, construction management, and asset integrity.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "engineering-design",
        slug: "engineering-design",
        title: "Engineering Design",
        fullDesc: "Conceptual and detail engineering for onshore and offshore infrastructure, using industry-standard tools to meet international codes.",
        highlights: [
          "Conceptual & FEED engineering",
          "3D modelling & visualisation",
          "API, ASME, BS code compliance",
          "Value engineering",
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "asset-integrity",
        slug: "asset-integrity-management",
        title: "Asset Integrity Management",
        fullDesc: "Ensuring safe, reliable operation through RBI planning, corrosion management, and advanced NDT techniques for lifecycle extension.",
        highlights: [
          "Risk-based inspection (RBI)",
          "Corrosion monitoring",
          "Fitness-for-service assessments",
          "Non-destructive testing (NDT)",
        ],
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
      },
    ]
  },
  {
    id: "digital",
    title: "Digital Solutions",
    slug: "digital-solutions",
    icon: Monitor,
    shortDesc: "Data platforms, IoT monitoring, and digital transformation.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "security-software",
        slug: "security-software-solutions",
        title: "Security & Software Solutions",
        fullDesc: "TPI Group delivers leading environmental data management services in Nigeria, combining innovative reporting platforms, automation, and secure software systems to streamline operations. Our solutions help collect, manage, and analyze environmental data with clarity and efficiency—whether you’re tracking air and water quality, waste streams, or compliance metrics.\n\nBuilt on integrity and scalability, our systems reduce manual effort, enhance regulatory reporting, and support informed decision-making. We focused on innovation and scale throughout the world, maintaining high standards and achieving blue-chipped status in Security & Software solutions.",
        highlights: [
          "Innovative environmental reporting platforms",
          "Automated compliance data collection",
          "Secure and scalable software infrastructure",
          "Custom tailored security solutions",
          "Continuous innovation and global scale",
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "iot-monitoring",
        slug: "iot-monitoring",
        title: "IoT & Real-Time Monitoring",
        fullDesc: "Integrating sensor networks with cloud analytics for real-time monitoring of air, water, and soil parameters enabling proactive action.",
        highlights: [
          "IoT sensor network deployment",
          "Real-time data visualization",
          "Automated threshold alerts",
          "GIS & spatial analysis mapping",
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      },
    ]
  },
  {
    id: "training",
    title: "Training",
    slug: "training",
    icon: GraduationCap,
    shortDesc: "Professional development in HSE, algorithms, and compliance.",
    hasDetailedPage: true,
    subServices: [
      {
        id: "esg-training",
        slug: "esg-training",
        title: "ESG Training",
        fullDesc: "Our team of experts can provide training on a wide range of ESG topics, including sustainability reporting, stakeholder engagement, and environmental, social, and governance risk management. Our training programs are designed to help you understand and implement industry best practices and standards, such as the Global Reporting Initiative (GRI) guidelines and the ISO 26000 social responsibility standard.",
        highlights: [
          "Sustainability reporting (GRI guidelines)",
          "Stakeholder engagement strategies",
          "ESG risk management frameworks",
          "ISO 26000 social responsibility standards",
          "Industry best practices implementation",
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "customised-training",
        slug: "customised-training",
        title: "Customized Training",
        fullDesc: "In addition to our standard training programs, we also offer customized training solutions to meet the specific needs of your organization. Whether you need training on a particular topic or want to develop a tailored training program for your team, we can help. Our team of trainers has expertise in a wide range of environmental and technical topics, and we can work with you to develop a training program that meets your specific needs and goals.\n\nOur team of trainers are dedicated to helping you and your team succeed. Contact us today to learn more about how we can support your professional development needs.",
        highlights: [
          "Gap analysis & needs assessment",
          "Bespoke curriculum design",
          "Hands-on field workshops",
          "Competency certification",
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "lab-training",
        slug: "environmental-laboratory-training",
        title: "Environmental Laboratory Training",
        fullDesc: "We offer a range of training programs specifically tailored to the needs of environmental laboratories. These programs cover a variety of topics, including sample preparation, instrumentation, and quality control. Our training programs are designed to help you and your team stay up-to-date on the latest techniques and technologies used in the environmental laboratory field.",
        highlights: [
          "Sample preparation techniques",
          "Instrumentation training (AAS, GC, etc.)",
          "Quality control protocols",
          "Latest analytical technologies",
          "Laboratory safety standards",
        ],
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
        icon: FlaskIcon,
      },
    ]
  },
];

export const industries = [
  { id: "oil-gas", title: "Oil & Gas", desc: "Upstream, midstream, and downstream environmental and engineering services for Africa's petroleum sector." },
  { id: "manufacturing", title: "Manufacturing", desc: "Compliance, waste management, and sustainability solutions for manufacturing operations." },
  { id: "infrastructure", title: "Infrastructure", desc: "Environmental assessments and engineering for roads, bridges, ports, and urban development." },
  { id: "government", title: "Government & Regulators", desc: "Technical advisory, monitoring programmes, and capacity building for public sector agencies." },
  { id: "mining", title: "Mining", desc: "Mine-site environmental management, closure planning, and remediation services." },
  { id: "power", title: "Power & Energy", desc: "Environmental compliance and engineering for power generation and renewable energy projects." },
  { id: "maritime", title: "Maritime", desc: "Ballast water management, port environmental assessments, and coastal monitoring." },
];
