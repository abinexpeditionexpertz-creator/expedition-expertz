import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeIntro from '@/components/home/HomeIntro';
import HomeServices from '@/components/home/HomeServices';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import WhyUs from '@/components/home/WhyUs';
import HomeImpact from '@/components/home/HomeImpact';

export default function HomepagePage() {
  return (
    <main>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <FeaturedDestinations />
      <WhyUs />
      <HomeImpact />
    </main>
  );
}