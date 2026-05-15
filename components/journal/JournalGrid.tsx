import React from 'react';

export default function JournalGrid() {
  return (
    <section className="py-section-padding relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap">
          <div className="md:col-span-8 group overflow-hidden rounded-xl glass-card relative h-[500px]">
            <img alt="Amazon Basin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOl8GL4MLQ3iGbGL2G5GdYLa4oyixtiFYwRJqWiuFgonMYQDJfqBJgWjdZRNveABYurGfGJT15mFStVSRwzdytrbpen5AV7fURvC47wuJjd6OVvZQZP_q8PDG6tiGLnN7DMLVv0DAKfMhc2mwv4nXdHg34ze86DNFXJk3hYWxlx0NdJwxROm4QCGyoIstnos98CDNr0Cz1l0lsPOn8iz2rIZ-M0qSWGYqKuEJvW1Ag_AoMISF5AYGYHBacQMNa6E4rWgXmUVuY54" />
            <div className="absolute inset-0 scrim-gradient opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-secondary-fixed font-label-caps text-label-caps mb-2 block">Nature</span>
              <h3 className="font-h2 text-h3 mb-4">Deep into the Amazon: A Biologist's Log</h3>
              <p className="font-body-md text-white/70 line-clamp-2 mb-6">Discover the hidden micro-ecosystems flourishing within the world's largest rainforest canopy.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary-fixed hover:underline" href="#">Read More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden rounded-xl glass-card flex flex-col">
            <div className="h-64 overflow-hidden">
              <img alt="Culture Trip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAni4CFejTD_e34VdWzUBduY2YNgmme_plE1vh5ON9IBj6iYWbggPeCVeX42AZUnJg4_L8KO8bu31ZndGWzvgfq0nwNV0Ge8hO5lGxkjzqAfQcVDYuaIfO8lUOcVXEO1kfKoNHyLr4GKRvX7H1iXHXThliTqGVsaGUrApIAVN2yh1FJwLa23yVbzP_FOY-xSR1OwOgS7h-c6u2Tfs3A6qFg3tX5coHxxO3etL1_mlayGgqAkwqAvR13M8Xo_sJRSbS8704QeVwCoU" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-on-tertiary-container font-label-caps text-label-caps mb-2 block">Culture</span>
              <h3 className="font-h3 text-h3 mb-3 text-primary">The Lost Temples of Cambodia</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">Uncovering the architectural marvels reclaimed by the forest in the heart of Southeast Asia.</p>
              <div className="mt-auto">
                <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors" href="#">Read More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden rounded-xl glass-card flex flex-col">
            <div className="h-64 overflow-hidden">
              <img alt="Mountain Expedition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1HtCVXZ71l7WH1U_C-HT7Fw7u0TcyPXZ4C3PLnFgUqZCihkNLnGAh7I4v6Cd9SSzogqGyRI6lTph_F0CrlQv6iJFfFaWdCsubGDpxK1tCI_vxI6FlWV03m8AFDn1mYeU6MUnZdH8CiqTQ1SyYEjjh3qYdRFD0r7llOM1VyjZX2w4YfFnl897t-RahBC5B0F7YvMoqifHYgBLA7lX5jjhwf5zlLwXDYQwJwBcKtAAMS1nnZL15_Us9iG51D0_fE0tAcjFfXWU9Mg" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-secondary font-label-caps text-label-caps mb-2 block">Adventure</span>
              <h3 className="font-h3 text-h3 mb-3 text-primary">Summiting the Impossible Peak</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">A first-hand account of the grueling 20-hour push to reach the peak of Mount Fitz Roy.</p>
              <div className="mt-auto">
                <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors" href="#">Read More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 group overflow-hidden rounded-xl glass-card flex flex-col md:flex-row">
            <div className="md:w-1/2 overflow-hidden">
              <img alt="Education Journey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtolupqjWI-R7_tocoI-pp5b82S-iYPGoujp3HxPij_B-TPldHwDjgJhiY6Fc_rWy4lnccZGSB6iYPJd1uMBYPqHHMXBSEWEp10QgLOF--v7GkL5AJ2KbZIsF5NLocIYy5ZLlpvlo5Pq1PuOgJuVmUur6mnKN-n3BgOtE5bKsGqKnXKsk0CkopOt64zWMr_Tj1iSYDI3s_RVUeqX-irL73HkGTpxl8fyVZULrvCWxzGX1g0Nmt3S6UsLX7c4olhRGYqjaBJeb98Qo" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <span className="text-primary-container font-label-caps text-label-caps mb-2 block">Education</span>
              <h3 className="font-h2 text-h3 mb-4 text-primary">History Reimagined: The Silk Road</h3>
              <p className="font-body-md text-on-surface-variant mb-6">How modern archaeological techniques are rewriting the history of ancient trade routes between East and West.</p>
              <div className="mt-auto">
                <a className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-label-caps text-label-caps hover:scale-105 transition-transform" href="#">Explore Archive</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="px-10 py-4 rounded-full border-2 border-primary text-primary font-h3 text-body-md hover:bg-primary hover:text-white transition-all">
            Load More Journals
          </button>
        </div>
      </div>
    </section>
  );
}
