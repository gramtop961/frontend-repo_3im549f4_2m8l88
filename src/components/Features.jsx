import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Battery } from 'lucide-react';

const features = [
  {
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security with robust build quality for everyday use.',
    icon: Shield,
  },
  {
    title: 'Fast Performance',
    desc: 'Low-latency connectivity and blazing-fast response for seamless control.',
    icon: Zap,
  },
  {
    title: 'AI-Ready',
    desc: 'Smart firmware that learns your habits and optimizes power & usage.',
    icon: Cpu,
  },
  {
    title: 'Long Battery Life',
    desc: 'Optimized power management ensures steady performance all day.',
    icon: Battery,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } }),
};

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 mx-auto h-48 w-[90%] rounded-full bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center font-['Manrope'] text-3xl font-bold text-white md:text-4xl"
        >
          Why Choose HopeTech
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-zinc-400"
        >
          Built with a focus on precision, durability, and effortless usability.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-2xl ring-1 ring-black/10 backdrop-blur-xl transition-colors hover:bg-zinc-900"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition-opacity group-hover:opacity-70" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-black shadow-md">
                  <f.icon size={22} />
                </div>
                <h3 className="font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
