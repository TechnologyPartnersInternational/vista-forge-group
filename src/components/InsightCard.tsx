import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/data/insights";

// Insight-type colour tokens
const TYPE_STYLES: Record<string, string> = {
  Article: "bg-blue-100 text-blue-700 group-hover:bg-blue-400/20 group-hover:text-blue-300",
  Issues:  "bg-amber-100 text-amber-700 group-hover:bg-amber-400/20 group-hover:text-amber-300",
  Story:   "bg-violet-100 text-violet-700 group-hover:bg-violet-400/20 group-hover:text-violet-300",
  News:    "bg-green-100 text-green-700 group-hover:bg-green-400/20 group-hover:text-green-300",
};

// Placeholder Unsplash images mapped by insight type
const TYPE_IMAGES: Record<string, string> = {
  Article: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  Issues:  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  Story:   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  News:    "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=800",
};

interface InsightCardProps {
  insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
  const image = TYPE_IMAGES[insight.type] ?? TYPE_IMAGES.Article;

  return (
    <Link
      to={`/insights/${insight.id}`}
      className="group relative flex flex-col h-full rounded-[1rem] overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image — fixed height, expands to fill card on hover */}
      <div className="absolute top-0 left-0 w-full h-[200px] group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden">
        <img
          src={image}
          alt={insight.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Spacer — reserves image height */}
      <div className="relative w-full h-[200px] shrink-0 z-0 pointer-events-none" />

      {/* Text content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-5 pt-4 pointer-events-none">
        {/* Type badge */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full transition-colors duration-500 ${TYPE_STYLES[insight.type]}`}
          >
            {insight.type}
          </span>
        </div>

        {/* Category */}
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary group-hover:text-gold mb-2 block transition-colors duration-500 truncate">
          {insight.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground group-hover:text-white leading-snug line-clamp-2 transition-colors duration-500 mb-1">
          {insight.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground group-hover:text-gray-200 leading-relaxed line-clamp-2 transition-colors duration-500 mb-3">
          {insight.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground/70 group-hover:text-white/50 transition-colors duration-500">
            {new Date(insight.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · {insight.readTime}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-white transition-colors duration-500">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;
