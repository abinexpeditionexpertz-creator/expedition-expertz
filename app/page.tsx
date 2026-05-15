import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import WhyUs from '@/components/home/WhyUs';
import SchoolsTeaser from '@/components/home/SchoolsTeaser';

export default function HomepagePage() {
  return (
    <main>
      <HomeHero />
      <FeaturedDestinations />
      <WhyUs />
      <SchoolsTeaser />
    </main>
  );
}