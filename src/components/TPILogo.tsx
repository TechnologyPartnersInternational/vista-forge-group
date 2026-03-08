import logoImg from "@/assets/GeneralPictures/MainLogo.png";

interface TPILogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const TPILogo = ({ className = "h-12 w-auto", variant = "dark" }: TPILogoProps) => {
  return (
    <img
      src={logoImg}   
      alt="TPI Group - Technology Partners International"
      className={`${className} ${variant === "light" ? "brightness-0 invert" : ""}`}
    />
  );
};

export default TPILogo;
