import React from 'react';

export default function FounderStory() {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-secondary-fixed/30 rounded-xl rotate-3 -z-10" />
          <img alt="Founder Portrait" className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6L79uK2hW7JtGl6o2uYTNG2GPgL0uZiKvaiGfLuiRO_VeLZutRpVqiB8B4-Qf4fnBz14xIAbOnJshyOwQht_V9TCE30gBv-si8osbilezNZhvMejRiWeBlAvr_EtnPXZB_nNUV_FOcQ-ymqmmU9MOfUQRczhY2zsUGXOwpQdTytxf6kZgPKUijJ6iiE-yADptaOT_c6Ap-T-G1kJtVZ0qYhgFbZvlRD1O9KWH0i_2EIKbrKrk5iFIOIviJvRpGjwYQeL-6fwNSVJ8" />
          <div className="absolute bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-xl hidden md:block">
            <p className="font-h3 text-h3 italic">"Adventure is the best educator."</p>
            <p className="font-label-caps text-label-caps mt-2 opacity-70">— Julian Sterling, Founder</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-h2 text-h2 text-primary mb-8">The Spark of Discovery</h2>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>It began in the high altitudes of the Himalayas, where Julian Sterling realized that modern travel had lost its soul. In a world of curated snapshots, the true grit and glory of an expedition were being replaced by convenience.</p>
            <p>Expedition Expertz was founded on a singular vision: to bridge the gap between luxury comfort and raw, transformative exploration. We believe that stepping outside your comfort zone is where the most profound personal growth occurs.</p>
            <p>Today, we lead a global community of seekers who value the journey as much as the destination. Our expertise isn't just in logistics; it's in the human experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
