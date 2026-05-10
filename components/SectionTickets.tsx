'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildImageUrl } from '@/lib/sanity';

type Seller = {
  sellerName?: string;
  city?: string;
  whatsapp?: string;
  image?: any;
  active?: boolean;
};

type TicketsProps = {
  ticketSettings?: {
    onlineTitle?: string;
    onlineDescription?: string;
    onlineLink?: string;
    offlineIntro?: string;
  };
  sellers?: Seller[];
};

export function SectionTickets({ ticketSettings, sellers }: TicketsProps) {
  return (
    <section id="tickets" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.36em] text-sage">Ticket access</span>
            <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">{ticketSettings?.onlineTitle || 'Online ticket portal'}</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">{ticketSettings?.onlineDescription || 'Secure your festival pass for FESTIK 2026 and join the underground ceremony as a premium ticket holder.'}</p>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              href={ticketSettings?.onlineLink || 'https://wa.me/62XXXXXXXXXX'}
              className="inline-flex rounded-full bg-magenta px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-neon transition hover:bg-magenta/90"
            >
              Buy ticket
            </motion.a>
          </div>
          <div className="glass-panel rounded-[36px] border border-white/10 bg-black/55 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.32em] text-sage">Offline sellers</p>
            <h3 className="mt-4 text-3xl font-semibold text-cream">{ticketSettings?.offlineIntro || 'Local ticket collectors and premium seller contacts'}</h3>
            <div className="mt-8 space-y-4">
              {sellers?.map((seller) => (
                <div key={seller.sellerName} className="grid gap-4 rounded-[28px] border border-white/10 p-4 sm:grid-cols-[auto_1fr]">
                  <div className="h-28 w-28 overflow-hidden rounded-3xl bg-slate-950">
                    {seller.image && (
                      <Image
                        src={buildImageUrl(seller.image).url()}
                        alt={seller.sellerName || 'Seller image'}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-cream">{seller.sellerName}</p>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{seller.city}</p>
                    </div>
                    <a
                      href={`https://wa.me/${seller.whatsapp?.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${seller.active ? 'bg-cyan text-ink hover:bg-cyan/90' : 'bg-white/5 text-slate-300 cursor-not-allowed opacity-60'}`}
                    >
                      {seller.active ? 'Contact via WhatsApp' : 'Offline'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
