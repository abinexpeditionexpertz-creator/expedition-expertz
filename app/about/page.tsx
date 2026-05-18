import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import FounderStory from '@/components/about/FounderStory';
import MissionVision from '@/components/about/MissionVision';
import PhilosophySection from '@/components/about/PhilosophySection';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <FounderStory />
      <MissionVision />
      <PhilosophySection />
      <AboutCTA />
    </main>
  );
}