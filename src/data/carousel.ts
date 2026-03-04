export type MediaType = 'image' | 'video';
import Carousel1 from "../assets/CarouselImages/Carousel1.mp4";
import Carousel2 from "../assets/CarouselImages/Carousel2.jpg";
import Carousel3 from "../assets/CarouselImages/Carousel3.jpg";
import Carousel4 from "../assets/CarouselImages/Carousel4.jpg";
import Carousel5 from "../assets/CarouselImages/Carousel5.jpg";

export interface CarouselSlide {
  id: string;
  slideNumber: string;
  navTitle: string;
  heading: string;
  subheading: string;
  mediaType: MediaType;
  mediaUrl: string;
  duration?: number; // Optional duration override (default 6000ms)
}

export const carouselData: CarouselSlide[] = [
  {
    id: "slide-1",
    slideNumber: "01 / 05",
    navTitle: "Environmental & Engineering Leadership",
    heading: "Engineering Sustainable\nIndustrial Futures",
    subheading:
      "30+ years delivering Environmental, ESG, and Regulatory Solutions across Sub-Saharan Africa",
    mediaType: "video",
    mediaUrl: Carousel1,
    duration: 6000
  },
  {
    id: "slide-2",
    slideNumber: "02 / 05",
    navTitle: "Oilfield & Waste Solutions",
    heading: "Advanced Solids Control\n& Waste Management",
    subheading:
      "Turn-key drilling waste reduction, cuttings recovery, and on-site declassification systems",
    mediaType: "image",
    mediaUrl: Carousel2,
  },
  {
    id: "slide-3",
    slideNumber: "03 / 05",
    navTitle: "Environmental Monitoring & Compliance",
    heading: "Precision Monitoring.\nRegulatory Confidence.",
    subheading:
      "Air, water, soil, ESG reporting, impact assessments, and compliance aligned with IFC & World Bank standards",
    mediaType: "image",
    mediaUrl: Carousel3,
  },
  {
    id: "slide-4",
    slideNumber: "04 / 05",
    navTitle: "Laboratory & Water Innovation",
    heading: "Data-Driven Laboratory\n& Water Treatment Systems",
    subheading:
      "ASTM & USEPA compliant testing, mobile labs, and chemical-free electrochemical water treatment technology",
    mediaType: "image",
    mediaUrl: Carousel4,
  },
  {
    id: "slide-5",
    slideNumber: "05 / 05",
    navTitle: "EPC, Asset Integrity & Digital",
    heading: "Protecting Critical Assets.\nPowering Digital Insight.",
    subheading:
      "Asset integrity, corrosion management, advanced NDT, GIS, and environmental data intelligence",
    mediaType: "image",
    mediaUrl: Carousel5,
  }
];
