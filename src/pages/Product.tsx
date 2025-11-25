
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  Layers,
  Database,
  CheckCircle,
  Code2,
  ArrowRight,
  FileText
} from "lucide-react";

const Product = () => {
  const coreComponents = [
    {
      icon: Layers,
      title: "Dual-Signature Layer™",
      description: "hybrid ECDSA/EdDSA + PQC (Dilithium, Falcon, SPHINCS+)."
    },
    {
      icon: Database,
      title: "Key Registry (on-chain)",
      description: "map accounts to PQ public keys or commitments."
    },
    {
      icon: CheckCircle,
      title: "Verification",
      description: "on-chain (contracts/precompiles) + off-chain (managed verifier, audit log)."
    },
    {
      icon: Code2,
      title: "SDKs",
      description: "TypeScript (WASM), Rust, Go (roadmap), with simple APIs: signPQC, verifyPQC, registerKey."
    }
  ];

  const developerSteps = [
    "Import SDK",
    "Register a PQ key", 
    " Dual-Sign ",
    "Verify"
  ];

  const apis = [
    "generatePQKeypair(algorithm) - Generates high-entropy post-quantum keys using Dilithium & KYBER.",
    "registerPQKey(account, keyCommitment) - Registers PQ key commitments on-chain.",
    "signHybrid(txData, algorithm, metadata)  - Produces signatures (ECDSA + PQC) seamlessly.",
    "verifyHybrid(signature, account, metadata) - Validates both signatures and returns verification result."
  ];

  const supportedChains = [
    "Ethereum / BNB / Polygon",
    "Cosmos SDK / Tendermint",
    "Solana ( via adapter)",
    "Others on request"
  ];

  const securityWins = [
    {
      title: "Non-repudiation & user-intent proofs",
      description: "for regulated and enterprise flows."
    },
    {
      title: "Replay-proof across chains",
      description: "via chain-scoped metadata binding."
    },
    {
      title: "Bridge/custody workflows",
      description: "become tamper-evident."
    },
    {
      title: "Safer prompts",
      description: "reduce blind-signing risk."
    }
  ];

const handleDownload = () => {
    // Open Google Drive document in new tab for viewing/downloading
    const driveUrl = "https://drive.google.com/file/d/1saUFPcv5kjfmV_Qg4KEwrJz891EBnsCW/view?usp=drivesdk";
    window.open(driveUrl, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      {/* Hero Section */}
<section className="pt-32 pb-20 bg-gradient-to-br from-background via-quantum-dark/20 to-background relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient relative z-10">
        PRODUCT & TECH
      </h1>
      <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
        A chain-agnostic middleware layer that adds PQC signing and verification 
        to blockchain transactions.
      </p>
    </motion.div>
  </div>

  {/* Glittery Floating Balls */}
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={`ball-${i}`}
      className="absolute bg-quantum-primary/50 rounded-full shadow-[0_0_8px_rgba(80,200,255,0.6)]"
      style={{
        width: `${Math.random() * 12 + 6}px`,
        height: `${Math.random() * 12 + 6}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 50, 0],
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, 180, 0],
      }}
      transition={{
        duration: Math.random() * 6 + 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  ))}

  {/* Floating Lines */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={`line-${i}`}
      className="absolute bg-gradient-to-r from-quantum-primary/40 via-quantum-secondary/40 to-quantum-primary/40 rounded-full shadow-[0_0_6px_rgba(80,200,255,0.4)]"
      style={{
        width: `${Math.random() * 80 + 40}px`,
        height: '2px',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 50 + 50, 0],
        opacity: [0.2, 0.7, 0.2],
        rotate: [0, Math.random() * 360, 0],
      }}
      transition={{
        duration: Math.random() * 8 + 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  ))}
</section>

      {/* FRAME 1: What Is QuantZen */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              What Is <span className="text-gradient">QuantZen™</span>?
            </h2>
            <p className="text-lg text-foreground/80 mb-12 text-center max-w-4xl mx-auto">
              A chain-agnostic middleware layer that adds PQC signing and verification to blockchain transactions, 
              independent of the underlying chain. It intercepts or augments normal transaction flows to add a PQ 
              layer without forking the blockchain.
            </p>

            <h3 className="text-2xl font-bold mb-8 text-center">Core Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20 hover:border-quantum-primary/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-quantum-primary/20">
                        <component.icon className="w-6 h-6 text-quantum-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{component.title}</h4>
                        <p className="text-foreground/70">{component.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRAME 2: Developer Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Developer <span className="text-gradient">Experience</span>
            </h2>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {developerSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="px-4 py-2 bg-quantum-primary/20 rounded-lg text-sm font-medium">
                      {step}
                    </div>
                    {index < developerSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 mx-2 text-quantum-primary" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-foreground/70 mb-8">
                QuantZen™ makes post-quantum security integration effortless no protocol changes, no hard forks. Works out-of-the-box with existing EVM and non-EVM wallets, dApps, and smart contract clients.

              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-6">APIs (examples)</h3>
                <div className="space-y-3">
                  {apis.map((api, index) => (
                    <div key={index} className="p-3 bg-card/50 rounded-lg border border-quantum-primary/20">
                      <code className="text-sm text-quantum-primary">{api}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Security Highlights
</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Hardware-grade RNG and secure key storage (WebCrypto, Keystore, or Enclave).
</li>
                  <li>•Audited WASM modules to prevent side-channel leaks.
</li>
                  <li>• Optional encrypted IPFS audit logs — linked to on-chain metadata for compliance and traceability.
</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">Supported Chains (initial/roadmap)</h3>
                <div className="space-y-2">
                  {supportedChains.map((chain, index) => (
                    <div key={index} className="text-foreground/70">• {chain}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRAME 3: Architecture */}
      {/* <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              Architecture <span className="text-gradient">(At a Glance)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Client calls signTransaction → QuantZen™ SDK also calls signPQC.",
                "Call-data includes PQ signature (algoID + signature bytes).",
                "The contract checks ECDSA as usual and verifies PQC via registry/precompile.",
                "Verifier optionally stores proofs off-chain and returns attestations."
              ].map((step, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-card to-card/50 rounded-lg border border-quantum-primary/20">
                  <div className="w-8 h-8 bg-quantum-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-quantum-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground/70">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              <strong>Result:</strong> Transaction executes only if both checks pass (policy-configurable).
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* FRAME 4: Security Wins Beyond Quantum */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Security Wins <span className="text-gradient">Beyond Quantum</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {securityWins.map((win, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20">
                    <h4 className="text-lg font-semibold mb-2 text-quantum-primary">{win.title}</h4>
                    <p className="text-foreground/70">{win.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>


           <div className="text-center bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-6 sm:p-10 md:p-12 border border-quantum-primary/20 mx-auto max-w-4xl">
  <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
    Even if you believe quantum is years away, QuantZen™ pays for itself by reducing today’s losses
    and by future-proofing users’ assets against "Harvest Now Decrypt later"
  </p>

  <div className="flex justify-center mt-6 sm:mt-8">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto"
    >
      <Button
        size="lg"
        onClick={handleDownload}
        className="flex items-center justify-center text-center bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white font-semibold hover:shadow-lg hover:shadow-quantum-primary/40 transition-all duration-300 rounded-xl px-6 sm:px-10 py-4 sm:py-5 whitespace-normal leading-snug text-sm sm:text-base md:text-lg break-words mx-auto"
      >
        <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
        <span className="block text-center">
         WHITEPAPER / TECHNICAL DOCUMENTS
        </span>
        <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
      </Button>
    </motion.div>
  </div>
</div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
