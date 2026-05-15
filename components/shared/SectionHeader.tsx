import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {label && (
        <span className={`font-label-caps text-label-caps uppercase tracking-widest block mb-2 ${light ? 'text-secondary-fixed' : 'text-secondary'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-h2 text-h2 mb-4 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && (
        <p className={`font-body-md text-body-md ${light ? 'text-white/80' : 'text-on-surface-variant'}`}>{subtitle}</p>
      )}
    </div>
  );
}
