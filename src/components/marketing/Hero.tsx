import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-xl">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Quantum-Ready SDK</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-white mb-3">Quantum-safe security for</span>
              <span className="block mb-3">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Web3
                </span>
                <span className="text-white/90"> and </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Web2
                </span>
              </span>
              <span className="block text-white/90">delivered as a drop-in SDK</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-300 text-center max-w-4xl mx-auto mb-14 leading-relaxed"
          >
            QuantZen™ adds <span className="text-white font-semibold">NIST-standard post-quantum</span> signing, 
            encryption, and tamper-evident audit trails—
            <span className="text-cyan-400 font-semibold"> without forks, rewrites, or UX disruption</span>.
          </motion.p>

          {/* Fact Cards - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12"
          >
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent border border-blue-400/20 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Shield className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
              <p className="text-base text-slate-200 mb-4 relative z-10 leading-relaxed">
                <span className="font-bold text-white">Vitalik Buterin</span> recently warned that quantum computers 
                capable of breaking modern cryptography will arrive <span className="text-cyan-400 font-bold">before 2028</span>.
              </p>
              <a
                href="https://cointelegraph.com/news/why-vitalik-believes-quantum-computing-could-break-ethereum-s-cryptography-sooner-than-expected"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors relative z-10"
              >
                Fact check <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 via-purple-500/10 to-transparent border border-purple-400/20 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Shield className="w-8 h-8 text-purple-400 mb-4 relative z-10" />
              <p className="text-base text-slate-200 mb-4 relative z-10 leading-relaxed">
                <span className="font-bold text-white">VanEck CEO</span> questions Bitcoin's encryption against quantum 
                computing, saying his firm will <span className="text-pink-400 font-bold">"walk away"</span> if it's fundamentally broken.
              </p>
              <a
                href="https://cointelegraph.com/news/vaneck-boss-questions-bitcoin-privacy-encryption-quantum-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors relative z-10"
              >
                Fact check <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-10"
          >
            <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Your migration window is <span className="text-cyan-400">now</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <button
              onClick={() => window.open('https://forms.gle/ve1DFKqcjZ4bUHLk6', '_blank')}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get the SDK <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => window.open('https://outlook.office.com/bookwithme/user/6c40c19ef70d49a4a0b26a289f3b3005@quantzen.live/meetingtype/FTx1cTuAEkq6RUz2kd8k7w2?anonymous&ismsaljsauthenabled&ep=mlink', '_blank')}
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-white font-semibold text-lg backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              Book 30-min Migration Consult
            </button>
          </motion.div>

          {/* Bottom Tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-slate-400 text-lg italic"
          >
            Chain-agnostic for Web3. Stack-agnostic for Web2. Deploy in minutes.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
