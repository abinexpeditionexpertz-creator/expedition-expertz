import React from 'react';

export default function EverestBookingCard() {
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-28 space-y-8">
        <div className="glass p-8 rounded-2xl ambient-shadow">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Starting From</p>
              <h2 className="font-h1 text-h2 text-primary">$3,250<span className="text-body-md font-normal text-on-surface-variant">/person</span></h2>
            </div>
            <div className="bg-secondary/10 px-3 py-1 rounded text-secondary font-bold text-sm">-15% Early Bird</div>
          </div>
          <div className="space-y-4 mb-8">
            {[
              { label: 'Next Departure', value: 'Oct 12, 2024', color: 'text-primary' },
              { label: 'Difficulty', value: 'Challenging', color: 'text-tertiary-container' },
              { label: 'Group Size', value: '4-12 People', color: 'text-primary' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between p-3 bg-surface-container rounded-lg">
                <span className="text-on-surface-variant">{row.label}</span>
                <span className={`font-bold ${row.color}`}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <button className="w-full gradient-primary text-white font-h3 text-body-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
              <span className="material-symbols-outlined">chat_bubble</span>
              Book via WhatsApp
            </button>
            <button className="w-full border-2 border-primary text-primary font-h3 text-body-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined">mail</span>
              Enquire Now
            </button>
          </div>
          <p className="text-center text-label-caps text-on-surface-variant mt-6">Secure payment &amp; 24/7 support</p>
        </div>
        <div className="rounded-2xl overflow-hidden h-48 relative ambient-shadow">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcGErP-oniZ1iWgdGYjRSxL_oVn1nE7Ahfj79CUIP-eBJUOy1NgKWfgPaFQi9dY1qURg7pfUU12NjO4TkdVoXCkPYbAm9_sJNK2CeRsr_1VkS4P2RSzHGXVGebDm6BOflKWX91bgasyi6mgpW7qOLhwU7mLMAHaDir3aBYqOQPTnYWpFHLLz7hqBb5tyfYSn2bwSufaPBC6YmEL4Uq02j0wexWtEg1QaYLpsS3KGJyL5pOlU8q7tYzSxt-kQFsJ1brCoHMb7mPfMI" alt="Trekking route map" />
          <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
            <button className="bg-white/90 text-primary px-6 py-2 rounded-full font-label-caps text-label-caps flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">map</span>
              View Route Map
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
