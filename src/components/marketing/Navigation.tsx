import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Main navigation items that will be visible on desktop
  const mainNavLinks = [
    { name: "Quantum-Proof Docs", href: "https://www.quantzensdk.live/", external: true },
    { name: "Whitepaper", href: "https://quantzen-my.sharepoint.com/:b:/g/personal/support_quantzen_live/IQBuPTTFs20jT4vWull0t_mgAfAIx-mJt8weznC88NHkPlo", external: true },
    { name: "Contact", href: "/contact" },
  ];

  // Menu items that will be hidden in hamburger menu
  const hiddenNavLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/why-us" },
    { name: "Product", href: "/product" },
    { name: "Partners", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About Us", href: "/about" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/quant_zen",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/quantzen%E2%84%A2/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full border-b border-quantum-primary/30 backdrop-blur-md bg-white/90 z-50">
        <nav className="flex items-center justify-between px-6 sm:px-10 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <motion.img
              src="/logo.png"
              alt="QuantZen Logo"
              className="w-28 h-auto object-contain transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          {/* Right side content container */}
          <div className="flex items-center ml-auto">
            {/* Desktop Links and Social Icons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Main Navigation Links (Whitepaper & Contact) */}
              <div className="flex items-center gap-2">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-900 bg-white/60 shadow-sm border border-quantum-primary/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:border-quantum-primary"
                      >
                        <span className="text-sm sm:text-base">{link.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-900 bg-white/60 shadow-sm border border-quantum-primary/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:border-quantum-primary"
                      >
                        <span className="text-sm sm:text-base">{link.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (mainNavLinks.length + index) * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-quantum-primary hover:text-quantum-secondary transition-all duration-300 hover:bg-quantum-primary/10 border border-quantum-primary/30 hover:border-quantum-primary/60 bg-white/40"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Hamburger Menu Button - Always visible for accessing hidden items */}
            <div className="flex items-center ml-2">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-gray-700 bg-white/60 border border-gray-200 hover:border-quantum-primary/50 hover:shadow-md relative z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </div>

      {/* Backdrop overlay - only visible when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Right-side sliding panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              duration: 0.5 
            }}
            className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white/95 backdrop-blur-md border-l border-quantum-primary/30 shadow-2xl z-50"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between p-6 border-b border-quantum-primary/20">
              <h2 className="text-xl font-semibold text-gray-900">Navigation</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Panel Content */}
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex-1 p-6">
                {/* All Navigation Links */}
                <div className="space-y-3 mb-8">
                  {hiddenNavLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between p-4 rounded-xl font-medium text-gray-900 bg-white/80 border border-quantum-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-quantum-primary/5 hover:border-quantum-primary"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 text-quantum-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                  {mainNavLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (hiddenNavLinks.length + index) * 0.1 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between p-4 rounded-xl font-medium text-gray-900 bg-white/80 border border-quantum-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-quantum-primary/5 hover:border-quantum-primary"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 text-quantum-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between p-4 rounded-xl font-medium text-gray-900 bg-white/80 border border-quantum-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-quantum-primary/5 hover:border-quantum-primary"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 text-quantum-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Panel Footer - Social Links */}
              <div className="border-t border-quantum-primary/20 p-6">
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl text-quantum-primary hover:text-quantum-secondary transition-all duration-300 hover:bg-quantum-primary/10 border border-quantum-primary/30 hover:border-quantum-primary/60 bg-white/60 hover:shadow-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
