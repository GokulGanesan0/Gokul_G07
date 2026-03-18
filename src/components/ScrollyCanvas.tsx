"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 192;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set up scroll tracking on this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0 -> 1 progress to 0 -> 88 (since array is 0-indexed for 89 frames)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `./sequence/frame_${paddedIndex}_delay-0.041s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          // All images loaded
          setImages(loadedImages);
          setIsLoaded(true);
          // Draw the first frame immediately
          drawFrame(loadedImages[0]);
        }
      };
      // In case of error (e.g. missing frame), we should still increment
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      }
      loadedImages.push(img);
    }
    
    // Resize handler to redraw when window size changes
    const handleResize = () => {
      if (images.length > 0) {
        drawFrame(images[Math.round(frameIndex.get())]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Draw the current frame whenever the scroll-linked frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0) {
      drawFrame(images[Math.round(latest)]);
    }
  });

  const drawFrame = (img: HTMLImageElement | undefined) => {
    if (!img || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas internal dimensions to match display size exactly for sharp rendering
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0a0a]">
      {/* Sticky container tracking the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Loading state indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 text-white font-mono text-sm tracking-widest uppercase gap-4">
            <div className="w-8 h-8 rounded-full border-t-2 border-white animate-spin"></div>
            Loading Animation Sequence...
          </div>
        )}
        
        {/* Canvas renderer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Text Overlay passing the framer motion scroll progress */}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
