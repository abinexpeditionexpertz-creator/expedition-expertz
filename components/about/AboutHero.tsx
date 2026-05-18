import React from 'react';

export default function AboutHero() {
  return (
    <header className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      <img 
        alt="Majestic Mountain Range" 
        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[6000ms] ease-out" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL6bM5AL6NkTeNwErAsHM9W7qjfrs7lKkXoV4_o04mio0pidRHG05KtzZjoVXt3UA7Ctbirx45_GLPw7BkB8kxcy6m321bTL5WfslXNAok9777mWZCvPnXIMZTDD_wyFYjvYf01kCvPxvSi93xHpoLu-71bU0vcXO-74w9QucCy6MEJjmEtx7H7E5nXkCdnh8tztkUqkhMjIXxOWrpqCnOkKvyRA5r_EmwXZ1FXLbTmzhjBffSEORjVvS3VF11qU8ENjMOdMuIIdg" 
      />
      {/* Dark gradient scrim to guarantee flawless text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-surface-container-low" />
      
      <div className="relative z-10 text-center px-gutter space-y-4 max-w-4xl">
        <span className="inline-block bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 font-label-caps text-xs text-secondary tracking-[0.3em] uppercase">
          Who We Are
        </span>
        <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
          Beyond the Horizon
        </h1>
        <p className="font-body-lg text-white/95 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          We don&apos;t just plan trips; we craft the human stories of discovery, resilience, and awe-inspiring connection with our planet.
        </p>
      </div>
    </header>
  );
}
