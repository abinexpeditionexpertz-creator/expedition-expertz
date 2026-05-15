import React from 'react';
import Link from 'next/link';

export default function PackagesHero() {
  return (
    <header className="hero-mesh pt-32 pb-20 px-gutter">
      <div className="max-w-container-max mx-auto text-center space-y-8">
        <h1 className="font-h1 text-h1 text-white max-w-3xl mx-auto">Discover Your Next Extraordinary Adventure</h1>
        <div className="max-w-2xl mx-auto glass-panel p-2 rounded-full flex items-center shadow-xl">
          <div className="pl-6 flex items-center gap-3 flex-grow">
            <span className="material-symbols-outlined text-primary/60">search</span>
            <input className="bg-transparent border-none focus:ring-0 w-full text-primary placeholder-primary/40 font-body-md" placeholder="Search by destination or activity..." type="text" />
          </div>
          <button className="primary-gradient text-white px-8 py-3 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity">Find Expedition</button>
        </div>
      </div>
    </header>
  );
}
