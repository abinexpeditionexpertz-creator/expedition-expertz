'use client';
import type { Package } from '@/data/packages';
import { WhatsAppIcon } from '@/components/shared/SocialIcons';

type Props = { pkg: Package };

export default function PackageDetailBooking({ pkg }: Props) {
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-28 space-y-6">
        {/* Booking card */}
        <div className="rounded-2xl p-8 shadow-lg border border-outline-variant/10 bg-white">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Starting From</p>
              <h2 className="font-h1 text-[2rem] text-primary leading-none mt-1">
                {pkg.price}
                <span className="text-sm font-normal text-on-surface-variant">/person</span>
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full text-sm">
              <span className="material-symbols-outlined text-sm">star</span>
              {pkg.rating}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3 mb-7">
            {[
              { label: 'Next Departure', value: pkg.nextDeparture, icon: 'calendar_month' },
              { label: 'Duration', value: pkg.days, icon: 'schedule' },
              { label: 'Difficulty', value: pkg.difficulty, icon: 'trending_up' },
              { label: 'Group Size', value: pkg.groupSize, icon: 'groups' },
              { label: 'Location', value: pkg.location, icon: 'location_on' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center p-3 bg-surface-container rounded-xl">
                <span className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-base">{row.icon}</span>
                  {row.label}
                </span>
                <span className="font-bold text-primary text-sm">{row.value}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="space-y-3">
            <a
              href="https://wa.me/919645599533"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-white font-label-caps text-label-caps py-4 rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon size={20} />
              Book via WhatsApp
            </a>
            <a
              href="/contact"
              className="w-full flex items-center justify-center gap-2 font-label-caps text-label-caps py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              Enquire Now
            </a>
          </div>

          <p className="text-center text-xs text-on-surface-variant mt-5 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Secure booking &amp; 24/7 expert support
          </p>
        </div>

        {/* Category badge */}
        <div
          className="rounded-2xl p-5 text-white text-center"
          style={{ backgroundColor: '#1a364f' }}
        >
          <p className="font-label-caps text-label-caps opacity-70 mb-1">Category</p>
          <p className="font-bold text-lg">{pkg.category}</p>
        </div>
      </div>
    </aside>
  );
}
