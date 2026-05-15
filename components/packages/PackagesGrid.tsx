'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';
import Link from 'next/link';
import packagesData, { Package } from '@/data/packages';

// ─── Shared Filter State (via Context) ─────────────────────────────────────
type FilterState = {
  search: string;
  setSearch: (v: string) => void;
  categories: string[];
  toggleCategory: (v: string) => void;
  duration: string;
  setDuration: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  filtered: Package[];
};

const FilterCtx = createContext<FilterState | null>(null);
export const usePackageFilters = () => {
  const ctx = useContext(FilterCtx);
  if (!ctx) throw new Error('usePackageFilters must be used inside PackagesProvider');
  return ctx;
};

export function PackagesProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [duration, setDuration] = useState('Any Duration');
  const [sort, setSort] = useState('Most Popular');
  const [maxPrice, setMaxPrice] = useState(10000);

  const toggleCategory = (cat: string) =>
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const filtered = useMemo(() => {
    let list = [...packagesData];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q)
      );
    }

    // Category
    if (categories.length > 0) {
      list = list.filter((p) => categories.includes(p.category));
    }

    // Duration
    if (duration !== 'Any Duration') {
      list = list.filter((p) => {
        if (duration === '1-3 Days') return p.daysNum <= 3;
        if (duration === '4-7 Days') return p.daysNum >= 4 && p.daysNum <= 7;
        if (duration === '8-14 Days') return p.daysNum >= 8 && p.daysNum <= 14;
        if (duration === '14+ Days') return p.daysNum > 14;
        return true;
      });
    }

    // Price
    list = list.filter((p) => p.priceNum <= maxPrice);

    // Sort
    if (sort === 'Price: Low to High') list.sort((a, b) => a.priceNum - b.priceNum);
    else if (sort === 'Price: High to Low') list.sort((a, b) => b.priceNum - a.priceNum);
    else if (sort === 'Duration: Longest') list.sort((a, b) => b.daysNum - a.daysNum);
    else list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

    return list;
  }, [search, categories, duration, sort, maxPrice]);

  return (
    <FilterCtx.Provider
      value={{ search, setSearch, categories, toggleCategory, duration, setDuration, sort, setSort, maxPrice, setMaxPrice, filtered }}
    >
      {children}
    </FilterCtx.Provider>
  );
}

// ─── Filter Sidebar ─────────────────────────────────────────────────────────
export function PackagesFilter() {
  const { categories, toggleCategory, duration, setDuration, maxPrice, setMaxPrice } = usePackageFilters();
  const ALL_CATS = ['Holidays', 'School Programs', 'Custom Treks'];
  const destinations = ['Nepal', 'Peru', 'Iceland', 'Tanzania', 'Chile'];

  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="sticky top-28 space-y-8">
        <div className="glass-panel p-6 rounded-xl shadow-sm">
          <h3 className="font-h3 text-[1.25rem] text-primary mb-6">Filter Results</h3>

          {/* Categories */}
          <div className="mb-8">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Categories</label>
            <div className="space-y-3">
              {ALL_CATS.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={categories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary/20 cursor-pointer"
                  />
                  <span className={`text-body-md group-hover:text-primary transition-colors ${categories.includes(cat) ? 'font-bold text-primary' : 'text-on-surface'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="mb-8">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-lg text-body-md py-2 px-4 focus:ring-2 focus:ring-secondary/50 cursor-pointer"
            >
              <option>Any Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>8-14 Days</option>
              <option>14+ Days</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Max Price</label>
              <span className="text-secondary font-bold text-sm">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={10000}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs text-on-surface-variant mt-1">
              <span>$1,000</span><span>$10,000</span>
            </div>
          </div>

          {/* Destinations (visual tags only) */}
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-4">Popular Destinations</label>
            <div className="flex flex-wrap gap-2">
              {destinations.map((dest) => (
                <span key={dest} className="px-3 py-1 rounded-full text-sm font-label-caps bg-surface-container-high text-on-surface-variant">
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Reset */}
          {(categories.length > 0 || duration !== 'Any Duration' || maxPrice < 10000) && (
            <button
              onClick={() => { setDuration('Any Duration'); setMaxPrice(10000); ALL_CATS.forEach((c) => { if (categories.includes(c)) toggleCategory(c); }); }}
              className="mt-6 w-full text-center text-sm text-secondary hover:underline font-label-caps"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

// ─── Packages Grid ────────────────────────────────────────────────────────────
export default function PackagesGrid() {
  const { search, setSearch, sort, setSort, filtered } = usePackageFilters();

  return (
    <section className="flex-grow">
      {/* Search + Sort bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
        <div className="relative w-full sm:w-80">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by name, location..."
            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-full outline-none transition-all font-body-md"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <p className="text-on-surface-variant font-body-md text-sm">
            <span className="font-bold text-primary">{filtered.length}</span> results
          </p>
          <span className="text-outline/40 mx-1">|</span>
          <span className="text-sm font-label-caps text-on-surface-variant">Sort:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent border-none text-primary font-bold text-sm focus:ring-0 cursor-pointer"
          >
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Duration: Longest</option>
          </select>
        </div>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24">
          <span className="material-symbols-outlined text-6xl text-outline mb-4 block">search_off</span>
          <h3 className="font-h3 text-h3 text-primary mb-2">No Expeditions Found</h3>
          <p className="text-on-surface-variant">Try adjusting your filters or search term.</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-card-gap">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={pkg.img}
                alt={pkg.title}
              />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-[10px] font-label-caps px-3 py-1 rounded-full">
                {pkg.badge}
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-primary font-bold px-3 py-1 rounded-lg shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary scale-75">star</span>
                {pkg.rating}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-h3 text-[1.15rem] text-primary group-hover:text-secondary transition-colors">
                  {pkg.title}
                </h3>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-xs text-on-surface-variant font-label-caps">From</p>
                  <p className="text-lg font-bold text-primary">{pkg.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined scale-75">schedule</span>
                  {pkg.days}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined scale-75">location_on</span>
                  {pkg.location}
                </div>
                <span className="ml-auto text-[10px] font-label-caps bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
                  {pkg.category}
                </span>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex gap-2">
                <Link
                  href={pkg.href}
                  className="flex-grow primary-gradient text-white py-3 rounded-xl font-label-caps text-label-caps hover:shadow-md transition-shadow text-center"
                >
                  View Details
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#25D366] text-white hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
