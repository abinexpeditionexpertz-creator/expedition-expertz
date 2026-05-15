import React from 'react';

export default function PrivacyContent() {
  return (
    <article className="lg:col-span-9 glass-panel rounded-3xl p-8 md:p-16 shadow-lg shadow-primary/5">
      <section className="legal-content" id="privacy">
        <div className="flex items-center gap-2 text-primary/50 mb-8 font-label-caps text-label-caps">
          <span className="material-symbols-outlined text-[16px]">update</span>
          Last Updated: December 12, 2024
        </div>
        <h2 className="baloo-heading">Privacy Policy</h2>
        <p>At Expedition Expertz, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
        <h2 className="baloo-heading">1. Information We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
        </ul>
        <h2 className="baloo-heading">2. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>
        <div className="my-12 p-8 bg-primary-container rounded-2xl text-on-primary-container relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-h3 text-h3 mb-4 text-primary-fixed">Your Journey, Your Data.</h3>
            <p className="font-body-md opacity-90 mb-0">We believe adventure should be shared, but your data shouldn't. We never sell your personal information to third parties for marketing purposes.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
        </div>
        <h2 className="baloo-heading" id="terms">Terms of Service</h2>
        <p>By accessing or using the Expedition Expertz website and services, you agree to comply with and be bound by the following terms and conditions of use.</p>
        <h2 className="baloo-heading">1. Booking Conditions</h2>
        <p>All expeditions booked through Expedition Expertz are subject to availability and the specific conditions of the service provider. A booking is only confirmed once we have received the required deposit and issued a confirmation invoice.</p>
        <h2 className="baloo-heading">2. Cancellation Policy</h2>
        <p>We understand that plans can change. Our cancellation policy is designed to be fair to both our travelers and our local expedition partners:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellations more than 60 days before departure: Full refund minus deposit.</li>
          <li>Cancellations 30-60 days before departure: 50% refund.</li>
          <li>Cancellations less than 30 days before departure: No refund possible.</li>
        </ul>
      </section>
    </article>
  );
}
