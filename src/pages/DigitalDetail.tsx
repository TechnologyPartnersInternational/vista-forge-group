import ServicePage, { ServiceSection } from "@/components/ServicePage";
import { Monitor, ShieldCheck, Database, Wifi, BarChart3 } from "lucide-react";
import digitalHero from "@/assets/digital-hero.jpg";
import digitalSoftware from "@/assets/digital-software.jpg";
import digitalData from "@/assets/digital-data.jpg";
import digitalIot from "@/assets/digital-iot.jpg";

const sections: ServiceSection[] = [
  {
    id: "security-software",
    title: "Security & Software Solutions",
    description: "TPI Group delivers leading environmental data management services, combining innovative reporting platforms, automation, and secure software systems to streamline operations. Built on integrity and scalability, our systems reduce manual effort, enhance regulatory reporting, and support informed decision-making, locally and sustainably.",
    highlights: [
      "Secure environmental software platforms",
      "Automated compliance reporting",
      "Cloud-based data infrastructure",
      "Role-based access & data security",
      "Custom application development",
      "System integration & API development",
    ],
    image: digitalSoftware,
    icon: ShieldCheck,
  },
  {
    id: "data-management",
    title: "Data Management & Reporting",
    description: "Our team helps organisations manage and analyse environmental data effectively. We organise and store data efficiently, extract valuable insights using statistical analysis and modelling, and create clear reports for stakeholders. Our data management processes cover collection, verification, and ongoing updates on a continuous basis.",
    highlights: [
      "Environmental data organisation & storage",
      "Statistical analysis & trend modelling",
      "Custom report generation",
      "Regulatory reporting automation",
      "Dashboard & KPI visualisation",
      "Data quality assurance processes",
    ],
    image: digitalData,
    icon: Database,
  },
  {
    id: "iot-monitoring",
    title: "IoT & Real-Time Monitoring",
    description: "We integrate IoT sensor networks with cloud analytics to provide real-time environmental monitoring across air, water, and soil parameters. Our systems enable clients to move from reactive compliance to proactive, data-driven decision-making with continuous alerts and automated threshold management.",
    highlights: [
      "IoT sensor network deployment",
      "Real-time air & water quality monitoring",
      "Automated alerts & threshold management",
      "Cloud analytics & remote access",
      "GIS mapping & spatial analysis",
      "Digital twin & asset visualisation",
    ],
    image: digitalIot,
    icon: Wifi,
  },
];

const DigitalDetail = () => (
  <ServicePage
    title="Digital Solutions"
    subtitle="Innovative data platforms, IoT monitoring, and secure software systems that transform environmental and industrial operations."
    heroImage={digitalHero}
    heroIcon={Monitor}
    introHeading="Smart data. Better decisions."
    introText="TPI's Digital Solutions team builds custom platforms for real-time environmental monitoring, regulatory reporting, and operational intelligence. We help clients collect, manage, and analyse environmental data with clarity and efficiency, driving performance, transparency, and environmental impact."
    sections={sections}
    ctaHeading="Ready to digitise your operations?"
    ctaText="From IoT sensor networks to automated reporting platforms, our digital team builds solutions tailored to your environmental and operational needs."
  />
);

export default DigitalDetail;
