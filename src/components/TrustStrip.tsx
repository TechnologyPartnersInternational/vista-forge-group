import { Calendar, MapPin, FlaskConical, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: "Since 1992", label: "Established" },
  { icon: MapPin, value: "5 Offices", label: "Across West Africa" },
  { icon: FlaskConical, value: "6 Service Lines", label: "Integrated Solutions" },
  { icon: Users, value: "500+", label: "Projects Delivered" },
];

const TrustStrip = () => {
  return (
    <section className="bg-card">
      <div className="container-narrow section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mist">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
