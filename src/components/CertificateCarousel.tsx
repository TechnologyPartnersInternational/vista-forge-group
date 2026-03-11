import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const certificates = [
  {
    title: "NOSDRA Oil Spill Cleanup & Remediation 2026",
    path: "/assets/Certificates/1-Nosdra-oil-spill-cleanup-and-recovery-and-remediation-services-2026_page-0001.jpg",
  },
  {
    title: "NOSDRA Lab Services 2026",
    path: "/assets/Certificates/2-NOSDRA-LAB-Services-2026_page-0001.jpg",
  },
  {
    title: "NMDPRA Consultancy EIA/EES/PIA/EBS March 2026",
    path: "/assets/Certificates/NMDPRA-Consultancy-EIA-EES-PIA-EBS-March-2026_page-0001.jpg",
  },
  {
    title: "NMDPRA Environmental Quality Monitoring Feb 2026",
    path: "/assets/Certificates/NMDPRA-Environmental-Quality-Monitoring-permit-Feb-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Biomonitoring & Toxicity Studies Feb 2026",
    path: "/assets/Certificates/NUPRC-Biomonitoring-Toxicity-Bioaccumulation-Studies-Permit-Feb-2026_page-0001.jpg",
  },
  {
    title: "NUPRC GHG Monitoring Permit March 2026",
    path: "/assets/Certificates/NUPRC-GHG-Monitoring-Permit-March-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Oil Spill Control & Cleanup Sept 2026",
    path: "/assets/Certificates/NUPRC-Oil-Spill-Control-Cleanup-Sept-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Air Quality & Meteorological Monitoring Oct 2026",
    path: "/assets/Certificates/NUPRC-PERMIT-QUALITY-MONITORING-air-quality-and-meteorological-Oct-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Fingerprinting & Gas Analysis Feb 2026",
    path: "/assets/Certificates/NUPRC-PETROLEUM-QUALITY-MONITORING-fingerprinting-and-gas-analysis-Feb-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Soil Remediation Feb 2026",
    path: "/assets/Certificates/NUPRC-Permit-for-Soil-remediation-Feb-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Water, Soil & Sediment Analysis Oct 2026",
    path: "/assets/Certificates/NUPRC-QUALITY-MONITORING-for-water-soil-sediment-analyses-Oct-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Risk Management Jan 2027",
    path: "/assets/Certificates/NUPRC-Risk-Management-Permit-Jan-2027_page-0001.jpg",
  },
  {
    title: "NUPRC Offshore Studies & Seabed Survey April 2026",
    path: "/assets/Certificates/NUPRC-TECHNICAL-CONSULTANCY-offshore-Studies-EIA-EES-seabed-survey-april-2026_page-0001.jpg",
  },
  {
    title: "NUPRC Safety Studies Sept 2026",
    path: "/assets/Certificates/NUPRC-Technical-consultancy-Permit-for-Safety-Studies-Sept-2026_page-0001.jpg",
  },
];

const CertificateCarousel = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-mist/30">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Certifications & Permits</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous certificates"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next certificates"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory no-scrollbar"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[280px] md:min-w-[320px] aspect-[1/1.4] relative rounded-2xl overflow-hidden group border border-border/50 bg-white shadow-sm hover:shadow-xl transition-all duration-500 snap-center cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <img 
                src={cert.path} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-white text-sm font-medium mb-2">{cert.title}</span>
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedCert(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedCert.path} 
                alt={selectedCert.title}
                className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
              />
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <p className="text-white text-sm md:text-base font-medium">{selectedCert.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateCarousel;
