import React from 'react';

export default function AboutHero() {
  return (
    <header className="relative h-[819px] w-full flex items-center justify-center overflow-hidden">
      <img alt="Majestic Mountain Range" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL6bM5AL6NkTeNwErAsHM9W7qjfrs7lKkXoV4_o04mio0pidRHG05KtzZjoVXt3UA7Ctbirx45_GLPw7BkB8kxcy6m321bTL5WfslXNAok9777mWZCvPnXIMZTDD_wyFYjvYf01kCvPxvSi93xHpoLu-71bU0vcXO-74w9QucCy6MEJjmEtx7H7E5nXkCdnh8tztkUqkhMjIXxOWrpqCnOkKvyRA5r_EmwXZ1FXLbTmzhjBffSEORjVvS3VF11qU8ENjMOdMuIIdg" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background" />
      <div className="relative z-10 text-center px-gutter">
        <h1 className="font-h1 text-h1 text-white mb-6 drop-shadow-2xl">Beyond the Horizon</h1>
        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto drop-shadow-lg">We don't just plan trips; we craft the human stories of discovery, resilience, and awe-inspiring connection with our planet.</p>
      </div>
    </header>
  );
}
