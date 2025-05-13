import { motion } from "framer-motion";
import { ShieldCheck, Waves, Eye } from "lucide-react";
import React from 'react';
import { SharkTracker } from "./SharkTracker";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Top Predator",
    text: "Sharks are apex predators, maintaining balance in the marine ecosystem.",
  },
  {
    icon: <Waves size={40} />,
    title: "Master of Movement",
    text: "Their streamlined bodies and powerful fins allow unmatched agility.",
  },
  {
    icon: <Eye size={40} />,
    title: "Sensory Power",
    text: "They detect electrical fields and vibrations with precision."
  },
];

export const SharkFeatureSection = () => {
  return (
    <section className=" text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Why Sharks Matter</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="text-blue-400 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.text}</p>
          </motion.div>
        ))}
      </div>



      <section className="w-screen">

<SharkTracker/>

      </section>
    </section>
  );
};
