"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Stories", href: "/journal" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-md shadow-primary/5 border-b border-white/10"
            : "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm shadow-primary/5"
        } h-24`}
      >
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-full">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center h-full">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200 flex items-center"
            >
              <div className="hidden md:block">
                <img
                  src="/full-logo.png"
                  alt="Expedition Expertz"
                  className="h-12 w-auto object-contain scale-150 origin-left ml-4"
                />
              </div>
              <div className="block md:hidden">
                <img
                  src="/small-logo.png"
                  alt="Expedition Expertz"
                  className="h-10 w-auto object-contain scale-125 origin-left ml-2"
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex flex-none gap-8 items-center justify-center">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-label-caps text-label-caps transition-colors duration-300 ${
                    isActive
                      ? "text-secondary font-bold border-b-2 border-secondary"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right: Desktop Action & Mobile Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <Link
                href="/packages"
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#92b240] to-[#33a4e3] text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(51,164,227,0.5)] transition-all duration-300 shadow-lg overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
                <span className="relative">Book Now</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                className="material-symbols-outlined text-primary text-3xl flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? "close" : "menu"}
              </button>
            </div>
          </div>
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
                    isActive
                      ? "text-secondary font-bold"
                      : "text-on-surface-variant hover:text-secondary"
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
