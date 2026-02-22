import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { MapPin, Phone, Mail } from "lucide-react";
import TPILogo from "@/components/TPILogo";

const Footer = () => {
  return (
    <footer className="navy-gradient text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <TPILogo className="h-10 w-auto" variant="light" />
            </div>
            <p className="text-sm text-silver leading-relaxed">
              Since 1992, delivering integrated environmental, laboratory, engineering, and digital solutions across West Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/what-we-do/${s.slug}`} className="text-sm text-silver hover:text-primary-foreground transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", path: "/company" },
                { label: "Leadership", path: "/company#leadership" },
                { label: "QHSE Commitment", path: "/company#qhse" },
                { label: "Careers", path: "/company#careers" },
                { label: "Projects", path: "/projects" },
                { label: "Insights", path: "/insights" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-silver hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Head Office</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-silver">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                12 Adeniyi Jones Avenue, Ikeja, Lagos, Nigeria
              </li>
              <li className="flex items-center gap-2 text-sm text-silver">
                <Phone className="w-4 h-4 shrink-0" />
                +234 1 700 0001
              </li>
              <li className="flex items-center gap-2 text-sm text-silver">
                <Mail className="w-4 h-4 shrink-0" />
                info@tpigrp.com
              </li>
            </ul>
          </div>
        </div>

        <div className="silver-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver">
          <p>© {new Date().getFullYear()} Technology Partners International (TPI Group). All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
