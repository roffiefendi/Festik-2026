'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildImageUrl } from '@/lib/sanity';

type Sponsor = {
  sponsorName?: string;
  logo?: any;
  website?: string;
};

type SponsorsProps = {
  sponsors?: Sponsor[];
  partners?: Sponsor[];
};

export function SectionSponsors({ sponsors, partners }: SponsorsProps) {
  return (
    <section id="sponsors" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">Sponsors</span>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">A premium showcase for partner brands.</h2>
        </div>
        <div className="glass-panel rounded-[36px] border border-white/10 bg-black/50 p-8 shadow-glow">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {sponsors?.map((sponsor) => (
              <a
                key={sponsor.sponsorName}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-magenta/40 hover:bg-magenta/5"
              >
                {sponsor.logo ? (
                  <Image
                    src={buildImageUrl(sponsor.logo).url()}
                    alt={sponsor.sponsorName || 'Sponsor'}
                    width={140}
                    height={80}
                    className="max-h-16 object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-base font-semibold text-cream">{sponsor.sponsorName}</span>
                )}
              </a>
            ))}
          </motion.div>
        </div>
        <div className="mt-12 grid gap-5 overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 p-6">
          <span className="text-sm uppercase tracking-[0.32em] text-sage">Partners</span>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners?.map((partner) => (
              <a
                key={partner.sponsorName}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-3xl bg-white/5 p-5 transition hover:bg-white/10"
              >
                {partner.logo ? (
                  <Image
                    src={buildImageUrl(partner.logo).url()}
                    alt={partner.sponsorName || 'Partner'}
                    width={120}
                    height={60}
                    className="max-h-14 object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-sm uppercase tracking-[0.28em] text-slate-200">{partner.sponsorName}</span>
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
