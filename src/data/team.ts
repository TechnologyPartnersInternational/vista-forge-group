import chifum from "../assets/Executive Board/Mr. Chifum Ifeadi.png";
import chiedu from "../assets/Executive Board/Mr. Chiedu Ifeadi.jpg";
import franca from "../assets/Executive Board/Mrs. Franca Ezeana.jpg";
import edebi from "../assets/Executive Board/Dr. Vaikosen Edebi.jpg";
import omusuku from "../assets/Executive Board/Mrs. Chinyere Omusuku.jpg";
export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const leadership: TeamMember[] = [
  {
    name: "MR. CHIFUM IFEADI",
    title: "Managing Director / CEO",
    bio: "Over 30 years of experience in environmental consulting and engineering across West Africa. PhD in Environmental Engineering from the University of Lagos.",
    image: chifum,
  },
  {
    name: "Mr. Chiedu Ifeadi MBA",
    title: "Chief Operating Officer (COO)",
    bio: "Mr. Chiedu Japhet Ifeadi is a distinguished project manager and a member of the Nigeria Institute of Administrators. His comprehensive expertise spans areas such as asset management, good laboratory practices, analytical group management, marketing, and business administration. He has adeptly managed projects valued at over USD 5 million, serving both governmental and extractive sectors. Over the years, Mr. Ifeadi has participated in numerous professional conferences, seminars, and training sessions. He is a proud member of both the Certified Board of Administrators of Nigeria and the Nigerian Environmental Society",
    image: chiedu,
  },
  {
    name: "Mrs. Franca Ezeana",
    title: "Chief Financial Officer (CFO)",
    bio: "Mrs. Franca Ezeana, a member of the Nigerian Institute of Chartered Accountants, excels in corporate accounting, financial analysis, and registry administration. She is a dedicated and goal-driven professional with strong supervisory skills. Mrs. Ezeana deeply understands the significance of a company’s financial performance, benchmarking it against internal objectives and competitors’ metrics.",
    image: franca,
  },
  {
    name: "Prof. Vaikosen Edebi",
    title: "VP, Technology",
    bio: "Prof. Vaikosen Nicholas Edebi, an Associate Professor, boasts over 39 years of expertise in the oil and gas sector as a distinguished chemist. His extensive skills encompass the creation of standardized operating and analytical procedures, research and development, as well as environmental pollution monitoring. Prof. Edebi is an esteemed member of the Institute of Public Analysts of Nigeria (MIPAN), Nigeria Environmental Society (MNES), and the Chemical Society of Nigeria (MCSN).",
    image: edebi,
  },
  {
    name: "Mrs. Chinyere Omusuku",
    title: "Head, Laboratory Services",
    bio: "With over twenty years in the oil and gas sector and a Bachelor of Science in Analytical Chemistry, Mrs. C Omusuku stands out for her acumen in laboratory management, environmental analysis, and regulatory compliance. She has actively contributed to numerous environmental projects, including EIAs, EBS, EMPs, ECMs, PIAs, and various sampling and analytical initiatives.",
    image: omusuku,
  },
];

export const locations = [
  { city: "Lagos (Head Office)", address: "52/54 Oluwaleyimu Street, Off Toyin Street, Ikeja, Lagos State, Nigeria", phone: "+234 8033030049" },
  { city: "Lekki", address: "No 7, Salami Eleku Street, Iraboko- Awoyaya, Lagos State.", phone: "234-7052588970" },
  { city: "Port Harcourt", address: "137/139, Abuloma Road, Abuloma, Rivers State, Nigeria.", phone: "234-8033419859" },
  { city: "Warri", address: "Energy Link Road, Ugbuwangue, Warri, Delta State, Nigeria", phone: "+234-8166397755" },
  { city: "Conakry", address: "Bloc 19 Ratoma Dispensaire, Commune de Ratoma Conakry, Guinea.", phone: "+224-627121930" },
];
