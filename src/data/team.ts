export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const leadership: TeamMember[] = [
  {
    name: "Dr. Adebayo Ogunlade",
    title: "Managing Director / CEO",
    bio: "Over 30 years of experience in environmental consulting and engineering across West Africa. PhD in Environmental Engineering from the University of Lagos.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Engr. Funke Adeyemi",
    title: "Director, Engineering & EPC",
    bio: "Chartered engineer with 25 years in project management and asset integrity for onshore and offshore oil and gas facilities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Chukwuma Eze",
    title: "Director, Laboratory Services",
    bio: "Analytical chemist and ISO 17025 lead assessor with extensive experience in environmental and industrial laboratory management.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mrs. Amina Bello",
    title: "Director, Environment & Sustainability",
    bio: "Environmental scientist specialising in ESIA, contaminated land, and biodiversity management. Former UNEP consultant.",
    image: "https://images.unsplash.com/photo-1580894732234-8b60289b06d9?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mr. Oluwaseun Akinwale",
    title: "Director, Digital Solutions",
    bio: "Technology leader with expertise in IoT, environmental data platforms, and digital transformation for industrial clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mrs. Ngozi Okafor",
    title: "Director, QHSE & Training",
    bio: "NEBOSH-certified HSE professional with 20 years of experience in quality management systems and professional training delivery.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
];

export const locations = [
  { city: "Lagos (Head Office)", address: "52/54 Oluwaleyimu Street, Off Toyin Street, Ikeja, Lagos State, Nigeria", phone: "+234 8033030049" },
  { city: "Lekki", address: "No 7, Salami Eleku Street, Iraboko- Awoyaya, Lagos State.", phone: "234-7052588970" },
  { city: "Port Harcourt", address: "137/139, Abuloma Road, Abuloma, Rivers State, Nigeria.", phone: "234-8033419859" },
  { city: "Warri", address: "Energy Link Road, Ugbuwangue, Warri, Delta State, Nigeria", phone: "+234-8166397755" },
  { city: "Conakry", address: "Bloc 19 Ratoma Dispensaire, Commune de Ratoma Conakry, Guinea.", phone: "+224-627121930" },
];
