import React from 'react';

export default function ContactHero() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden">
      <img
        alt="Peaceful beach base camp"
        className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[6000ms] ease-out"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW5i41eEqVtqB8vMy3GDKTPCQCoorueKfva0lqYUbuTy3GUozs5To8eSY8SOUbbtV2HnbnOnscIm0dqP19YyzH7uB45HHfPVm5lfiGi5Tstb1YB_nt5y1RnWBpsJkOIi9jT-Hf2gh1JsqB0X-uJGRef-xsxNYx3Uw0b2UjNYapcdVn4T0oykSyOd-Vk84Cuwgv2rFyD_XgedNbDOnj8GMuMaGN6wJqF4erpiHLSF6culY1SAPAPtTPWSap3BpQiuOnbs59m0E1i5Y"
      />
      {/* Ambient dark gradient overlay to ensure crystal clear readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-surface-container-low" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-gutter space-y-4">
        <span className="font-label-caps text-xs text-secondary tracking-[0.3em] uppercase bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
          Get In Touch
        </span>
        <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
          Let&apos;s Chart Your Course
        </h1>
        <p className="font-body-lg text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
          Connect with our expedition specialists to craft your next customized journey into the heart of nature, culture, and adventure.
        </p>
      </div>
    </div>
  );
}

