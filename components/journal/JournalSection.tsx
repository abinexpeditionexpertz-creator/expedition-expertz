'use client';
import React, { useState, useMemo } from 'react';
import articles from '@/data/articles';
import type { Article } from '@/data/articles';

const TABS = ['All Stories', 'Adventure', 'Education', 'Culture', 'Nature'] as const;
type Tab = (typeof TABS)[number];

const categoryColor: Record<string, string> = {
  Nature: 'text-emerald-600 font-semibold',
  Culture: 'text-amber-600 font-semibold',
  Adventure: 'text-sky-600 font-semibold',
  Education: 'text-[#4e6700] font-semibold',
};

function LargeCard({ a, onRead }: { a: Article; onRead: (a: Article) => void }) {
  return (
    <div 
      onClick={() => onRead(a)}
      className="md:col-span-8 group overflow-hidden rounded-xl glass-card relative h-[500px] cursor-pointer"
    >
      <img alt={a.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
      <div className="absolute inset-0 scrim-gradient opacity-60 group-hover:opacity-85 transition-opacity" />
      <div className="absolute bottom-0 left-0 p-8 text-white z-10">
        <span className="text-emerald-400 font-bold font-label-caps text-xs tracking-wider mb-2 block uppercase">{a.category}</span>
        <h3 className="font-h2 text-2xl md:text-3xl font-extrabold mb-3 group-hover:text-secondary transition-colors">{a.title}</h3>
        <p className="font-body-md text-white/80 line-clamp-2 mb-6 max-w-xl">{a.excerpt}</p>
        <button className="inline-flex items-center gap-2 font-label-caps text-xs tracking-widest text-secondary font-bold hover:underline">
          Read Story <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function SmallCard({ a, onRead }: { a: Article; onRead: (a: Article) => void }) {
  return (
    <div className="md:col-span-4 group overflow-hidden rounded-xl glass-card flex flex-col bg-white">
      <div className="h-64 overflow-hidden relative">
        <img alt={a.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant/30 text-[10px] font-bold text-primary tracking-widest uppercase">
          {a.category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-h3 text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{a.title}</h3>
        <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6 text-sm leading-relaxed">{a.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between">
          <button 
            onClick={() => onRead(a)}
            className="inline-flex items-center gap-1 font-label-caps text-xs tracking-wider text-primary font-bold hover:text-secondary transition-colors"
          >
            Read More <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
          <span className="text-[10px] font-semibold text-on-surface-variant/70 font-label-caps">{a.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function WideCard({ a, onRead }: { a: Article; onRead: (a: Article) => void }) {
  return (
    <div className="md:col-span-8 group overflow-hidden rounded-xl glass-card flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
        <img alt={a.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={a.img} />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col">
        <span className={`${categoryColor[a.category]} font-label-caps text-xs tracking-wider mb-2 block uppercase`}>{a.category}</span>
        <h3 className="font-h2 text-2xl font-extrabold mb-4 text-primary group-hover:text-secondary transition-colors">{a.title}</h3>
        <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">{a.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between">
          <button 
            onClick={() => onRead(a)}
            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-label-caps text-xs tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Read Story
          </button>
          <span className="text-[10px] font-semibold text-on-surface-variant/70 font-label-caps">{a.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default function JournalSection() {
  const [activeTab, setActiveTab] = useState<Tab>('All Stories');
  const [search, setSearch] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
      <div className="sticky top-20 z-40 bg-surface/85 backdrop-blur-lg border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2.5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full border-2 font-label-caps text-xs tracking-wider transition-all duration-200 cursor-pointer ${
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
              className="w-full pl-12 pr-10 py-3.5 bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-full outline-none transition-all font-body-md"
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
      <section className="py-24 bg-surface-container-lowest">
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
                if (filtered.length === 1 || a.size === 'wide') return <WideCard key={a.id} a={a} onRead={setSelectedArticle} />;
                if (i === 0 && filtered.length > 2) return <LargeCard key={a.id} a={a} onRead={setSelectedArticle} />;
                return <SmallCard key={a.id} a={a} onRead={setSelectedArticle} />;
              })}
            </div>
          )}
        </div>
      </section>

      {/* Immersive Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6 bg-primary/40 backdrop-blur-md">
          <div className="relative bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 max-h-[90vh] flex flex-col">
            
            {/* Header image / Banner */}
            <div className="relative h-64 md:h-80 shrink-0">
              <img
                src={selectedArticle.img}
                alt={selectedArticle.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-secondary flex items-center justify-center transition-colors border border-white/10"
                aria-label="Close reader"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#92b240] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <h2 className="font-h2 text-xl md:text-2xl lg:text-3xl font-extrabold mt-3 leading-snug drop-shadow-sm">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Meta details & body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 text-xs font-semibold text-primary/75 font-label-caps">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">person</span>
                  <span>By {selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Story text */}
              <div className="font-body-md text-on-surface-variant leading-relaxed space-y-5">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "text-lg text-primary font-semibold leading-relaxed" : "leading-relaxed"}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal footer */}
            <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between shrink-0 border-t border-outline-variant/30">
              <span className="text-xs text-on-surface-variant/80 font-medium font-label-caps tracking-wider">
                Expedition Expertz Travel Journal
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-label-caps text-xs tracking-wider transition-all"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
