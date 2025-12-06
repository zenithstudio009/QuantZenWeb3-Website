import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { AlertTriangle, Zap, Database, Shield, Server, Lock } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-[#FFF7F3] to-[#F3FBFF] overflow-hidden">
      {/* Floating gradient glows */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 right-0 w-[450px] h-[450px] bg-orange-500/25 blur-[130px] rounded-full"
      />
      <motion.div
        animate={{ x: [0, -40, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute bottom-10 -left-20 w-[380px] h-[380px] bg-red-500/20 blur-[110px] rounded-full"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-14">
        {/* -------- HEADER -------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-7 py-3 mb-9 bg-gradient-to-r from-red-200/60 to-orange-200/50 border border-red-400/50 rounded-full backdrop-blur-xl shadow-md">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-red-700">The Problem (Web3 + Web2 urgency)</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.2]">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Quantum breaks the cryptography
            </span>{" "}
            <span className="text-slate-900">the internet runs on.</span>
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed">
            The foundations of digital security are at risk. Here's why the quantum threat is urgent for both Web3 and Web2.
          </p>
        </motion.div>

        {/* -------- TOP MAIN STATEMENT -------- */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-5xl mx-auto text-center mb-20"
>
  <div className="px-10 py-9 rounded-3xl bg-gradient-to-br from-orange-200/60 via-red-200/50 to-orange-100/60 border border-red-300/60 shadow-xl backdrop-blur-xl">
    <p className="text-1xl font-semibold text-slate-800 leading-relaxed">
      Most digital encryptions today depend on RSA and ECC.{" "}
      <span className="text-red-700 font-bold">
        Those foundations won’t survive large-scale quantum computing.
      </span>
    </p>

    <p className="mt-4 text-1xl font-medium text-slate-900 leading-relaxed">
      Attackers are already collecting encrypted data and signatures now to decrypt later.{" "}<br />
      <span className="text-red-700 font-extrabold">
        Harvest-Now, Decrypt-Later is a current threat, not a future one.
      </span>
    </p>
  </div>
</motion.div>

        {/* -------- BULLETED LIST GROUPING -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24"
        >
          {/* Web3 */}
          <div className="p-8 rounded-3xl bg-white/80 border border-red-300/40 backdrop-blur-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-red-700 mb-4">Web3</h3>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li>Web3 apps rely on ECDSA/EdDSA that quantum will crack.</li>
            </ul>
          </div>

          {/* Web2 */}
          <div className="p-8 rounded-3xl bg-white/80 border border-orange-300/40 backdrop-blur-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Web2</h3>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li>Web2 relies on RSA/ECC-based PKI, TLS, VPNs, device identity, and enterprise signing.</li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="p-8 rounded-3xl bg-white/80 border border-rose-300/40 backdrop-blur-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-rose-700 mb-4">Infrastructure</h3>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li>Infrastructure-level migration is slow, political, expensive and leaves you exposed in the meantime.</li>
            </ul>
          </div>
        </motion.div>

        {/* -------- ICON CARDS (IMPROVED) -------- */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { icon: Shield, title: "Most digital encryptions today depend on RSA and ECC.", desc: "Those foundations won't survive large-scale quantum computing.", color: "from-red-500 to-orange-500" },
            { icon: Database, title: "Harvest-Now, Decrypt-Later is a current threat", desc: "Attackers are already collecting encrypted data and signatures now to decrypt later — not a future one.", color: "from-orange-500 to-red-500" },
            { icon: Zap, title: "Web3 apps rely on ECDSA/EdDSA", desc: "that quantum will crack.", color: "from-purple-500 to-pink-500" },
            { icon: Server, title: "Web2 relies on RSA/ECC-based PKI", desc: "TLS, VPNs, device identity, and enterprise signing.", color: "from-blue-500 to-cyan-500" },
            { icon: Lock, title: "Infrastructure-level migration is slow, political, expensive", desc: "and leaves you exposed in the meantime.", color: "from-indigo-500 to-purple-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                <div className="group relative p-8 rounded-4xl bg-white/70 border border-slate-300/30 backdrop-blur-2xl shadow-md transition-all hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all`} />
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow mb-6 border border-white/30`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div> */}

        {/* -------- FOOTER WARNING -------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-28"
        >
          <div className="inline-flex items-center gap-5 px-11 py-8 bg-gradient-to-tr from-red-200/60 to-orange-200/60 border border-red-400/50 rounded-3xl backdrop-blur-xl shadow-xl max-w-4xl mx-auto">
            <AlertTriangle className="w-9 h-9 text-red-700 flex-shrink-0" />
            <p className="text-lg text-slate-800 font-medium text-left">
              <span className="font-bold text-red-700">The clock is ticking.</span>{" "}
              Every day you delay quantum-safe migration is another day attackers
              collect your encrypted data for future decryption.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
