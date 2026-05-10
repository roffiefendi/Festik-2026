'use client';

import { motion } from 'framer-motion';

type HighlightsProps = {
  data?: {
    guestStars?: number;
    sponsorPartners?: number;
    mediaReach?: string;
  };
};

const highlights = [
  { label: 'Guest stars', value: 'guestStars' },
  { label: 'Sponsor partners', value: 'sponsorPartners' },
  { label: 'Media reach', value: 'mediaReach' },
];

export function SectionHighlights({ data }: HighlightsProps) {
  return (
    <section id="highlights" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">Event highlights</span>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Measured reach, curated talent, premium impact.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">Each highlight is dynamically driven from Sanity CMS and presented as a glowing editorial counter to reinforce the festival’s cinematic identity.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index, duration: 0.9 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
            >
              <span className="text-sm uppercase tracking-[0.32em] text-sage/70">{item.label}</span>
              <p className="mt-6 text-5xl font-semibold text-cream">
                {data?.[item.value] ?? (item.value === 'mediaReach' ? '12M+' : '—')}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.value === 'mediaReach'
                ? 'International press and digital coverage across underground culture.'
                : item.value === 'guestStars'
                ? 'A curated lineup of headline artists and emerging performers.'
                : 'Partner brands supporting the festival narrative.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
