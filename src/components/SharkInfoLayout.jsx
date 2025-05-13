import React from "react";
import sharkImg1 from "../../public/assets/sharkPic/shark1.jpg";
import sharkImg2 from "../../public/assets/sharkPic/shark2.jpg";
import sharkImg3 from "../../public/assets/sharkPic/shark3.jpg";

export const SharkInfoLayout = () => {
  return (
    <section className="w-full min-h-screen text-white py-20 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl h-auto flex flex-col md:flex-row gap-12">

        {/* Left Column: One Main Section (Anatomy) */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="w-full space-y-10">
            {/* Anatomy Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <aside className="w-40 md:w-1/3">
                <img
                  src={sharkImg1}
                  alt="Shark anatomy"
                  className="rounded-2xl shadow-lg border-2 border-cyan-500 w-full"
                />
              </aside>
              <article className="md:w-2/3 bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md shadow-xl">
                <h2 className="text-3xl font-bold text-cyan-300 mb-4">🦈 Shark Anatomy</h2>
                <p className="text-cyan-100 mb-3 leading-relaxed">
                  Sharks are built for efficiency. Their skeletons are made of <strong>cartilage</strong>, making them lighter and more agile underwater.
                </p>
                <p className="text-cyan-100 mb-3 leading-relaxed">
                  With <strong>multiple rows of regenerative teeth</strong> and skin covered in dermal denticles, they're built for speed and attack.
                </p>
                <p className="text-cyan-100 leading-relaxed">
                  Their <strong>electrosensory system</strong> lets them detect prey with astonishing accuracy.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Right Column: Two Stacked Sections (Migration & Conservation) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-10">
          
          {/* Migration Section */}
          <div className="flex flex-col  md:flex-row md:items-center gap-6">
            <aside className="w-40 md:w-1/3">
              <img
                src={sharkImg2}
                alt="Shark migration"
                className="rounded-2xl shadow-lg border-2 border-cyan-500 w-full"
              />
            </aside>
            <article className="md:w-2/3 bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md shadow-xl">
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">🌍 Shark Migration</h2>
              <p className="text-cyan-100 mb-3 leading-relaxed">
                Great whites and other species migrate thousands of miles for food and breeding.
              </p>
              <p className="text-cyan-100 mb-3 leading-relaxed">
                Tracking technologies reveal how sharks use specific oceanic highways.
              </p>
              <p className="text-cyan-100 leading-relaxed">
                Environmental cues like water temp and prey movement guide their routes.
              </p>
            </article>
          </div>

          {/* Conservation Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <aside className="w-40 md:w-1/3">
              <img
                src={sharkImg3}
                alt="Shark conservation"
                className="rounded-2xl shadow-lg border-2 border-cyan-500 w-full"
              />
            </aside>
            <article className="md:w-2/3 bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md shadow-xl">
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">🌱 Shark Conservation</h2>
              <p className="text-cyan-100 mb-3 leading-relaxed">
                Millions of sharks die each year due to overfishing and finning practices.
              </p>
              <p className="text-cyan-100 mb-3 leading-relaxed">
                Conservation zones and eco-tourism are helping raise awareness and support.
              </p>
              <p className="text-cyan-100 leading-relaxed">
                Sharks play a vital role in keeping marine ecosystems healthy and balanced.
              </p>
            </article>
          </div>

        </div>

      </div>
    </section>
  );
};
