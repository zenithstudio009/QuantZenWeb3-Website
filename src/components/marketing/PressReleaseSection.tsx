import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const PressReleaseSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            
            {/* Image */}
            <img
              src="/press-1.png"
              alt="QuantZen Joins Quantum Security Defence - Press Release"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
              <span className="text-sm font-semibold text-gray-900">December 2025</span>
            </div>

            {/* Content overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Advancing Quantum-Safe Infrastructure
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                Across Web3 and Digital Asset Ecosystems
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quantum Security</h4>
            <p className="text-sm text-gray-600">
              Leading the initiative to protect digital infrastructure from quantum threats
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Web3 Ready</h4>
            <p className="text-sm text-gray-600">
              Building quantum-safe solutions for the decentralized future
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Industry Alliance</h4>
            <p className="text-sm text-gray-600">
              Collaborating with global leaders in quantum security defence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressReleaseSection;
