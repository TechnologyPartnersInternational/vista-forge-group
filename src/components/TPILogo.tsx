// Replaced broken import with dummy image
const tpiLogo = "https://placehold.co/400x100/1e3a8a/ffffff?text=TPI+Logo";;

interface TPILogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const TPILogo = ({ className = "h-12 w-auto", variant = "dark" }: TPILogoProps) => {
  return (
    <img
      src={tpiLogo}
      alt="TPI Group - Technology Partners International"
      className={`${className} ${variant === "light" ? "brightness-0 invert" : ""}`}
    />
  );
};

export default TPILogo;
