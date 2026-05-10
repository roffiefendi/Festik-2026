'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildImageUrl } from '@/lib/sanity';

type Artist = {
  artistName?: string;
  genre?: string;
  instagram?: string;
  performanceDate?: string;
  image?: any;
};

type GuestStarsProps = {
  artists?: Artist[];
};

export function SectionGuestStars({ artists }: GuestStarsProps) {
  return (
    <section id="guest-stars" className="section-container relative overflow-hidden px-6 py-32 sm:px-8 lg:px-12">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple/10 to-magenta/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-6"
        >
          <span className="inline-block w-fit bg-gradient-magenta px-4 py-2 rounded-full text-xs uppercase tracking-[0.36em] text-magenta/80 font-medium">Guest stars</span>
          <h2 className="max-w-3xl font-serif text-5xl leading-tight text-cream sm:text-6xl">A lineup that reads like a premium poster gallery.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">Each artist card is sourced from Sanity and presented with cinematic texture, layered shadow, and editorial scale.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists?.map((artist, index) => (
            <motion.article
              key={artist.artistName}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.8 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-card hover:shadow-elevated transition-all duration-500 hover:border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />
              <div className="relative h-96 overflow-hidden">
                {artist.image && (
                  <Image
                    src={buildImageUrl(artist.image).url()}
                    alt={artist.artistName || 'Artist'}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-6 py-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan font-medium">{artist.genre}</p>
                  <p className="mt-3 text-3xl font-bold text-cream">{artist.artistName}</p>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-sage font-medium">Performance</p>
                <p className="text-base font-medium text-slate-200 group-hover:text-cream transition-colors">{artist.performanceDate}</p>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan group-hover:text-magenta transition-colors duration-300"
                >
                  Follow on Instagram →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
