'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Select an Expedition',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate premium server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="glass-panel p-10 rounded-2xl shadow-xl border border-white/50 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center text-center py-20 space-y-6">
        <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center text-secondary animate-bounce">
          <span className="material-symbols-outlined text-5xl">task_alt</span>
        </div>
        <h2 className="font-h2 text-3xl font-extrabold text-primary">Request Received!</h2>
        <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
          Thank you, <strong className="text-primary font-semibold">{formData.name}</strong>. Your customized inquiry about <strong className="text-primary font-semibold">{formData.interest}</strong> has been received. 
        </p>
        <p className="text-sm text-secondary font-medium tracking-wide">
          An Expedition Specialist will contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', interest: 'Select an Expedition', message: '' });
          }}
          className="bg-primary text-white px-8 py-3 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 bg-white/80 backdrop-blur-md">
      <div className="mb-8">
        <h2 className="font-h2 text-3xl font-extrabold text-primary">Send a Message</h2>
        <p className="text-sm text-on-surface-variant/80 mt-1">
          Fill out the form below and start planning your bespoke journey.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-xs text-primary/75 tracking-wider font-semibold ml-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">person</span> Name
            </label>
            <input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/90 border-2 border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/15 rounded-xl p-4 font-body-md transition-all outline-none"
              placeholder="Your full name"
              type="text"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-xs text-primary/75 tracking-wider font-semibold ml-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">mail</span> Email
            </label>
            <input
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/90 border-2 border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/15 rounded-xl p-4 font-body-md transition-all outline-none"
              placeholder="email@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-xs text-primary/75 tracking-wider font-semibold ml-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">phone</span> Phone Number
            </label>
            <input
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/90 border-2 border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/15 rounded-xl p-4 font-body-md transition-all outline-none"
              placeholder="+91 98765 43210"
              type="tel"
            />
          </div>
          {/* Service Interest */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-xs text-primary/75 tracking-wider font-semibold ml-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">explore</span> Trip Interest
            </label>
            <div className="relative">
              <select
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="bg-white/90 border-2 border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/15 rounded-xl p-4 w-full font-body-md transition-all outline-none appearance-none pr-10 cursor-pointer"
              >
                <option disabled value="Select an Expedition">Select an Expedition</option>
                <option value="Student & Educational Program">Student &amp; Educational Program</option>
                <option value="Luxury & Leisure Vacation">Luxury &amp; Leisure Vacation</option>
                <option value="Adventure & Expedition Trek">Adventure &amp; Expedition Trek</option>
                <option value="Corporate CSR & Team Building">Corporate CSR &amp; Team Building</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary/60">
                <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-xs text-primary/75 tracking-wider font-semibold ml-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">rate_review</span> Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/90 border-2 border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/15 rounded-xl p-4 font-body-md transition-all outline-none"
            placeholder="Tell us about your dream trip, destination choice, dates, or school travel needs..."
            rows={4}
          />
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#92b240] to-[#33a4e3] hover:from-[#33a4e3] hover:to-[#92b240] text-white py-4.5 rounded-full font-h3 text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
              Processing Request...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-xl">send</span>
              Submit Booking Inquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}

