import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Server, Globe } from "lucide-react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("web3");

  const web3Steps = [
    {
      number: "01",
      title: "User signs as normal (ECDSA/EdDSA).",
      description: "No change to existing user experience or wallet interfaces.",
      icon: Zap
    },
    {
      number: "02", 
      title: "QuantZen™ signs again using PQC (e.g., Dilithium).",
      description: "Parallel quantum-resistant signature creation happens automatically.",
      icon: Shield
    },
    {
      number: "03",
      title: "PQ signature is bound to metadata (nonce, chainID, amount, recipient, timestamp).",
      description: "Complete transaction context ensures tamper-evident security.",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "Dual verification gates settlement on-chain.",
      description: "Both classical and quantum-safe signatures must verify before execution.",
      icon: ArrowRight
    }
  ];

  const web2Steps = [
    {
      number: "01",
      title: "Service signs/encrypts as normal (RSA/ECC).",
      description: "Existing enterprise workflows remain unchanged.",
      icon: Server
    },
    {
      number: "02",
      title: "QuantZen™ adds PQ parallel signing/encryption.",
      description: "Quantum-safe layer operates alongside current systems.",
      icon: Shield
    },
    {
      number: "03", 
      title: "Verification gates critical events (auth, approvals, data release, file integrity).",
      description: "All sensitive operations require quantum-safe verification.",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "Audit logs prove intent and integrity long after quantum arrives.",
      description: "Immutable records maintain validity even post-quantum.",
      icon: ArrowRight
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-slate-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe08_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 right-32 w-80 h-80 bg-blue-200/20 rounded-full blur-[100px]"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            One SDK. Two worlds.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-gradient bg-clip-text text-transparent">
              Same outcome: quantum-safe security now.
            </span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 sm:mb-14 lg:mb-16 px-4"
        >
          <div className="inline-flex p-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-sm overflow-x-auto">
            <button
              onClick={() => setActiveTab("web3")}
              className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                activeTab === "web3"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              <Globe className="w-5 h-5" />
              Web3 Flow
            </button>
            <button
              onClick={() => setActiveTab("web2")}
              className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                activeTab === "web2"
                  ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              <Server className="w-5 h-5" />
              Web2 Flow
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Steps */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
              {(activeTab === "web3" ? web3Steps : web2Steps).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white/80 border border-slate-200/60 backdrop-blur-xl hover:border-slate-300/80 transition-all duration-700 hover:shadow-lg shadow-sm"
                >
                  <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl border ${
                        activeTab === "web3" 
                          ? "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200/60 text-blue-700"
                          : "bg-gradient-to-br from-cyan-100 to-teal-100 border-cyan-200/60 text-cyan-700"
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg lg:rounded-xl mb-3 sm:mb-4 border ${
                        activeTab === "web3"
                          ? "bg-gradient-to-br from-blue-100/80 to-cyan-100/80 border-blue-200/40"
                          : "bg-gradient-to-br from-cyan-100/80 to-teal-100/80 border-cyan-200/40"
                      }`}>
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-relaxed">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center px-4"
            >
              <div className={`inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 sm:px-8 py-5 sm:py-6 rounded-xl lg:rounded-2xl backdrop-blur-xl border shadow-sm ${
                activeTab === "web3"
                  ? "bg-gradient-to-r from-blue-100/80 to-cyan-100/80 border-blue-200/60"
                  : "bg-gradient-to-r from-cyan-100/80 to-teal-100/80 border-cyan-200/60"
              }`}>
                <CheckCircle className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 ${
                  activeTab === "web3" ? "text-blue-600" : "text-cyan-600"
                }`} />
                <p className="text-base sm:text-lg text-slate-700 max-w-3xl text-center sm:text-left">
                  {activeTab === "web3" 
                    ? "Your dApp stays fully compatible with its L1/L2 — but becomes quantum-resilient in minutes."
                    : "No rebuild. No system replacement. Just quantum safety layered into your flow."
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorksSection;