import React from 'react';

export default function PackagesFilter() {
  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="sticky top-28 space-y-8">
        <div className="glass-panel p-6 rounded-xl border-outline-variant/20 shadow-sm">
          <h3 className="font-h3 text-[1.25rem] text-primary mb-6">Filter Results</h3>
          <div className="mb-8">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Categories</label>
            <div className="space-y-3">
              {['Holidays', 'School Programs', 'Custom Treks'].map((cat, i) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input {...(i === 1 ? { defaultChecked: true } : {})} className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary/20" type="checkbox" />
                  <span className={`text-body-md text-on-surface group-hover:text-primary ${i === 1 ? 'font-bold' : ''}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Duration</label>
            <select className="w-full bg-surface-container-low border-none rounded-lg text-body-md py-2 px-4 focus:ring-2 focus:ring-secondary/50">
              <option>Any Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>8-14 Days</option>
              <option>14+ Days</option>
            </select>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Price Range</label>
              <span className="text-secondary font-bold text-sm">$2,500+</span>
            </div>
            <input className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-secondary" type="range" />
          </div>
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Destination</label>
            <div className="flex flex-wrap gap-2">
              {['Nepal', 'Peru', 'Iceland', 'Tanzania'].map((dest, i) => (
                <button key={dest} className={`px-3 py-1 rounded-full text-sm font-label-caps ${i === 0 ? 'bg-secondary-container/50 text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'}`}>
                  {dest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
