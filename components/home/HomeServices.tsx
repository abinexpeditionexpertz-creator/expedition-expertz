import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Student & Educational",
    tagline: "Inspiring Leadership & Growth",
    icon: "school",
    bgClass: "from-[#92b240]/10 to-[#33a4e3]/5",
    iconBg: "bg-secondary-container text-on-secondary-container",
    description: "Designed to inspire confidence, teamwork, leadership, environmental awareness, and global exposure beyond classrooms.",
    items: [
      "Educational tours & IVs",
      "Outdoor Learning Experiences (OLE)",
      "CAS Programs (Creativity, Activity & Service)",
      "School excursions & Leadership camps",
      "Volunteering & Marine conservation",
      "Cultural immersion & University travel"
    ],
    ctaText: "Inquire About Programs",
    ctaLink: "/contact",

  },
  {
    title: "Luxury & Leisure Travel",
    tagline: "Indulgence, Comfort & Escapes",
    icon: "hotel",
    bgClass: "from-[#33a4e3]/10 to-primary-container/10",
    iconBg: "bg-primary-container text-on-primary-container",
    description: "End-to-end meticulous travel planning for travelers seeking relaxation, ultimate comfort, and memorable escapes.",
    items: [
      "Honeymoon packages & retreats",
      "Family vacations & wellness escapes",
      "International holidays & beach getaways",
      "Customized leisure itineraries",
      "Guided local experiences & tours",
      "Premium flight & hotel bookings"
    ],
    ctaText: "Browse Leisure Packages",
    ctaLink: "/packages",
  },
  {
    title: "Adventure & Expedition",
    tagline: "Discover the Unexplored Inside",
    icon: "hiking",
    bgClass: "from-tertiary-container/10 to-[#92b240]/5",
    iconBg: "bg-tertiary-container text-on-tertiary-container",
    description: "For explorers and thrill seekers who believe adventure is not about danger — but about self-discovery.",
    items: [
      "Himalayan trekking expeditions",
      "Bike tours & backpacking journeys",
      "Guided hiking trips & camping",
      "Wildlife & nature expeditions",
      "Offbeat destination explorations",
      "Mountain climbing & leadership camps"
    ],
    ctaText: "View Treks & Tours",
    ctaLink: "/packages",
  },
  {
    title: "Corporate CSR Initiatives",
    tagline: "Travel with Lasting Positive Impact",
    icon: "nature_people",
    bgClass: "from-green-500/10 to-emerald-700/5",
    iconBg: "bg-green-100 text-green-800",
    description: "We strive to ensure that every journey contributes positively to society, supporting communities, culture, and the ecosystem.",
    items: [
      "Supporting local communities",
      "Promoting sustainable tourism",
      "Encouraging environmental awareness",
      "Marine & wildlife conservation",
      "Supporting local guides & small businesses",
      "Responsible waste management"
    ],
    ctaText: "Partner with Us",
    ctaLink: "/contact",
  }
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      {/* Decorative vector assets */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary font-h2">
            Our Core Services
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            From classroom extensions to high-altitude peaks, and premium honeymoons to community development — we design and execute meaningful, customized itineraries with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card p-8 md:p-10 rounded-2xl border border-white/50 bg-gradient-to-br ${service.bgClass} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    {service.tagline}
                  </span>
                  <h3 className="font-h3 text-2xl font-bold text-primary mt-1 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-3xl font-light">
                    {service.icon}
                  </span>
                </div>
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="border-t border-outline-variant/30 my-6 pt-6">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-4">
                  What we specialize in:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-on-surface-variant/90 font-medium">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">
                        check
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <Link
                  href={service.ctaLink}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
