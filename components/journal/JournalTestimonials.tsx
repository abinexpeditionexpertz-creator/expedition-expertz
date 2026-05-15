import React from 'react';

const testimonials = [
  { quote: '"The expedition to the Amazon wasn\'t just a trip; it was a profound shift in my understanding of our planet\'s fragility."', name: 'Sarah Jenkins', tag: "AMAZON EXPEDITION '23", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnwtX-dEN5_J2Ip9_YgjnrTD6uVrlM5MXnHc4Jih4C3zvHo9D1zlP_y7FjoxZRHgqOHo4qRZM_uvSXgoZG0x2AYL-Kn0rSbYdxjrRrCvlmm609pIJbP9ZKzWJ6yAPjjh3SCbytU5l3fxdC3XEls3Oc8j9yLbPsM92cscBEF3IKteTJjAopilsk_WYQTfb5NYs42W0AZQVGin2F6goB6uA5hmRwpcwTjt8CQnk9ekyOWGzvJB8RxYns3dHG2eprP2pS-6rLxuHLcPM' },
  { quote: '"Navigating the fjords was like moving through a masterpiece. The curation of local food and history experts brought the landscape to life."', name: 'Markus Weber', tag: "NORDIC JOURNEY '24", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXWVWFXkp3BXYkv0terbbKHIOnxFr9maSWCu2149Vsnq4uXeaRtdAAUS70mZYsHfpqKHD3q3b25Vu8hY9SUqhXx4l_k2A4XxJpMlvFlctsAcOpB11rZiHBIIX6qZB97RinhNCiv268MkIaG1d5evpJ3XkpMQEejowg8y8prWVGMw9LxsJEFSPkJFg757BGKBcN5D4IUnB3E720xC6u96PxcjEO5MfmoDt6ndsd4OgEB5MRhoAGIRahL0qruJRLF6K-dynp4Rrqo' },
  { quote: '"An educational trip that felt like a grand adventure. My kids are still talking about the ancient temples and the legends the guides shared."', name: 'Elena Rodriguez', tag: "SILK ROAD EXPEDITION '23", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb708uqMLj4KSa20i1waWKnVuux3Xt37JuBEQHX5hNO9TTcYIUD0tf3Yt8I5KbGho_6j-9s2-75JCQqZPX-seP0elwu7illFSx-e_KtVtpUPxBU1SMmancOHhZB9pvWOCh4SqkHQ-P3qH3JW6kuyFxdt3iCBcx9WKlirY5eqru7D7iHFRgAzNceqBmDkCkYkut8IESUzL30fUcvR2_YRbsmPFvFzGMOoGe4j96rXFj-W9wfbZKT8ktTtioR0XwHOURfnI1-t53798' },
];

export default function JournalTestimonials() {
  return (
    <section className="bg-primary py-section-padding relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter text-center mb-16">
        <h2 className="font-h2 text-h2 text-white mb-4">From Our Travelers</h2>
        <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto">Real stories from real explorers who ventured into the unknown with us.</p>
      </div>
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-card-gap">
        {testimonials.map((t) => (
          <div key={t.name} className="p-8 glass-card rounded-xl bg-white/5 border-white/10 text-white">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">format_quote</span>
            <p className="font-body-md italic mb-8 text-white/90">{t.quote}</p>
            <div className="flex items-center gap-4">
              <img alt="Traveler" className="w-12 h-12 rounded-full border-2 border-secondary-fixed" src={t.img} />
              <div className="text-left">
                <h4 className="font-h3 text-body-md font-bold">{t.name}</h4>
                <p className="font-label-caps text-[0.6rem] text-white/60">{t.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
