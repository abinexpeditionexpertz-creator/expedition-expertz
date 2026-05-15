import React from 'react';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTfC3wjxLUW3WWo25UoBaOqLSE90DeY1i4GkTCUvpDTIDTFsPHfRl98tjkOsqvXYRKfThjb5ApGNF1KSWd6rEBZFT5LUIQJKsbWlH_vHPWMw-9wnIZjyWTjVakO8s3h5-K1mXrXG21J44bwz5vqQH6vphPtPGjEY1i0Ib_1ZUEWfanr-qsnKuJp8d4qEAbwAm8XUQrR_d6g5RkNMXNu79X4Zz7VvFJ8f8b26o5p78KO2yOl6DMvSW170h1W_uxLLPb3D2hIT2Fp5w"
          alt="Mountain expedition at golden sunset"
        />
        <div className="absolute inset-0 bg-primary/20" />
      </div>
      <div className="relative z-10 text-center px-gutter max-w-4xl mx-auto">
        <h1 className="font-h1 text-h1 text-white mb-6 drop-shadow-lg">Learn • Explore • Grow</h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Embark on curated expeditions that transform perspectives. We bridge the gap between curiosity and discovery
          through world-class adventure leadership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 rounded-full bg-tertiary-container text-on-tertiary-container font-h3 text-[1rem] shadow-xl hover:scale-105 transition-all duration-300">
            Explore Packages
          </button>
          <button className="px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-h3 text-[1rem] shadow-xl hover:scale-105 transition-all duration-300">
            Plan Your Journey
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path className="curved-divider" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
}
