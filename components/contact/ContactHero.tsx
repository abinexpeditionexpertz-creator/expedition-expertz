import React from 'react';

export default function ContactHero() {
  return (
    <div className="relative h-[614px] w-full overflow-hidden">
      <img
        alt="Peaceful beach base camp"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW5i41eEqVtqB8vMy3GDKTPCQCoorueKfva0lqYUbuTy3GUozs5To8eSY8SOUbbtV2HnbnOnscIm0dqP19YyzH7uB45HHfPVm5lfiGi5Tstb1YB_nt5y1RnWBpsJkOIi9jT-Hf2gh1JsqB0X-uJGRef-xsxNYx3Uw0b2UjNYapcdVn4T0oykSyOd-Vk84Cuwgv2rFyD_XgedNbDOnj8GMuMaGN6wJqF4erpiHLSF6culY1SAPAPtTPWSap3BpQiuOnbs59m0E1i5Y"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-surface" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-gutter">
        <h1 className="font-h1 text-h1 text-primary mb-4 drop-shadow-lg">Let's Chart Your Course</h1>
        <p className="font-body-lg text-body-lg text-primary/80 max-w-2xl">
          Connect with our expedition specialists to craft your next unforgettable journey into the heart of nature.
        </p>
      </div>
    </div>
  );
}
