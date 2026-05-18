import React from "react";

const impacts = [
  {
    icon: "psychology",
    title: "Inspire Youth Leadership",
    desc: "We equip young travelers with confidence, teamwork skills, problem-solving abilities, and real-world leadership experience.",
  },
  {
    icon: "language",
    title: "Cultural Understanding",
    desc: "We foster deep respect and meaningful connection across borders, bridging communication through immersive experiences.",
  },
  {
    icon: "eco",
    title: "Environmental Responsibility",
    desc: "We practice waste reduction and carbon-neutral travel, educating participants on wildlife and marine ecosystem preservation.",
  },
  {
    icon: "local_activity",
    title: "Support Local Economies",
    desc: "We prioritize local guides, artisans, and green-certified homestays, ensuring tourism revenue remains in local pockets.",
  }
];

const beliefs = [
  "Travel should inspire personal growth",
  "Authentic experiences matter more than commercial luxury",
  "The greatest learning exists far beyond classroom walls",
  "Managed outdoor adventures build true lifelong confidence",
  "Nature deserves our deepest respect and stewardship",
  "Every journey should have a distinct, lasting purpose"
];

export default function HomeImpact() {
  return (
    <section className="py-24 bg-gradient-to-b from-surface-container-lowest to-surface overflow-hidden relative">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#92b240]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#33a4e3]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Our Impact on Society */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase block">
                Social Responsibility
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary font-h2 leading-tight">
                Our Impact on Society
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Travel has the power to shape responsible global citizens. Through our curated expeditions, we encourage travelers to make a positive difference in the world.
              </p>
            </div>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {impacts.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-h3 text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Travel With Us & Core beliefs */}
          <div className="lg:col-span-6">
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
              {/* Soft background glow */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#92b240]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#33a4e3]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] block">
                    Our Philosophy
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-h2 text-white">
                    Why Travel With Expedition Expertz?
                  </h3>
                </div>

                {/* Belief list */}
                <div className="space-y-4">
                  {beliefs.map((belief, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">
                          done_all
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-white/90 font-medium">
                        {belief}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Signature Statement Callout */}
                <div className="border-t border-white/10 pt-8 mt-6">
                  <blockquote className="space-y-3">
                    <p className="text-lg md:text-xl font-semibold italic text-white/95 leading-relaxed">
                      “With Expedition Expertz, you don’t just visit places. <span className="text-gradient-primary">You experience them.</span>”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
