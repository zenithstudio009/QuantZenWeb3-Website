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
        <source src="/bg12.mp4" type="video/mp4" />
      </video>

      {/* ---- Overlays ---- */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-radial from-black/35 via-transparent to-transparent" />

      {/* ---- Content ---- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 text-center max-w-7xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 border border-white/25 mb-8"
        >
          <Zap className="w-4 h-4 text-cyan-300" />
          <span className="text-sm font-semibold text-cyan-300">
            Quantum-Ready SDK
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8"
        >
          Quantum-safe security for{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
            Web3
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
            Web2
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-200">
            – delivered as a drop-in SDK.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto"
        >
          QuantZen™ adds NIST-standard post-quantum signing, encryption, and
          tamper-evident audit trails without forks, rewrites, or UX disruption.
        </motion.p>

        {/* Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-6 text-left max-w-3xl mx-auto"
        >
          {[{
            text: "Vitalik Buterin warned that quantum computers could break modern cryptography before 2028.",
            link: "https://cointelegraph.com/news/why-vitalik-believes-quantum-computing-could-break-ethereum-s-cryptography-sooner-than-expected"
          },{
            text: "VanEck CEO Jan van Eck questioned Bitcoin's encryption resilience against quantum computing.",
            link: "https://cointelegraph.com/news/vaneck-boss-questions-bitcoin-privacy-encryption-quantum-tech"
          }].map((q, i) => (
            <div key={i} className="bg-white/15 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <p className="text-gray-200 mb-3">{q.text}</p>
              <a href={q.link} target="_blank" className="inline-flex items-center gap-2 text-cyan-300">
                <span className="text-sm">Facts check</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Your migration window is now.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-3">
              Get the SDK <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-white/25 bg-white/10 text-white">
              Book a 30-min Migration Consult
            </button>
          </div>
        </motion.div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/15 border border-green-300/30 rounded-full text-green-300 mb-6"
        >
          <Shield className="w-5 h-5" />
          Chain-agnostic • Stack-agnostic • Deploy in minutes
        </motion.div>

        {/* Badge Images */}
        <motion.div className="flex flex-wrap justify-center gap-6 mb-6">
          <img src="/1.png" className="w-56 sm:w-64 lg:w-72" alt="Badge 1" />
          <img src="/2.png" className="w-56 sm:w-64 lg:w-72" alt="Badge 2" />
        </motion.div>

        {/* Developed By + Trust */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white text-lg font-semibold leading-none">
            Developed by
          </span>

          <a
            href="https://www.zenithstudio.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl"
          >
            <img src="/logo_zenith.jpg" className="w-10 h-10" alt="Zenith Studio" />
            <span className="text-white text-lg font-semibold">
              Zenith Studio
            </span>
          </a>

          <motion.img
            src="/trustbadge1.png"
            alt="Trust Badge"
            className="w-56 sm:w-64 h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;
