import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-section-padding bg-gradient-to-r from-primary to-primary-container text-white text-center">
      <div className="max-w-container-max mx-auto px-gutter">
        <h2 className="font-h1 text-h1 mb-6">Ready to Write Your Chapter?</h2>
        <p className="font-body-lg text-body-lg mb-12 opacity-80 max-w-2xl mx-auto">Join us for the next great expedition. The world is waiting for your footprint.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/packages" className="bg-gradient-to-r from-[#92b240] to-[#33a4e3] px-10 py-4 rounded-full font-label-caps text-label-caps text-white shadow-xl hover:scale-105 transition-transform duration-200">
            Start Your Journey
          </Link>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-label-caps text-label-caps text-white hover:bg-white/20 transition-all">
            Download Journal
          </button>
        </div>
      </div>
    </section>
  );
}
