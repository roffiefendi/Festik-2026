'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { buildImageUrl } from '@/lib/sanity';

type GalleryProps = {
  items?: Array<{ image?: any; caption?: string }>;
};

export function SectionGallery({ items }: GalleryProps) {
  return (
    <section id="gallery" className="section-container relative overflow-hidden px-6 py-32 sm:px-8 lg:px-12">
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tl from-cyan/10 to-sage/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block bg-gradient-cyan px-4 py-2 rounded-full text-xs uppercase tracking-[0.36em] text-cyan/80 font-medium">Gallery</span>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-cream sm:text-6xl">Cinematic festival visuals in layered frames.</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 shadow-card hover:shadow-elevated transition-all duration-500 hover:border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />
              {item.image && (
                <Image
                  src={buildImageUrl(item.image).url()}
                  alt={item.caption || 'Gallery image'}
                  width={480}
                  height={560}
                  className="relative z-0 h-full w-full object-cover transition duration-700 group-hover:scale-120"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-xs uppercase tracking-[0.28em] text-sage font-medium group-hover:text-cream transition-colors">{item.caption || 'Festival frame'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
