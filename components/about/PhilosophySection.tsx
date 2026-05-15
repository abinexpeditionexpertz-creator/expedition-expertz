import React from 'react';

const phases = [
  { word: 'Learn', color: 'text-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD67aMp0EhvB7cM_TGDahOv_vU48NY29Q9RD5WahQY9ACoB9UqSQEWR_Q_exy70sY8--JvH_c0tsA2w_RTiyeSnpoq1FzbyfSLbQgnYUwJo0u26anhtivmXJK-Lhieg6CQk14_UP1yZrV3xraLg55aotxa17FCzHP5IQfE1RLYmQK5_Xr0ZJqqpGgcbb4ELi9EO7TUSjmcMWk0_ZI7tE_klokvp5tV4ButNIPKWqPnMOWfAjNSR3IeHDCL_2zo7LaRfhYBt9zK4JW8', alt: 'Briefing room', desc: 'Before the first step is taken, we immerse our travelers in the culture, ecology, and history of their destination. Knowledge is the foundation of respect.', reverse: false },
  { word: 'Explore', color: 'text-on-tertiary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcGYweqx4rqmIMqCmlOULAHdqtPyFN2bKF9jaZ5eWmOXrjl0NjeWlAEhNqui7mULY4CqsS8cDcU3IAhEYB5RBhytY6jBzW1rhSSZFMODzxojwdAgQgWLl4_MOX_VXqdZaQzo-KNLuYDMfbtUZryd5herPekfWrWdfDmon_Gau3wILQIGncSpxuWsmiPWpd8djzKpQwWgUJs25KXA0-5N6sS_Y6pxYe2RbXHGsaLzfO0XR7mO50wlgFBDgMv7Vl42UbYHqazFCs2Pk', alt: 'Forest explorer', desc: 'This is the core. We navigate the remote, the rugged, and the remarkable. Our expeditions are designed to challenge the body and expand the mind.', reverse: true },
  { word: 'Grow', color: 'text-primary-fixed', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQY1PNNsiElCo2W1txbsAPLoZaT6Pr2Xo1AGJ19Zj5EGfxfD8XOP4XGAOE_YpGA-PBqxKmDckjaKJDO5XM13kjQpFLxvtz256797HCccUrnv_bgRFHEL-9ljgfz6Pa5DLFyuYv3yGo23JSRNBAvxLsXTCntbUYBgjlb7aLcC7tpUEA3r2zYWEU7848Eyll8RVUvC4BRM6CpPxSRevghZWe3Qfymut0VCJMEVmccGK4PWsj3cjWY-6J321e1pAQpMHFPiVq3HxTBls', alt: 'Campfire stargazing', desc: 'Transformation is the result. You return from an expedition not just with memories, but with a new perspective on your place in the world.', reverse: false },
];

export default function PhilosophySection() {
  return (
    <section className="py-section-padding bg-primary text-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-h2 mb-4">Our Living Philosophy</h2>
          <p className="font-body-lg text-body-lg opacity-80 max-w-xl mx-auto">A continuous cycle of growth that defines every expedition we lead.</p>
        </div>
        <div className="relative space-y-32">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-secondary to-tertiary-fixed opacity-30" />
          {phases.map((p) => (
            <div key={p.word} className={`relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center`}>
              <div className={p.reverse ? 'order-2 md:order-1 relative' : 'md:text-right'}>
                {p.reverse ? (
                  <img className="rounded-xl shadow-2xl w-full h-64 object-cover" src={p.img} alt={p.alt} />
                ) : (
                  <>
                    <h3 className={`font-h1 text-h1 ${p.color} mb-4`}>{p.word}</h3>
                    <p className="font-body-lg text-body-lg text-on-primary-container">{p.desc}</p>
                  </>
                )}
              </div>
              <div className={p.reverse ? 'order-1 md:order-2' : 'relative'}>
                {p.reverse ? (
                  <>
                    <h3 className={`font-h1 text-h1 ${p.color} mb-4`}>{p.word}</h3>
                    <p className="font-body-lg text-body-lg text-on-primary-container">{p.desc}</p>
                  </>
                ) : (
                  <img className="rounded-xl shadow-2xl w-full h-64 object-cover" src={p.img} alt={p.alt} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
