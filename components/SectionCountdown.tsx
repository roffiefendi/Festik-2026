'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { sanitizeDate, formatCountdown } from '@/lib/utils';

type CountdownProps = {
  countdown?: {
    eventDate?: string;
    eventTime?: string;
    timezone?: string;
  };
};

export function SectionCountdown({ countdown }: CountdownProps) {
  const targetDate = useMemo(() => {
    if (!countdown?.eventDate || !countdown?.eventTime) return new Date('2026-06-13T14:00:00+07:00');
    const timezone = countdown.timezone || '+07:00';
    return sanitizeDate(countdown.eventDate, countdown.eventTime, timezone === 'Asia/Jakarta' ? '+07:00' : timezone);
  }, [countdown]);

  const [state, setState] = useState(formatCountdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setState(formatCountdown(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-gradient-to-l from-cyan/15 to-transparent blur-3xl -translate-y-1/2" />
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.03] p-8 sm:p-12 shadow-elevated backdrop-blur-2xl relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block bg-gradient-cyan px-4 py-2 rounded-full text-xs uppercase tracking-[0.32em] text-cyan/80 font-medium">Festival Countdown</span>
            <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Experience the opening ceremony in cinematic time.</h2>
            <p className="max-w-xl text-slate-300 leading-relaxed">The Festival Teknik countdown is controlled from Sanity CMS. When the clock expires, the platform automatically celebrates the moment.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className=\"grid gap-4 sm:grid-cols-2\"
          >
            {state.expired ? (
              <div className=\"col-span-2 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-magenta/10 to-purple/5 p-8 text-center backdrop-blur-xl\">
                <span className=\"text-xs uppercase tracking-[0.36em] text-sage/80 font-medium\">STATUS</span>
                <p className=\"mt-4 text-3xl font-semibold text-cream\">THE FESTIVAL HAS STARTED</p>
              </div>
            ) : (
              ['days', 'hours', 'minutes', 'seconds'].map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className=\"group relative rounded-2xl border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:shadow-card\"
                >
                  <div className=\"absolute inset-0 rounded-2xl bg-gradient-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl\" />
                  <span className=\"block text-5xl font-bold text-cyan group-hover:text-cream transition-colors\">
                    {state[label as keyof typeof state]}
                  </span>
                  <span className=\"mt-3 block text-xs uppercase tracking-[0.32em] text-slate-300 group-hover:text-slate-200 transition-colors\">{label}</span>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
