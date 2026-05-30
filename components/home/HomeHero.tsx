"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    img: "/hero1.png",
    alt: "Mountain expedition at golden sunset",
    tag: "CURATED EXPEDITIONS",
    heading: "Learn \u2022 Explore \u2022 Grow",
    sub: "Embark on curated expeditions that transform perspectives. We bridge the gap between curiosity and discovery through world-class adventure leadership.",
    cta1: { label: "Explore Packages", href: "/packages", icon: "explore" },
    cta2: { label: "Plan Your Journey", href: "/contact", icon: "route" },
  },
  {
    img: "/hero2.png",
    alt: "Students trekking through forest",
    tag: "SCHOOL PROGRAMS",
    heading: "Adventure Awaits Every Student",
    sub: "Curriculum-aligned outdoor programmes that build leadership, resilience, and a lifelong love of nature. Trusted by 50+ schools worldwide.",
    cta1: { label: "Plan School Program", href: "/contact", icon: "school" },

    cta2: { label: "View Brochure", href: "/packages", icon: "menu_book" },
  },
  {
    img: "/hero3.png",
    alt: "Alpine mountain panorama",
    tag: "PREMIUM TREKS",
    heading: "Conquer New Heights",
    sub: "From the Himalayas to Patagonia, our expert-led treks push boundaries while keeping you safe at every step of the journey.",
    cta1: { label: "Browse Treks", href: "/packages", icon: "hiking" },
    cta2: { label: "About Us", href: "/about", icon: "info" },
  },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setActive((p) => (p + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* ── Background layers ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 1.4s ease-in-out, transform 8s ease-out",
            transform: i === active ? "scale(1.05)" : "scale(1)",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={s.img}
            alt={s.alt}
            draggable={false}
          />
        </div>
      ))}

      {/* ── Dark overlay for readability ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/35 to-black/70" />

      {/* ── Content area ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20"
            style={{
              opacity: i === active ? 1 : 0,
              transform:
                i === active
                  ? "translateY(0)"
                  : direction > 0
                  ? "translateY(60px)"
                  : "translateY(-60px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              pointerEvents: i === active ? "auto" : "none",
            }}
          >
            <div className="max-w-3xl">
              {/* Tag */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {s.tag}
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-xl">
                {s.heading}
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                {s.sub}
              </p>

              {/* Glass CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={s.cta1.href}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)] active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-inner" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative material-symbols-outlined text-lg">{s.cta1.icon}</span>
                  <span className="relative">{s.cta1.label}</span>
                  <span className="relative material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                </Link>

                <Link
                  href={s.cta2.href}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white/90 font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-lg border border-white/15" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative material-symbols-outlined text-lg">{s.cta2.icon}</span>
                  <span className="relative">{s.cta2.label}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Arrow nav (glass) ── */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200 active:scale-90"
      >
        <span className="material-symbols-outlined text-2xl">chevron_left</span>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200 active:scale-90"
      >
        <span className="material-symbols-outlined text-2xl">chevron_right</span>
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-28 left-6 md:left-12 lg:left-20 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > active ? 1 : -1);
              setActive(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="flex items-center gap-2 group"
          >
            <span
              className={`block rounded-full transition-all duration-500 ${
                i === active
                  ? "w-12 h-1.5 bg-white"
                  : "w-6 h-1.5 bg-white/30 group-hover:bg-white/50"
              }`}
            />
            {i === active && (
              <span className="text-white/60 text-xs font-bold tracking-widest uppercase hidden sm:inline">
                {s.tag}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="curved-divider"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          />
        </svg>
      </div>
    </section>
  );
}
