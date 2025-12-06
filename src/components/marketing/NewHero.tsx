import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap, Shield } from "lucide-react";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ---- Background Video ---- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg9.mp4" type="video/mp4" />
      </video>

      {/* ---- Gradient Overlay for Readability ---- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 backdrop-blur-[1px]" />

      {/* ---- Content ---- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 text-center max-w-7xl">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <Zap className="w-4 h-4 text-cyan-300" />
          <span className="text-sm font-semibold text-cyan-300">Quantum-Ready SDK</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8 drop-shadow-2xl"
        >
          Quantum-safe security for{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">Web3</span>{" "}
          and{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">Web2</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-200">
            - delivered as a drop-in SDK.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto"
        >
          QuantZen™ adds NIST-standard post-quantum signing, encryption, and tamper-evident audit
          trails to transactions and communications without forks, rewrites, or UX disruption.
        </motion.p>

        {/* Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-6 text-left max-w-3xl mx-auto"
        >
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <p className="text-gray-200 mb-3">
              Vitalik Buterin recently warned that quantum computers capable of breaking modern
              cryptography will arrive before 2028.
            </p>
            <a
              href="https://cointelegraph.com/news/why-vitalik-believes-quantum-computing-could-break-ethereum-s-cryptography-sooner-than-expected"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"
            >
              <span className="text-sm">Facts check</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <p className="text-gray-200 mb-3">
              VanEck CEO Jan van Eck questions Bitcoin's encryption against quantum computing,
              saying his firm will "walk away" if it's "fundamentally broken."
            </p>
            <a
              href="https://cointelegraph.com/news/vaneck-boss-questions-bitcoin-privacy-encryption-quantum-tech"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"
            >
              <span className="text-sm">Facts check</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Your migration window is now.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-3 shadow-lg hover:shadow-2xl transition">
              Get the SDK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-xl font-semibold border border-white/25 bg-white/10 text-white backdrop-blur-xl flex items-center gap-3 hover:bg-white/15 transition">
              Book a 30-min Migration Consult
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/15 border border-green-300/30 rounded-full text-green-300 font-medium backdrop-blur-xl"
        >
          <Shield className="w-5 h-5" />
          Chain-agnostic for Web3. Stack-agnostic for Web2. Deploy in minutes.
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-2xl shadow-xl">
            <div className="text-5xl font-bold text-white mb-4">$30B+</div>
            <div className="text-gray-200 font-medium">Web3 Losses to Hacks</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-2xl shadow-xl">
            <div className="text-5xl font-bold text-white mb-4">2028</div>
            <div className="text-gray-200 font-medium">Quantum Threat Timeline</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default NewHero;
