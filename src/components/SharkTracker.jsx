


import React from "react";
import { FaMars, FaVenus, FaFish } from "react-icons/fa";

const mockSharks = [
  {
    id: 1,
    name: "Scarlett",
    species: "Great White Shark",
    tagDate: "2023-06-10",
    gender: "F",
  },
  {
    id: 2,
    name: "Titan",
    species: "Tiger Shark",
    tagDate: "2022-12-15",
    gender: "M",
  },
  {
    id: 3,
    name: "Luna",
    species: "Bull Shark",
    tagDate: "2023-01-22",
    gender: "F",
  },
  {
    id: 4,
    name: "Zeus",
    species: "Mako Shark",
    tagDate: "2024-02-01",
    gender: "M",
  },
  {
    id: 5,
    name: "Echo",
    species: "Hammerhead",
    tagDate: "2024-03-14",
    gender: "F",
  },
  {
    id: 6,
    name: "Rex",
    species: "Blue Shark",
    tagDate: "2023-09-20",
    gender: "M",
  },
];

export const SharkTracker = () => {
  return (
    <section className="min-h-screen w-full py-16 px-6 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide">
          🌊 Live Shark Tracker
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSharks.map((shark) => (
            <div
              key={shark.id}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl backdrop-blur-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-300">{shark.name}</h3>

              <p className="mb-2 flex items-center gap-2">
                <FaFish className="text-cyan-400" />
                <span className="bg-cyan-700 px-2 py-1 rounded-full text-sm">
                  {shark.species}
                </span>
              </p>

              <p className="mb-2">
                <strong>Tag Date:</strong>{" "}
                {new Date(shark.tagDate).toLocaleDateString()}
              </p>

              <p className="flex items-center gap-2">
                <strong>Gender:</strong>{" "}
                {shark.gender === "M" ? (
                  <>
                    <FaMars className="text-blue-400" /> Male
                  </>
                ) : (
                  <>
                    <FaVenus className="text-pink-400" /> Female
                  </>
                )}
              </p>

              <a
                href="#"
                className="mt-4 inline-block text-cyan-400 underline hover:text-cyan-200 transition-colors"
              >
                🌐 View Full Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

