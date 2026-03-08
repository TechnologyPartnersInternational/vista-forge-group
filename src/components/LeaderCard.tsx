import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

interface LeaderCardProps {
  member: TeamMember;
}

const LeaderCard = ({ member }: LeaderCardProps) => {
  return (
    <div className="group relative flex flex-col h-[400px] rounded-[1rem] overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-xl transition-shadow duration-500">
      {/* Image: expands on hover */}
      <div className="absolute top-0 left-0 w-full h-[220px] group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Spacer */}
      <div className="relative w-full h-[220px] shrink-0 z-0 pointer-events-none" />

      {/* Text content sits below normally, overlay on hover */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-6 pointer-events-none">
        <h3 className="text-lg font-bold text-foreground group-hover:text-white mb-1 transition-colors duration-500">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-primary group-hover:text-gold mb-3 transition-colors duration-500">
          {member.title}
        </p>
        <p className="text-xs text-muted-foreground group-hover:text-gray-200 leading-relaxed line-clamp-3 transition-colors duration-500">
          {member.bio}
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
