export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export const leadership: TeamMember[] = [
  {
    name: "Dr. Adebayo Ogunlade",
    title: "Managing Director / CEO",
    bio: "Over 30 years of experience in environmental consulting and engineering across West Africa. PhD in Environmental Engineering from the University of Lagos.",
  },
  {
    name: "Engr. Funke Adeyemi",
    title: "Director, Engineering & EPC",
    bio: "Chartered engineer with 25 years in project management and asset integrity for onshore and offshore oil and gas facilities.",
  },
  {
    name: "Dr. Chukwuma Eze",
    title: "Director, Laboratory Services",
    bio: "Analytical chemist and ISO 17025 lead assessor with extensive experience in environmental and industrial laboratory management.",
  },
  {
    name: "Mrs. Amina Bello",
    title: "Director, Environment & Sustainability",
    bio: "Environmental scientist specialising in ESIA, contaminated land, and biodiversity management. Former UNEP consultant.",
  },
  {
    name: "Mr. Oluwaseun Akinwale",
    title: "Director, Digital Solutions",
    bio: "Technology leader with expertise in IoT, environmental data platforms, and digital transformation for industrial clients.",
  },
  {
    name: "Mrs. Ngozi Okafor",
    title: "Director, QHSE & Training",
    bio: "NEBOSH-certified HSE professional with 20 years of experience in quality management systems and professional training delivery.",
  },
];

export const locations = [
  { city: "Lagos (Head Office)", address: "12 Adeniyi Jones Avenue, Ikeja, Lagos, Nigeria", phone: "+234 1 700 0001" },
  { city: "Lekki", address: "Plot 5, Admiralty Way, Lekki Phase 1, Lagos, Nigeria", phone: "+234 1 700 0002" },
  { city: "Port Harcourt", address: "24 Aba Road, GRA Phase 2, Port Harcourt, Rivers State", phone: "+234 84 700 003" },
  { city: "Warri", address: "15 Effurun-Sapele Road, Effurun, Delta State", phone: "+234 53 700 004" },
  { city: "Conakry", address: "Quartier Almamya, Commune de Kaloum, Conakry, Guinea", phone: "+224 622 000 005" },
];
