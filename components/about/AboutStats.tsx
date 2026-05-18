import React from 'react';

const stats = [
  { value: '12k+', label: 'Happy Travelers', color: 'text-[#92b240]' },
  { value: '84', label: 'Untamed Destinations', color: 'text-[#33a4e3]' },
  { value: '500k+', label: 'Safety Hours', color: 'text-secondary' },
];

export default function AboutStats() {
  return (
    <section className="relative -mt-24 z-20 px-gutter">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-card-gap">
        {stats.map((s) => (
          <div 
            key={s.label} 
            className="glass-panel p-8 md:p-10 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
          >
            <span className={`font-h1 text-5xl md:text-6xl font-extrabold ${s.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
              {s.value}
            </span>
            <span className="font-label-caps text-xs tracking-widest text-primary font-bold uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
