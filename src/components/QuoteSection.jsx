import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2130] via-[#0f1420] to-[#080b14]" />

      {/* Subtle Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl text-white/90 font-serif italic mb-12 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not just a tool. Not just automation.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl text-white font-serif italic leading-[1.1] mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A teammate who gets your <br /> business and does the work.
          </motion.h2>

          <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-white/40 mb-12" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <span className="text-xs font-bold text-white/40 uppercase tracking-[0.4em]">MEET VENTUS</span>
            <div className="w-[1px] h-32 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
