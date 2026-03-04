import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { leadership, locations } from "@/data/team";
import { Shield, Award, MapPin, ArrowRight, Users, Briefcase } from "lucide-react";
// Replaced broken import with dummy image
const labImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;

const Company = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={labImage} alt="TPI laboratory" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 container-narrow section-padding-sm">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Our Company</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Building Africa's technical capacity since 1992</h1>
            <p className="text-lg text-silver leading-relaxed">
              Technology Partners International (TPI Group) is a leading West African environmental, laboratory, and engineering consultancy serving the continent's most important industries.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About TPI Group</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 1992, TPI Group has grown from a specialist environmental consultancy into an integrated technical services provider with six core service lines and five offices across Nigeria and Guinea.</p>
              <p>We combine deep local knowledge with international standards, delivering solutions that are technically rigorous, commercially pragmatic, and socially responsible. Our multidisciplinary team of over 200 professionals includes environmental scientists, analytical chemists, engineers, digital specialists, and HSE practitioners.</p>
              <p>TPI maintains ISO 9001, ISO 14001, ISO 45001, and ISO 17025 certifications, reflecting our commitment to quality, safety, and technical excellence. We are a proud Nigerian company with a growing West African footprint, supporting our clients from exploration through decommissioning and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-mist scroll-mt-24">
        <div className="container-narrow section-padding">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Leadership</p>
            <h2 className="text-3xl font-bold text-foreground">Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <div key={member.name} className="bg-card rounded-lg p-8 border border-border card-hover">
                <div className="w-16 h-16 rounded-full bg-mist flex items-center justify-center mb-5">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE */}
      <section id="qhse" className="bg-card scroll-mt-24">
        <div className="container-narrow section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">QHSE Commitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Quality, Health, Safety, and Environment (QHSE) are embedded in everything we do. Our integrated management system ensures consistent delivery standards, rigorous safety protocols, and environmental stewardship across all operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 17025:2017"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 p-3 bg-mist rounded-md border border-border">
                    <Award className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="navy-gradient rounded-lg p-10 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Our HSE Policy</h3>
              <p className="text-silver leading-relaxed text-sm">
                TPI Group is committed to achieving the highest standards of health, safety, and environmental performance. We believe that all incidents are preventable, and we empower every team member to stop work if conditions are unsafe. Our goal is zero harm to people and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Offices</p>
            <h2 className="text-3xl font-bold text-foreground">Locations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-card rounded-lg p-8 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{loc.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{loc.address}</p>
                <p className="text-sm font-medium text-primary">{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="navy-gradient scroll-mt-24">
        <div className="container-narrow section-padding text-center">
          <Briefcase className="w-10 h-10 text-silver mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Join Our Team</h2>
          <p className="text-silver max-w-2xl mx-auto leading-relaxed mb-8">
            We're always looking for talented professionals who share our commitment to technical excellence and sustainability. Explore opportunities across our service lines and locations.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Company;
