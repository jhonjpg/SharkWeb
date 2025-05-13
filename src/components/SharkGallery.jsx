import React from "react";
import shark1 from "../../public/assets/sharkPic/shark1.jpg";
import shark2 from "../../public/assets/sharkPic/shark2.jpg";
import shark3 from "../../public/assets/sharkPic/shark3.jpg";
import shark4 from "../../public/assets/sharkPic/shark4.jpg";
import shark5 from "../../public/assets/sharkPic/shark5.jpg";
import shark6 from "../../public/assets/sharkPic/shark6.jpg";
import shark7 from "../../public/assets/sharkPic/shark7.jpg";
import shark8 from "../../public/assets/sharkPic/shark8.jpg";
import shark9 from "../../public/assets/sharkPic/shark9.jpg";
import shark10 from "../../public/assets/sharkPic/shark10.jpg";
import shark11 from "../../public/assets/sharkPic/shark11.jpg";

const sharkImages = [
  shark1, shark2, shark3, shark4, shark5, shark6,
  shark7, shark8, shark9, shark10, shark11,
];

export const SharkGallery = () => {
  return (
    <section className="relative text-white py-16 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-black">
      <div className="absolute inset-0 opacity-20 bg-[url('/path-to-light-wave-overlay.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 gradient-text tracking-widest">
          Fierce & Majestic: A Shark Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sharkImages.map((img, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-[1.03] transition duration-500 ease-in-out"
            >
              <img
                src={img}
                alt={`Shark ${i + 1}`}
                className="w-full aspect-square object-cover group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
