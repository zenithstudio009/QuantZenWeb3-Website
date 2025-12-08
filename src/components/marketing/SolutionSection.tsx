import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Shield, Zap, CheckCircle, Layers, RotateCcw, ArrowRight, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Post-quantum signing + encryption using NIST-approved algorithms",
      description: "Industry-standard cryptographic protection that's quantum-resistant from day one.",
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: Layers,
      title: "Dual-Signature Layer™ (classical + PQC) for compatibility today and resilience tomorrow",
      description: "Hybrid approach ensures backward compatibility while preparing for the quantum future.",
      color: "from-cyan-400 to-teal-500",
      bgGlow: "bg-cyan-500/20"
    },
    {
      icon: CheckCircle,
      title: "Tamper-evident audit trails and non-repudiation",
      description: "Immutable proof of authenticity that stands up to quantum computing attacks.",
      color: "from-teal-400 to-green-500",
      bgGlow: "bg-teal-500/20"
    },
    {
      icon: RotateCcw,
      title: "Crypto-agile by design  swap algorithms as standards evolve",
      description: "Future-proof architecture that adapts as new quantum-safe standards emerge.",
      color: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: Zap,
      title: "Zero disruption, no forks, no consensus surgery, no enterprise re-architecture",
      description: "Seamless integration that doesn't require changing existing infrastructure.",
      color: "from-cyan-400 to-blue-500",
      bgGlow: "bg-cyan-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50/30 via-blue-50/20 to-slate-100 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94 / 0.15) 1px, transparent 0)`,
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      {/* Floating Orbs with Enhanced Animation */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-green-300/30 to-blue-300/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/30 to-teal-300/30 rounded-full blur-[140px]"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-8 py-4 mb-10 bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300/40 rounded-full backdrop-blur-xl shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-6 h-6 text-green-600" />
            </motion.div>
            <span className="text-base font-bold text-green-700 tracking-wide">Quantum-Safe Solution</span>
            <Sparkles className="w-5 h-5 text-blue-600" />
          </motion.div>
          
          {/* Main Heading with Staggered Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-block bg-gradient-to-r text-gradient bg-clip-text text-transparent"
            >
              QuantZen™
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="inline-block text-slate-700"
            >
              is the fast path to
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="inline-block bg-gradient-to-r text-gradient bg-clip-text text-transparent"
            >
              quantum readiness.
            </motion.span>
          </motion.h2>
          
          {/* Description with Line Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="relative"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
            />
            <p className="text-xl lg:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              QuantZen™ is a quantum-safe SDK and crypto-agility layer that upgrades security at the application level - so you can protect users and systems today while your underlying infrastructure evolves on its own timeline.
            </p>
          </motion.div>
        </motion.div>

        {/* Features - Completely Redesigned Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-2xl border-2 border-slate-200/50 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.15 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl`}
                />

                {/* Sliding Accent Bar */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredIndex === index ? 0 : "-100%" }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${feature.color} rounded-l-3xl`}
                />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon Container with Pulse Animation */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white relative z-10" />
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                          opacity: hoveredIndex === index ? [0.5, 0, 0.5] : 0
                        }}
                        transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                        className={`absolute inset-0 rounded-xl ${feature.bgGlow}`}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <motion.h3
                      animate={{
                        x: hoveredIndex === index ? 8 : 0
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-lg font-bold text-slate-900 mb-2 leading-snug"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      animate={{
                        x: hoveredIndex === index ? 8 : 0
                      }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.05 }}
                      className="text-base text-slate-600 leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Hover Arrow Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -20
                    }}
                    className="flex-shrink-0 self-center"
                  >
                    <ArrowRight className={`w-6 h-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? 45 : 0
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-6 px-12 py-8 bg-gradient-to-r from-green-50 via-blue-50 to-cyan-50 border-2 border-green-300/60 rounded-3xl backdrop-blur-xl shadow-2xl hover:shadow-green-200/50 transition-all duration-500 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
            </motion.div>
            
            <div className="text-left">
              <p className="text-2xl font-bold text-green-700 mb-2">
                Ready to Deploy Today
              </p>
              <p className="text-lg text-slate-600">
                Start protecting your systems with quantum-safe security in minutes, not months.
              </p>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-8 h-8 text-green-600 flex-shrink-0" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;