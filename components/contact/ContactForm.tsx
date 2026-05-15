'use client';
import React from 'react';

export default function ContactForm() {
  return (
    <div className="glass-panel p-10 rounded-xl shadow-lg border border-white/40">
      <h2 className="font-h2 text-h2 text-primary mb-8">Send a Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary/60 ml-2">Name</label>
            <input className="bg-surface/50 border-2 border-outline-variant/30 focus:border-tertiary-container focus:ring-0 rounded-lg p-4 font-body-md transition-all" placeholder="Your full name" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary/60 ml-2">Email</label>
            <input className="bg-surface/50 border-2 border-outline-variant/30 focus:border-tertiary-container focus:ring-0 rounded-lg p-4 font-body-md transition-all" placeholder="Email address" type="email" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-primary/60 ml-2">Trip Interest</label>
          <select className="bg-surface/50 border-2 border-outline-variant/30 focus:border-tertiary-container focus:ring-0 rounded-lg p-4 font-body-md transition-all appearance-none">
            <option>Select an Expedition</option>
            <option>Alpine Summit Trek</option>
            <option>Coastal Kayaking Adventure</option>
            <option>Tropical Rainforest Safari</option>
            <option>Arctic Aurora Expedition</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-primary/60 ml-2">Message</label>
          <textarea className="bg-surface/50 border-2 border-outline-variant/30 focus:border-tertiary-container focus:ring-0 rounded-lg p-4 font-body-md transition-all" placeholder="Tell us about your dream trip..." rows={4} />
        </div>
        <button className="w-full primary-gradient text-on-primary py-4 rounded-full font-h3 text-h3 shadow-lg hover:scale-[1.02] transition-transform duration-300" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}
