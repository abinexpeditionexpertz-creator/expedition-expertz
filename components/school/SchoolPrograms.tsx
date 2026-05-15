import React from 'react';

const programs = [
  { icon: 'travel_explore', title: 'Educational Tours', desc: 'Immersive curriculum-mapped journeys to historical landmarks and biodiversity hotspots.', features: ['History & Heritage', 'Ecological Studies'] },
  { icon: 'groups', title: 'Leadership Labs', desc: 'Structured outdoor programmes that build teamwork, resilience, and decision-making skills.', features: ['Peer Leadership Modules', 'Global Citizen Cert'] },
  { icon: 'science', title: 'STEM Expeditions', desc: 'Field science experiences that bring classroom subjects to life in real-world environments.', features: ['Field Research Projects', 'Expert-led Workshops'] },
];

export default function SchoolPrograms() {
  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-h2 text-primary mb-4">Foundation of Discovery</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our programs are anchored in three core pedagogical pillars designed to bridge the gap between classroom theory and real-world application.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {programs.map((p) => (
            <div key={p.title} className="glass-card p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-on-secondary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{p.icon}</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-4">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{p.desc}</p>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-medium text-primary">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
