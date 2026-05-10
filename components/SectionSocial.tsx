'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, Music2 } from 'lucide-react';

type SocialLink = {
  title?: string;
  url?: string;
  type?: string;
};

type SocialProps = {
  links?: SocialLink[];
};

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={20} />,
  TikTok: <Music2 size={20} />,
  WhatsApp: <MessageCircle size={20} />,
  Maps: <MapPin size={20} />,
};

export function SectionSocial({ links }: SocialProps) {
  return (
    <section id="social" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">Social channels</span>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Follow the festival as it unfolds.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">Instagram, TikTok, WhatsApp and Maps are curated through Sanity to keep the festival identity connected and live.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links?.map((link) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="glass-panel flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/60 p-6 transition hover:border-magenta/40 hover:bg-magenta/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-magenta/10 text-magenta">
                {iconMap[link.type || 'Instagram']}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sage">{link.type}</p>
                <p className="text-base font-semibold text-cream">{link.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
