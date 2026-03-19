import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowCase() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const maskRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for different phases
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 1],
    [1, 1, 0, 0],
  );
  const maskOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 1],
    [0, 0, 1, 1],
  );
  const maskScale = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollProgress(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    // GSAP ScrollTrigger for more precise control
    const ctx = gsap.context(() => {
      // Phase 1: Video visible (scroll 0-60%)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "60% top",
        onEnter: () => console.log("Phase 1: Video showing"),
        onLeave: () => console.log("Phase 2: Transition starting"),
        onLeaveBack: () => console.log("Back to Phase 1"),
      });

      // Phase 2: Transition (scroll 60-80%)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "60% top",
        end: "80% top",
        onEnter: () => console.log("Phase 2: Video to mask transition"),
        onLeave: () => console.log("Phase 3: Mask showing"),
        onEnterBack: () => console.log("Back to transition"),
        toggleClass: { targets: maskRef.current, className: "mask-active" },
      });

      // Phase 3: Mask visible (scroll 80-100%)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "80% top",
        end: "100% top",
        onEnter: () => console.log("Phase 3: Mask showing"),
        onLeaveBack: () => console.log("Back to transition"),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Spacer for initial scroll */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl">Scroll down to see animation</h1>
      </div>

      {/* Main animation container */}
      <div ref={containerRef} className="relative h-[200vh] bg-black">
        {/* Sticky container for the animation */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Phase 1 & 2: Video element */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{ opacity: videoOpacity }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/public/videomavc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Phase 2 & 3: Mask SVG with video background */}
          <motion.div
            ref={maskRef}
            className="absolute inset-0 z-20"
            style={{
              opacity: maskOpacity,
              scale: maskScale,
            }}
          >
            {/* SVG Mask Definition */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <mask id="videoMask">
                  {/* Background rectangle (fully opaque = shows video) */}
                  <rect width="100%" height="100%" fill="white" />

                  {/* Your custom shape (black = cuts out) */}
                  {/* This example creates a star shape - replace with your SVG path */}
                  <path
                    d="M150,50 L180,120 L250,120 L190,170 L210,240 L150,200 L90,240 L110,170 L50,120 L120,120 Z"
                    fill="black"
                    transform="translate(0, 0) scale(1.5)"
                  />
                </mask>
              </defs>
            </svg>

            {/* Video masked by the SVG shape */}
            <div
              className="absolute inset-0"
              style={{
                mask: "url(#videoMask)",
                WebkitMask: "url(#videoMask)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/public/videomavc.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>

        {/* Scroll progress indicator */}
        <div className="fixed bottom-4 left-4 z-50 bg-black/50 text-white px-4 py-2 rounded-full">
          Scroll: {Math.round(scrollProgress * 100)}%
        </div>
      </div>

      {/* Spacer for bottom content */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl">Animation complete!</h1>
      </div>
    </div>
  );
}
