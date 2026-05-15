import React from 'react';

const socialLinks = [
  { icon: 'camera', label: 'Instagram', href: '#' },
  { icon: 'video_library', label: 'YouTube', href: '#' },
  { icon: 'public', label: 'LinkedIn', href: '#' },
];

export default function SocialStrip() {
  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <h3 className="font-label-caps text-label-caps text-secondary mb-8 tracking-widest uppercase">
          Follow Our Journeys
        </h3>
        <div className="flex justify-center gap-12">
          {socialLinks.map(({ icon, label, href }) => (
            <a key={label} className="group flex flex-col items-center gap-3" href={href}>
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-secondary-container transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>
              <span className="font-label-caps text-[0.65rem] tracking-wider text-on-surface-variant uppercase">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
