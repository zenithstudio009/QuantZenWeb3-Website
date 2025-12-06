import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Wallet,
  Globe,
  ArrowRightLeft,
  Server,
  Cloud,
  Cpu,
  Building2,
  Lock,
} from "lucide-react";

/**
 * ModernTrustSection
 * - Preserves all labels / numeric content from your original
 * - Modern layout: left explanatory column + right animated card cluster
 * - Responsive: single column on small screens
 * - Uses framer-motion for entrance, hover tilt, and staggered animations
 */

const industries = [
  { icon: Wallet, label: "Wallets", color: "from-blue-400 to-cyan-500" },
  { icon: Globe, label: "dApps", color: "from-cyan-400 to-teal-500" },
  { icon: ArrowRightLeft, label: "Exchanges", color: "from-purple-400 to-pink-500" },
  { icon: Server, label: "SaaS", color: "from-pink-400 to-rose-500" },
  { icon: Cloud, label: "Cloud Security", color: "from-orange-400 to-amber-500" },
  { icon: Cpu, label: "IoT Networks", color: "from-green-400 to-emerald-500" },
  { icon: Building2, label: "Enterprises", color: "from-indigo-400 to-purple-500" },
  { icon: Lock, label: "Custodians", color: "from-blue-500 to-indigo-600" },
];

/* Framer variants for staggered list entrance */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

const ModernTrustSection: React.FC = () => {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"
    >
      {/* Decorative top SVG wave (subtle separator) */}
      <div className="absolute inset-x-0 -top-24 pointer-events-none">
        <svg className="w-full h-24 opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,104C96,112,192,128,288,138.7C384,149,480,155,576,149.3C672,144,768,128,864,112C960,96,1056,80,1152,69.3C1248,59,1344,53,1392,50.7L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="url(#g1)"></path>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#e6f5ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT: Heading + description + stats */}
        <div className="lg:col-span-5">
          <div className="max-w-xl">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Built for high-risk systems in both{" "}<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-gradient">Web3</span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-gradient">Web2</span>
            </h2>

            {/* <p className="text-lg text-slate-600 mb-8">
              Wallets, dApps, exchanges, SaaS platforms, cloud security teams, IoT networks, and regulated digital infrastructure.
            </p> */}

            {/* Stats - with animated bars */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard title="650+" subtitle="Partners Trust QuantZen™" progress={0.82} gradient="from-blue-400 to-cyan-500" />
              <StatCard title="$50B+" subtitle="Total Transfer Volume" progress={0.9} gradient="from-green-400 to-emerald-500" />
              <StatCard title="80M+" subtitle="Total Transfers" progress={0.75} gradient="from-purple-400 to-pink-500" />
            </div> */}

            {/* <p className="text-slate-600 mt-6">
              Go to market faster. No integration and maintenance overhead. Benefit from risk mitigation, fail safety and seamless interoperability across protocols.
            </p> */}
          </div>
        </div>

        {/* RIGHT: Animated cluster of industry cards */}
        <div className="lg:col-span-7">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Soft background glow */}
            <div className="absolute -inset-12 rounded-3xl blur-3xl opacity-30 bg-gradient-to-tr from-blue-100 to-cyan-100 pointer-events-none" />

            {/* Card cluster - responsive positions with CSS grid at smaller screens */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                {industries.map((it, idx) => (
                  <motion.div
                    key={it.label}
                    variants={cardVariants}
                    whileHover={{ scale: 1.04, rotateX: 6, rotateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-36 sm:w-40 lg:w-44 h-36 sm:h-40 lg:h-44 cursor-pointer"
                    style={{ perspective: 1200 }}
                  >
                    {/* Glass card */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/6 border border-white/8 backdrop-blur-md shadow-lg overflow-hidden">
                      {/* Accent gradient ribbon */}
                      <div className={`absolute -top-8 -left-10 w-36 h-36 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${it.color}`} />
                      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center gap-3">
                        {/* Icon circle */}
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${it.color} bg-opacity-15 border border-white/6`}>
                          <it.icon className="w-6 h-6 text-slate-800" />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">{it.label}</div>
                        <div className="text-xs text-slate-500">High-risk systems</div>
                      </div>
                    </div>

                    {/* Floating micro-shadow and outline (for hover) */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="w-full h-full rounded-2xl border border-white/6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative dashed connector lines (subtle) - only on large screens */}
              <svg className="hidden lg:block absolute inset-0 pointer-events-none" viewBox="0 0 800 520" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradLine" x1="0" x2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path d="M50 120 C 200 20, 400 220, 760 50" stroke="url(#gradLine)" strokeWidth="1.2" fill="none" strokeDasharray="6 8" />
                <path d="M70 360 C 220 260, 420 460, 740 310" stroke="url(#gradLine)" strokeWidth="1.2" fill="none" strokeDasharray="6 8" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernTrustSection;

/* ---------------------------
   Helper StatCard component
   --------------------------- */
type StatCardProps = {
  title: string;
  subtitle: string;
  progress?: number; // 0-1
  gradient?: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, subtitle, progress = 0.75, gradient = "from-blue-400 to-cyan-500" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-4 shadow-sm"
      aria-hidden="false"
    >
      <div className="text-xl sm:text-2xl font-bold text-slate-900">{title}</div>
      <div className="text-sm text-slate-600 mb-3">{subtitle}</div>

      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(100, Math.round(progress * 100))}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        />
      </div>
    </motion.div>
  );
};
