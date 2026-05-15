'use client';
import React from 'react';

const categories = ['All Stories', 'Adventure', 'Education', 'Culture', 'Nature'];

export default function JournalFilters() {
  return (
    <div className="sticky top-20 z-40 bg-surface/50 backdrop-blur-lg border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-gutter py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full border-2 font-label-caps text-label-caps transition-all ${
                i === 0
                  ? 'border-primary bg-primary text-white'
                  : 'border-outline text-on-surface-variant hover:border-secondary hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-2 border-transparent focus:border-tertiary-container rounded-full outline-none transition-all font-body-md"
            placeholder="Search journals..."
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
