import React from 'react'
import { motion } from 'framer-motion';
import demonLight from "../../public/assets/sharkPic/demonLight.png";

export const FishReplace = () => {
  return (
<motion.span
  className="inline-block z-10 w-12 h-12 md:w-24 md:h-24 relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {/* Imagen: se desvanece después de 3s */}
  <motion.img
    src={demonLight}
    alt="shark icon"
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ opacity: 1 }}
    whileInView={{ opacity: 0 }}
    transition={{ delay: 4, duration: 0.6 }}
  />

  {/* Letra O: aparece después de 3s */}
  <motion.span
    className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-4xl md:text-8xl font-bold"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 4, duration: 0.6 }}
  >
    O
  </motion.span>
</motion.span>

  )
}
