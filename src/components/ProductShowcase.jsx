import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Series X Smartwatch',
    price: '$299',
    tagline: 'Always‑on display • ECG • 7‑day battery',
    accent: 'from-orange-500/30 to-amber-500/30',
  },
  {
    name: 'Air Pulse Pro (Earpods)',
    price: '$199',
    tagline: 'Adaptive ANC • Spatial audio • Qi wireless',
    accent: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    name: 'Flex Sport Band',
    price: '$39',
    tagline: 'Sweat‑resistant • Quick‑release • Ultra‑light',
    accent: 'from-fuchsia-500/30 to-pink-500/30',
  },
  {
    name: 'Arc Magnetic Charger',
    price: '$59',
    tagline: 'MagSafe compatible • 15W fast charge',
    accent: 'from-lime-500/30 to-emerald-500/30',
  },
];

const ProductCard = ({ name, price, tagline, accent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-6 shadow-2xl ring-1 ring-black/10 backdrop-blur-xl"
    >
      <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="font-['Manrope'] text-lg font-semibold text-white">{name}</h3>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">{price}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-400">{tagline}</p>
        {/* Mock product visual */}
        <div className="mt-6 h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5">
          <div className="h-full w-full bg-[radial-gradient(60%_100%_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-orange-300/90">
          <span className="inline-block transition-transform group-hover:translate-x-0.5">Explore</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl"
          >
            Smart Wearables & Audio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 max-w-2xl text-zinc-400"
          >
            Designed to move with you. Built for clarity, endurance, and comfort.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
