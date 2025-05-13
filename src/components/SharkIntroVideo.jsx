import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sharkVideo from "../../public/assets/sharkVideos/sharkKill.mov";
import React from "react";

export const SharkIntroVideo = () => {
  const sectionRef = useRef(null);

  // Scroll-related animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale from 1 to 0.6 as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Handle scroll to next section
  const handleDiveDeeper = () => {
    const nextSection = document.getElementById("species");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale }}
      className="relative h-screen w-full overflow-hidden origin-top"
    >
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-0"
        autoPlay
        muted
        loop
      >
        <source src={sharkVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-center px-6"
        >
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-md">
            Beneath the Surface
          </h1>
          <p className="text-xl mt-4 max-w-xl mx-auto text-gray-200">
            Discover the majestic predators that rule the ocean.
          </p>
          <button
            onClick={handleDiveDeeper}
            className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition"
          >
            Dive Deeper
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
