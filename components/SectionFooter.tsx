'use client';

import { Instagram, MessageCircle, Music2 } from 'lucide-react';

type FooterProps = {
  data?: {
    copyright?: string;
    tagline?: string;
    social?: Array<{ type?: string; url?: string }>;
  };
};

export function SectionFooter({ data }: FooterProps) {
  return (
    <footer className="bg-ink px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/10 bg-[#0b0b0b]/90 p-8 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sage">Festival Teknik 2026</p>
            <p className="mt-4 text-2xl font-serif text-cream">{data?.tagline || 'A cinematic event profile with soulful design.'}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-slate-300">
            {data?.social?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.18em] text-cream transition hover:border-magenta/40 hover:bg-magenta/10">
                {link.type === 'Instagram' && <Instagram size={18} />}
                {link.type === 'WhatsApp' && <MessageCircle size={18} />}
                {link.type === 'TikTok' && <Music2 size={18} />}
                {link.type}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-slate-400">
          {data?.copyright || '© 2026 Festival Teknik. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}
