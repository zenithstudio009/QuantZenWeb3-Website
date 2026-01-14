import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap } from "lucide-react";

const NewHero = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-20">
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

      {/* ---- Content ---- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-7xl">
        
        {/* Badge + Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/25">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-cyan-300">
              Quantum-Ready SDK
            </span>
          </div>

          <img
            src="/trust.png"
            alt="Trust Badge"
            className="w-36 sm:w-40 h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
        >
          Quantum-safe security for{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
            Web3
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
            Web2
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base sm:text-xl text-gray-200 mb-8 max-w-4xl mx-auto"
        >
          QuantZen™ adds NIST-standard post-quantum signing, encryption, and
          tamper-evident audit trails without forks, smart contracts, or UX disruption.
        </motion.p>

        {/* Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 space-y-4 text-left max-w-3xl mx-auto"
        >
          {[{
            text: "Vitalik Buterin warned that quantum computers could break modern cryptography before 2028.",
            link: "https://cointelegraph.com/news/why-vitalik-believes-quantum-computing-could-break-ethereum-s-cryptography-sooner-than-expected"
          },{
            text: "VanEck CEO Jan van Eck questioned Bitcoin's encryption resilience against quantum computing.",
            link: "https://cointelegraph.com/news/vaneck-boss-questions-bitcoin-privacy-encryption-quantum-tech"
          }].map((q, i) => (
            <div key={i} className="bg-white/15 border border-white/20 rounded-xl p-5 backdrop-blur-xl">
              <p className="text-gray-200 mb-2">{q.text}</p>
              <a href={q.link} target="_blank" className="inline-flex items-center gap-2 text-cyan-300 text-sm">
                Facts check <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.quantzensdk.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-3 justify-center"
            >
              Get the SDK <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://outlook.office.com/bookwithme/user/6c40c19ef70d49a4a0b26a289f3b3005@quantzen.live/meetingtype/FTx1cTuAEkq6RUz2kd8k7w2?anonymous&ismsaljsauthenabled&ep=mlink"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl font-semibold border border-white/25 bg-white/10 text-white"
            >
              Book a 30-min Migration Consult
            </a>
          </div>
        </motion.div>

        {/* Developed By */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="flex flex-wrap justify-center gap-8 mt-2"
>
  {/* Zenith Studio */}
  <div className="flex flex-col items-center gap-2">
    <a
      href="https://www.zenithstudio.live/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl"
    >
      <img
        src="/logo_zenith.jpg"
        className="w-9 h-9"
        alt="Zenith Studio"
      />
      {/* <span className="text-white font-semibold">Zenith Studio</span> */}
    </a>
    <span className="text-white/70 text-sm font-medium">
      Developed by
    </span>
  </div>

  {/* Second Brand */}
  <div className="flex flex-col items-center gap-2">
    <a
      href="https://www.quantumsecuritydefence.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl"
    >
      <img
        src="/new logo.png"
        className="w-9 h-9"
        alt="Second Brand"
      />
      {/* <span className="text-white font-semibold">Second Brand</span> */}
    </a>
    <span className="text-white/70 text-sm font-medium">
      Backed by
    </span>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default NewHero;
