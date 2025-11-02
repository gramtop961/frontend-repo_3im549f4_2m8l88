import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial vignette to deepen the dark theme */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,#000_85%)]" />

      {/* Layered glow accents */}
      <div className="pointer-events-none absolute -inset-32 opacity-40 mix-blend-color-dodge [filter:blur(100px)]" aria-hidden>
        <div className="absolute left-[20%] top-[35%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20" />
        <div className="absolute right-[15%] top-[55%] h-60 w-60 -translate-y-1/2 rounded-full bg-amber-400/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-zinc-300 backdrop-blur-xl"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          HopeTech • Smart Audio & Wearables
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-['Manrope'] text-4xl font-extrabold leading-tight text-white drop-shadow-sm md:text-6xl"
        >
          Intelligent Sound. Seamless Wear.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg"
        >
          Explore next‑gen smartwatches, earpods, and accessories designed for motion, clarity, and all‑day comfort.
        </motion.p>

        {/* Quick highlights */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300 md:text-sm"
          aria-label="Key product highlights"
        >
          {['Spatial Audio','ECG & Health','7‑Day Battery','MagSafe Charging'].map((t) => (
            <li key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur">
              {t}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#products"
            className="group inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-medium text-black shadow-[0_0_0_0_rgba(251,146,60,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(251,146,60,0.18)]"
          >
            Shop the Collection
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#spotlight"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/10"
          >
            See it in Motion
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-400"
          aria-hidden
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
