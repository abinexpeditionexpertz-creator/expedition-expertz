import React from 'react';
import PackagesHero from '@/components/packages/PackagesHero';
import PackagesGrid, { PackagesFilter, PackagesProvider } from '@/components/packages/PackagesGrid';

export default function PackagesPage() {
  return (
    <main>
      <PackagesHero />
      <PackagesProvider>
        <div className="max-w-container-max mx-auto px-gutter py-12">
          <div className="flex flex-col md:flex-row gap-card-gap">
            <PackagesFilter />
            <PackagesGrid />
          </div>
        </div>
      </PackagesProvider>
    </main>
  );
}