import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { carouselData } from "@/data/carousel";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [headingKey, setHeadingKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slideDuration = carouselData[currentSlide].duration || 6000;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setProgress(0);
      setHeadingKey((k) => k + 1);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [currentSlide, isTransitioning]
  );

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (slideDuration / 100);
      });
    }, 100);

    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % carouselData.length;
        setProgress(0);
        setHeadingKey((k) => k + 1);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 800);
        return next;
      });
    }, slideDuration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, slideDuration]);

  const slide = carouselData[currentSlide];

  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-black">

      {/* ── Media Layer ─────────────────────────────────────────────── */}
      {carouselData.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          {s.mediaType === "video" ? (
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
              style={{
                transitionDuration: "15s",
                transform: i === currentSlide ? "scale(1.12)" : "scale(1)",
              }}
              className="w-full h-full object-cover will-change-transform transition-transform ease-out"
            />
          )}
          {/* Strong left-to-subtle-right gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
          {/* Soft vignette from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Content Layer ───────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Brand label above heading */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <span
            style={{ background: "hsl(var(--gold))" }}
            className="block w-8 h-[2px] rounded-full flex-shrink-0"
          />
          <span className="text-white/55 text-xs font-semibold tracking-[0.22em] uppercase">
            Technology Partners International
          </span>
        </div>

        {/* Gold accent line + Heading block */}
        <div className="flex items-stretch gap-5 max-w-3xl">
          {/* Vertical gold accent line */}
          <div
            key={`accent-${headingKey}`}
            style={{ background: "hsl(var(--gold))" }}
            className="w-[3px] rounded-full flex-shrink-0 hero-accent-line"
          />

          <div>
            <h1
              key={`title-${headingKey}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-white leading-[1.1] mb-5 hero-heading-slide whitespace-pre-line drop-shadow-lg"
            >
              {slide.heading}
            </h1>

            <p
              key={`desc-${headingKey}`}
              className="text-base md:text-lg text-white/75 font-light leading-relaxed max-w-xl mb-10 hero-sub-slide"
            >
              {slide.subheading}
            </p>

            <div
              key={`btn-${headingKey}`}
              className="hero-sub-slide"
              style={{ animationDelay: "0.18s" }}
            >
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl group"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right-side Vertical Dot Navigation ──────────────────────── */}
      <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3.5">
        {carouselData.map((s, i) => {
          const isActive = i === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}: ${s.navTitle}`}
              className="relative flex items-center justify-center group"
            >
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? "w-[3px] h-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.55)]"
                    : "w-[3px] h-3 bg-white/30 hover:bg-white/65 hover:h-5"
                }`}
              />
              {/* Tooltip , appears on hover */}
              <span className="absolute right-full mr-4 whitespace-nowrap text-xs font-medium text-white/85 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {s.navTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Scroll Cue ──────────────────────────────────────────────── */}
      <div className="absolute bottom-14 left-6 sm:left-10 md:left-16 lg:left-24 z-20 hero-bounce-down opacity-40">
        <ChevronDown className="w-4 h-4 text-white" />
      </div>

      {/* ── Bottom Info Row + Progress Bar ──────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 pb-3 pt-1.5">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-xs tracking-[0.2em] tabular-nums">
              {slide.slideNumber}
            </span>
            <span className="hidden md:block text-white/35 text-xs font-normal truncate max-w-[240px]">
              , {slide.navTitle}
            </span>
          </div>
          <span className="text-white/25 text-xs tracking-[0.2em] font-medium">
            EST. 1992
          </span>
        </div>
        {/* Gold progress line */}
        <div className="w-full h-[2px] bg-white/10">
          <div
            className="h-full origin-left"
            style={{
              width: `${progress}%`,
              background: "hsl(var(--gold))",
              transition: progress === 0 ? "none" : "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
