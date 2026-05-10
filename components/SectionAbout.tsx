"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { buildImageUrl } from "@/lib/sanity";

type AboutProps = {
  data?: {
    title?: string;
    intro?: string;
    description?: string;
    heroImage?: any;
    accentImage?: any;
  };
};

export function SectionAbout({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="section-container relative overflow-hidden px-6 py-32 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(178,157,137,0.14),_transparent_40%)]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-sage/10 to-brown/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <span className="inline-block bg-gradient-magenta px-4 py-2 rounded-full text-xs uppercase tracking-[0.36em] text-brown/80 font-medium">
            About the event
          </span>
          <h2 className="max-w-2xl font-serif text-5xl leading-tight text-cream sm:text-6xl">
            {data?.title || "A Creative Festival for Visionaries"}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            {data?.intro ||
              "Festival Teknik 2026 reimagines the way an underground concert connects with a creative community through editorial storytelling and premium visuals."}
          </p>
          <p className="max-w-xl text-base leading-8 text-slate-400">
            {data?.description ||
              "The event blends neo-brutalist composition, cinematic stage direction, and an artistic luxury atmosphere for guests who seek a bold festival identity."}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-4 shadow-card">
            {data?.heroImage && (
              <Image
                src={buildImageUrl(data.heroImage).url()}
                alt="Festival atmosphere"
                width={640}
                height={760}
                className="h-full w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
              />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:border-white/30"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan font-medium">
                  Creative community
                </p>
                <h3 className="mt-4 text-3xl font-bold text-cream">
                  Immersive sound, art, and atmosphere.
                </h3>
              </div>
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl group-hover:border-white/20 transition-colors">
                <p className="text-xs uppercase tracking-[0.3em] text-sage font-medium">
                  Artistic direction
                </p>
                <p className="text-sm leading-7 text-slate-300 group-hover:text-slate-200 transition-colors">
                  Creative curation from local designers and underground artists
                  makes the event feel editorial, premium, and cinematic.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
