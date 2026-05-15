import React from 'react';

export default function SchoolHero() {
  return (
    <header className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUBlVLny2XQeIj9i6CmfXQQjvk_RA5Cd6O9R7MWFO8iQA47MWx1tuhe5embKkanyMkKAOVk9i5xO-ArnewVA7MCPAf5OQ3RIsimv9EDql7r70HQ8gErQoDE3GW31sfKSVuWYecRMjZ6qFvk0GppB3DHscHuFAr4iuZ6Dxb_bvuIKHFPnh7FLiyOjgzvfnSkpqz_bN45uut_Cjyztrfq22uxjjOonSzbapTmFzTa6VjhZyYIDpyl3TihlQ4Rr8n8gEmEEZvW1KiRFc" alt="Students exploring" />
        <div className="absolute inset-0 cinematic-scrim" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block font-label-caps text-label-caps bg-secondary/90 backdrop-blur-md px-4 py-1 rounded-full mb-6">Empowering Future Explorers</span>
          <h1 className="font-h1 text-h1 mb-6">The World is Your Classroom</h1>
          <p className="font-body-lg text-body-lg mb-8 opacity-90">Curating transformative educational journeys that blend curriculum with character building. We turn textbooks into trails and history into horizons.</p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-gradient text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full flex items-center gap-2 group">
              Request School Prospectus
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
            </button>
            <button className="glass-card text-white font-label-caps text-label-caps px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all">
              View Sample Itinerary
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
