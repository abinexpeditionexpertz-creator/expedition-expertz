"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

const destinations = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCinFTxOnEEiwjAAc5Sz19c7U0WVCwXuf_fYd7Q2DUgI5jCUSIY0Z62rWrr5fUKu9OkZtfZjoA7azCp8yUjS6EDEWufFxtSv7j43LnPqTvDGb8Qjy0ldIn1ZFdHJilvq4a8EzSnDrgitzEiawwb3JN9narfnJNgZ9HOsnI-dtxSH9oRKG15iuHsr9hjAlPbN5jkkiAGPGN-mlMGUYr8FsRk1oUgvVu6KgcrVTKsneANQf4PjzNyL65w-4BYHpy7SaZs4ln0INurwB4",
    alt: "Madeira Peaks", tag: "Adventure • 12 Days", name: "The Madeira Peaks", location: "Portugal", price: "$2,100", href: "/packages",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDicFM8eMHUBQMegurnZMazGhYMCxjVnOCF34wpfHhQ5DqOiiCVuBJO6tRy_VbZ5wDFrMxj2QH_dtkjz7CwNl-ilv4_dQHer12DU5HdhhFo6aSOc3_T0RrV5Ndnfmqsq7QapepxxOotNKQG3hjI09XlC3z0XGyUQfqkecHwbnPHo1U4uwfL8Y7r4qqOBeRlfSyy2Z5Nf5j1Zfh1Qj46Ni3jLjUIWyq_pXGn30DlyLxr8pXe7O3Dd81yvr1-h8l5medI-96aQ6UuR7I",
    alt: "Canadian Rockies", tag: "Wilderness • 8 Days", name: "Canadian Serenity", location: "Canada", price: "$3,400", href: "/packages",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgtdR0DI3OioSwCRu0FxA_s01Bnb7i5fv8CaiEef1Eo6UuShCjnzqiwWkcCcyxkKal1eg1QYIPOhANC-AxiE0ctdBSD9pe21_T7nKOExG4H6RTwAGNnn9PFZvnM5JjzjWcWQRlYjfKDTPOheM55VeHbJuyUv-egSPOb41-pchu_LJK3RQnvqJELx4eclmlLumFiKno0tQQj7plRYKtkOu7wiA1n7dNJN9Diwf-xB4QH5DKgwzBsexdBq1tdHUmHbKmg6JiiKmQPFo",
    alt: "Swiss Alps", tag: "High Altitude • 15 Days", name: "Alpine Traverse", location: "Switzerland", price: "$4,800", href: "/packages",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcnV9JGXr7rtxGQru1PEAoBJ35vjlrn-gPJoYKEscFcCcOWKJdivaIA26ty1oBgM1JQXbrjKeBgAY91fj2mtSESsgRBz0sFknXaAKX2zAngFNweOSxutTwMejO0fgyLlRHagKGtLFzSedXsMkQWeD0cZ0VfqvItTHo0zeJlNofworr5vTy7c0bX2lHOhS4byKRengnVonsZsIjEICWniB96qX9LHjOdH0IkOiuJo5jN6h6mNyqbe2qY6s8o5FRpML-M7f0z1PHNLY",
    alt: "Everest Base Camp", tag: "Himalayan • 14 Days", name: "Everest Base Camp", location: "Nepal", price: "$3,250", href: "/package/everest-trek",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxKvtI7wIQKIMNetSphpjUOag7BNBjRCzIV0Jr6VbIs68TyPejRxuWPsCmDabDpUXSY4_WXGXo35kGWecwKq1aEua-XEDFF40fCGD28kVJ_UR72ILKyxGJ-l8ioxzw6RgvTDBWSHMstWQm9S7Q12l3lXE79PY0_cCt3zVrMweeVKip3gqMaRu3gcVatB6-kwSW8KeMroldLjqcFIOeMmQofgUl6vWrFRkLaZrJyE1z7P2t5eJQfCQYfOEYZkx_hW_SlLc-opT_Wew",
    alt: "Serengeti Safari", tag: "Wildlife • 7 Days", name: "Serengeti Safari", location: "Tanzania", price: "$3,800", href: "/packages",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      {/* Scoped Swiper styles */}
      <style>{`
        .dest-swiper { padding-bottom: 52px !important; }
        .dest-swiper .swiper-pagination { bottom: 0; }
        .dest-swiper .swiper-pagination-bullet {
          width: 10px; height: 10px;
          background: var(--color-primary, #1a364f);
          opacity: 0.2;
          border-radius: 9999px;
          transition: all 0.35s ease;
          margin: 0 4px !important;
        }
        .dest-swiper .swiper-pagination-bullet-active {
          width: 32px; opacity: 1;
          background: var(--color-secondary, #92b240);
        }
        .dest-swiper .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.55;
          transform: scale(0.93);
        }
        .dest-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
              Curated Journeys
            </span>
            <h2 className="font-h2 text-h2 text-primary">Featured Destinations</h2>
          </div>
          {/* Nav buttons — wired via class names to Swiper */}
          <div className="flex gap-3">
            <button
              className="dest-prev w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-90 disabled:opacity-30"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              className="dest-next w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-90 disabled:opacity-30"
              aria-label="Next"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Swiper carousel */}
        <Swiper
          className="dest-swiper"
          modules={[Autoplay, Navigation, Pagination]}
          loop
          speed={700}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: ".dest-prev", nextEl: ".dest-next" }}
          pagination={{ clickable: true }}
          grabCursor
          centeredSlides
          slideToClickedSlide
          breakpoints={{
            0:   { slidesPerView: 1,   spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2,   spaceBetween: 24 },
            1024:{ slidesPerView: 3,   spaceBetween: 28 },
          }}
        >
          {destinations.map((d) => (
            <SwiperSlide key={d.name}>
              <Link href={d.href} className="block group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer select-none">
                {/* Image */}
                <div className="aspect-[4/5]">
                  <img
                    src={d.img}
                    alt={d.alt}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <p className="font-label-caps text-label-caps text-secondary-fixed mb-1 drop-shadow">{d.tag}</p>
                  <h3 className="font-h3 text-h3 text-white leading-snug drop-shadow-lg">{d.name}</h3>

                  {/* Hover reveal row */}
                  <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 ease-out">
                    <span className="flex items-center gap-1 text-white/80 text-sm">
                      <span className="material-symbols-outlined text-base leading-none">location_on</span>
                      {d.location}
                    </span>
                    <span className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                      From {d.price}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
