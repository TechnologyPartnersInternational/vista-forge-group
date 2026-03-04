import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import TPILogo from "@/assets/GeneralPictures/MainLogo.png";
import NavPicture from "@/assets/GeneralPictures/NavPicture.png";

const navItems = [
  { label: "What We Do", path: "/what-we-do", hasMega: true },
  
  { label: "Projects", path: "/projects" },
  { label: "Insights", path: "/insights" },
  { label: "Company", path: "/company" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const toggleCategory = (categoryId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCategories(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur-md border-b border-gray-200">
      <nav className="flex items-center justify-between h-16 md:h-20 px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={TPILogo} alt="" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="flex-shrink-0 flex items-center h-full border-b-[3px] border-transparent"
              onMouseEnter={() => item.hasMega && setMegaOpen(true)}
              onMouseLeave={() => item.hasMega && setMegaOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md relative group
                  ${isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                {item.label}
                {item.hasMega && <ChevronDown className="w-3.5 h-3.5" />}
                {!item.hasMega && (
                  <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                )}
              </Link>
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

      {/* Full-width Mega Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full z-50 transition-all duration-300 ease-in-out origin-top border-t border-gray-200
          ${megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
        `}
        onMouseEnter={() => setMegaOpen(true)}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="w-full flex flex-col md:flex-row max-h-[60vh]">
          {/* Left Side: Image and Text */}
          <div className="hidden md:flex flex-col w-[25%] relative bg-black overflow-hidden shrink-0">
            <img 
              src={NavPicture} 
              alt="TPI Operations" 
              className="absolute w-full h-full object-cover opacity-[0.4]"
            />
            <div className="relative z-10 p-8 flex flex-col items-start justify-center h-full">
              <h2 className="text-3xl lg:text-4xl font-serif text-white leading-tight mb-4">
                Nigeria's trusted<br className="hidden lg:block"/> environmental<br className="hidden lg:block"/> consultancy firm
              </h2>
              <p className="text-base lg:text-lg text-white/90 font-medium mb-8 max-w-sm">
                With over three decades of experience. Partner with us to Deliver a better world.
              </p>
              <Link 
                to="/what-we-do"
                onClick={() => setMegaOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Explore more
              </Link>
            </div>
          </div>

          {/* Right Side: Services Grid */}
          <div className="w-full md:w-[75%] p-6 bg-card overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {services.map((category) => {
                const isExpanded = expandedCategories[category.id];
                const displaySubServices = isExpanded ? category.subServices : category.subServices.slice(0, 5);
                const hasMore = category.subServices.length > 5;

                return (
                  <div key={category.id} className="flex flex-col space-y-3">
                    <Link 
                      to={`/what-we-do/${category.slug}`} 
                      onClick={() => setMegaOpen(false)}
                      className="text-sm font-bold text-foreground mb-1 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      {category.title}
                    </Link>
                    <ul className="space-y-2">
                      {displaySubServices.map((sub, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <svg className="w-3.5 h-3.5 text-primary shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <Link
                            to={`/what-we-do/${sub.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="text-sm text-foreground hover:text-primary relative inline-block group"
                          >
                            {sub.title}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      ))}
                      {hasMore && (
                        <li>
                          <button
                            onClick={(e) => toggleCategory(category.id, e)}
                            className="text-xs font-semibold text-primary hover:text-primary/80 mt-1 flex items-center gap-1 transition-colors"
                          >
                            {isExpanded ? "Show Less" : "Show More"}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                 <Link
                  to={item.path}
                  onClick={() => !item.hasMega && setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors
                    ${isActive(item.path) ? "bg-muted text-primary" : "text-foreground hover:bg-muted hover:text-primary"}`}
                >
                  {item.label}
                </Link>
                {/* Mobile Mega View */}
                {item.hasMega && (
                   <div className="pl-6 pb-2 space-y-4">
                     {services.map((category) => (
                        <div key={category.id} className="pt-2">
                          <Link 
                            to={`/what-we-do/${category.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="font-bold text-sm text-foreground mb-2 block"
                          >
                            {category.title}
                          </Link>
                          <ul className="pl-2 space-y-2 border-l border-border">
                            {category.subServices.map((sub, idx) => (
                               <li key={idx}>
                                  <Link
                                    to={`/what-we-do/${sub.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-xs text-foreground hover:text-primary block"
                                  >
                                    {sub.title}
                                  </Link>
                               </li>
                            ))}
                          </ul>
                        </div>
                     ))}
                   </div>
                )}
              </div>
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
