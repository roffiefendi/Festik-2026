'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question?: string;
  answer?: string;
};

type FAQProps = {
  items?: FAQItem[];
};

export function SectionFAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.36em] text-sage">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">Questions about the festival experience.</h2>
        </div>
        <div className="grid gap-4">
          {items?.map((item, index) => (
            <motion.button
              key={item.question}
              type="button"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.6 }}
              className="glass-panel w-full rounded-[28px] border border-white/10 p-6 text-left shadow-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-sage">FAQ</p>
                  <h3 className="mt-3 text-lg font-semibold text-cream">{item.question}</h3>
                </div>
                <ChevronDown className={`transition ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} />
              </div>
              {activeIndex === index && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="mt-6 overflow-hidden text-slate-300">
                  <p className="leading-8">{item.answer}</p>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
