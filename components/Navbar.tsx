'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Stories', href: '/journal' },
  { label: 'About Us', href: '/about' },
  { label: 'Schools', href: '/school' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl shadow-md shadow-primary/5 border-b border-white/10'
            : 'bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm shadow-primary/5'
        } h-20`}
      >
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-full">
          {/* Logo */}
          <Link
            href="/"
            className="font-h3 text-h3 tracking-tight text-primary hover:opacity-80 transition-opacity duration-200"
          >
            Expedition Expertz
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-label-caps text-label-caps transition-colors duration-300 ${
                    isActive
                      ? 'text-secondary font-bold border-b-2 border-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/packages"
              className="bg-gradient-to-r from-[#92b240] to-[#33a4e3] text-white px-6 py-2 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden material-symbols-outlined text-primary text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/10 px-gutter py-6 flex flex-col gap-4">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-label-caps text-label-caps py-2 border-b border-outline-variant/20 transition-colors duration-200 ${
                    isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/packages"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-[#92b240] to-[#33a4e3] text-white px-6 py-3 rounded-full font-label-caps text-label-caps text-center hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20 mt-2"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}