import React from "react";

const missionPoints = [
  "Promote experiential learning through travel",
  "Encourage responsible and sustainable tourism",
  "Connect people with cultures, communities, and nature",
  "Design personalized itineraries with care and precision",
  "Make impactful travel accessible to students and travelers alike"
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden relative">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Mission Box */}
          <div className="glass-card bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-secondary/20 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary-container/40 rounded-2xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl font-light">
                    my_location
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Our Purpose</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-primary font-h2 mt-0.5">
                    Our Mission
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-on-surface-variant font-medium leading-relaxed">
                To create meaningful, safe, and transformative travel experiences that inspire people to learn, explore, and grow beyond boundaries.
              </p>

              <div className="border-t border-outline-variant/30 pt-6">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-4">
                  We aim to:
                </span>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-on-surface-variant font-medium">
                      <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                        task_alt
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Box */}
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-white/10 hover:shadow-primary/20 transition-all duration-300">
            {/* Blurry background glow inside dark container */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl font-light">
                    visibility
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Future Outlook</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white font-h2 mt-0.5">
                    Our Vision
                  </h3>
                </div>
              </div>

              <div className="h-0.5 bg-white/10 my-6" />

              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                To become one of the most trusted experiential travel brands globally by redefining travel as a tool for education, self-discovery, cultural understanding, and positive impact.
              </p>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed pt-2">
                We envision a world where travel is not just a vacation — but a journey toward growth, awareness, and meaningful living.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
