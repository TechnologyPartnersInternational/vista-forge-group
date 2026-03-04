import ServicePage, { ServiceSection } from "@/components/ServicePage";
import { FlaskConical, Beaker, Truck, Bug, Fuel, Fingerprint } from "lucide-react";
// Replaced broken import with dummy image
const labHero = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const labGeneral = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const labMobile = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const labEcotox = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const labPetroleum = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const labFingerprint = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;

const sections: ServiceSection[] = [
  {
    id: "general-lab",
    title: "General Laboratory Services",
    description: "TPI is a world-class laboratory services provider with 30+ years of experience across West and Central Africa. We provide high-quality testing of water, soil, sediment, plankton, benthic fauna, air, contaminants, and other environmental matrices. Our laboratories are accredited and meet local and international regulatory requirements using ASTM, APHA, and USEPA standard methods.",
    highlights: [
      "Microbiological analysis (bacterial & fungal counts)",
      "Physico-chemical analysis (pH, conductivity, TDS)",
      "Nutrient analysis (sulphate, nitrate, phosphate)",
      "Heavy metals analysis (Fe, Zn, Cr, Pb, Hg, As)",
      "Organic constituents (VOCs & semi-volatiles)",
      "Strict QA/QC with interlaboratory comparisons",
    ],
    image: labGeneral,
    icon: Beaker,
  },
  {
    id: "mobile-lab",
    title: "Remote & Mobile Laboratory Services",
    description: "We offer on-site support through fully equipped mobile laboratories providing turnkey analytical solutions. Our team operates in the most challenging environments, equipped with AAS, GC, and other testing equipment following approved methodologies required by national and international environmental protection agencies with strict QA/QC procedures.",
    highlights: [
      "Fully equipped mobile laboratory units",
      "AAS & gas chromatography on-site",
      "Rapid turnaround in remote locations",
      "USEPA & APHA approved methodologies",
      "On-site technical support team",
      "Ideal for offshore & remote operations",
    ],
    image: labMobile,
    icon: Truck,
  },
  {
    id: "ecotoxicity",
    title: "Eco-Toxicity, Bioaccumulation & Biodegradability",
    description: "We provide a full range of environmental toxicology analyses across water, soils, sediments, and effluent matrices. With over 15 years of ecotoxicological testing experience, we work with freshwater and marine test organisms in acute and chronic toxicity studies, complying with EGASPIN, OECD, ISO, and EPA standards.",
    highlights: [
      "Acute & chronic toxicity studies",
      "Freshwater & marine organism testing",
      "Bioaccumulation assessments",
      "Biodegradability testing",
      "EGASPIN, OECD, ISO & EPA compliant",
      "Comprehensive ecotoxicological test design",
    ],
    image: labEcotox,
    icon: Bug,
  },
  {
    id: "petroleum-testing",
    title: "Production Chemistry & Petroleum Testing",
    description: "We specialise in production chemistry, petroleum product testing, and crude oil assay. Our services include process optimisation, scale-up support, and comprehensive testing, from gasoline and diesel to lubricants and additives. We offer flash point, pour point, viscosity, API gravity, sulphur content, distillation, and corrosion testing.",
    highlights: [
      "Process optimisation & troubleshooting",
      "Flash point, pour point & viscosity testing",
      "API gravity & sulphur content analysis",
      "Distillation & corrosion testing",
      "Lubricant & additive quality testing",
      "Crude oil assay services",
    ],
    image: labPetroleum,
    icon: Fuel,
  },
  {
    id: "fingerprinting",
    title: "Geochemical Fingerprinting",
    description: "Crude oil fingerprinting provides critical information about the source and characteristics of crude oil. By analysing biomarkers including hopanes, steranes, isotope ratios, saturated hydrocarbons, and asphaltenes, we determine geological origin, history, quality, and refining potential, enabling informed business decisions.",
    highlights: [
      "Hopane & sterane biomarker analysis",
      "Isotope ratio determination",
      "Saturated hydrocarbon profiling",
      "Asphaltene characterisation",
      "Source rock identification",
      "Spill source attribution",
    ],
    image: labFingerprint,
    icon: Fingerprint,
  },
];

const LaboratoryDetail = () => (
  <ServicePage
    title="Laboratory"
    subtitle="ISO 17025-accredited laboratories delivering precise analytical results with 30+ years of expertise across West and Central Africa."
    heroImage={labHero}
    heroIcon={FlaskConical}
    introHeading="Precision analysis powering confident decisions"
    introText="Our accredited laboratories combine the right methods, state-of-the-art equipment, and deep expertise to support your environmental performance. We carry out internal quality checks, interlaboratory comparisons, and proficiency tests to ensure reliable, quality-assured data that enables decision-makers to act with confidence."
    sections={sections}
    ctaHeading="Need reliable analytical results?"
    ctaText="From routine environmental monitoring to complex crude oil assays, our accredited laboratories deliver the precision and turnaround you need."
  />
);

export default LaboratoryDetail;
