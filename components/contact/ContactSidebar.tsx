import React from 'react';

export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-card-gap">
      <div className="glass-panel p-10 rounded-xl shadow-lg flex flex-col gap-6">
        <h3 className="font-h3 text-h3 text-primary">Quick Connect</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <a className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-label-caps text-label-caps hover:brightness-110 transition-all" href="#">
            <span className="material-symbols-outlined">chat</span>
            WHATSAPP CHAT
          </a>
          <a className="flex-1 flex items-center justify-center gap-3 bg-primary text-on-primary py-4 rounded-full font-label-caps text-label-caps hover:bg-primary-container transition-all" href="tel:+1234567890">
            <span className="material-symbols-outlined">call</span>
            PHONE SUPPORT
          </a>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <div className="font-h3 text-[1.125rem] text-primary">Expedition Hub</div>
              <p className="text-on-surface-variant">123 Adventure Way, Cascade Peaks, WA 98001</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-xl shadow-lg overflow-hidden h-[300px] relative group">
        <img
          alt="Map location"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4keD_zugE-F9tir8NwGCtEMEZuuLlb5-3Rubv2TThtjENATSyOEiySa53DTiGieNnlYFw9mMHHWocjMYnUtjiiUyT5MzQHvDpDolGwru4tDuPkakkgpN3geM43qk4gW8dmOuZpIEOtDcAwsOLMfe3UKRVRjUt46c54dw4OZpPdrfANYgMuF688ntTsplmGHqdkVq0Zm3AAF3tSpqWQSbfwyNxIiD4qK_KbKzw6R29c03IFrTqd5mzLTNoee6qfVbiFg8IroMsdDQ"
        />
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-2xl animate-bounce">
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
          </div>
        </div>
      </div>
    </div>
  );
}
