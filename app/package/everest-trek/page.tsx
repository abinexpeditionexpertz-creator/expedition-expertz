import React from 'react';
import EverestHero from '@/components/everest/EverestHero';
import EverestDetails from '@/components/everest/EverestDetails';
import EverestBookingCard from '@/components/everest/EverestBookingCard';
import FaqSection from '@/components/shared/FaqSection';

const faqs = [
  { question: 'How fit do I need to be?', answer: 'This is a challenging trek requiring good cardiovascular fitness. You should be comfortable walking 6-8 hours daily for 12 days at high altitude.' },
  { question: 'What is the best time to go?', answer: 'Pre-monsoon (March to May) and post-monsoon (September to November) offer the best visibility and stable weather conditions.' },
  { question: 'Is altitude sickness a major risk?', answer: 'We take acclimatization seriously. Our itinerary includes two rest days and our guides carry pulse oximeters and oxygen for emergencies.' },
];

export default function EverestPage() {
  return (
    <main>
      <EverestHero />
      <div className="max-w-container-max mx-auto px-gutter py-section-padding grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
        <EverestDetails />
        <EverestBookingCard />
      </div>
      <FaqSection title="Essential Questions" items={faqs} />
    </main>
  );
}