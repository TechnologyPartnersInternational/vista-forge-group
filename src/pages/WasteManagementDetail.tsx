import ServicePage, { ServiceSection } from "@/components/ServicePage";
import { Trash2, Recycle, Flame, Thermometer, FileText, Drum, Truck } from "lucide-react";
// Replaced broken import with dummy image
const wasteHero = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const wasteIswm = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const wasteIncinerator = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;
// Replaced broken import with dummy image
const wasteThermal = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;

const sections: ServiceSection[] = [
  {
    id: "iswm",
    title: "Integrated Solid Waste Management",
    description: "We provide an Integrated Solid Waste Management (ISWM) system designed to be both economical and effective. Our strategic approach covers all sources and aspects including waste generation, segregation, transfer, sorting, treatment, recovery, and disposal, with emphasis on maximising resource use efficiency and achieving zero-waste-to-landfill targets.",
    highlights: [
      "Waste audits & characterisation",
      "Segregation & sorting systems",
      "Resource recovery & recycling programmes",
      "Zero-waste-to-landfill strategies",
      "Waste minimisation advisory",
      "Circular economy solutions",
    ],
    image: wasteIswm,
    icon: Recycle,
  },
  {
    id: "incineration",
    title: "Incineration Systems",
    description: "We have extensive experience designing and implementing safe and effective incineration systems for a variety of waste streams. Incineration is a thermal treatment technology that destroys a wide range of waste types, including medical waste, industrial process waste, organic waste, chemical waste, and municipal solid waste, ensuring compliant and efficient disposal.",
    highlights: [
      "Medical & clinical waste incineration",
      "Industrial process waste treatment",
      "Organic & food waste destruction",
      "Chemical waste (pesticides, solvents)",
      "Municipal solid waste processing",
      "Emission control & monitoring",
    ],
    image: wasteIncinerator,
    icon: Flame,
  },
  {
    id: "thermal-desorption",
    title: "Thermal Desorption",
    description: "We manage hazardous waste using thermal desorption techniques, which use heat to separate contaminants from waste materials. Our facility houses modern thermal desorption units capable of treating contaminated soil, sludge, spent catalysts, asbestos, and PCB-contaminated materials, all in compliance with applicable environmental regulations.",
    highlights: [
      "Contaminated soil treatment",
      "Sludge & slurry processing",
      "Spent catalyst recovery",
      "Asbestos management",
      "PCB-contaminated material treatment",
      "Compliant disposal & monitoring",
    ],
    image: wasteThermal,
    icon: Thermometer,
  },
  {
    id: "policy",
    title: "Policy Formulation & Compliance",
    description: "Our team is well-versed in the latest regulations and guidelines related to waste management in the mining and oil & gas industry. We help clients develop policies and procedures that ensure compliance and protect the environment, from waste management plans and permitting to regulatory approvals and ongoing compliance monitoring.",
    highlights: [
      "Waste management plan development",
      "Regulatory permitting & approvals",
      "Compliance monitoring & auditing",
      "Drill cuttings management",
      "Hazardous waste manifesting",
      "Landfill design & management advisory",
    ],
    image: wasteIswm,
    icon: FileText,
  },
];

const WasteManagementDetail = () => (
  <ServicePage
    title="Waste Management"
    subtitle="Trusted partner for integrated waste management solutions across the mining and oil & gas industry, from audit to treatment, disposal, and circular recovery."
    heroImage={wasteHero}
    heroIcon={Trash2}
    introHeading="Economical. Effective. Compliant."
    introText="TPI provides end-to-end waste management solutions covering audits, characterisation, incineration, thermal desorption, and policy formulation. Our facility houses modern treatment equipment and our team ensures every operation meets the highest environmental and regulatory standards."
    sections={sections}
    ctaHeading="Need a waste management partner?"
    ctaText="From hazardous waste treatment to circular economy strategies, our team delivers compliant, cost-effective solutions for your operations."
  />
);

export default WasteManagementDetail;
