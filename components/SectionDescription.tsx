'use client';

import { motion } from 'framer-motion';

type DescriptionProps = {
  data?: {
    headline?: string;
    story?: string;
    quote?: string;
    imageCaption?: string;
  };
};

export function SectionDescription({ data }: DescriptionProps) {
  return (
    <section id="story" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">Event story</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{data?.headline || 'Atmosphere, narrative and festival energy converge.'}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/80">{data?.story || 'Festival Teknik 2026 emerges from a fever dream of cinematic stagecraft and underground performance — designed for guests who inhabit the edge of art and nightlife.'}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="glass-panel rounded-[36px] border border-white/10 bg-black/55 p-10 shadow-glow">
            <h3 className="text-3xl font-semibold text-cream">{data?.quote || 'Cinematic motion meets modern ritual.'}</h3>
            <p className="mt-6 text-base leading-8 text-slate-300">The event description blends editorial frames with spacious typography, helping each story moment land like a cinematic magazine spread.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="glass-panel rounded-[36px] border border-white/10 bg-[#0d0d0d]/80 p-10 shadow-glow">
            <p className="text-base leading-8 text-slate-200/85">{data?.quote ? `“${data.quote}”` : 'A bold festival platform crafted for modern audiences and curators alike.'}</p>
            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-sage">{data?.imageCaption || 'Designed as an editorial space for a premium concert profile.'}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
