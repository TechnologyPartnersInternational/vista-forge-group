import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const navItems = [
  { label: "What We Do", path: "/what-we-do", hasMega: true },
  { label: "Industries", path: "/industries" },
  { label: "Projects", path: "/projects" },
  { label: "Insights", path: "/insights" },
  { label: "Company", path: "/company" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20 px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-primary">TPI Group</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technology Partners International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.hasMega && setMegaOpen(true)}
              onMouseLeave={() => item.hasMega && setMegaOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md
                  ${isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
                {item.hasMega && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Mega Menu */}
              {item.hasMega && megaOpen && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6 w-[540px] grid grid-cols-2 gap-3">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/what-we-do/${s.slug}`}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors group"
                        onClick={() => setMegaOpen(false)}
                      >
                        <s.icon className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{s.shortDesc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request a Proposal
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors
                  ${isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-5 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
