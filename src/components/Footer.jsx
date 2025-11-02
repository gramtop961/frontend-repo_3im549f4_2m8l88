import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/60 py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-20 w-[90%] rounded-full bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="font-['Manrope'] text-lg font-semibold text-white">HopeTech</h3>
          <p className="mt-1 text-sm text-zinc-400">Smart, sleek, and built to last.</p>
        </div>
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} HopeTech, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
