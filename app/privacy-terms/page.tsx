import React from 'react';
import PrivacyContent from '@/components/privacy/PrivacyContent';

const navItems = [
  { href: '#privacy', icon: 'verified_user', label: 'Privacy Policy', active: true },
  { href: '#terms', icon: 'gavel', label: 'Terms of Service' },
  { href: '#cookies', icon: 'cookie', label: 'Cookie Policy' },
  { href: '#sustainability', icon: 'eco', label: 'Sustainability' },
];

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-section-padding">
      <header className="max-w-container-max mx-auto px-gutter mb-16 text-center">
        <h1 className="font-h1 text-h1 text-primary mb-4">Legal Center</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Our commitment to your privacy, security, and transparency during every expedition.
        </p>
      </header>
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
        <aside className="lg:col-span-3">
          <div className="sticky top-28 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                  item.active
                    ? 'glass-panel text-secondary font-bold border-l-4 border-secondary shadow-sm'
                    : 'text-on-surface-variant hover:bg-white/50'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label-caps text-label-caps">{item.label}</span>
              </a>
            ))}
          </div>
        </aside>
        <PrivacyContent />
      </div>
    </main>
  );
}