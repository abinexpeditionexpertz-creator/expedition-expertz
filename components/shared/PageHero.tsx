import React from 'react';

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  label?: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export default function PageHero({ imageSrc, imageAlt, label, title, subtitle, height = 'h-[500px]' }: PageHeroProps) {
  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <img alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" src={imageSrc} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-surface" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-gutter pt-20">
        {label && (
          <span className="inline-block font-label-caps text-label-caps bg-secondary/90 backdrop-blur-md px-4 py-1 rounded-full mb-4 uppercase tracking-widest text-white">
            {label}
          </span>
        )}
        <h1 className="font-h1 text-h1 text-white mb-4 drop-shadow-2xl">{title}</h1>
        {subtitle && (
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl drop-shadow-lg">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
