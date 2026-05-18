import React from 'react';

const programs = [
  { 
    icon: 'travel_explore', 
    title: 'Academic & Curricular', 
    desc: 'Immersive curriculum-mapped journeys and academic travel built to expand student minds beyond textbooks.', 
    features: ['Educational tours & IVs', 'Outdoor Learning Experiences (OLE)', 'University & Institutional travel'] 
  },
  { 
    icon: 'groups', 
    title: 'Leadership & Outward Bound', 
    desc: 'Structured adventure programmes designed to challenge students, building resilience, confidence, and leadership.', 
    features: ['CAS (Creativity, Activity & Service)', 'School excursions', 'Youth Leadership camps'] 
  },
  { 
    icon: 'volunteer_activism', 
    title: 'Impact & Cultural Exchange', 
    desc: 'Empowering young leaders through environmental conservation, direct community volunteering, and deep cultural immersion.', 
    features: ['Volunteering activities', 'Marine conservation programs', 'Cultural immersion programs'] 
  },
];

export default function SchoolPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20 space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase">
            Specialized Programs
          </span>
          <h2 className="font-h2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Student &amp; Educational Programs
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our student programs are carefully structured to inspire <strong className="text-primary font-semibold">confidence, teamwork, leadership, environmental awareness,</strong> and <strong className="text-primary font-semibold">global exposure.</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {programs.map((p) => (
            <div key={p.title} className="glass-card p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group bg-white flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-on-secondary-fixed group-hover:scale-110 transition-transform shadow-sm">
                  <span className="material-symbols-outlined text-4xl">{p.icon}</span>
                </div>
                <h3 className="font-h3 text-xl font-bold text-primary mb-4">{p.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">{p.desc}</p>
              </div>
              <ul className="space-y-3 border-t border-outline-variant/30 pt-6 mt-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-medium text-primary text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5">check_circle</span>
                    <span>{f}</span>
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

