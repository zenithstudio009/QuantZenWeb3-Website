import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap, Shield } from "lucide-react";

/* ---------------------------------------------
   Optimized Background - Static Image Only
---------------------------------------------- */
const HeroBackground = () => {
  return (
    <img
      src="/bg11-poster.webp"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
  );
};

/* ---------------------------------------------
   Main Hero Component
---------------------------------------------- */
const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <HeroBackground />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 text-center max-w-7xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 border border-white/25 mb-8"
        >
          <Zap className="w-4 h-4 text-cyan-300" />
          <span className="text-sm font-semibold text-cyan-300">
            Quantum-Ready SDK
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8"
        >
          Quantum-safe security for{" "}
          <span className="text-cyan-400">Web3</span> and{" "}
          <span className="text-cyan-400">Web2</span>
          <br />
          <span className="text-3xl sm:text-4xl text-gray-200">
            delivered as a drop-in SDK.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto"
        >
          QuantZen™ adds NIST-standard post-quantum encryption, signing,
          and tamper-proof audit trails without breaking UX or workflows.
        </motion.p>

        {/* Quotes */}
        <div className="space-y-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white/15 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-200 mb-2">
              Vitalik Buterin warns quantum computers could break modern crypto
              before 2028.
            </p>
            <a
              href="https://cointelegraph.com/news/why-vitalik-believes-quantum-computing-could-break-ethereum-s-cryptography-sooner-than-expected"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 text-sm inline-flex items-center gap-2"
            >
              Fact check <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/15 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-200 mb-2">
              VanEck CEO says they will walk away if Bitcoin becomes
              quantum-breakable.
            </p>
            <a
              href="https://cointelegraph.com/news/vaneck-boss-questions-bitcoin-privacy-encryption-quantum-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 text-sm inline-flex items-center gap-2"
            >
              Fact check <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center gap-3">
            Get the SDK <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 text-white font-semibold flex items-center gap-3">
            Book Migration Call <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/15 border border-green-300/30 rounded-full text-green-300">
          <Shield className="w-5 h-5" />
          Chain-agnostic · Stack-agnostic · Deploy in minutes
        </div>

        {/* Developer */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://www.zenithstudio.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-xl"
          >
            <img src="/logo_zenith.jpg" className="w-10 h-10" alt="Zenith" loading="lazy" />
            <span className="text-white font-semibold">Zenith Studio</span>
          </a>

          <img
            src="/trustbadge1.png"
            alt="Trust Badge"
            className="w-40"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
