import type { Package } from '@/data/packages';

type Props = { pkg: Package };

export default function PackageDetailHero({ pkg }: Props) {
  return (
    <header className="relative h-[560px] w-full flex items-center justify-center overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={pkg.img}
        alt={pkg.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      <div className="relative z-10 text-center text-white px-gutter max-w-3xl mx-auto">
        <span className="inline-block font-label-caps text-label-caps bg-secondary/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-5">
          {pkg.badge}
        </span>
        <h1 className="font-h1 text-h1 mb-6 drop-shadow-lg">{pkg.title}</h1>
        <p className="font-body-lg text-white/85 mb-8 max-w-xl mx-auto">{pkg.excerpt}</p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: 'schedule', value: pkg.days },
            { icon: 'payments', value: pkg.price },
            { icon: 'trending_up', value: pkg.difficulty },
            { icon: 'groups', value: pkg.groupSize },
          ].map((s) => (
            <div key={s.icon} className="flex flex-col items-center bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
              <span className="material-symbols-outlined text-secondary mb-1">{s.icon}</span>
              <span className="font-bold text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
