import React from "react";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, variant, size, className = "", ...props }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";
  const variants = {
    quantum:
      "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:from-purple-500 hover:to-blue-500",
    secondary:
      "bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm text-white border border-white/30 hover:from-white/25 hover:to-white/15 hover:border-white/40 hover:shadow-lg",
    hero:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('sdk');
  
  const tabs = [
    {
      id: 'sdk',
      label: 'Signing, Encryption, Audit',
      icon: Shield,
      title: "QuantZen™ - Quantum-Safe SDK",
      // subtitle: "Signing, Encryption, Audit",
      content: "QuantZen™ - Quantum-Safe SDK (signing, encryption, audit trail) , Securing Web3 Applications from Quantum Threats, also a crypto-agility layer for Web3 built to evolve as cryptographic standards evolve, without performing hard-forks or re-engineering consensus mechanisms.",
      color: "from-blue-400 via-cyan-400 to-blue-500"
    },
    {
      id: 'protection',
      label: 'Minutes to Implementation',
      icon: Zap,
      title: "Instant Quantum Protection",
      // subtitle: "Minutes to Implementation",
      content: "With QuantZen™, any Dapp can become quantum‑proof in minutes while staying fully compatible with the L1/L2 irrespective of any EVM or NON-EVM chains. Projects Built on classical cryptography like ECDSA, which Quantum computers will break by 2030. QuantZen™ Built on post-quantum cryptography (PQC), such as CRYSTALS-Dilithium and Kyber are NIST approved standards that protects wallets, dApps, bridges, CEX and custodians from Quantum attacks at the application level.",
      color: "from-purple-400 via-pink-400 to-purple-500"
    },
    {
      id: 'standards',
      label: 'End-to-End Protection',
      icon: Lock,
      title: "NIST-Approved Standards",
      // subtitle: "End-to-End Protection",
      content: "QuantZen™ SDK doesn’t just help you sign quantum-safe transactions it ensures the entire flow key generation, storage, backup, audit, transmission is quantum-proof end-to-end.",
      color: "from-green-400 via-emerald-400 to-green-500"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spheres = [
    { size: 200, x: 85, y: 15, delay: 0, color: "rgba(96, 165, 250, 0.4)" },
    { size: 300, x: 90, y: 45, delay: 0.5, color: "rgba(147, 197, 253, 0.3)" },
    { size: 120, x: 80, y: 8, delay: 1, color: "rgba(191, 219, 254, 0.5)" },
    { size: 80, x: 75, y: 60, delay: 1.5, color: "rgba(96, 165, 250, 0.6)" },
    { size: 150, x: 70, y: 25, delay: 0.8, color: "rgba(147, 197, 253, 0.4)" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20">
      {/* Custom Color Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(57, 96, 134, 0.12)",
        }}
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/bg8.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60 backdrop-blur-[1px]" />

      {/* Floating Spheres */}
      <div className="absolute inset-0 overflow-hidden">
        {spheres.map((sphere, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: sphere.size,
              height: sphere.size,
              left: `${sphere.x}%`,
              top: `${sphere.y}%`,
              background: `radial-gradient(circle at 30% 30%, ${sphere.color}, transparent)`,
              filter: "blur(40px)",
              transform: `translate(${mousePos.x * (i / 15)}px, ${mousePos.y * (i / 15)}px)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sphere.delay,
            }}
          />
        ))}
      </div>

      {/* Flowing Curves */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
          </linearGradient>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0.2)" />
            <stop offset="100%" stopColor="rgba(191, 219, 254, 0)" />
          </linearGradient>
        </defs>
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -200 ${300 + i * 150} Q 400 ${200 + i * 100}, 800 ${350 + i * 120} T 1800 ${300 + i * 150}`}
            stroke={`url(#curveGradient${(i % 2) + 1})`}
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Text Content - Tabbed Interface */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto w-full">
          {/* Tab Content */}
          <div className="text-center">
            {tabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-8"
                  >
                    <div className="p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <tab.icon className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <span className="text-white">{tab.title.split('QuantZen™')[0]}</span>
                    {tab.title.includes('QuantZen™') && (
                      <span className={`bg-gradient-to-r ${tab.color} bg-clip-text text-transparent inline-block`}>
                        QuantZen™
                      </span>
                    )}
                    <span className="text-white">{tab.title.split('QuantZen™')[1] || ''}</span>
                  </motion.h1>

                  {/* Tab Navigation - After Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                  >
                    {tabs.map((tabItem) => (
                      <motion.button
                        key={tabItem.id}
                        onClick={() => setActiveTab(tabItem.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ 
                          boxShadow: ["0 0 20px rgba(59, 130, 246, 0.5)", "0 0 30px rgba(59, 130, 246, 0.8)", "0 0 20px rgba(59, 130, 246, 0.5)"]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg"
                      >
                        {/* Gradient Border */}
                        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                          <div className="w-full h-full rounded-xl bg-gradient-to-r from-white/20 to-white/10" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-2">
                          <tabItem.icon className="w-5 h-5" />
                          {tabItem.label}
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-base lg:text-lg xl:text-xl text-blue-100/80 mb-20 max-w-4xl mx-auto leading-relaxed"
                  >
                    {tab.content}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 max-w-4xl mx-auto"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="quantum" 
                        size="default"
                        className="group relative overflow-hidden cursor-pointer w-full sm:w-auto min-w-[250px]"
                        onClick={() => window.open('https://outlook.office.com/bookwithme/user/6c40c19ef70d49a4a0b26a289f3b3005@quantzen.live/meetingtype/FTx1cTuAEkq6RUz2kd8k7w2?anonymous&ismsaljsauthenabled&ep=mlink', '_blank')}
                      >
                        <span className="relative z-10">Book a 30-min Migration Consult</span>
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="hero" 
                        size="default"
                        className="group relative overflow-hidden cursor-pointer w-full sm:w-auto min-w-[250px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/30 hover:border-purple-400/50"
                        onClick={() => window.open('https://forms.gle/ve1DFKqcjZ4bUHLk6', '_blank')}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="text-xl">🟣</span>
                          Join Early Adopter Program
                        </span>
                      </Button>
                    </motion.div>

                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="hero" 
                        size="default"
                        className="group relative overflow-hidden cursor-pointer w-full sm:w-auto min-w-[180px]"
                        onClick={() =>  window.open('https://calendar.app.google/oHnneZM8DAmQ3hfF6', '_blank')}
                      >
                        <span className="relative z-10">Get the SDK</span>
                      </Button>
                    </motion.div> */}

                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="hero" 
                        size="default"
                        className="group relative overflow-hidden cursor-pointer w-full sm:w-auto min-w-[200px]"
                        onClick={() =>  window.open('https://calendar.app.google/oHnneZM8DAmQ3hfF6', '_blank')}
                      >
                        <span className="relative z-10">Join the POC Program</span>
                      </Button>
                    </motion.div> */}
                  </motion.div>

                  {/* Backed by Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-col items-center justify-center gap-4 mb-40 max-w-4xl mx-auto"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-sm sm:text-base text-blue-200/80 font-medium tracking-wide uppercase"
                    >
                      Powered by
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('https://www.zenithstudio.live/', '_blank')}
                      className="flex items-center justify-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src="/logo_zenith.jpg"
                        alt="Backed by Logo"
                        className="h-8 sm:h-10 md:h-12 w-auto object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200/70"
          >
            {/* <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>NIST PQC Certified</span>
            </div> */}
            {/* <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" />
              <span>Enterprise Ready</span>
            </div> */}
            {/* <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Zero Downtime</span>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-blue-400/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
