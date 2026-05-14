
import projectRemediation from "@/assets/Featured Projects/20131028_173122-scaled.jpg";
import projectLng from "@/assets/Featured Projects/IMG-20230620-WA0013.jpg";
import projectLab from "@/assets/Featured Projects/file-13323803-870x580-1.png";
import projectEcm from "@/assets/Projects/project-ecm.png";
import projectEnvPlanning from "@/assets/Projects/project-env-planning.png";
import projectIncinerator from "@/assets/Projects/project-incinerator.png";
import projectIswm from "@/assets/Projects/project-iswm.png";
import projectMobileLab from "@/assets/Projects/project-mobile-lab.png";
import hydrogeology from "@/assets/How we work/Hydrogeology3.jpg";
import workers from "@/assets/How we work/ConstructionWorkersTalkingBuildingFrame.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  category: "environmental" | "remediation" | "waste-management" | "laboratory" | "training";
  image: string;
  description: string;
  location?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Soil Remediation Site",
    category: "remediation",
    image: projectRemediation,
    description: "Active soil remediation and hydrocarbon cleanup operations in the Niger Delta.",
    location: "Rivers State"
  },
  {
    id: "2",
    title: "Laboratory Analysis",
    category: "laboratory",
    image: projectLab,
    description: "Highly precise chemical and environmental analysis in our ISO-accredited lab.",
    location: "Lagos Headquarters"
  },
  {
    id: "3",
    title: "Environmental Impact Assessment",
    category: "environmental",
    image: projectLng,
    description: "Baseline data collection for large-scale LNG terminal expansion.",
    location: "Bonny Island"
  },
  {
    id: "4",
    title: "Mobile Lab Deployment",
    category: "laboratory",
    image: projectMobileLab,
    description: "Rapid on-site testing capabilities for remote industrial locations.",
    location: "Various Locations"
  },
  {
    id: "5",
    title: "Waste Incineration Facility",
    category: "waste-management",
    image: projectIncinerator,
    description: "Installation and commissioning of high-temperature medical waste incinerators.",
    location: "Abuja"
  },
  {
    id: "6",
    title: "Compliance Monitoring",
    category: "environmental",
    image: projectEcm,
    description: "Continuous air and water quality monitoring for industrial complexes.",
    location: "Port Harcourt"
  },
  {
    id: "7",
    title: "Integrated Waste Management",
    category: "waste-management",
    image: projectIswm,
    description: "Sorting and resource recovery operations for municipal waste systems.",
    location: "Imo State"
  },
  {
    id: "8",
    title: "Field Training Session",
    category: "training",
    image: workers,
    description: "Capacity building and technical safety training for industrial workers.",
    location: "Ogun State"
  },
  {
    id: "9",
    title: "Hydrogeological Surveys",
    category: "environmental",
    image: hydrogeology,
    description: "Detailed groundwater mapping and aquifer vulnerability assessments.",
    location: "Cross River"
  },
  {
    id: "10",
    title: "Strategic Planning",
    category: "environmental",
    image: projectEnvPlanning,
    description: "Framework development for sustainable urban and industrial planning.",
    location: "Lagos State"
  }
];
