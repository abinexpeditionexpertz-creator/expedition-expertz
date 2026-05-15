import React from 'react';

export default function JournalHero() {
  return (
    <section className="relative h-[819px] w-full overflow-hidden flex items-end pb-section-padding">
      <img
        alt="Featured Expedition - Mountain lake at dawn"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsvNF6XJELPlN64KGPsHnwr_0DO-1J_GU5gNfkc5KUlQRjlOR0NuPDO1XQHMpLYLFFpVw3fOPK0JZJy2ToIYb9F5NyeBUaSmjTTR-AeW2yv0Pp3CFP-N5RowcXl9xUiNyoPKg2M-0EB2yMtUaM8cQifOp6X8ixoVnnEh4NZvebZGWeJzBxkKDCWnAwIWstk5bAopIynfzTv3Kz6psaj1bJb1ZBsfdniw-xW2_j63Hjm7tuGrgBu9KphadiHOWgvLyuOrMmdMKvDRc"
      />
      <div className="absolute inset-0 scrim-gradient" />
      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-caps text-label-caps mb-4 uppercase tracking-widest">
            Featured Story
          </span>
          <h1 className="font-h1 text-h1 text-white mb-6">Chasing the Aurora: A Nordic Winter Expedition</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8">
            Join photographer Elias Thorne on a 14-day journey through the Arctic Circle, capturing the dance of the Northern Lights above frozen fjords and ancient pine forests.
          </p>
          <a className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-h3 text-body-md hover:scale-105 transition-transform" href="#">
            Read the Journal
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
