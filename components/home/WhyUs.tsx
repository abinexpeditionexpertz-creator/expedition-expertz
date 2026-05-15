import React from 'react';

const pillars = [
  {
    icon: 'verified_user',
    bg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    title: 'Safety First',
    desc: 'Our guides are certified rescue professionals with decades of wilderness experience across five continents.',
  },
  {
    icon: 'eco',
    bg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    title: 'Sustainable Flow',
    desc: 'We operate with a negative carbon footprint, ensuring that the wild places we love remain pristine for future explorers.',
    offset: true,
  },
  {
    icon: 'auto_awesome',
    bg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
    title: 'Curation Peak',
    desc: 'Every detail, from the ergonomic gear provided to the local culinary stops, is selected for ultimate quality.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-surface-container-low py-section-padding">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-h2 text-h2 text-primary mb-4">The Expertz Philosophy</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We believe travel should be more than just movement; it should be an evolution of the self through rigorous standards and thoughtful design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {pillars.map((p) => (
            <div key={p.title} className={`glass-card p-10 rounded-xl shadow-lg hover:shadow-primary/10 transition-all duration-300 ${p.offset ? 'transform md:-translate-y-6' : ''}`}>
              <div className={`w-14 h-14 ${p.bg} rounded-lg flex items-center justify-center ${p.iconColor} mb-6`}>
                <span className="material-symbols-outlined text-3xl">{p.icon}</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-3">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
