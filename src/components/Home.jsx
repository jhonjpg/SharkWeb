import React, { useRef, useState } from "react";
import oceanBackgroundVideo from "../../public/assets/sharkVideos/ocean.mp4";
import sharkFrames from '../helpers/sharkSFrame.json'; // Importamos el JSON
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const Home = () => {

  const { scrollY } = useScroll();

  const gifImages = sharkFrames.images;



  // Text and h1
  const scaleH1 = useTransform(scrollY, [0, 200, 600], [1, 2, 2.4]);
  const yTextH1 = useTransform(scrollY, [0, 400, 800], [0, 900, 1300]);



// Text and description
  const scaleText = useTransform(scrollY, [0, 600, 700], [1, 1.5, 1.7]);
  const yDescription = useTransform(scrollY, [0, 400, 800], [0, 500, 700]);
  const opacityText = useTransform(scrollY, [0, 300, 800], [1, 0.1, 0]);





  // SharkFrames


  
  const opacitySharkFrames = useTransform(scrollY, [0, 200, 250], [0, 0.5, 1]);
  const scaleSharkFrames = useTransform(scrollY, [0, 200, 250, 600], [1,1.5, 1.7, 2.5]);


  const filter = useTransform(
    scrollY,
    [0, 200, 400],
    ["contrast(10%) brightness(10%)", "contrast(30%) brightness(30%) saturate(30%)", "contrast(100%) brightness(100%) saturate(10%)"]
  );


  const gifIndex = useTransform(scrollY, [0, 700], [0, gifImages.length - 1]);
  const [currentGif, setCurrentGif] = useState(gifImages[0]);

  // Cambia la imagen del tiburón al hacer scroll
  useMotionValueEvent(gifIndex, "change", (index) => {
    const roundedIndex = Math.floor(index) % gifImages.length; // Loop infinito bien definido
    setCurrentGif(gifImages[roundedIndex]);

    console.log(currentGif)
  });



  return (
    <>
      <section className="w-full h-screen  overflow-hidden relative flex  justify-start items-center  ">


        <motion.video
          src={oceanBackgroundVideo}
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover absolute   "
        />


        <header className=" md:flex md:w-2/4  relative left-10 flex flex-col gap-10 ">

          <motion.h1
            style={{ x: yTextH1, scale: scaleH1 }}
            className="text-6xl md:text-9xl text-white tracking-widest w-full"           >
            SHARKS
          </motion.h1>

          <motion.p
            style={{ y: yDescription, scale: scaleText, opacity: opacityText}}
            className="text-lg w-full md:text-2xl text-white md:w-3/5"           >
            Sharks are more than just feared creatures of the deep.  they are vital to the health of our oceans and some of the most fascinating animals on the planet. Dive in and explore the mystery, power, and beauty of these incredible beings.

          </motion.p>


          <motion.button
            style={{ y: yTextH1, scale: scaleText, opacity: opacityText }}
            className="w-9/10 text-2xl text-white md:w-1/4 ml-12 bg-blue-400  rounded-xl "           >
            Explore -
          </motion.button>





        </header>

{/* <aside className="w-1/3 relative  p-5 ">

<div className="  p-5 mb-10">
<motion.img
            style={{
              scale: [1,1], opacity: [1,1], // Agregamos la perspectiva aquí
            }}
            src={shark}
            alt="Dynamic Shark"
            className="shark"
            loading="lazy"
          />
          </div>

          
</aside> */}

        <div className="w-[-40%]">


          <motion.img
            style={{
              scale: scaleSharkFrames, opacity: opacitySharkFrames, filter: filter, // Agregamos la perspectiva aquí
            }}
            src={currentGif}
            alt="Dynamic Shark"
            className="relative top-40 right-40 scale-200 shark object-cover rounded-[80%]  object-right md:top-20 right-0 md:scale-150
            "
            loading="lazy"
          />
        </div>



      </section>
    </>
  );
};
