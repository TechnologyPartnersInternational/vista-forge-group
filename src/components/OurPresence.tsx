import { MapPin } from "lucide-react";

const OurPresence = () => {
  return (
    <section className="bg-card">
      <div className="container-narrow section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Presence</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Offices across West Africa</h2>
          <p className="text-muted-foreground">
            With five offices spanning Nigeria and Guinea, we deliver local expertise with international standards.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Lagos", "Lekki", "Port Harcourt", "Warri", "Conakry"].map((city) => (
            <div key={city} className="flex items-center gap-2 px-5 py-3 bg-mist rounded-full border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
