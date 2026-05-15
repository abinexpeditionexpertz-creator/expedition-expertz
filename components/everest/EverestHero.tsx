import React from 'react';

export default function EverestHero() {
  return (
    <header className="relative h-[921px] w-full flex items-center justify-center overflow-hidden">
      <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRb4ssimVGZ3694cOHbYQd01_eAyoN2UDX2IviFCeCJz9kG52aQ0DFzoPsbEDjbgQGvvRSG5zxS5Jx2zoFQOEBrqyZsm7DGJrVEHkBJmK00DZtnRFrMv39DlKNE-D5rMRRW5m17WD9qAvXUJc5xja0mPPlQtIovZZRRgtMCydMklddYPMxCdyz0El2ss0WOCujhl6XZxTjL__1KpV0tgHHOG6wV0Bz79io0Lcc2RrbTh_ytsG9AAXQTTziAjfeDTCUUpmCv3ke13o" alt="Everest peak panorama" />
      <div className="absolute inset-0 bg-primary/20" />
      <div className="relative z-10 glass p-10 md:p-16 rounded-xl max-w-3xl mx-gutter text-center ambient-shadow">
        <span className="font-label-caps text-label-caps text-secondary-fixed-dim bg-primary/10 px-4 py-1 rounded-full inline-block mb-6 uppercase">Himalayan Expedition</span>
        <h1 className="font-h1 text-h1 text-primary mb-4">Everest Base Camp Trek</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { icon: 'schedule', value: '14 Days' },
            { icon: 'payments', value: '$3,250' },
            { icon: 'filter_hdr', value: '5,364m' },
          ].map((stat) => (
            <div key={stat.icon} className="flex flex-col items-center border-x border-outline-variant/30 px-8 first:border-l-0 last:border-r-0">
              <span className="material-symbols-outlined text-secondary text-3xl">{stat.icon}</span>
              <span className="font-h3 text-h3 text-primary">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px] mountain-divider" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,0V0Z" fill="currentColor" />
        </svg>
      </div>
    </header>
  );
}
