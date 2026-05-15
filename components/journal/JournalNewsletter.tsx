'use client';
import React from 'react';

export default function JournalNewsletter() {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="glass-card p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12 border-none shadow-2xl shadow-primary/10">
          <div className="md:w-1/2">
            <h2 className="font-h2 text-h2 text-primary mb-4">Never Miss an Expedition</h2>
            <p className="font-body-lg text-on-surface-variant">Sign up for our monthly journal highlights, exclusive early booking access, and expert travel tips delivered to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 px-6 py-4 rounded-full border-2 border-outline-variant/30 focus:border-secondary outline-none transition-all" placeholder="Enter your email" type="email" />
              <button className="btn-primary-gradient px-8 py-4 rounded-full text-white font-label-caps text-label-caps shadow-lg shadow-secondary/20" type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
