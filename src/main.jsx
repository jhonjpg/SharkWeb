import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)






// import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
// import sharkImage from "../assets/sharkshark.webm";
// import sharkwhite from "../assets/sharkwhite.png";
// import bigwhiteImages from '../pages/bigwhiteImages.json'; // Importamos el JSON
// import { InView } from "react-intersection-observer";


// // Cargamos las imágenes directamente desde el JSON
// const gifImages = bigwhiteImages.images;

// export default function WelcmByMe() {
//   const { scrollY } = useScroll();
//   const videoRef = useRef(null);

//   // Transformaciones
//   const sharkbgTransform = useTransform(scrollY, [0, 200], [0, -100]);
//   const scalesharkSecond = useTransform(scrollY, [0, 500, 1000], [0, 0.5, 3]);

//   const perspective = 500;

//   const filter = useTransform(
//     scrollY,
//     [0, 200, 400],
//     ["contrast(10%) brightness(10%)", "contrast(30%) brightness(30%) saturate(30%)", "contrast(100%) brightness(100%) saturate(10%)"]
//   );

  
  
//   const opacityShark = useTransform(scrollY, [0, 200, 250], [0, 0.5, 1]);
//   const scaleShark = useTransform(scrollY, [0, 200, 250, 600], [1,1.5, 1.7, 2.5]);


  
//   const scaleWhiteShark = useTransform(scrollY, [0, 200, 350], [0.7,0.8, 1.1]);
//   const blendMode = useTransform(scrollY, [0, 500], ["lighten", "hard-light"]);


//   const scaleText = useTransform(scrollY, [0, 600, 700], [1.3, 1.4, 1.5]);
//   const yTextH1 = useTransform(scrollY, [100, 400, 800], [300, 500, 1010]);




//   // Mapea el scroll a los 101 frames del tiburón
//   const gifIndex = useTransform(scrollY, [0, 700], [0, gifImages.length - 1]);
//   const [currentGif, setCurrentGif] = useState(gifImages[0]);

//   // Cambia la imagen del tiburón al hacer scroll
//   useMotionValueEvent(gifIndex, "change", (index) => {
//     const roundedIndex = Math.floor(index) % gifImages.length; // Loop infinito bien definido
//     setCurrentGif(gifImages[roundedIndex]);

//     console.log(currentGif)
//   });
  
  

//   return (
//     <>
//       <header id="welcome-ocean">
//         <motion.video
//           src={sharkbg}
//           autoPlay
//           loop
//           muted
//           id="oceanVideo"
//         />
// <div className="textDiv">
//             <motion.h1
//           style={{ y: yTextH1, scale:scaleText  }}
//                           >
//              GREAT  <span className="bigSpan">WHITE</span> 
//               </motion.h1>
//           </div>

// {/* <div className="sharkDiv">
//             <motion.img
//               style={{ x: xShark, scale:scaleWhiteShark , mixBlendMode: blendMode }}
//               src={sharkwhite}
//               alt="Shark"
//               className="whiteshark"
//               loading="lazy"
//             />
            
//           </div>
//          */}
//       </header>

//       <section className="gif-section hero-video">

        
// <motion.img
//           style={{ scale: scaleShark, opacity: opacityShark ,   filter: filter,      perspective: `${perspective}px`, // Agregamos la perspectiva aquí
//         }}
//   src={currentGif}
//   alt="Dynamic Shark"
//   className="shark"
//   loading="lazy"
// />
// </section>


// {/* <section className="seconds">
//         <div className="second">

//         <InView triggerOnce={true}>
//   {({ inView, ref}) => (
//     <div ref={ref} className={inView ? "divVideo" : " divVideoA"}>
//       <video autoPlay loop muted playsInline  className="sharkVideo">
//         <source src={sharkImage} type="video/mp4" />
//       </video>
//     </div>
//   )}
// </InView>
//         </div>
//       </section> */}

//       <section className="seconds">

//         <hr/>
//         <hr/>
//         <hr/>
//         <hr/>
//         <hr/>

//         <div className="card">

// <img  alt="" srcset="" />


// <motion.img
//           style={{ x: [300, 400] 
//         }}
//         src={sharkwhite}  alt="Dynamic Shark"
//   className="shark"
//   loading="lazy"
// />

//         </div>

//         <div className="second">

//         <InView triggerOnce={false}>
//   {({ inView, ref}) => (
//     <div ref={ref} className={inView ? "divVideoA" : "divVideo"}>
//       <video autoPlay loop muted playsInline  className="sharkVideo">
//         <source src={sharkImage} type="video/mp4" />
//       </video>
//     </div>
//   )}
// </InView>
//         </div>
//       </section>

//       {/* Sección donde cambia la imagen con el scroll */}
    
//     </>
//   );
// }

