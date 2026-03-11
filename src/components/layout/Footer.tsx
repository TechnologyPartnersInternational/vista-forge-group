import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowUp } from "lucide-react";
import TPILogo from "@/components/TPILogo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] text-white border-t border-white/5">
      <div className="px-4 md:px-10 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <TPILogo className="h-10 w-auto" variant="light" />
              </Link>
              <p className="text-sm text-silver leading-relaxed max-w-xs">
                Since 1992, Technology Partners International has delivered world-class 
                environmental, laboratory, and engineering solutions across Nigeria and West Africa.
              </p>
              <div className="flex gap-4">
                <Link to="https://www.linkedin.com/company/technology-partners-international-nigeria-limited/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-silver hover:text-white hover:border-primary transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link to="https://twitter.com/TPI_Nigeria" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-silver hover:text-white hover:border-primary transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link 
                      to={`/what-we-do/${s.slug}`} 
                      className="text-sm text-silver hover:text-white transition-colors duration-300"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", path: "/company" },
                  { label: "Leadership", path: "/company#leadership" },
                  { label: "QHSE", path: "/company#qhse" },
                  { label: "Our Projects", path: "/projects" },
                  { label: "Insights", path: "/insights" },
                  { label: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-sm text-silver hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-silver">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>52/54 Oluwaleyimu Street, Off Toyin Street, Ikeja, Lagos State, Nigeria</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-silver">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+234 8033030049</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-silver">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>info@tpigrp.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] text-silver font-medium">
              <p>© {new Date().getFullYear()} TPI Group. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors group"
            >
              Back to top 
              <span className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
