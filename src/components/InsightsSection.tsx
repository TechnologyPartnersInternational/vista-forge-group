import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";


const shippingImage =
  "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=1000";

const InsightsSection = () => {
  // Grab specific insights for the featured section
  const items = [
    insights.find(
      (i) => i.id === "supporting-offshore-infrastructure-replacement",
    ) || insights[0],
    insights.find(
      (i) => i.id === "enabling-responsible-seismic-exploration-oml-100",
    ) || insights[1],
    insights[2],
    insights.find((i) => i.id === "partnership-announcement-weel-sandvig") ||
      insights[3],
  ];

  return (
    <section className="bg-white">
      <div className="px-6 lg:px-12 section-padding">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 lg:mb-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Our experts are leading the way
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-foreground">Featured Insights</h2>
          </div>
          <Link
            to="/insights"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            View all insights <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-0">
          {/* LEFT COLUMN: 1 Large Article */}
          {items[0] && (
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans mb-4 block">
                  Article
                </span>
                <Link to={`/insights/${items[0].id}`} className="group block">
                  <h3 className="text-3xl lg:text-5xl font-semibold font-sans text-foreground leading-tight group-hover:text-primary transition-colors pr-8">
                    {items[0].title}
                  </h3>
                </Link>
              </div>
              <Link
                to={`/insights/${items[0].id}`}
                className="block w-full overflow-hidden rounded-[1rem] flex-1 min-h-[400px] lg:min-h-[600px] group"
              >
                <img
                  src={items[0].bannerImage}
                  alt={items[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            </div>
          )}

          {/* RIGHT COLUMN: Stack of 3 items */}
          <div className="flex flex-col gap-12">
            {/* Top Item (Item 2) */}
            {items[2] && (
              <div className="w-full">
                <Link
                  to={`/insights/${items[2].id}`}
                  className="block w-full aspect-[16/9] overflow-hidden rounded-[1rem] mb-6 group"
                >
                  <img
                    src={items[2].bannerImage}
                    alt={items[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans mb-3 block">
                  Article
                </span>
                <Link to={`/insights/${items[2].id}`} className="group block">
                  <h3 className="text-xl lg:text-2xl font-semibold font-sans text-foreground leading-snug group-hover:text-primary transition-colors">
                    {items[2].title}
                  </h3>
                </Link>
              </div>
            )}

            {/* Bottom Row inside Right Column (Items 3 & 4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {/* Bottom Left (Item 3) */}
              {items[1] && (
                <Link
                  to={`/insights/${items[1].id}`}
                  className="group relative flex flex-col h-full rounded-[1rem] overflow-hidden"
                >
                  {/* Dynamic Image Overlay */}
                  <div className="absolute top-0 left-0 w-full h-[200px] lg:h-[240px] group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden rounded-[1rem] group-hover:rounded-[1rem]">
                    <img
                      src={shippingImage}
                      alt={items[1].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Spacer for natural image height */}
                  <div className="relative w-full h-[200px] lg:h-[240px] shrink-0 z-0 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-end pointer-events-none p-6 pt-8">
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-gold uppercase tracking-widest font-sans mb-3 block transition-colors duration-500">
                      Issue
                    </span>
                    <h3 className="text-lg lg:text-xl font-semibold font-sans text-foreground group-hover:text-white leading-snug transition-colors duration-500 line-clamp-3">
                      {items[2].title}
                    </h3>
                  </div>
                </Link>
              )}

              {/* Bottom Right (Item 4) - Solid Background */}
              {items[3] && (
                <Link
                  to={`/insights/${items[3].id}`}
                  className="w-full aspect-[4/3] md:aspect-auto h-full rounded-[1rem] bg-[#A3A690] p-6 lg:p-8 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="text-xs font-semibold text-black/70 uppercase tracking-widest font-sans mb-4 block">
                    News
                  </span>
                  <h3 className="text-lg lg:text-xl font-semibold font-sans text-black leading-snug">
                    {items[3].title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
