import React from 'react';
import JournalHero from '@/components/journal/JournalHero';
import JournalSection from '@/components/journal/JournalSection';
import JournalTestimonials from '@/components/journal/JournalTestimonials';
import JournalNewsletter from '@/components/journal/JournalNewsletter';

export default function StoriesPage() {
  return (
    <main className="pt-20">
      <JournalHero />
      <JournalSection />
      <JournalTestimonials />
      <JournalNewsletter />
    </main>
  );
}