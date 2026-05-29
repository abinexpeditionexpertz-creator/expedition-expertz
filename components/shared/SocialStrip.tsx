import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '@/components/shared/SocialIcons';

const socialLinks = [
  { component: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/share/1BBq1xpXZz/?mibextid=wwXIfr' },
  { component: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/expeditionexpertz?igsh=N3B3MnpuNXA2dDE5&utm_source=qr' },
  { component: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/114073946/' },
  { component: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/919645599533' },
];

export default function SocialStrip() {
  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <h3 className="font-label-caps text-label-caps text-secondary mb-8 tracking-widest uppercase">
          Follow Our Journeys
        </h3>
        <div className="flex justify-center gap-12">
          {socialLinks.map(({ component: IconComponent, label, href }) => (
            <a key={label} className="group flex flex-col items-center gap-3" href={href} target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-secondary-container transition-all duration-300">
                <IconComponent size={28} className="text-primary group-hover:text-secondary-fixed transition-colors" />
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

