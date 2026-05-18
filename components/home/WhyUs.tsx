import React from "react";

const differentiators = [
  {
    icon: "design_services",
    bg: "bg-secondary-container",
    iconColor: "text-on-secondary-container",
    title: "Tailor-Made Itineraries",
    desc: "Every traveler is unique. That’s why we don’t believe in “one-size-fits-all” travel packages. Every itinerary is thoughtfully crafted based on interests, goals, comfort, and experiences.",
  },
  {
    icon: "favorite",
    bg: "bg-primary-container",
    iconColor: "text-on-primary-container",
    title: "Meaningful Experiences",
    desc: "We focus on journeys that create stories, learning opportunities, and emotional connections rather than ordinary sightseeing tours. We believe travel should touch your soul.",
  },
  {
    icon: "local_library",
    bg: "bg-tertiary-container",
    iconColor: "text-on-tertiary-container",
    title: "Experiential Learning Experts",
    desc: "From educational IVs and OLE programs to CAS and volunteering activities, we create comprehensive programs that combine structured learning with real-world exposure.",
  },
  {
    icon: "landscape",
    bg: "bg-emerald-100",
    iconColor: "text-emerald-800",
    title: "Adventure & Exploration",
    desc: "From Himalayan treks and bike expeditions to hidden, offbeat destinations and guided hiking experiences, we help travelers step out of their comfort zone safely.",
  },
  {
    icon: "public",
    bg: "bg-blue-100",
    iconColor: "text-blue-800",
    title: "Global & Local Reach",
    desc: "We operate across India and international destinations with trusted ground-level partnerships and carefully designed, verified local travel experiences.",
  }
];

export default function WhyUs() {
  return (
    <section className="bg-surface py-24 relative overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.25em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary font-h2">
            What Makes Us Different?
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            We are more than a travel company. We are architects of life-altering experiences, specialized in combining safety, education, adventure, and customization.
          </p>
        </div>

        {/* 5-Item Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {differentiators.map((d, index) => (
            <div
              key={index}
              className={`glass-card p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white ${
                index >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className={`w-14 h-14 ${d.bg} rounded-xl flex items-center justify-center ${d.iconColor} mb-6 shadow-sm`}>
                <span className="material-symbols-outlined text-3xl font-light">{d.icon}</span>
              </div>
              <h3 className="font-h3 text-xl font-bold text-primary mb-3">{d.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

