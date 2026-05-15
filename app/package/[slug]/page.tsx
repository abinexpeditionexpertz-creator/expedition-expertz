import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import packages from '@/data/packages';
import PackageDetailHero from '@/components/package-detail/PackageDetailHero';
import PackageDetailContent from '@/components/package-detail/PackageDetailContent';
import PackageDetailBooking from '@/components/package-detail/PackageDetailBooking';

type Props = { params: Promise<{ slug: string }> };

// Generate all static paths from JSON
export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

// SEO metadata driven by package slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return { title: 'Package Not Found' };
  return {
    title: `${pkg.title} | Expedition Expertz`,
    description: pkg.excerpt,
    openGraph: {
      title: pkg.title,
      description: pkg.excerpt,
      images: [{ url: pkg.img, alt: pkg.title }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <main>
      <PackageDetailHero pkg={pkg} />
      <div className="max-w-container-max mx-auto px-gutter py-section-padding grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
        <PackageDetailContent pkg={pkg} />
        <PackageDetailBooking pkg={pkg} />
      </div>
    </main>
  );
}
