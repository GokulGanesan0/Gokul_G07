"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Faster fade out for Section 1 so it doesn't overlap
  const opacity1 = useTransform(progress, [0, 0.05, 0.1], [1, 1, 0]);
  const scale1 = useTransform(progress, [0, 0.1], [1, 1.2]);

  // Section 2 starts after Section 1 is completely gone
  const opacity2 = useTransform(progress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const x2 = useTransform(progress, [0.15, 0.45], [-200, 200]);

  // Section 3 starts after Section 2 is gone
  const opacity3 = useTransform(progress, [0.5, 0.55, 0.85, 0.95], [0, 1, 1, 0]); 
  const y3 = useTransform(progress, [0.5, 0.95], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-12 overflow-hidden mix-blend-difference">
      
      {/* SECTION 1: MONOLITHIC CENTER */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">PORTFOLIO.26</p>
        <h1 className="font-oswald text-6xl md:text-[10rem] lg:text-[14rem] leading-[0.8] tracking-tighter text-white uppercase m-0 p-0">
          Gokul<br/>Ganesan
        </h1>
        <div className="mt-8 flex gap-8 font-mono text-xs tracking-widest uppercase text-zinc-400">
          <p>IT INFRASTRUCTURE</p>
          <p>DEVOPS</p>
        </div>
      </motion.div>

      {/* SECTION 2: SLIDING EDITORIAL LEFT */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-y-0 left-0 flex flex-col items-start justify-center pl-8 md:pl-[10%] max-w-[90vw]"
      >
        <h2 className="font-oswald text-5xl md:text-[8rem] leading-[0.85] tracking-tighter text-white uppercase mix-blend-difference">
          IT<br/>
          <span className="text-zinc-600">SUPPORT</span>
        </h2>
        <div className="w-16 h-1 bg-white mt-8 mb-6"></div>
        <p className="font-mono text-sm tracking-widest uppercase text-zinc-400 max-w-sm">
          INCIDENT MANAGEMENT <br/> && AUTOMATION
        </p>
      </motion.div>

      {/* SECTION 3: VERTICAL RISING RIGHT */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col items-end justify-center pr-8 md:pr-[10%] text-right"
      >
        <h2 className="font-oswald text-4xl md:text-[7rem] leading-[0.85] tracking-tighter text-white uppercase mix-blend-difference text-right">
          CORE INFRA<br/>
          &times; CLOUD
        </h2>
        <div className="w-full flex justify-end mt-8">
          <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 max-w-sm border border-zinc-800 p-4 inline-block">
            AZURE / GOOGLE IT SUPPORT
          </p>
        </div>
      </motion.div>

    </div>
  );
}
