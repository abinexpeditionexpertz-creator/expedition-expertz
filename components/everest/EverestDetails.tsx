import React from 'react';

const highlights = [
  { title: 'Kala Patthar Ascent', desc: 'Witness the most spectacular sunrise over Mount Everest from 5,545m altitude.' },
  { title: 'Sherpa Culture', desc: 'Explore ancient monasteries in Namche Bazaar and Tengboche, the heart of Sherpa land.' },
  { title: 'Sagarmatha Park', desc: 'Journey through a UNESCO World Heritage site featuring unique flora and fauna.' },
  { title: 'Khumbu Icefall', desc: 'Stand at the foot of the world\'s highest peak and witness the massive glacier flow.' },
];

const itinerary = [
  { label: 'Day 1: Arrival in Kathmandu', title: 'Welcome to Nepal', desc: 'Arrive at Tribhuvan International Airport. Our representative will escort you to your boutique hotel in Thamel. Evening orientation and traditional welcome dinner.' },
  { label: 'Day 2-3: Lukla & Namche', title: 'Flight to the Gateway', desc: 'Scenic flight to Lukla and trek to Phakding. On day 3, a steep ascent brings you to Namche Bazaar, the vibrant Sherpa capital.' },
  { label: 'Day 4-11: Base Camp Journey', title: 'The Ascent to 5,364m', desc: 'Acclimatization days in Namche and Dingboche. Trek through Lobuche and Gorak Shep to reach the legendary Everest Base Camp. Experience the majesty of the Khumbu Glacier.' },
  { label: 'Day 12-14: The Return', title: 'Descent & Departure', desc: 'Rapid descent to Pheriche and back to Lukla. Final flight back to Kathmandu for celebration and farewells.' },
];

export default function EverestDetails() {
  return (
    <div className="lg:col-span-8 space-y-section-padding">
      <section id="highlights">
        <h2 className="font-h2 text-h2 text-primary mb-8">Travel Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
              <div>
                <h3 className="font-h3 text-body-lg font-bold text-primary">{h.title}</h3>
                <p className="text-on-surface-variant">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="itinerary">
        <h2 className="font-h2 text-h2 text-primary mb-12">Expedition Itinerary</h2>
        <div className="relative pl-8 border-l-2 border-outline-variant/30 space-y-12">
          {itinerary.map((day) => (
            <div key={day.label} className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary ring-8 ring-background" />
              <h4 className="font-label-caps text-label-caps text-secondary mb-2">{day.label}</h4>
              <h3 className="font-h3 text-h3 text-primary mb-4">{day.title}</h3>
              <p className="text-on-surface-variant text-body-lg">{day.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-8 rounded-xl">
          <h3 className="font-h3 text-h3 text-primary mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-on-secondary-container">task_alt</span>
            What's Included
          </h3>
          <ul className="space-y-4">
            {['All airport transfers and local transport', 'Boutique hotel in Kathmandu (3 nights)', 'All teahouse accommodation during trek', 'Licensed high-altitude guide and porters'].map((item) => (
              <li key={item} className="flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm mt-1">check</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl">
          <h3 className="font-h3 text-h3 text-primary mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-error">cancel</span>
            What's Excluded
          </h3>
          <ul className="space-y-4">
            {['International airfare to Kathmandu', 'Nepal entry visa fees', 'Personal trekking gear and insurance', 'Tips for guides and porters'].map((item) => (
              <li key={item} className="flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-error/60 text-sm mt-1">close</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
