import React from 'react';

const stats = [
  { value: '12k+', label: 'Happy Travelers', color: 'text-secondary' },
  { value: '84', label: 'Untamed Destinations', color: 'text-on-tertiary-container' },
  { value: '500k+', label: 'Safety Hours', color: 'text-primary' },
];

export default function AboutStats() {
  return (
    <section className="relative -mt-16 z-20 px-gutter">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-card-gap">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface-container-lowest/70 backdrop-blur-md p-10 rounded-xl border border-white/40 shadow-xl flex flex-col items-center text-center">
            <span className={`font-h1 text-h1 ${s.color} mb-2`}>{s.value}</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
