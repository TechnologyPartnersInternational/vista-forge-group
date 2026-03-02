import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { carouselData } from "@/data/carousel";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const slideDuration = carouselData[currentSlide].duration || 6000;

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setProgress(0); // Reset progress on manual switch
    setTimeout(() => setIsTransitioning(false), 800);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    // ProgressBar interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (slideDuration / 100)); // update every 100ms
      });
    }, 100);

    // Slide switch timeout
    const slideTimeout = setTimeout(() => {
      goToSlide((currentSlide + 1) % carouselData.length);
    }, slideDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [currentSlide, slideDuration, goToSlide]);

  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-black">
      {/* Media Layer */}
      {carouselData.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          {s.mediaType === 'video' ? (
            <video
              src={s.mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={s.mediaUrl}
              alt={s.heading}
              className="w-full h-full object-cover"
            />
          )}
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" /> {/* Extra darkening for uniform readability across all slides */}
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-10 w-full px-12 md:px-20 flex flex-col justify-center h-full">
        <div className="max-w-4xl pt-0"> {/* PT to push down below navbar */}
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <span className="text-white font-bold tracking-widest text-sm">{carouselData[currentSlide].slideNumber}</span>
            <div className="h-[1px] w-12 bg-white/50"></div>
          </div>
          
          <h1
            key={`title-${currentSlide}`}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 animate-fade-in whitespace-pre-line drop-shadow-lg"
          >
            {carouselData[currentSlide].heading}
          </h1>
          
          <p
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mb-12 animate-fade-in drop-shadow-md"
            style={{ animationDelay: "0.1s" }}
          >
            {carouselData[currentSlide].subheading}
          </p>

          <div
            key={`btn-${currentSlide}`}
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Link 
              to="/what-we-do" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity uppercase tracking-wider shadow-xl"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Innovative Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 to-transparent pt-12">
        <div className="flex w-full">
          {carouselData.map((s, i) => {
            const isActive = i === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(i)}
                className={`flex-1 flex flex-col justify-end text-left px-4 md:px-8 pb-8 pt-4 border-t-2 transition-all duration-300 group
                  ${isActive ? "border-white" : "border-white/20 hover:border-white/50"}
                `}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className={`text-xs md:text-sm font-bold mb-1 transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                  {s.slideNumber}
                </div>
                <div className={`text-xs md:text-base font-medium transition-colors duration-300 truncate hidden sm:block ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                  {s.navTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
