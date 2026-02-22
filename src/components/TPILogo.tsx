import tpiLogo from "@/assets/tpi-logo.png";

interface TPILogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const TPILogo = ({ className = "h-10 w-auto", variant = "dark" }: TPILogoProps) => {
  return (
    <img
      src={tpiLogo}
      alt="TPI Group - Technology Partners International"
      className={`${className} ${variant === "light" ? "brightness-0 invert" : ""}`}
    />
  );
};

export default TPILogo;
