"use client";

import { motion } from "framer-motion";

export function HeroSection({ heroSection }: any) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-cream">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 pb-12 lg:w-3/4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-sage/40 bg-slate-900/70 px-5 py-2 text-sm uppercase tracking-[0.3em] text-sage"
          >
            {heroSection?.badgeText || "PREMIUM FESTIVAL EXPERIENCE"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.85 }}
            className="font-serif text-6xl leading-[0.9] text-cream sm:text-7xl lg:text-8xl"
          >
            {heroSection?.headline || "FESTIK 2026"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.85 }}
            className="max-w-3xl text-lg leading-8 text-slate-200/90 sm:text-xl"
          >
            {heroSection?.subheadline}
          </motion.p>
        </div>
      </div>
    </main>
  );
}
