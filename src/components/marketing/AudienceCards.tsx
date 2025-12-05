import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wallet, Smartphone, GitBranch, Network } from "lucide-react";

const audiences = [
  {
    icon: Wallet,
    title: "Wallets & Custodians:",
    // subtitle: "Custodial & Non-Custodial",
    description: "Hybrid ECDSA+PQC signing, verifiable off‑chain proofs, governance‑friendly key rotation.",
    features: [
      "Zero integration complexity",
      "Backward compatible with existing wallets", 
      "Future-proof user asset protection",
      "No user re-onboarding required"
    ],
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    icon: Smartphone,
    title: "dApps & Protocols:",
    // subtitle: "DeFi, NFT, Gaming",
    description: "Add PQ verification to critical paths (auth, withdraw, upgrade, governance, oracles).",
    features: [
      "Plug-and-play quantum security",
      "Maintain existing smart contracts",
      "Protect user interactions",
      "Future-ready infrastructure"
    ],
    bgGradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    icon: GitBranch,
    title: "Bridges & Exchanges:", 
    // subtitle: "Cross-Chain Infrastructure",
    description: "Chain‑agnostic PQ layer with auditability for cross‑chain flows and hot‑wallet ops.",
    features: [
      "Quantum-resistant validators",
      "Secure cross-chain messaging",
      "Protected multi-sig wallets",
      "Enhanced bridge security"
    ],
    bgGradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  },
  {
    icon: Network,
    title: "L1/L2 Teams:",
    // subtitle: "Blockchain Networks",
    description: "Ship PQ readiness without multi‑year protocol re‑engineering. Roll out chain‑wide protection via SDKs and registry contracts.",
    features: [
      "No consensus mechanism changes",
      "Preserve network effects",
      "Gradual quantum transition",
      "Ecosystem-wide protection"
    ],
    bgGradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  }
];

const AudienceCards = () => {
  return (
    <section className="relative py-24 overflow-x-hidden w-full">
      {/* Custom Color Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(57, 96, 134, 0.08)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">,
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Who<span className="text-gradient"> QuantZen™ Is </span>For
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Whether you're building wallets, dApps, bridges, or entire blockchain networks, 
            QuantZen™ provides quantum protection tailored to your specific use case.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="gaming-card h-full overflow-hidden">
                <div className={`bg-gradient-to-br ${audience.bgGradient} p-6 sm:p-8 h-full`}>
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300"
                    >
                      <audience.icon className={`w-8 h-8 ${audience.iconColor}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-quantum-primary transition-colors">
                        {audience.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {audience.description}
                  </p>

                  {/* Features */}
                  {/* <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-quantum-primary">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {audience.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + featureIndex * 0.1 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-quantum-primary rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div> */}

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="mt-8 pt-6 border-t border-white/20"
                  >
                    <div
  className="flex items-center justify-between cursor-pointer hover:text-quantum-secondary transition-colors duration-300"
  onClick={() => window.open("https://outlook.office.com/bookwithme/user/6c40c19ef70d49a4a0b26a289f3b3005@quantzen.live/meetingtype/FTx1cTuAEkq6RUz2kd8k7w2?anonymous&ismsaljsauthenabled&ep=mlink", "_blank")}
>
  <span className="text-sm font-medium text-quantum-primary">
    Schedule a Demo.
  </span>
  <motion.div
    whileHover={{ x: 5 }}
    className="text-quantum-primary"
  >
    →
  </motion.div>
</div>

                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-quantum-primary/20">
            <h3 className="text-2xl font-bold mb-4">Universal Quantum Protection</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              QuantZen™'s modular architecture adapts to any Web3 infrastructure. From individual wallets to entire blockchain ecosystems, 
              we provide quantum security that scales with your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-quantum-primary/20 rounded-full text-quantum-primary">
                SDK Available
              </span>
              <span className="px-3 py-1 bg-quantum-primary/20 rounded-full text-quantum-primary">
                API Integration
              </span>
              <span className="px-3 py-1 bg-quantum-primary/20 rounded-full text-quantum-primary">
                White-label Solutions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    );
  };

  export default AudienceCards;