import { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";

// Row 1 Imports
import gacLogo from "@/assets/clientLogos/GAC-LOGO-3.png";
import image1 from "@/assets/clientLogos/IMAGE-1.png";
import image10 from "@/assets/clientLogos/IMAGE-10.png";
import image11 from "@/assets/clientLogos/IMAGE-11.png";
import image2 from "@/assets/clientLogos/IMAGE-2.png";
import image3 from "@/assets/clientLogos/IMAGE-3.png";
import image4 from "@/assets/clientLogos/IMAGE-4.png";
import image7 from "@/assets/clientLogos/IMAGE-7.png";
import image8 from "@/assets/clientLogos/IMAGE-8.png";
import image9 from "@/assets/clientLogos/IMAGE-9.png";
import imageMain from "@/assets/clientLogos/IMAGE.png";

// Row 2 Imports
import conex from "@/assets/clientLogos/conex-1.jpg";
import energia from "@/assets/clientLogos/energia.png";
import exonmobile from "@/assets/clientLogos/exonmobile-logo - Copy.png";
import greenEnergy from "@/assets/clientLogos/green-energy.png";
import nnpc from "@/assets/clientLogos/nnpc-home-loggo.png";
import oriental from "@/assets/clientLogos/oriental-energy.png";
import saipem from "@/assets/clientLogos/saipem-logo.jpg";
import seepco from "@/assets/clientLogos/seepco.png";
import seplat from "@/assets/clientLogos/seplat.png";
import shell from "@/assets/clientLogos/shell-logo.png";
import totalenergies from "@/assets/clientLogos/totalenergies-logo-2.png";

const row1 = [
  gacLogo, image1, image10, image11, image2, image3, image4, image7, image8, image9, imageMain
];

const row2 = [
  conex, energia, exonmobile, greenEnergy, nnpc, oriental, saipem, seepco, seplat, shell, totalenergies
];

const LogoCard = ({ src }: { src: string }) => (
  <div className=" w-18 h-18 md:w-24 md:h-24 flex items-center justify-center mx-3 lg:mx-4 group transition-colors cursor-default">
    <img 
      src={src} 
      alt="Partner logo" 
      className="h-full w-full object-cover transition-all duration-300 transform group-hover:scale-110"
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
    <section className="py-20 md:py-28 bg-mist overflow-hidden border-t border-border relative z-0">
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
