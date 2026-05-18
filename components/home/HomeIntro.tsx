import React from "react";

export default function HomeIntro() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-surface to-surface-container-lowest">
      {/* Background soft blur shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and main philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.25em] uppercase block">
              Welcome to Expedition Expertz
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight font-h2">
              Learn <span className="text-secondary">•</span> Explore <span className="text-secondary">•</span> Grow
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-primary-container rounded-full" />
            
            <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
              At Expedition Expertz, travel is not just about luxury, sightseeing, or ticking destinations off a list. We believe every journey has the power to transform lives, inspire minds, and create meaningful experiences.
            </p>
            
            <p className="text-base md:text-lg text-on-surface-variant/85 leading-relaxed">
              Founded with the vision of redefining modern travel, Expedition Expertz crafts journeys that help people learn through experiences, explore beyond boundaries, and grow through cultures, adventures, and human connections.
            </p>

            {/* Core Pillars Quick View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-2xl font-bold">menu_book</span>
                </div>
                <h4 className="font-h3 text-lg font-bold text-primary mb-2">Learn</h4>
                <p className="text-sm text-on-surface-variant">Through authentic real-world experiences and educational exposure.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl font-bold">explore</span>
                </div>
                <h4 className="font-h3 text-lg font-bold text-primary mb-2">Explore</h4>
                <p className="text-sm text-on-surface-variant">Beyond boundaries, discovering hidden paths and untouched landscapes.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tertiary-container/20 rounded-xl flex items-center justify-center text-on-tertiary-container mb-4">
                  <span className="material-symbols-outlined text-2xl font-bold">diversity_3</span>
                </div>
                <h4 className="font-h3 text-lg font-bold text-primary mb-2">Grow</h4>
                <p className="text-sm text-on-surface-variant">Through diverse cultures, testing adventures, and deep human bonds.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Tailored Outfit Metaphor visual card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-3xl blur-xl -z-10" />
            
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/50 shadow-2xl relative bg-white/75 space-y-6">
              <span className="material-symbols-outlined text-5xl text-secondary animate-pulse">
                architecture
              </span>
              
              <h3 className="font-h3 text-2xl font-bold text-primary leading-snug">
                Designed with Precision
              </h3>
              
              <p className="text-on-surface-variant leading-relaxed text-base">
                “From educational school expeditions and volunteering programs to luxury holidays, trekking adventures, and tailor-made explorations, every itinerary is carefully designed with precision — <strong className="text-primary font-semibold">just like a perfectly tailored outfit made to fit an individual.</strong>”
              </p>
              
              <div className="border-t border-outline-variant/30 pt-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    check_circle_outline
                  </span>
                  <span className="font-medium text-primary text-base">
                    No two travelers are the same
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    check_circle_outline
                  </span>
                  <span className="font-medium text-primary text-base">
                    No journey should ever feel ordinary
                  </span>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-[-30px] right-[-30px] w-[60px] h-[60px] bg-secondary rotate-45 transform origin-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
