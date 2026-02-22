interface TPILogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const TPILogo = ({ className = "", variant = "dark" }: TPILogoProps) => {
  const primaryColor = variant === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))";
  const subtitleColor = variant === "dark" ? "hsl(var(--muted-foreground))" : "hsl(var(--silver))";

  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TPI Group logo"
    >
      {/* Icon mark - abstract hexagonal shape representing technology & integration */}
      <rect x="0" y="8" width="32" height="32" rx="4" fill={primaryColor} />
      <path
        d="M8 20H24M16 14V34"
        stroke={variant === "dark" ? "white" : "hsl(var(--primary))"} 
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="24" r="3" fill={variant === "dark" ? "white" : "hsl(var(--primary))"} opacity="0.4" />

      {/* TPI Group text */}
      <text x="40" y="28" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.5" fill={primaryColor}>
        TPI Group
      </text>

      {/* Subtitle */}
      <text x="40" y="40" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" fontSize="7" letterSpacing="2" fill={subtitleColor}>
        TECHNOLOGY PARTNERS INTERNATIONAL
      </text>
    </svg>
  );
};

export default TPILogo;
