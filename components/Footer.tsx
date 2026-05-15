"use client";

import React from "react";

import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Travel Stories", href: "/journal" },
  { label: "School Programs", href: "/school" },
];

const destinationLinks = [
  { label: "Himalayan Base", href: "/packages" },
  { label: "Amazon Basin", href: "/packages" },
  { label: "Alpine Traverse", href: "/packages" },
  { label: "Arctic Circle", href: "/packages" },
  { label: "Everest Trek", href: "/package/everest-trek" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-terms" },
  { label: "Terms of Service", href: "/privacy-terms" },
  { label: "Cookie Policy", href: "/privacy-terms" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full text-white overflow-hidden relative"
      style={{ backgroundColor: "#1a364f" }}
    >
      {/* Curved top divider */}
      <div className="w-full overflow-hidden leading-[0] -mb-px">
        <svg
          className="w-full h-[60px] block"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,30 C300,60 900,0 1200,30 L1200,0 L0,0 Z" fill="#f7f9fb" />
        </svg>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 py-16 relative z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-h3 text-h3 text-white mb-4 hover:opacity-80 transition-opacity"
            >
              Expedition Expertz
            </Link>
            <p className="font-body-md text-white/65 mb-8 max-w-xs leading-relaxed">
              Elevating the human spirit through the art of curated exploration
              and transformative leadership.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "public", label: "Website" },
                { icon: "alternate_email", label: "Email" },
                { icon: "chat_bubble", label: "Chat" },
              ].map(({ icon, label }) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[1.1rem]">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body-md text-white/65 hover:text-secondary-fixed hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinationLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body-md text-white/65 hover:text-secondary-fixed hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body-md text-white/65 hover:text-secondary-fixed hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="font-label-caps text-label-caps text-white/70 mb-3 uppercase tracking-wider">
                Newsletter
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary/60 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#92b240] to-[#33a4e3] text-white px-4 py-2 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-white/50 text-sm">
            © {new Date().getFullYear()} Expedition Expertz. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs tracking-widest uppercase font-label-caps">
            <span>Crafted with passion for adventure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
