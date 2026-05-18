import React from 'react';

export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* Quick Connect & Details Card */}
      <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 bg-white/80 backdrop-blur-md flex flex-col gap-8">
        <div>
          <h3 className="font-h2 text-2xl font-extrabold text-primary">Quick Connect</h3>
          <p className="text-sm text-on-surface-variant/80 mt-1">
            Reach out via our instant lines or direct communication hubs.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
          <a 
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-full font-label-caps text-xs tracking-wider hover:brightness-110 shadow-md hover:shadow-xl transition-all duration-300 transform active:scale-95" 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            WHATSAPP CHAT
          </a>
          <a 
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary shadow-md hover:shadow-xl transition-all duration-300 transform active:scale-95" 
            href="tel:+919876543210"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            PHONE SUPPORT
          </a>
        </div>

        {/* Details Grid */}
        <div className="flex flex-col gap-6 border-t border-outline-variant/30 pt-8">
          {/* Address */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <div>
              <div className="font-h3 text-base font-bold text-primary">Expedition Hub</div>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">
                Sector 5, Salt Lake City, Kolkata, WB 700091, India
              </p>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div>
              <div className="font-h3 text-base font-bold text-primary">Email Support</div>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">
                <a href="mailto:hello@expeditionexpertz.com" className="hover:text-secondary transition-colors block">hello@expeditionexpertz.com</a>
                <a href="mailto:bookings@expeditionexpertz.com" className="hover:text-secondary transition-colors block">bookings@expeditionexpertz.com</a>
              </p>
            </div>
          </div>

          {/* Direct Lines */}
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
              <span className="material-symbols-outlined text-2xl">phone_iphone</span>
            </div>
            <div>
              <div className="font-h3 text-base font-bold text-primary">Direct Lines</div>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">
                +91 98765 43210 (Inquiries)
                <br />
                +91 87654 32109 (Operations)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map container with rich frame styling */}
      <div className="glass-panel rounded-2xl shadow-xl overflow-hidden h-[320px] relative group border border-white/50">
        <img
          alt="Map location"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4keD_zugE-F9tir8NwGCtEMEZuuLlb5-3Rubv2TThtjENATSyOEiySa53DTiGieNnlYFw9mMHHWocjMYnUtjiiUyT5MzQHvDpDolGwru4tDuPkakkgpN3geM43qk4gW8dmOuZpIEOtDcAwsOLMfe3UKRVRjUt46c54dw4OZpPdrfANYgMuF688ntTsplmGHqdkVq0Zm3AAF3tSpqWQSbfwyNxIiD4qK_KbKzw6R29c03IFrTqd5mzLTNoee6qfVbiFg8IroMsdDQ"
        />
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Animated map pin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center justify-center animate-bounce border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
          </div>
        </div>

        {/* Floating Direction Badge */}
        <div className="absolute bottom-4 right-4 bg-primary/90 text-white backdrop-blur-md px-4 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase shadow-md flex items-center gap-1.5 border border-white/10">
          <span className="material-symbols-outlined text-xs">directions</span>
          <span>View on Maps</span>
        </div>
      </div>
    </div>
  );
}

