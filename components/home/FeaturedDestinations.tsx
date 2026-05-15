'use client';
import React, { useState, useEffect, useCallback } from 'react';

const destinations = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCinFTxOnEEiwjAAc5Sz19c7U0WVCwXuf_fYd7Q2DUgI5jCUSIY0Z62rWrr5fUKu9OkZtfZjoA7azCp8yUjS6EDEWufFxtSv7j43LnPqTvDGb8Qjy0ldIn1ZFdHJilvq4a8EzSnDrgitzEiawwb3JN9narfnJNgZ9HOsnI-dtxSH9oRKG15iuHsr9hjAlPbN5jkkiAGPGN-mlMGUYr8FsRk1oUgvVu6KgcrVTKsneANQf4PjzNyL65w-4BYHpy7SaZs4ln0INurwB4',
    alt: 'Madeira Peaks',
    tag: 'Adventure • 12 Days',
    name: 'The Madeira Peaks',
    location: 'Portugal',
    price: '$2,100',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDicFM8eMHUBQMegurnZMazGhYMCxjVnOCF34wpfHhQ5DqOiiCVuBJO6tRy_VbZ5wDFrMxj2QH_dtkjz7CwNl-ilv4_dQHer12DU5HdhhFo6aSOc3_T0RrV5Ndnfmqsq7QapepxxOotNKQG3hjI09XlC3z0XGyUQfqkecHwbnPHo1U4uwfL8Y7r4qqOBeRlfSyy2Z5Nf5j1Zfh1Qj46Ni3jLjUIWyq_pXGn30DlyLxr8pXe7O3Dd81yvr1-h8l5medI-96aQ6UuR7I',
    alt: 'Canadian Rockies',
    tag: 'Wilderness • 8 Days',
    name: 'Canadian Serenity',
    location: 'Canada',
    price: '$3,400',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgtdR0DI3OioSwCRu0FxA_s01Bnb7i5fv8CaiEef1Eo6UuShCjnzqiwWkcCcyxkKal1eg1QYIPOhANC-AxiE0ctdBSD9pe21_T7nKOExG4H6RTwAGNnn9PFZvnM5JjzjWcWQRlYjfKDTPOheM55VeHbJuyUv-egSPOb41-pchu_LJK3RQnvqJELx4eclmlLumFiKno0tQQj7plRYKtkOu7wiA1n7dNJN9Diwf-xB4QH5DKgwzBsexdBq1tdHUmHbKmg6JiiKmQPFo',
    alt: 'Swiss Alps',
    tag: 'High Altitude • 15 Days',
    name: 'Alpine Traverse',
    location: 'Switzerland',
    price: '$4,800',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcnV9JGXr7rtxGQru1PEAoBJ35vjlrn-gPJoYKEscFcCcOWKJdivaIA26ty1oBgM1JQXbrjKeBgAY91fj2mtSESsgRBz0sFknXaAKX2zAngFNweOSxutTwMejO0fgyLlRHagKGtLFzSedXsMkQWeD0cZ0VfqvItTHo0zeJlNofworr5vTy7c0bX2lHOhS4byKRengnVonsZsIjEICWniB96qX9LHjOdH0IkOiuJo5jN6h6mNyqbe2qY6s8o5FRpML-M7f0z1PHNLY',
    alt: 'Everest Base Camp',
    tag: 'Himalayan • 14 Days',
    name: 'Everest Base Camp',
    location: 'Nepal',
    price: '$3,250',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxKvtI7wIQKIMNetSphpjUOag7BNBjRCzIV0Jr6VbIs68TyPejRxuWPsCmDabDpUXSY4_WXGXo35kGWecwKq1aEua-XEDFF40fCGD28kVJ_UR72ILKyxGJ-l8ioxzw6RgvTDBWSHMstWQm9S7Q12l3lXE79PY0_cCt3zVrMweeVKip3gqMaRu3gcVatB6-kwSW8KeMroldLjqcFIOeMmQofgUl6vWrFRkLaZrJyE1z7P2t5eJQfCQYfOEYZkx_hW_SlLc-opT_Wew',
    alt: 'Serengeti Safari',
    tag: 'Wildlife • 7 Days',
    name: 'Serengeti Safari',
    location: 'Tanzania',
    price: '$3,800',
  },
];

const VISIBLE = 3; // cards visible at a time on desktop

export default function FeaturedDestinations() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = destinations.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((c) => (c + dir + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, total]
  );

  // Auto-play every 4 s
  useEffect(() => {
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [go]);

  // Visible indices (wraps around)
  const indices = Array.from({ length: VISIBLE }, (_, i) => (current + i) % total);

  return (
    <section className="py-section-padding bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
              Curated Journeys
            </span>
            <h2 className="font-h2 text-h2 text-primary">Featured Destinations</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {indices.map((idx, slot) => {
            const d = destinations[idx];
            const isCenter = slot === 1;
            return (
              <div
                key={`${idx}-${slot}`}
                className={`group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ${
                  isCenter ? 'md:scale-105 shadow-primary/20' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={d.img}
                    alt={d.alt}
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="font-label-caps text-label-caps text-secondary-fixed mb-1">{d.tag}</p>
                  <h3 className="font-h3 text-h3 text-white mb-1">{d.name}</h3>
                  <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="flex items-center gap-1 text-white/80 text-sm">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {d.location}
                    </span>
                    <span className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
                      From {d.price}
                    </span>
                  </div>
                </div>
                {/* Center badge */}
                {isCenter && (
                  <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-label-caps px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrent(i); setTimeout(() => setIsAnimating(false), 500); } }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2.5 bg-secondary'
                  : 'w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
