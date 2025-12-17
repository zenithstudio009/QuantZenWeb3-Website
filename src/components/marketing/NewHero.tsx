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

      {/* ---- Strong Overlays for Visibility ---- */}
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

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.85)]"
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
          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-200 drop-shadow-xl">
            - delivered as a drop-in SDK.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto drop-shadow-[0_0_16px_rgba(0,0,0,0.85)]"
        >
          QuantZen™ adds NIST-standard post-quantum signing, encryption, and
          tamper-evident audit trails to transactions and communications
          without forks, rewrites, or UX disruption.
        </motion.p>

        {/* Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-6 text-left max-w-3xl mx-auto"
        >
          <div className="bg-white/15 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-gray-200 mb-3">
              Vitalik Buterin recently warned that quantum computers capable of
              breaking modern cryptography will arrive before 2028.
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

          <div className="bg-white/15 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-gray-200 mb-3">
              VanEck CEO Jan van Eck questions Bitcoin's encryption against
              quantum computing, saying his firm will "walk away" if it's
              "fundamentally broken."
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
          <h2 className="text-3xl font-bold text-white mb-8">
            Your migration window is now.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-3 shadow-xl hover:shadow-3xl transition">
              Get the SDK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-xl font-semibold border border-white/25 bg-white/10 text-white backdrop-blur-xl flex items-center gap-3 hover:bg-white/20 transition">
              Book a 30-min Migration Consult
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        

        {/* ---- Bottom Tag ---- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/15 border border-green-300/30 rounded-full text-green-300 font-medium backdrop-blur-xl shadow-xl"
        >
          <Shield className="w-5 h-5" />
          Chain-agnostic for Web3. Stack-agnostic for Web2. Deploy in minutes.
        </motion.div>

        {/* ---- Developed By + Trust Badge Row ---- */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  className="mt-10 flex flex-col items-center"
> 
  <span className="text-white/60 text-sm  mr-60 ">Developed by</span>

  <div className="flex items-center gap-2">
    
    {/* Zenith Studio Box */}
    <a
      href="https://www.zenithstudio.live/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-2xl 
                 backdrop-blur-xl shadow-xl hover:bg-white/20 transition"
    >
      <img src="/logo_zenith.jpg" className="w-10 h-10" alt="Zenith Studio" />
      <span className="text-white text-lg font-semibold">Zenith Studio</span>
    </a>

    {/* Trust Badge */}
    <motion.img
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  src="/trustbadge1.png"
  alt="Trust Badge"
  className="
  w-56 sm:w-64 lg:w-72 
  h-auto 
  drop-shadow-2xl
"
/>

  </div>
</motion.div>


       


      </div>
    </section>
  );
};

export default NewHero;
