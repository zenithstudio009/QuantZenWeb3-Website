import { Zap, Github, Twitter, Linkedin, Mail, Shield, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2030-01-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownBox = ({ label, value, isSeconds }) => {
    return (
      <div
        className="flex flex-col items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg border border-quantum-primary/50 min-w-[50px] sm:min-w-[70px] text-white backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgb(48, 110, 232) 0%, rgb(82, 177, 224) 50%, rgb(78, 206, 218) 100%)",
        }}
      >
        {isSeconds ? (
          <motion.div
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-bold"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
          >
            {value}
          </motion.div>
        ) : (
          <span
            className="text-lg sm:text-xl font-bold"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
          >
            {value}
          </span>
        )}
        <span className="text-xs sm:text-sm uppercase">{label}</span>
      </div>
    );
  };
  const footerLinks = {
    Resources: [
      { name: "Why Us", href: "/why-us" },
      { name: "Product", href: "/product" },
      { name: "Partners", href: "/call-for-pocs" },
    ],
    Company: [
      { name: "Roadmap", href: "/roadmap" },
      { name: "Contact", href: "/contact" },
      { name: "About Us", href: "/about" },
      { name: "Whitepaper", href: "https://drive.google.com/file/d/1saUFPcv5kjfmV_Qg4KEwrJz891EBnsCW/view?usp=drivesdk", external: true },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#", action: () => setIsPrivacyOpen(true) },
      { name: "Terms of Use", href: "#", action: () => setIsTermsOpen(true) },
    ],
    Connect: [
      { name: "Book A Demo Call", href: "https://calendar.app.google/oHnneZM8DAmQ3hfF6", external: true },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/quant_zen",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/quantzen%E2%84%A2/",
      icon: <Linkedin className="w-5 h-5" />
    }
  ];

  return (
    <>
      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{
                backgroundImage: "linear-gradient(90deg, #00bcd4, #3f51b5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 6px rgba(0, 188, 212, 0.4)",
              }}
            >
              COUNTDOWN TO Q-DAY ✨
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The quantum era is approaching. Secure your Web3 infrastructure today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* Hourglass GIF */}
            <img
              src="/hourglass1-unscreen.gif"
              alt="Hourglass Animation"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg mb-4 sm:mb-0"
            />

            {/* Countdown boxes */}
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
              <CountdownBox label="Days" value={timeLeft.days} isSeconds={false} />
              <CountdownBox label="Hours" value={timeLeft.hours} isSeconds={false} />
              <CountdownBox label="Minutes" value={timeLeft.minutes} isSeconds={false} />
              <CountdownBox label="Seconds" value={timeLeft.seconds} isSeconds={true} />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-card border-t border-quantum-primary/20 overflow-hidden w-full">
        {/* Custom Color Background Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "rgba(57, 96, 134, 0.08)",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-quantum opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-1">
              <img 
                src="/logo.png" 
                alt="QuantZen Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground  mb-2">
              QuantZen - Quantum-safe, chain agnostic SDK securing Web3 applications without Hard Forks.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-sm text-muted-foreground hover:text-foreground transition-smooth text-left"
                      >
                        {link.name}
                      </button>
                    ) : link.external ? (
                      link.name === "Book A Demo Call" ? (
                        <a
                          href={link.href}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:transform hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book A Demo Call
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      )
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )}

                  </li>
                ))}
                
                {/* Add Social Icons only for Connect section */}
                {category === "Connect" && (
                  <li className="pt-4">
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg text-muted-foreground hover:text-quantum-primary transition-all duration-300 hover:bg-quantum-primary/10 border border-quantum-primary/30 hover:border-quantum-primary/60"
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-quantum-primary/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Zenith Studio LLC. All Rights Reserved.
QuantZen™ developed by  Zenith Studio LLC are registered trademarks licensed under the Government of Ras Al Khaimah, United Arab Emirates. All content, including but not limited to text, code, software, graphics, trademarks, visual identity, SDK , Logo documentation, and digital assets, is the exclusive intellectual property of Zenith Studio LLC. Unauthorised reproduction, distribution, modification, reverse engineering, or republication, in whole or in part, without prior written permission, is strictly prohibited and may result in legal action under applicable UAE Federal Copyright Law No. 7 of 2002 (as amended) and relevant international treaties.
          </p>
          {/* <div className="flex gap-4">
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div> */}
        </motion.div>
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-primary" />
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Effective Date: October 2025
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">Entity: Zenith Studio LLC - License No. 17003626, Ras Al Khaimah, United Arab Emirates</p>
              <p>
                At Zenith Studio LLC, we respect your privacy and are committed to protecting your personal information while providing transparency about how it is handled. This Privacy Policy applies to visitors of our official website and users of the QuantZen™ platform, products, and related services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h3>
              <p className="text-sm text-muted-foreground mb-2">We collect minimal information required to operate our services efficiently:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Basic usage data (e.g., browser type, device, and analytics) to enhance user experience.</li>
                <li>Voluntary contact information (e.g., name, email, organization) if you fill out inquiry or partnership forms.</li>
                <li>No financial, biometric, or sensitive personal data is collected unless explicitly stated for future enterprise use cases.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
              <p className="text-sm text-muted-foreground mb-2">Collected data is used strictly for:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Responding to inquiries and partnership requests.</li>
                <li>Improving website performance and SDK documentation.</li>
                <li>Ensuring product and platform security.</li>
                <li>Complying with applicable legal and regulatory obligations under UAE law.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Data Protection & Storage</h3>
              <p className="text-sm text-muted-foreground">
                All information is stored on secure servers and protected by industry-standard encryption. Access is restricted to authorized personnel only.
                Zenith Studio LLC complies with UAE Federal Law No. 45 of 2021 on Personal Data Protection (PDPL) and aligns with global data-security standards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Sharing & Disclosure</h3>
              <p className="text-sm text-muted-foreground">
                We do not sell, rent, or trade personal data. Information may be shared only with trusted partners for operational support (e.g., analytics, hosting) under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Cookies & Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Our website may use cookies for analytics, traffic optimization, and site functionality. You may disable cookies via your browser settings without affecting essential access.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h3>
              <p className="text-sm text-muted-foreground">
                You have the right to request access, correction, or deletion of your information at any time. Requests can be made via info@zenithstudio.live
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Policy Updates</h3>
              <p className="text-sm text-muted-foreground">
                We may revise this Privacy Policy periodically. Continued use of our website after such updates constitutes your acceptance of the revised policy.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Use Modal */}
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6 text-primary" />
              Terms of Use
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              By accessing or using this website and any product, SDK, or material provided by Zenith Studio LLC, you agree to the following Terms of Use.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Intellectual Property</h3>
              <p className="text-sm text-muted-foreground">
                All content including the QuantZen™ name, logo, SDK, visuals, documentation, and related IP—is the sole property of Zenith Studio LLC. Unauthorized copying, modification, or redistribution is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Limited License</h3>
              <p className="text-sm text-muted-foreground">
                You are granted a non-exclusive, non-transferable, revocable license to view and use the website and SDK solely for evaluation, informational, or integration purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Disclaimer of Liability</h3>
              <p className="text-sm text-muted-foreground">
                All information provided is for general understanding and educational purposes. QuantZen™ is an evolving post-quantum security SDK; Zenith Studio LLC disclaims all warranties, express or implied, regarding accuracy, performance, or merchantability. We shall not be liable for any damages, direct or indirect, arising from the use or inability to use our website or SDK.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Governing Law</h3>
              <p className="text-sm text-muted-foreground">
                These terms are governed by and construed in accordance with the laws of the United Arab Emirates, under the jurisdiction of Ras Al Khaimah courts and arbitration centers (DIAC/ADCCAC).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Contact</h3>
              <p className="text-sm text-muted-foreground">For privacy or legal inquiries, contact:</p>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>📧 info@zenithstudio.io</p>
                <p>🏢 Zenith Studio LLC, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
    </>
  );
};

export default Footer;
