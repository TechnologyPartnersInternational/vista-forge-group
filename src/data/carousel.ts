export type MediaType = 'image' | 'video';

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
    navTitle: "Sustainability is our business",
    heading: "Accelerating\ndecarbonization",
    subheading: "Corporate sustainability, net zero & climate change",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000", // African landscape/forest aerial
  },
  {
    id: "slide-2",
    slideNumber: "02 / 05",
    navTitle: "2026 Annual Trends",
    heading: "Pioneering\nenvironmental standards",
    subheading: "Industry-leading monitoring and compliance",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?auto=format&fit=crop&q=80&w=2000", // Industrial / Engineering
  },
  {
    id: "slide-3",
    slideNumber: "03 / 05",
    navTitle: "Climate & net zero",
    heading: "Protecting native\nbiodiversity",
    subheading: "Ecosystem restoration and environmental planning",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/855323/855323-hd_1920_1080_24fps.mp4", // Aerial forest / nature video
    duration: 6000,
  },
  {
    id: "slide-4",
    slideNumber: "04 / 05",
    navTitle: "Renewable Energy",
    heading: "Empowering communities\nthrough energy",
    subheading: "Integrating sustainability with structural integrity",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000", // Wind turbines / renewable energy
  },
  {
    id: "slide-5",
    slideNumber: "05 / 05",
    navTitle: "Sustainability Report 2025",
    heading: "Partner with us to\nDeliver a better world",
    subheading: "Nigeria's trusted environmental consultancy firm",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1611270418597-a6cbf224c2ed?auto=format&fit=crop&q=80&w=2000", // Nigerian/African operations context
  }
];
