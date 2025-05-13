import React from 'react';
import sharkData from '../helpers/sharkData.json';
import bigShark from "../../public/assets/sharkNotBackground/bigShark.png";
import bigBiteShark from "../../public/assets/sharkNotBackground/bigBiteShark.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { SharkGallery } from './SharkGallery';
import { SharkIntroVideo } from './SharkIntroVideo';
import { SharkFeatureSection } from './SharkFeatureSection';
import { SharkInfoLayout } from './SharkInfoLayout';
import movedShark from "../../public/assets/sharkVideos/movedShark.mov";
import sharkMoveLeft from "../../public/assets/singleFrameS/sharkMovLeft.gif";




export const Species = () => {
  const { scrollY } = useScroll();
  const vh = window.innerHeight;
  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile

  

  const yTextdemon = useTransform(scrollY, [1900, 2000, 2200], [0, 300, 600]);
  const opacitydemon = useTransform(scrollY, [500, 1000], [0, 1]);

  const opacityBigShark = useTransform(scrollY, [vh * 2.7,vh * 3.4,  vh * 3.8], [0, 0.6, 1]);
  const filter = useTransform(scrollY, [vh * 2.6, vh * 3.4, vh * 3.6], [
    "contrast(100%) brightness(8%) blur(100%)",
    "contrast(100%) brightness(20%) saturate(100%)",
    "contrast(100%) brightness(0%) saturate(10%)"
  ]);

  // const scaleBigBite = useTransform(scrollY, [3000, 4200, 5500], [0.4, 0.6, 2.2]);

  const scaleBigBite = useTransform(scrollY, [vh * 4.3, vh * 4.6, vh * 4.8, vh * 5], [0.1, 0.3, 0.6,2.2]);

  const opacityBigBite = useTransform(scrollY, [vh * 4.1, vh * 4.8, vh * 4.5], [0, 0.7, 1]);
  const yBigBite = useTransform(scrollY, [vh * 2.6, vh * 2.1], [400, 900]);

  const opacitySection = useTransform(
    scrollY,
    isMobile 
      ? [vh * 7.8, vh * 7.9, vh * 8]  // Smaller ranges for mobile
      : [vh * 4.8, vh * 5.2, vh * 5.4], // Default for desktop
    [1, 0.3, 0]
  );
  
  return (
    <>
      {/* Hero Section */}
      <section id="species" className="w-screen min-h-screen bg-black relative flex flex-col items-center p-6 ">
       
      <div className="relative w-full text-center py-20 overflow-hidden">
  {/* Moving Video Layer */}
  <motion.div
    className="absolute inset-0 z-10 w-full h-72"
    initial={{ x: 1100 }}
    whileInView={{ x: -1300 }}
    viewport={{ once: false }}
    transition={{ duration: 10, ease: "easeOut" }}
  >
     <img
      src={sharkMoveLeft}
      alt="Moving Shark GIF"
      className="w-full h-full object-contain"
    />
  </motion.div>

  {/* Letters with z-index stacking */}
  <div className="relative flex justify-center gap-2 bg-gradient-to-r from-gray-400 to-purple-slate bg-clip-text text-white text-8xl md:text-8xl font-extrabold tracking-widest">
    <span className="relative z-20">T</span> {/* Above video */}
    <span className="relative z-5">Y</span>  {/* Below video */}
    <span className="relative z-20">P</span> {/* Above video */}
    <span className="relative z-5">E</span>  {/* Below video */}
    <span className="relative z-20">S</span> {/* Above video */}
  </div>
</div>

        {/* Big Text with Z-Index per letter */}
      

        {/* <div className="bg-gradient-to-r text-8xl from-gray-400 to-purple-slate bg-clip-text text-transparent">
          <span className="z-40">T</span>
          <span className="z-40">Y</span>
          <span className="z-40">P</span>
          <span className="z-40">E</span>
          <span className="z-40">S</span>

          
          </div> */}















     
        {/* Background Image */}
        <motion.img
          src={bigShark}
          alt="Dynamic Shark"
          loading="lazy"
          className="w-full h-full absolute top-0 object-cover z-0"
          style={{ filter, opacity: opacityBigShark }}
        />

        {/* Species List and Demon Shark */}
        <div className="relative z-10 w-full flex flex-col md:flex-row px-6 gap-8 md:gap-0">
          {/* Species List */}
          <ul className="w-full md:w-1/2 space-y-12">
            {sharkData.map((shark, index) => (
              <li key={index} className="border-l-4 border-cyan-400 pl-6 py-4 bg-white/5 backdrop-blur-md rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  <img src={shark.image} alt={shark.name} className="w-48 h-32 object-cover rounded-md shadow-lg" />
                  <div>
                    <h4 className="text-2xl font-bold text-cyan-300">{shark.name}</h4>
                    <p className="text-white text-lg">{shark.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Demon Shark */}
          <motion.div
            style={{ y: yTextdemon, opacity: opacitydemon }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Big Bite Shark Section */}
      <motion.section
        style={{ opacity: opacitySection }}
        className="w-screen relative flex flex-col items-center overflow-hidden  via-slate-900 to-black"
      >
        {/* Bite Shark Image */}
        <motion.img
          src={bigBiteShark}
          alt="bite Shark"
          loading="lazy"
          className="absolute  md:bottom-[-40%]
          w-[90%] object-cover"
          style={{ scale: scaleBigBite, opacity: opacityBigBite, y: yBigBite }}
        />

        <div className="w-full h-full z-30 flex flex-col gap-20 items-center justify-center pt-20">
<SharkInfoLayout/>
        </div>
      </motion.section>

      {/* Placeholder Footer Section */}
    </>
  );
};
