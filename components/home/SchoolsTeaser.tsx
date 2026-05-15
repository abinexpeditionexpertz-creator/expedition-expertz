import React from 'react';

export default function SchoolsTeaser() {
  return (
    <section className="py-section-padding relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container rounded-full blur-3xl opacity-50" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9KSsH6t7QDmrxlR2_S31uCA3Z4QM59mHHR8WJXZeib2D2A_AvfkP2DKCTcMf42bsyc1V3ssNh0TkLYB-5ZA2ZEAnXQXxeMSWue4bmWbDGalsC2roRcjvjkNk-n8wbKfm93yC618Wt3J2u3MFsdxmrI-iHJAOh3f_JrjaFBN8L_0IedLcqc902JBE9McxrLJR6WPGvw-okG82iyavQEWQqYmSeGsvjoebB0sxKk19vgYHJeWqit9xs5c-lIni9Ofhn8NXHbSTAqMk"
              alt="Students on mountain ridge"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-xl z-20 max-w-[240px]">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[1.2rem]">school</span>
              </div>
              <p className="font-label-caps text-label-caps text-primary">Academic Credit</p>
            </div>
            <p className="text-sm text-on-surface-variant">Approved by over 50 leading international institutions.</p>
          </div>
        </div>
        <div>
          <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase tracking-widest block mb-2">Future Leaders</span>
          <h2 className="font-h2 text-h2 text-primary mb-6">Expeditions for Schools &amp; Youth</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            We transform standard field trips into life-changing leadership labs. Our student programs focus on resilience, teamwork, and environmental stewardship in the world's most extraordinary classrooms.
          </p>
          <ul className="space-y-4 mb-10">
            {['Custom Curriculum Integration', 'Peer-to-Peer Leadership Modules', 'Global Citizen Certification'].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-primary">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-h3 hover:bg-primary/90 transition-all shadow-lg">
            Request School Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}
