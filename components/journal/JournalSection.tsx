'use client';
import React, { useState, useMemo } from 'react';
import articles from '@/data/articles';
import type { Article } from '@/data/articles';

const TABS = ['All Stories', 'Adventure', 'Education', 'Culture', 'Nature'] as const;
type Tab = (typeof TABS)[number];

const categoryColor: Record<string, string> = {
  Nature: 'text-secondary-fixed',
  Culture: 'text-on-tertiary-container',
  Adventure: 'text-secondary',
  Education: 'text-primary-container',
};

function LargeCard({ a }: { a: Article }) {
  return (
    <div className="md:col-span-8 group overflow-hidden rounded-xl glass-card relative h-[500px]">
      <img alt={a.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
      <div className="absolute inset-0 scrim-gradient opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <span className={`${categoryColor[a.category]} font-label-caps text-label-caps mb-2 block`}>{a.category}</span>
        <h3 className="font-h2 text-h3 mb-4">{a.title}</h3>
        <p className="font-body-md text-white/70 line-clamp-2 mb-6">{a.excerpt}</p>
        <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary-fixed hover:underline" href="#">
          Read More <span className="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </div>
    </div>
  );
}

function SmallCard({ a }: { a: Article }) {
  return (
    <div className="md:col-span-4 group overflow-hidden rounded-xl glass-card flex flex-col">
      <div className="h-64 overflow-hidden">
        <img alt={a.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className={`${categoryColor[a.category]} font-label-caps text-label-caps mb-2 block`}>{a.category}</span>
        <h3 className="font-h3 text-h3 mb-3 text-primary">{a.title}</h3>
        <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">{a.excerpt}</p>
        <div className="mt-auto">
          <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors" href="#">
            Read More <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function WideCard({ a }: { a: Article }) {
  return (
    <div className="md:col-span-8 group overflow-hidden rounded-xl glass-card flex flex-col md:flex-row">
      <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
        <img alt={a.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col">
        <span className={`${categoryColor[a.category]} font-label-caps text-label-caps mb-2 block`}>{a.category}</span>
        <h3 className="font-h2 text-h3 mb-4 text-primary">{a.title}</h3>
        <p className="font-body-md text-on-surface-variant mb-6">{a.excerpt}</p>
        <div className="mt-auto">
          <a className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-label-caps text-label-caps hover:scale-105 transition-transform" href="#">
            Explore Archive
          </a>
        </div>
      </div>
    </div>
  );
}

export default function JournalSection() {
  const [activeTab, setActiveTab] = useState<Tab>('All Stories');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = articles;
    if (activeTab !== 'All Stories') {
      list = list.filter((a) => a.category === activeTab);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, search]);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full border-2 font-label-caps text-label-caps transition-all duration-200 ${
                  activeTab === tab
                    ? 'border-primary bg-primary text-white shadow-md'
                    : 'border-outline text-on-surface-variant hover:border-secondary hover:text-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-full outline-none transition-all font-body-md"
              placeholder="Search journals..."
              type="text"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-6xl text-outline mb-4 block">article</span>
              <h3 className="font-h3 text-h3 text-primary mb-2">No Stories Found</h3>
              <p className="text-on-surface-variant">Try a different category or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap">
              {filtered.map((a, i) => {
                // First article gets large layout, last gets wide, others small
                if (filtered.length === 1 || a.size === 'wide') return <WideCard key={a.id} a={a} />;
                if (i === 0 && filtered.length > 2) return <LargeCard key={a.id} a={a} />;
                return <SmallCard key={a.id} a={a} />;
              })}
            </div>
          )}
          {filtered.length > 0 && (
            <div className="mt-16 flex justify-center">
              <button className="px-10 py-4 rounded-full border-2 border-primary text-primary font-h3 text-body-md hover:bg-primary hover:text-white transition-all">
                Load More Journals
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
