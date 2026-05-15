import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function FaqSection({ title = 'Common Questions', subtitle, items }: FaqSectionProps) {
  return (
    <section className="bg-surface-container py-section-padding">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-primary mb-4">{title}</h2>
          {subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details key={i} className="glass-panel rounded-xl group" {...(item.defaultOpen ? { open: true } : {})}>
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none list-inside">
                <span className="font-h3 text-[1.125rem] text-primary">{item.question}</span>
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant border-t border-white/20 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
