import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-24 bg-[#001729] text-white text-center relative overflow-hidden">
      {/* Soft ambient background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10 space-y-6">
        <span className="font-label-caps text-xs text-secondary tracking-[0.3em] uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          Begin Today
        </span>
        <h2 className="font-h1 text-4xl md:text-5xl font-extrabold mt-4">
          Ready to Write Your Chapter?
        </h2>
        <p className="font-body-md text-white/70 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          Join us for the next great expedition. The world is waiting for your footprint, your story, and your presence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/packages" 
            className="bg-gradient-to-r from-[#92b240] to-[#33a4e3] px-10 py-4.5 rounded-full font-h3 text-sm tracking-wider text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">explore</span>
            Start Your Journey
          </Link>
          <button 
            className="bg-white/5 backdrop-blur-md border border-white/15 px-10 py-4.5 rounded-full font-h3 text-sm tracking-wider text-white hover:bg-white/15 shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Download Expedition Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
