import { motion } from "framer-motion";

const DemoVideoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            QuantZen™ <span className="text-gradient bg-gradient-to-r from-quantum-primary to-quantum-secondary bg-clip-text text-transparent">Demo</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Watch our wallet demo to see how quantum-safe security works seamlessly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-quantum-primary/20 bg-card">
            {/* 16:9 Aspect Ratio Container */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <video
                className="absolute top-0 left-0 w-full h-full object-contain"
                controls
                preload="metadata"
                style={{ backgroundColor: '#000' }}
              >
                <source src="/QuantZen™_Demovid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Decorative glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-quantum-primary/20 to-quantum-secondary/20 rounded-2xl blur-xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
