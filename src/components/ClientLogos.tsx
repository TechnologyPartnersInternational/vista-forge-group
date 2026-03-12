import { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";

// Row 1 Imports
import gacLogo from "@/assets/ClientLogos/GAC-LOGO-3.png";
import image1 from "@/assets/ClientLogos/IMAGE-1.png";
import image10 from "@/assets/ClientLogos/IMAGE-10.png";
import image11 from "@/assets/ClientLogos/IMAGE-11.png";
import image2 from "@/assets/ClientLogos/IMAGE-2.png";
import image3 from "@/assets/ClientLogos/IMAGE-3.png";
import image4 from "@/assets/ClientLogos/IMAGE-4.png";
import image7 from "@/assets/ClientLogos/IMAGE-7.png";
import image8 from "@/assets/ClientLogos/IMAGE-8.png";
import image9 from "@/assets/ClientLogos/IMAGE-9.png";
import imageMain from "@/assets/ClientLogos/IMAGE.png";
import heir from "@/assets/ClientLogos/heir-holdings.jpg";
import anthan from "@/assets/ClientLogos/Antan.png";

// Row 2 Imports
import conex from "@/assets/ClientLogos/conex-1.jpg";
import energia from "@/assets/ClientLogos/energia.png";
import exonmobile from "@/assets/ClientLogos/exonmobile-logo - Copy.png";
import greenEnergy from "@/assets/ClientLogos/green-energy.png";
import nnpc from "@/assets/ClientLogos/nnpc-home-loggo.png";
import oriental from "@/assets/ClientLogos/oriental-energy.png";
import saipem from "@/assets/ClientLogos/saipem-logo.jpg";
import seepco from "@/assets/ClientLogos/seepco.png";
import seplat from "@/assets/ClientLogos/seplat.png";
import shell from "@/assets/ClientLogos/shell-logo.png";
import totalenergies from "@/assets/ClientLogos/totalenergies-logo-2.png";
import oando from "@/assets/ClientLogos/Oando-2-1024x346.webp";
import hyprep from "@/assets/ClientLogos/HYPREP.webp";
import yinka from "@/assets/ClientLogos/yinka-folawiyo.jpg"

const row1 = [
  gacLogo, image1, image10, image11, image2, image3, image4, image7, image8, image9, imageMain, anthan, heir
];

const row2 = [
  conex, energia, exonmobile, greenEnergy, nnpc, oriental, saipem, seepco, seplat, shell, totalenergies, oando, hyprep, yinka
];

const LogoCard = ({ src }: { src: string }) => (
  <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center mx-4 md:mx-6 group transition-all cursor-default">
    <img 
      src={src} 
      alt="Partner logo" 
      className="max-h-full max-w-full object-contain transition-all duration-300 transform group-hover:scale-110"
    />
  </div>
);

const ParallaxRow = ({ items, baseVelocity = 100 }: { items: string[]; baseVelocity: number }) => {
  const baseX = useMotionValue(0);

  // Duplicate items 4 times. 1 set = 25% of total width.
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const wrapOffset = -25; // 25% wrap point

  useAnimationFrame((t, delta) => {
    const moveBy = (baseVelocity * (delta / 1000)); // baseVelocity is % per second

    let currentX = baseX.get();
    currentX += moveBy;
    
    // Infinite loop wrap around
    if (baseVelocity < 0) {
      if (currentX <= wrapOffset) {
        currentX -= wrapOffset;
      }
    } else {
      if (currentX >= 0) {
        currentX += wrapOffset;
      }
    }
    
    baseX.set(currentX);
  });

  return (
    <div className="flex h-max w-max overflow-hidden">
      <motion.div className="flex w-max h-max will-change-transform" style={{ x: useTransform(baseX, v => `${v}%`) }}>
        {duplicatedItems.map((src, i) => (
          <LogoCard key={i} src={src} />
        ))}
      </motion.div>
    </div>
  );
};

const ClientLogos = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative z-0">
      <div className="container-narrow px-6 mb-12">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.3em] text-center mb-3">
          Trusted Partners
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Together with Industry Leaders</h2>
      </div>
      
      <div className="flex flex-col gap-6 md:gap-8 w-full">
        <ParallaxRow items={row1} baseVelocity={0.5} />
        <ParallaxRow items={row2} baseVelocity={-0.5} />
      </div>
    </section>
  );
};

export default ClientLogos;
