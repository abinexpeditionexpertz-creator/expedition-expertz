import React from 'react';

export default function FounderStory() {
  return (
    <section className="py-24 px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Images & Graphics */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-secondary/15 rounded-2xl rotate-3 -z-10" />
          <img
            alt="Expedition Team in Mountains"
            className="rounded-2xl shadow-2xl w-full aspect-[4/3] md:aspect-[4/5] object-cover border-4 border-white"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTfC3wjxLUW3WWo25UoBaOqLSE90DeY1i4GkTCUvpDTIDTFsPHfRl98tjkOsqvXYRKfThjb5ApGNF1KSWd6rEBZFT5LUIQJKsbWlH_vHPWMw-9wnIZjyWTjVakO8s3h5-K1mXrXG21J44bwz5vqQH6vphPtPGjEY1i0Ib_1ZUEWfanr-qsnKuJp8d4qEAbwAm8XUQrR_d6g5RkNMXNu79X4Zz7VvFJ8f8b26o5p78KO2yOl6DMvSW170h1W_uxLLPb3D2hIT2Fp5w"
          />
          <div className="absolute bottom-8 -right-8 bg-primary text-white p-6 rounded-xl shadow-xl hidden lg:block border border-white/10 max-w-[280px]">
            <p className="font-h3 text-sm italic leading-relaxed">
              "We wanted to create a company that values experiences over extravagance and memories over materialism."
            </p>
            <p className="font-label-caps text-xs mt-3 text-secondary tracking-widest uppercase">
              — The Expedition Team
            </p>
          </div>
        </div>

        {/* Right Side: The Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.25em] uppercase block">
            Our Journey
          </span>
          <h2 className="font-h2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
            Our Story
          </h2>
          
          <div className="space-y-5 font-body-md text-on-surface-variant leading-relaxed">
            <p className="text-lg font-semibold text-primary">
              Expedition Expertz was born from a passion for meaningful travel and experiential learning.
            </p>
            <p>
              In a world where travel often becomes rushed and commercialized, we wanted to create a company that values experiences over extravagance and memories over materialism.
            </p>
            <p>
              Our team believes that every destination has a story, every culture has wisdom, and every journey has the potential to change a person’s life.
            </p>
            <p>
              That belief became Expedition Expertz. Today, we continue to connect travelers with authentic experiences that inspire curiosity, adventure, personal growth, and global understanding.
            </p>
          </div>

          {/* Key Bulletpoints */}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">check</span>
              <span className="text-sm font-bold text-primary">Curiosity &amp; Adventure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">check</span>
              <span className="text-sm font-bold text-primary">Personal Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">check</span>
              <span className="text-sm font-bold text-primary">Global Understanding</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">check</span>
              <span className="text-sm font-bold text-primary">Authentic Connect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

