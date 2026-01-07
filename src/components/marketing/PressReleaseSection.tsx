import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const PressReleaseSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Newspaper className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Latest News
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Press Release
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            QuantZen joins the forefront of quantum security innovation
          </p>
        </motion.div>

        {/* Modern Image Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Side */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-blue-600 tracking-wide uppercase">
              December 2025
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Advancing Quantum-Safe Infrastructure
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              QuantZen is pioneering next-generation quantum-safe security
              frameworks designed to protect Web3 and digital asset ecosystems
              against future cryptographic threats.
            </p>

            <p className="text-gray-500">
              This milestone reinforces QuantZen’s commitment to building
              resilient, decentralized, and future-ready security solutions
              for global digital infrastructure.
            </p>
          </div>
          

          {/* Image Side */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />

            {/* Glass Frame */}
            <div className="relative rounded-3xl p-3 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/press-1.png"
                  alt="QuantZen Press Release"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-6 left-6 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg">
              Official Press Announcement
            </div>
            
          </div>
        </motion.div>


        {/* SECOND PRESS RELEASE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="grid lg:grid-cols-2 gap-12 items-center mt-28"
>
  {/* Image Side */}
  <div className="relative order-2 lg:order-1">
    <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-2xl rounded-3xl" />

    <div className="relative rounded-3xl p-3 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
      <div className="overflow-hidden rounded-2xl">
        <img
          src="/press-2.png"
          alt="QuantZen Expands Quantum Security Research"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
    </div>

  <a
  href="https://thequantuminsider.com/2026/01/05/quantzen-quantum-safe-sdk-web3/"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute -bottom-6 right-6 z-20"
>
  <button className="group flex items-center gap-2 bg-gray-900 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
    Official Press Announcement
    <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
      ↗
    </span>
  </button>
</a>


  </div>

  {/* Text Side */}
  <div className="order-1 lg:order-2">
    <span className="inline-block mb-4 text-sm font-semibold text-purple-600 tracking-wide uppercase">
      January 2026
    </span>

    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
      QuantZen Expands Quantum Security Research
    </h3>

    <p className="text-gray-600 text-lg mb-6">
      Building on its December milestone, QuantZen has expanded its quantum
      cryptography research initiatives to accelerate post-quantum readiness
      across decentralized and enterprise systems.
    </p>

    <p className="text-gray-500">
      This expansion focuses on real-world deployment, interoperability, and
      performance optimization for next-generation cryptographic frameworks.
    </p>
  </div>
</motion.div>


        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-24"
        >
          {[
            {
              title: "Quantum Security",
              desc: "Protecting digital infrastructure from emerging quantum threats",
              color: "blue",
            },
            {
              title: "Web3 Ready",
              desc: "Future-proof cryptography for decentralized ecosystems",
              color: "purple",
            },
            {
              title: "Industry Alliance",
              desc: "Partnering with global leaders in quantum defence",
              color: "green",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressReleaseSection;
