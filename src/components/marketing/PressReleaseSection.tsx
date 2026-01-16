import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper } from "lucide-react";

/* -------------------- PRESS DATA -------------------- */
const pressSlides = [
  {
    date: "December 2025",
    title: "Advancing Quantum-Safe Infrastructure",
    desc1:
      "QuantZen is pioneering next-generation quantum-safe security frameworks designed to protect Web3 and digital asset ecosystems against future cryptographic threats.",
    desc2:
      "This milestone reinforces QuantZen’s commitment to building resilient, decentralized, and future-ready security solutions.",
    image: "/press-1.png",
    cta: "Official Press Announcement",
    link: null,
  },
  {
    date: "January 2026",
    title: "QuantZen Expands Quantum Security Research",
    desc1:
      "Building on its December milestone, QuantZen has expanded its quantum cryptography research initiatives to accelerate post-quantum readiness across decentralized and enterprise systems.",
    desc2:
      "This expansion focuses on real-world deployment, interoperability, and performance optimization for next-generation cryptographic frameworks.",
    image: "/press-2.png",
    cta: "Read Full Article",
    link: "https://thequantuminsider.com/2026/01/05/quantzen-quantum-safe-sdk-web3/",
  },
  {
    date: "January 2026",
    title: "QuantZen Launches Quantum-Safe SDK to Strengthen Web3 Security",
    desc1:
      "QuantZen introduces a next-generation quantum-safe SDK designed to protect Web3 applications from emerging quantum threats.",
    desc2:
      "The solution enables developers to build resilient, future-proof decentralized systems with enhanced cryptographic security.",
    image: "/press-3.png",
    cta: "Read Full Article",
    link: "https://quantumcomputer.blog/the-quantzen-quantum-safe-technology-for-web3/",
  },
];

/* -------------------- COMPONENT -------------------- */
const PressReleaseSection = () => {
  const [index, setIndex] = useState(0);

  /* Auto slide every 3 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % pressSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = pressSlides[index];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* ---------------- HEADER ---------------- */}
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



        {/* ---------------- SLIDER ---------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* TEXT */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold text-blue-600 tracking-wide uppercase">
                {slide.date}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {slide.title}
              </h3>

              <p className="text-gray-600 text-lg mb-6">
                {slide.desc1}
              </p>

              <p className="text-gray-500">
                {slide.desc2}
              </p>
            </div>

            {/* IMAGE + CTA */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />

              {/* Glass Frame */}
              <div className="relative rounded-3xl p-3 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CTA Button */}
              {slide.link && (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-6 right-6"
                >
                  <button className="group flex items-center gap-2 bg-gray-900 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                    {slide.cta}
                    <span className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                      ↗
                    </span>
                  </button>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        
      </div>
    </section>
  );
};

export default PressReleaseSection;
