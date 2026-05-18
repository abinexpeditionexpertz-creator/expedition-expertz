import React from 'react';

const phases = [
  { 
    word: 'Learn', 
    phase: 'Phase 01',
    color: 'text-secondary', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD67aMp0EhvB7cM_TGDahOv_vU48NY29Q9RD5WahQY9ACoB9UqSQEWR_Q_exy70sY8--JvH_c0tsA2w_RTiyeSnpoq1FzbyfSLbQgnYUwJo0u26anhtivmXJK-Lhieg6CQk14_UP1yZrV3xraLg55aotxa17FCzHP5IQfE1RLYmQK5_Xr0ZJqqpGgcbb4ELi9EO7TUSjmcMWk0_ZI7tE_klokvp5tV4ButNIPKWqPnMOWfAjNSR3IeHDCL_2zo7LaRfhYBt9zK4JW8', 
    alt: 'Briefing room', 
    desc: 'Before the first step is taken, we immerse our travelers in the culture, ecology, and history of their destination. Knowledge is the foundation of mutual respect and deep connections.', 
    reverse: false 
  },
  { 
    word: 'Explore', 
    phase: 'Phase 02',
    color: 'text-sky-400', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcGYweqx4rqmIMqCmlOULAHdqtPyFN2bKF9jaZ5eWmOXrjl0NjeWlAEhNqui7mULY4CqsS8cDcU3IAhEYB5RBhytY6jBzW1rhSSZFMODzxojwdAgQgWLl4_MOX_VXqdZaQzo-KNLuYDMfbtUZryd5herPekfWrWdfDmon_Gau3wILQIGncSpxuWsmiPWpd8djzKpQwWgUJs25KXA0-5N6sS_Y6pxYe2RbXHGsaLzfO0XR7mO50wlgFBDgMv7Vl42UbYHqazFCs2Pk', 
    alt: 'Forest explorer', 
    desc: 'This is the core. We navigate the remote, the rugged, and the remarkable. Our expeditions are designed to challenge the body, expand the mind, and inspire discovery.', 
    reverse: true 
  },
  { 
    word: 'Grow', 
    phase: 'Phase 03',
    color: 'text-[#92b240]', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQY1PNNsiElCo2W1txbsAPLoZaT6Pr2Xo1AGJ19Zj5EGfxfD8XOP4XGAOE_YpGA-PBqxKmDckjaKJDO5XM13kjQpFLxvtz256797HCccUrnv_bgRFHEL-9ljgfz6Pa5DLFyuYv3yGo23JSRNBAvxLsXTCntbUYBgjlb7aLcC7tpUEA3r2zYWEU7848Eyll8RVUvC4BRM6CpPxSRevghZWe3Qfymut0VCJMEVmccGK4PWsj3cjWY-6J321e1pAQpMHFPiVq3HxTBls', 
    alt: 'Campfire stargazing', 
    desc: 'Transformation is the lasting result. You return from an expedition not just with memories, but with a new perspective on your place in the world and a heart for conservation.', 
    reverse: false 
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-28 bg-[#001729] text-white overflow-hidden relative">
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="text-center mb-24">
          <span className="font-label-caps text-xs text-secondary tracking-[0.3em] bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            Our Path
          </span>
          <h2 className="font-h2 text-4xl md:text-5xl font-extrabold mt-4 mb-4">Our Living Philosophy</h2>
          <p className="font-body-lg text-white/70 max-w-xl mx-auto">A continuous cycle of growth that defines every expedition we lead.</p>
        </div>

        <div className="relative space-y-28 md:space-y-36">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-[90%] bg-gradient-to-b from-secondary via-sky-400 to-[#92b240] opacity-25 hidden md:block" />

          {phases.map((p) => (
            <div key={p.word} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              
              {/* Content Panel (Left/Right depending on reverse) */}
              <div className={`${p.reverse ? 'order-2 md:order-1' : 'md:text-right'}`}>
                {p.reverse ? (
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src={p.img} alt={p.alt} />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <span className="inline-block bg-white/10 border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-secondary uppercase">
                      {p.phase}
                    </span>
                    <h3 className={`font-h1 text-4xl md:text-5xl font-extrabold ${p.color}`}>{p.word}</h3>
                    <p className="font-body-md text-white/80 leading-relaxed max-w-lg md:ml-auto">{p.desc}</p>
                  </div>
                )}
              </div>

              {/* Image/Content Panel (Right/Left depending on reverse) */}
              <div className={`${p.reverse ? 'order-1 md:order-2' : ''}`}>
                {p.reverse ? (
                  <div className="space-y-4">
                    <span className="inline-block bg-white/10 border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-secondary uppercase">
                      {p.phase}
                    </span>
                    <h3 className={`font-h1 text-4xl md:text-5xl font-extrabold ${p.color}`}>{p.word}</h3>
                    <p className="font-body-md text-white/80 leading-relaxed max-w-lg">{p.desc}</p>
                  </div>
                ) : (
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src={p.img} alt={p.alt} />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
