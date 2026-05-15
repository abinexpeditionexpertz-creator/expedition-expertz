import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactSidebar from '@/components/contact/ContactSidebar';
import FaqSection from '@/components/shared/FaqSection';
import SocialStrip from '@/components/shared/SocialStrip';

const faqs = [
  { question: 'What gear is provided on expeditions?', answer: 'We provide all technical equipment including tents, high-altitude sleeping systems, safety harnesses, and gourmet base camp meals. Guests are only responsible for personal apparel and hiking boots.', defaultOpen: true },
  { question: 'Do I need prior mountaineering experience?', answer: 'We offer expeditions for all levels. From "Discovery Walks" for beginners to "Elite Summits" requiring technical certification. Every expedition listing includes a required fitness and skill rating.' },
  { question: 'What is your sustainability policy?', answer: 'Expedition Expertz is committed to Leave No Trace principles. We partner with local conservation groups and ensure 10% of every booking goes directly into habitat restoration for the regions we visit.' },
];

export default function ContactPage() {
  return (
    <main className="relative pt-20">
      <ContactHero />
      <section className="max-w-container-max mx-auto px-gutter -mt-32 relative z-10 mb-section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-card-gap">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full curved-divider" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C360 0 1080 0 1440 100V100H0V100Z" fill="#eceef0" />
        </svg>
      </div>
      <FaqSection title="Common Questions" subtitle="Everything you need to know before your expedition begins." items={faqs} />
      <SocialStrip />
    </main>
  );
}