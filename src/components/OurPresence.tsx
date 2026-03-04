import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Local Image Imports
import lagosImg from "@/assets/Our Presence/Lagos Office.jpg";
import warriImg from "@/assets/Our Presence/Warri Office.jpg";
import lekkiImg from "@/assets/Our Presence/Lekki Office.jpg";
import phcImg from "@/assets/Our Presence/Port Harcourt Office.jpg";
import conakryImg from "@/assets/Our Presence/Conatry Office.jpg";

interface OfficeProps {
  city: string;
  address: string;
  phone: string;
  image: string;
  heightClass: string;
}

const OfficeCard = ({ city, address, phone, image, heightClass }: OfficeProps) => (
  <Link to="/contact" className={`group relative w-full ${heightClass} rounded-[1rem] overflow-hidden block`}>
    {/* Background Image & Overlay */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src={image} 
        alt={`${city} Office`} 
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
    </div>

    {/* Center Title */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-8">
      <MapPin className="w-8 h-8 text-primary mb-3 drop-shadow-md" />
      <h3 className="text-2xl font-bold font-sans text-white drop-shadow-md">
        {city}
      </h3>
    </div>

    {/* Slide-Up Contact Details */}
    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none text-center">
      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
        <p className="text-sm text-gray-200 mb-1">{address}</p>
        <p className="text-sm font-semibold text-white">{phone}</p>
      </div>
    </div>
  </Link>
);

const OurPresence = () => {
  return (
    <section className="bg-white">
      <div className="px-4 md:px-12 section-padding">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our Presence</p>
          <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-6">Offices across West Africa</h2>
          <p className="text-muted-foreground text-lg">
            With five offices spanning Nigeria and Guinea, we deliver local expertise with international standards.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <OfficeCard 
              city="Lagos" 
              address="Victoria Island, Lagos, Nigeria"
              phone="+234 (0) 800 123 4567"
              image={lagosImg}
              heightClass="h-[500px]"
            />
            <OfficeCard 
              city="Warri" 
              address="Effurun, Warri, Delta State"
              phone="+234 (0) 800 123 4568"
              image={warriImg}
              heightClass="h-[200px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <OfficeCard 
              city="Lekki" 
              address="Lekki Phase 1, Lagos, Nigeria"
              phone="+234 (0) 800 123 4569"
              image={lekkiImg}
              heightClass="h-[200px]"
            />
            <OfficeCard 
              city="Port Harcourt" 
              address="Trans Amadi, Rivers State"
              phone="+234 (0) 800 123 4570"
              image={phcImg}
              heightClass="h-[500px]"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <OfficeCard 
              city="Conakry" 
              address="Kaloum, Conakry, Guinea"
              phone="+224 600 12 34 56"
              image={conakryImg}
              heightClass="h-[400px] lg:h-[724px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPresence;
