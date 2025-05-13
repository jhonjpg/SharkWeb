import React from 'react';
import { motion } from 'framer-motion';
import darkShark from "../../public/assets/sharkPic/darkShark.png";
import { FishReplace } from './FishReplace';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' }
  })
};

export const About = () => {
  return (
    <section className="relative w-full  min-h-screen flex items-center justify-center px-4 py-2">
      <div className="absolute inset-0 bg-sky-800 z-0" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl bg-black  text-white text-center  backdrop-blur-md  p-8 rounded-2xl shadow-lg border border-white/20"
      >
        <motion.h2
          className="text-4xl   bg-black w-[70%] relative overflow-hidden md:text-8xl font-bold mb-6 flex justify-center items-center gap-2"
          variants={fadeInUp}
          custom={0.1}
        >
          <span className="z-40">AB</span> 
          <FishReplace />
          <span className="z-40">UT</span>

          <motion.div
            className="w-full bg-black absolute z-20 top-0"
            initial={{ opacity: 1, x: 710 }}
            whileInView={{ opacity: 1, x: -600 }}
            transition={{
              delay: 3,
              duration: 3,
              ease: 'easeInOut'
            }}
          >
            <img
              src={darkShark}
              alt="shark visual"
              className="w-full h-50 rotate-30 contrast-200 object-cover"
            />
          </motion.div>
        </motion.h2>

        <motion.p className="text-lg md:text-xl leading-relaxed mb-6" variants={fadeInUp} custom={0.2}>
          Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. They’ve existed for more than 400 million years—long before dinosaurs.
        </motion.p>

        <motion.p className="text-base md:text-lg mb-6 text-gray-200" variants={fadeInUp} custom={0.3}>
          Sharks play a critical role in the ocean's ecosystem as apex predators. They help maintain the balance of marine life by keeping populations of prey species healthy and in check. Their presence indicates a healthy, thriving ecosystem.
        </motion.p>

        <motion.ul
          className="text-left list-disc list-inside text-gray-300 text-base md:text-lg mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "There are over 500 species of sharks worldwide.",
            "The whale shark is the largest shark species and can grow over 40 feet long.",
            "Some sharks, like the great white, can detect a drop of blood from miles away.",
            "Sharks do not have bones—only cartilage.",
          ].map((fact, index) => (
            <motion.li key={index} variants={fadeInUp} custom={0.4 + index * 0.1}>
              {fact}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
  className="mt-8 flex justify-between gap-4 flex-wrap"
  variants={fadeInUp}
  custom={1.2}
>
  <div className="flex-1 min-w-[100px] max-w-[200px]">
    <img src="https://media.istockphoto.com/id/515829802/photo/great-white-shark-fings-and-teeth.jpg?b=1&s=612x612&w=0&k=20&c=9pjjHcNQ8cpf7u0m8oCsFLo5LbuVtPuUa8pp8hVZV0s=" alt="Shark 1" className="w-full h-auto rounded-lg shadow-lg" />
  </div>

  <div className="flex-1 min-w-[100px] max-w-[200px]">
    <img src="https://cdn.pixabay.com/photo/2022/06/06/12/16/shark-7245947_1280.jpg" alt="Shark 2" className="w-full h-auto rounded-lg shadow-lg" />
  </div>

  <div className="flex-1 min-w-[100px] max-w-[200px]">
    <img src="https://cdn.pixabay.com/photo/2019/03/29/13/27/depth-4089223_1280.jpg" alt="Shark 3" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
</motion.div>

      </motion.div>
    </section>
  );
};
