import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const threats = [
  {
    threat: "Private-key theft & weak RNG",
    description: "Quantum computers breaking elliptic curve cryptography used in wallet signatures",
    impact: "Leads to total loss of control over funds and identity.",
    quantzenSolution:
      "PQ keys generated with high-entropy RNG, stored in secure enclaves/keystores. Even if ECDSA keys leak, the forged PQ signature is still required - theft fails",
  },
  {
    threat: "Phishing & blind signing",
    description: "Malicious actors creating fraudulent transactions using quantum decryption",
    impact: "Tricks users into giving attackers full wallet access.",
    quantzenSolution:
      "Dual signature + metadata-bound prompts make “invisible approvals” unverifiable and safer to detect.",
  },
  {
    threat: "Smart-contract dispute/fraud",
    description: "Quantum attacks on cryptographic functions within smart contracts",
    impact: "Can lock, drain, or steal assets without recourse.",
    quantzenSolution:
      "Unforgeable PQ audit trail makes user intent verifiable for enterprises, regulators, and courts.",
  },
  {
    threat: "Front-running & MEV signature-sniping",
    description: "Quantum computers compromising bridge validators and multi-sig security",
    impact: "Exploits transaction order to steal profits.",
    quantzenSolution:
      "PQ signature is bound to timestamp/nonce/amount/recipient - copy-pasting a mempool txn won’t verify.",
  },
  {
    threat: "Replay attacks (cross-chain & same-chain)",
    description: "Quantum computers breaking validator signatures in PoS networks",
    impact: "Reuses valid signatures to duplicate or steal transactions.",
    quantzenSolution:
      "Dual signatures are chain-scoped and tied to nonce + chainID - replays fail across Polygon/BNB/Ethereum etc",
  },
  {
    threat: "Bridge & centralized-custody compromises",
    description: "Quantum algorithms reverse-engineering private keys from public addresses",
    impact: "Single points of failure can drain billions in assets.",
    quantzenSolution:
      "Wrap QuantZen™ into custody signing flows to create a provable, tamper-evident audit trail for cross-chain movements.",
  },
  {
    threat: "Insider risks",
    description: "Quantum algorithms reverse-engineering private keys from public addresses",
    impact: "Trusted individuals can exploit access for fraud or theft.",
    quantzenSolution:
      "All privileged actions require dual signing and are logged; insiders cannot quietly deny/erase actions.",
  },
  {
    threat: "Harvest-Now-Decrypt-Later (HNDL)",
    description: "Quantum algorithms reverse-engineering private keys from public addresses",
    impact: "Future quantum attacks can expose today’s encrypted data.",
    quantzenSolution:
      "Every new txn carries a PQC signature, so your Assets remain safe even if ECDSA breaks in the 2030s.",
  },
];

const ThreatMitigationTable = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background to-destructive/5 overflow-x-hidden w-full">
      {/* Custom Color Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(57, 96, 134, 0.08)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-destructive mr-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What QuantZen™ Stops -{" "}
              <span className="text-destructive">Today & Tomorrow</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            The quantum threat to Web3 is real and immediate. Here's how
            QuantZen™ protects against specific attack vectors.
          </p>
        </motion.div>

        {/* Threat Cards */}
        <div className="max-w-7xl mx-auto space-y-6">
          {threats.map((threat, index) => (
            <motion.div
              key={threat.threat}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="gaming-card overflow-hidden rounded-2xl border border-border hover:border-green-500/40 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
                  {/* Threat Side */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-destructive mb-2">
                          {threat.threat}
                        </h3>
                        <div className="bg-destructive/20 rounded-lg p-3">
                          <p className="text-sm font-medium text-destructive">
                            <strong>Impact:</strong> {threat.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QuantZen (Green) Solution */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-100/10 to-green-100/5 lg:col-span-2">
                    <div className="flex items-start space-x-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                        }}
                      >
                        <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          QuantZen™ Protection
                        </h4>
                        <p className="text-muted-foreground">
                          {threat.quantzenSolution}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          className="mt-4 bg-green-600/20 rounded-lg p-3"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-green-600">
                              Active Protection Enabled
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-quantum-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-gradient  mr-3" />
              <h3 className="text-2xl font-bold text-gradient ">
                Comprehensive Quantum Defense
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              QuantZen™'s multi-layered security approach addresses every known
              quantum attack vector against Web3 infrastructure. Our protection
              is proactive, not reactive securing your assets before quantum
              computers pose an existential threat.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreatMitigationTable;
