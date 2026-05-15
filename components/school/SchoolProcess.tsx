import React from 'react';

const steps = [
  { num: '01', title: 'Consultation', desc: 'We align our itinerary with your school\'s curriculum goals.' },
  { num: '02', title: 'Customization', desc: 'Choose from various accommodation and experiential levels.' },
  { num: '03', title: 'Onboarding', desc: 'Parent briefings, health checks, and essential gear prep.' },
  { num: '04', title: 'The Launch', desc: 'Students embark on their journey with expert guides.' },
];

export default function SchoolProcess() {
  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-h2 text-primary mb-4">Journey of a Thousand Miles...</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Starts with a simple four-step process for schools.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 z-0" />
          {steps.map((s) => (
            <div key={s.num} className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 border-4 border-secondary-fixed">
                <span className="text-2xl font-bold text-primary">{s.num}</span>
              </div>
              <h4 className="font-h3 text-h3 text-primary mb-2 text-xl">{s.title}</h4>
              <p className="font-body-md text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
