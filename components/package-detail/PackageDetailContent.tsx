import type { Package } from '@/data/packages';

type Props = { pkg: Package };

export default function PackageDetailContent({ pkg }: Props) {
  return (
    <article className="lg:col-span-8 space-y-12">
      {/* Highlights */}
      <section>
        <h2 className="font-h2 text-h2 text-primary mb-6">Trip Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pkg.highlights.map((h) => (
            <div key={h} className="flex gap-3 items-start bg-surface-container-low p-4 rounded-xl">
              <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">verified</span>
              <span className="font-body-md text-on-surface">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="font-h2 text-h2 text-primary mb-4">About This Expedition</h2>
        <p className="font-body-lg text-on-surface-variant leading-relaxed">{pkg.excerpt}</p>
        <p className="font-body-lg text-on-surface-variant leading-relaxed mt-4">
          Our expert-led itinerary is carefully designed to give you an authentic, immersive experience while ensuring your safety and comfort throughout. Every detail is handled — from transfers to accommodation — so you can focus entirely on the adventure ahead.
        </p>
      </section>

      {/* Includes / Excludes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low p-7 rounded-2xl">
          <h3 className="font-h3 text-[1.15rem] text-primary mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">task_alt</span>
            What&apos;s Included
          </h3>
          <ul className="space-y-3">
            {pkg.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-on-surface-variant font-body-md">
                <span className="material-symbols-outlined text-secondary text-sm mt-1 shrink-0">check</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-container-low p-7 rounded-2xl">
          <h3 className="font-h3 text-[1.15rem] text-primary mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">cancel</span>
            What&apos;s Excluded
          </h3>
          <ul className="space-y-3">
            {pkg.excludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-on-surface-variant font-body-md">
                <span className="material-symbols-outlined text-error/60 text-sm mt-1 shrink-0">close</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
