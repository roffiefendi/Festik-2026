'use client';

import { Mail, MessageCircle, MapPin, Instagram, Music2 } from 'lucide-react';

type ContactProps = {
  info?: {
    whatsapp?: string;
    email?: string;
    address?: string;
    instagram?: string;
    tiktok?: string;
  };
};

export function SectionContact({ info }: ContactProps) {
  return (
    <section id="contact" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">Contact</span>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Connect with Festival Teknik support.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">Reach out via WhatsApp, email, Instagram, TikTok or visit the festival address in Jakarta.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a href={`https://wa.me/${info?.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="glass-panel flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/60 p-6 shadow-glow hover:border-cyan/50">
            <MessageCircle className="text-cyan" size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sage">WhatsApp</p>
              <p className="text-base font-semibold text-cream">{info?.whatsapp}</p>
            </div>
          </a>
          <a href={`mailto:${info?.email}`} className="glass-panel flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/60 p-6 shadow-glow hover:border-magenta/50">
            <Mail className="text-magenta" size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sage">Email</p>
              <p className="text-base font-semibold text-cream">{info?.email}</p>
            </div>
          </a>
          <div className="glass-panel rounded-[28px] border border-white/10 bg-black/60 p-6 shadow-glow">
            <div className="flex items-center gap-4">
              <MapPin className="text-orange" size={24} />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-sage">Location</p>
                <p className="text-base font-semibold text-cream">{info?.address}</p>
              </div>
            </div>
          </div>
          <a href={info?.instagram} target="_blank" rel="noreferrer" className="glass-panel flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/60 p-6 shadow-glow hover:border-sage/50">
            <Instagram className="text-sage" size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sage">Instagram</p>
              <p className="text-base font-semibold text-cream">@festivalteknik</p>
            </div>
          </a>
          <a href={info?.tiktok} target="_blank" rel="noreferrer" className="glass-panel flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/60 p-6 shadow-glow hover:border-purple/50">
            <Music2 className="text-purple" size={24} />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sage">TikTok</p>
              <p className="text-base font-semibold text-cream">@festivalteknik</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
