import ServicePage, { ServiceSection } from "@/components/ServicePage";
import { Wrench, PenTool, ShoppingCart, Shield, Search, Cable, ClipboardList } from "lucide-react";
import engineeringHero from "@/assets/engineering-hero.jpg";
import engDesign from "@/assets/eng-design.jpg";
import engProcurement from "@/assets/eng-procurement.jpg";
import engIntegrity from "@/assets/eng-integrity.jpg";

const sections: ServiceSection[] = [
  {
    id: "engineering-design",
    title: "Engineering Design",
    description: "From conceptual design through to detail engineering, TPI delivers multidisciplinary solutions for onshore and offshore infrastructure. Our team of experienced engineers uses industry-standard tools and methodologies to deliver cost-effective designs that meet international codes and standards.",
    highlights: [
      "Conceptual & front-end engineering (FEED)",
      "Detail engineering design",
      "Multidisciplinary coordination",
      "3D modelling & visualisation",
      "Code compliance (API, ASME, BS)",
      "Value engineering & optimisation",
    ],
    image: engDesign,
    icon: PenTool,
  },
  {
    id: "procurement-construction",
    title: "Procurement & Construction Management",
    description: "We provide comprehensive procurement and construction management services, ensuring projects are delivered on time, within budget, and to specification. Our EPCM approach covers vendor qualification, material sourcing, logistics, site supervision, and quality assurance across complex industrial projects.",
    highlights: [
      "Vendor qualification & selection",
      "Material procurement & expediting",
      "Construction supervision & management",
      "Quality assurance & control",
      "Schedule & cost control",
      "Commissioning & handover",
    ],
    image: engProcurement,
    icon: ShoppingCart,
  },
  {
    id: "asset-integrity",
    title: "Asset Integrity Management",
    description: "Our asset integrity division ensures safe, reliable operations through systematic inspection, corrosion management, and life-extension programmes. We help operators maximise asset availability while minimising risk through risk-based inspection strategies and advanced NDT techniques.",
    highlights: [
      "Asset integrity management systems (AIMS)",
      "Risk-based inspection (RBI) planning",
      "Corrosion monitoring & management",
      "Non-destructive testing (NDT)",
      "Fitness-for-service assessments",
      "Life extension programmes",
    ],
    image: engIntegrity,
    icon: Shield,
  },
  {
    id: "pipeline-engineering",
    title: "Pipeline Engineering & Integrity",
    description: "TPI delivers pipeline engineering services spanning design, construction oversight, integrity assessment, and rehabilitation. Our specialists ensure pipeline systems operate safely and efficiently throughout their lifecycle, using intelligent pigging data analysis, cathodic protection surveys, and pipeline stress analysis.",
    highlights: [
      "Pipeline design & routing",
      "Intelligent pigging data analysis",
      "Cathodic protection surveys",
      "Pipeline stress analysis",
      "Rehabilitation & repair programmes",
      "Pipeline integrity management systems",
    ],
    image: engIntegrity,
    icon: Cable,
  },
  {
    id: "project-management",
    title: "Quality Control & Project Management",
    description: "Our project management professionals deliver effective governance, controls, and reporting across all project phases. Combined with our quality control capabilities, we ensure every deliverable meets client specifications and industry standards from inception to close-out.",
    highlights: [
      "Project planning & scheduling",
      "Cost estimation & control",
      "Risk management",
      "Quality management systems",
      "Welding inspection & QC",
      "Close-out & lessons learned",
    ],
    image: engDesign,
    icon: ClipboardList,
  },
];

const EngineeringDetail = () => (
  <ServicePage
    title="Engineering / EPC & Asset Integrity"
    subtitle="Multidisciplinary engineering, procurement, construction management, and asset integrity services for critical onshore and offshore infrastructure."
    heroImage={engineeringHero}
    heroIcon={Wrench}
    introHeading="From design to decommissioning"
    introText="TPI delivers end-to-end EPCM services and asset integrity management for the oil & gas, power, and infrastructure sectors. Our multidisciplinary teams combine deep technical expertise with rigorous project controls to deliver safe, reliable, and cost-effective outcomes."
    sections={sections}
    ctaHeading="Need engineering or asset integrity support?"
    ctaText="Whether you're building new infrastructure or extending the life of existing assets, our engineering team is ready to deliver."
  />
);

export default EngineeringDetail;
