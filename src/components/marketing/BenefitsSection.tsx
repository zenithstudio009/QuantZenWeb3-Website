import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    { letter: "Q", title: "Quantum-proofing made simple", description: "Drop in PQ signing/encryption now." },
    { letter: "R", title: "Ready today", description: "Integrates instantly across Web3 apps and Web2 systems." },
    { letter: "S", title: "Saves millions", description: "Avoid protocol surgery or enterprise-wide rebuilds." },
    { letter: "T", title: "Time advantage", description: "Defends against HNDL happening today." },
    { letter: "U", title: "Universal compatibility", description: "Chain-agnostic + stack-agnostic." },
    { letter: "V", title: "Verified by standards", description: "Built on NIST-standard PQC." },
    { letter: "W", title: "Without UX friction", description: "No user behavior change required." },
    { letter: "X", title: "eXtra defense", description: "Stops replay, tampering, spoofing, insider denial." },
    { letter: "Y", title: "Your safety net", description: "Keeps history secure even if ECC/RSA breaks later." },
    { letter: "Z", title: "Zero disruption", description: "No forks. No migrations. No downtime." },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#f5f9fc] overflow-hidden">


      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-12 sm:mb-14 lg:mb-16 px-4"
        >
          <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
            Your Q to Z of why QuantZen™
          </span>
        </motion.h2>

        {/* Alphabet Buttons */}
        {/* Alphabet Buttons */}
<div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto px-4">
  {benefits.map((item, i) => (
    <motion.button
      key={item.letter}
      onClick={() => setActive(item)}
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex justify-center items-center font-extrabold 
                 text-lg sm:text-xl lg:text-2xl rounded-xl lg:rounded-2xl border-2 border-slate-300
                 transition-all bg-white hover:bg-white hover:shadow-lg hover:shadow-cyan-500/20 
                 active:scale-95"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
    >
      <span className="bg-gradient-to-r text-gradient bg-clip-text text-transparent">
        {item.letter}
      </span>
    </motion.button>
  ))}
</div>

      </div>

      {/* Popup Modal */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.letter}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[999] px-4"
            onClick={() => setActive(null)}
          >
            {/* dim background */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* content box */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-2xl lg:rounded-3xl bg-white p-6 sm:p-8 lg:p-10 
                         shadow-2xl border-2 border-cyan-400/40"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-3 pr-8">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{active.letter}</span>
                <span className="text-lg sm:text-xl lg:text-2xl">{active.title}</span>
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">{active.description}</p>

              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-900 
                           text-xl sm:text-2xl transition w-8 h-8 flex items-center justify-center rounded-full 
                           hover:bg-slate-100"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BenefitsSection;
