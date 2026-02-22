import ServicePage, { ServiceSection } from "@/components/ServicePage";
import { GraduationCap, Leaf, FlaskConical, ShieldCheck, Settings } from "lucide-react";
import trainingHero from "@/assets/training-hero.jpg";
import trainingEsg from "@/assets/training-esg.jpg";
import trainingLab from "@/assets/training-lab.jpg";
import trainingHse from "@/assets/training-hse.jpg";

const sections: ServiceSection[] = [
  {
    id: "esg-training",
    title: "ESG Training & Sustainability Reporting",
    description: "Our team provides training on a wide range of ESG topics, including sustainability reporting, stakeholder engagement, and environmental, social, and governance risk management. Programmes are designed to help you implement industry best practices and standards, such as the GRI guidelines and the ISO 26000 social responsibility standard.",
    highlights: [
      "GRI guidelines & sustainability reporting",
      "ISO 26000 social responsibility",
      "Stakeholder engagement strategies",
      "ESG risk management frameworks",
      "Carbon footprint & GHG reporting",
      "Corporate sustainability planning",
    ],
    image: trainingEsg,
    icon: Leaf,
  },
  {
    id: "lab-training",
    title: "Environmental Laboratory Training",
    description: "We offer training programmes specifically tailored to environmental laboratories, covering sample preparation, instrumentation, quality control, and the latest analytical techniques. Our hands-on approach ensures participants develop practical skills that translate directly to improved laboratory performance.",
    highlights: [
      "Sample preparation techniques",
      "Analytical instrumentation operation",
      "Quality control & QA systems",
      "ISO 17025 accreditation requirements",
      "Method validation & uncertainty",
      "Laboratory safety protocols",
    ],
    image: trainingLab,
    icon: FlaskConical,
  },
  {
    id: "hse-training",
    title: "HSE & Environmental Awareness",
    description: "Our HSE training programmes combine classroom instruction with hands-on field exercises, ensuring participants gain practical skills recognised across the industry. From oil spill response to environmental impact assessment methodology, we build competence at every level of your organisation.",
    highlights: [
      "HSE awareness & induction training",
      "Oil spill response & preparedness",
      "Environmental impact assessment (EIA)",
      "Waste management & handling",
      "Emergency response planning",
      "Regulatory compliance workshops",
    ],
    image: trainingHse,
    icon: ShieldCheck,
  },
  {
    id: "customised-training",
    title: "Customised Corporate Training",
    description: "In addition to our standard programmes, we develop tailored training solutions for your organisation. Our team of trainers has expertise across a wide range of environmental and technical topics and works with you to design programmes that meet your specific needs, goals, and operational context.",
    highlights: [
      "Needs assessment & gap analysis",
      "Bespoke curriculum development",
      "On-site & virtual delivery options",
      "Competence assessment & certification",
      "Train-the-trainer programmes",
      "Ongoing professional development",
    ],
    image: trainingEsg,
    icon: Settings,
  },
];

const TrainingDetail = () => (
  <ServicePage
    title="Training"
    subtitle="Accredited professional development programmes for environmental practitioners, laboratory technicians, and HSE professionals across West Africa."
    heroImage={trainingHero}
    heroIcon={GraduationCap}
    introHeading="Building capability, driving excellence"
    introText="TPI Academy delivers training programmes that combine classroom instruction with hands-on field and laboratory exercises. Whether you need ESG reporting skills, laboratory quality systems, or HSE awareness, our expert trainers help your team develop practical, industry-recognised competencies."
    sections={sections}
    ctaHeading="Invest in your team's development"
    ctaText="From standard accredited courses to fully customised corporate programmes, TPI Academy builds the capabilities your organisation needs."
  />
);

export default TrainingDetail;
