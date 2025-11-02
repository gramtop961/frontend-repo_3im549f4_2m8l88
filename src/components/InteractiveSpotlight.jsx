import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Scroll-reactive, hover-floating smartwatch spotlight
const InteractiveSpotlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Rotate the watch as the user scrolls through the section
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const translateY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.6]);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background glow */}
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-orange-500/20 via-amber-400/10 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl"
          >
            Scroll to Rotate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-prose text-zinc-400"
          >
            Our smartwatch responds to your movement. As you scroll, it turns to reveal its sculpted edges and polished glass. Hover to feel it lift, just like it’s suspended in mid‑air.
          </motion.p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 font-medium text-black transition hover:brightness-110">
              Explore Products
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>

        {/* Watch mockup with scroll-linked rotation */}
        <motion.div
          style={{ rotate, y: translateY }}
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="relative mx-auto h-80 w-80"
          aria-label="Interactive 3D-like smartwatch preview"
          role="img"
        >
          {/* Soft highlight overlay to simulate reflections */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />

          {/* Straps */}
          <div className="absolute left-1/2 top-0 h-20 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[1.25rem] bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.45)]" />
          <div className="absolute bottom-0 left-1/2 h-20 w-36 -translate-x-1/2 translate-y-1/2 rounded-[1.25rem] bg-gradient-to-t from-zinc-800 to-zinc-900 shadow-[0_-10px_30px_rgba(0,0,0,0.45)]" />

          {/* Watch body */}
          <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-zinc-900 to-black shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]" />

          {/* Bezel */}
          <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />

          {/* Display */}
          <div className="absolute inset-4 rounded-[1.75rem] bg-black/90" />

          {/* Dial indicator graphic */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,146,60,0.8)_0deg,rgba(251,146,60,0.15)_120deg,transparent_240deg)]" />

          {/* Glass sheen */}
          <div className="pointer-events-none absolute inset-4 rounded-[1.75rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_30%,transparent_55%)] mix-blend-screen" />
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSpotlight;
