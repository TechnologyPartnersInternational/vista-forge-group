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
        fullDesc: "Projects are exposed to risks with potential for value erosion, litigation, and damage to natural resources. TPI delivers sustainable value through rigorous risk identification and mitigation, guaranteeing accelerated permit turnaround, investor confidence, and budget adherence.",
        highlights: [
          "Environmental, Social & Health Impact Assessments (ESHIA)",
          "Environmental Management Plans (EMP) & Audits",
          "IFC/World Bank Performance Standards compliance",
          "Stakeholder mapping & management",
          "Regulatory permitting & approvals",
        ],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "compliance-monitoring",
        slug: "environmental-compliance-monitoring",
        title: "Environmental Compliance Monitoring",
        fullDesc: "Routine environmental monitoring is critical for ensuring the safety and compliance of industrial operations. We leverage technology and data analytics to provide business insights, encourage standardisation, and deliver end-to-end management of environmental risks.",
        highlights: [
          "Air, water & soil sample collection and analysis",
          "Continuous and periodic monitoring programmes",
          "Data analytics and business intelligence reporting",
          "Compliance audit and gap assessment",
        ],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "site-assessment",
        slug: "environmental-site-assessment",
        title: "Environmental Site Assessment & Characterisation",
        fullDesc: "In asset portfolio decisions, mergers, and acquisitions, ESG exposures can erode investment value. TPI is a regional leader offering comprehensive Environmental Site Assessment and Characterisation services using cutting-edge technologies.",
        highlights: [
          "Phase I & Phase II Environmental Site Assessments",
          "Transaction screening assessments",
          "Soil & groundwater sampling and analysis",
          "Contamination risk evaluation",
        ],
        image: "https://images.unsplash.com/photo-1581094751159-ca913009762a?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "climate-sustainability",
        slug: "climate-change-sustainability",
        title: "Climate Change, Sustainability & GHG Reporting",
        fullDesc: "As the world focuses on sustainability, companies face pressure to reduce environmental impact. TPI provides expertise in ESG advisory, helping clients navigate environmental and social challenges with proven solutions.",
        highlights: [
          "GHG inventory & reporting (GHG Protocol, ISO 14064)",
          "ESG risk assessment & training",
          "Carbon footprint reduction strategies",
          "Sustainability strategy development",
        ],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "health-social",
        slug: "health-social-engagement",
        title: "Health, Social Engagement & Resettlement",
        fullDesc: "Development projects can impact local communities in numerous ways. TPI helps clients drive transformational social and health impacts based on the UN Sustainable Development Goals.",
        highlights: [
          "Social Impact Assessments (SIA)",
          "Resettlement Action Plans (RAP)",
          "Environmental Social Management Frameworks (ESMF)",
          "Stakeholder engagement & community relations",
        ],
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "air-quality",
        slug: "air-quality-acoustics",
        title: "Air Quality & Acoustics",
        fullDesc: "We offer a wide array of air quality and acoustic measurement services for ambient/outdoor and indoor locations, using everything from hand-held meters to IoT-based active monitors.",
        highlights: [
          "Ambient air quality monitoring (O₃, NOₓ, SO₂, CO, PM2.5, PM10)",
          "Stack emission monitoring (CEMS)",
          "Noise & vibration assessment (BS 4142)",
          "Contaminant fate & transport modelling",
        ],
        image: "https://images.unsplash.com/photo-1523496929152-416a78e99332?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "remediation",
        slug: "cleanup-remediation",
        title: "Clean-Up & Remediation Services",
        fullDesc: "TPI offers innovative and cost-effective clean-up, spill control, and remediation of hazardous contamination sites, employing techniques that pose no negative environmental impact.",
        highlights: [
          "In-situ & ex-situ remediation",
          "Spill response & containment",
          "Post-remediation monitoring",
          "Regulatory compliance management",
        ],
        image: "https://images.unsplash.com/photo-1532094349884-543bb1198c33?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "hydrology",
        slug: "hydrological-services",
        title: "Hydrological & Hydrogeological Services",
        fullDesc: "Our team provides expert solutions for water resources assessments, groundwater modelling, and aquifer testing using state-of-the-art tools and techniques to ensure sustainable water management.",
        highlights: [
          "Water resources assessments & modelling",
          "Aquifer testing & monitoring",
          "Flood risk assessment",
          "Water quality assessments",
        ],
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "geophysical",
        slug: "geophysical-services",
        title: "Geophysical & Geotechnical Services",
        fullDesc: "We deliver consulting solutions for infrastructure and energy projects using seismic, electromagnetic, and GPR surveys for advanced subsurface investigations.",
        highlights: [
          "Seismic & electromagnetic surveys",
          "GPR (Ground Penetrating Radar)",
          "Geotechnical soil & rock mechanics",
          "Foundation design advisory",
        ],
        image: "https://images.unsplash.com/photo-1444491741275-3747c33cc99b?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "gis",
        slug: "gis-services",
        title: "Geographic Information System (GIS) Services",
        fullDesc: "TPI provides cutting-edge GIS and remote sensing services for acquisition and management of spatial data, supporting critical location-based decision making across industries.",
        highlights: [
          "Spatial data analysis & modelling",
          "Custom mapping & visualization",
          "Web mapping applications",
          "Pipeline route determination",
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
        fullDesc: "TPI is a world-class laboratory services provider with 30+ years of experience. We provide high-quality testing of water, soil, sediment, air, and other environmental matrices using ASTM and USEPA methods.",
        highlights: [
          "Microbiological analysis",
          "Physico-chemical analysis",
          "Nutrient and heavy metals analysis",
          "VOCs & organic constituents",
        ],
        image: "https://images.unsplash.com/photo-1579154212600-0382305549e7?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "mobile-lab",
        slug: "remote-mobile-laboratory",
        title: "Remote & Mobile Laboratory Services",
        fullDesc: "We offer on-site support through fully equipped mobile laboratories providing turnkey analytical solutions operating in the most challenging environments.",
        highlights: [
          "Mobile laboratory unit deployment",
          "AAS & gas chromatography on-site",
          "Rapid turnaround in remote areas",
          "Global environmental agency compliance",
        ],
        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "ecotoxicity",
        slug: "eco-toxicity",
        title: "Eco-Toxicity & Biodegradability",
        fullDesc: "We provide environmental toxicology analyses across water, soils, and effluent matrices, working with freshwater and marine organisms to evaluate acute and chronic studies.",
        highlights: [
          "Acute & chronic toxicity studies",
          "Bioaccumulation assessments",
          "Biodegradability testing",
          "OECD & ISO standard compliance",
        ],
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "petroleum-testing",
        slug: "production-chemistry",
        title: "Production Chemistry & Petroleum Testing",
        fullDesc: "Expertise in production chemistry and crude oil assay, including flash point, viscosity, API gravity, and sulphur content to ensure optimal refinery potential and product quality.",
        highlights: [
          "Crude oil assay services",
          "Viscosity & API gravity analysis",
          "Sulphur content determination",
          "Refinery process optimization",
        ],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "fingerprinting",
        slug: "geochemical-fingerprinting",
        title: "Geochemical Fingerprinting",
        fullDesc: "Analysing biomarkers like hopanes and steranes to determine oil geological origin, history, and source attribution, enabling critical spill source identification.",
        highlights: [
          "Biomarker analysis (hopanes, steranes)",
          "Isotope ratio determination",
          "Spill source attribution",
          "Source rock identification",
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
        fullDesc: "Economical and effective approach to waste generation, segregation, and resource recovery, aiming for zero-waste-to-landfill targets and maximum circularity.",
        highlights: [
          "Waste audits & characterisation",
          "Resource recovery & recycling",
          "Circular economy solutions",
          "Waste minimisation advisory",
        ],
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "incinerator",
        slug: "incinerator",
        title: "Incineration Systems",
        fullDesc: "Safe thermal treatment for medical, industrial, and municipal waste streams, ensuring complete destruction of hazardous contaminants with stringent emission controls.",
        highlights: [
          "Medical waste incineration",
          "Industrial process waste treatment",
          "Emission control & monitoring",
          "Hazardous waste destruction",
        ],
        image: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "thermal-desorption",
        slug: "thermal-desorption",
        title: "Thermal Desorption",
        fullDesc: "Advanced hazardous waste management using heat to separate contaminants from soil and sludge, enabling safe remediation of PCB materials and oily wastes.",
        highlights: [
          "Contaminated soil treatment",
          "Sludge & slurry processing",
          "PCB material management",
          "Oily waste remediation",
        ],
        image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=1200",
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
        fullDesc: "Scaling environmental data management via secure software and automated compliance reporting platforms built on integrity.",
        highlights: [
          "Secure data infrastructure",
          "Automated compliance reporting",
          "Custom application development",
          "Role-based access security",
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
        title: "ESG & Sustainability Training",
        fullDesc: "Professional training on GRI guidelines, ISO 26000, and GHG reporting to build internal capacity for sustainability excellence.",
        highlights: [
          "GRI reporting standards",
          "ISO 26000 social responsibility",
          "Carbon footprint reporting",
          "ESG risk management",
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "customised-training",
        slug: "customised-training",
        title: "Customised Corporate Training",
        fullDesc: "Bespoke training programmes designed for specific organizational needs across environmental and technical disciplines.",
        highlights: [
          "Gap analysis & needs assessment",
          "Bespoke curriculum design",
          "Hands-on field workshops",
          "Competency certification",
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
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
