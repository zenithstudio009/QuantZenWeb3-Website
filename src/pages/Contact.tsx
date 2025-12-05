// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Navigation from "@/components/marketing/Navigation";
// import Footer from "@/components/marketing/Footer";
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Clock, 
//   Send, 
//   MessageSquare,
//   Globe,
//   Linkedin,
//   Twitter,
//   Github,
//   Users,
//   Calendar,
//   HelpCircle,
//   Building,
//   Zap,
//   Shield
// } from "lucide-react";

// const Contact = () => {
//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       description: "Get in touch via email",
//       contact: "hello@quantzen.io",
//       subtext: "We respond within 24 hours"
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       description: "Speak with our team",
//       contact: "+1 (555) 123-4567",
//       subtext: "Mon-Fri, 9 AM - 6 PM PST"
//     },
//     {
//       icon: Calendar,
//       title: "Schedule a Demo",
//       description: "Book a technical demonstration",
//       contact: "Book Online",
//       subtext: "30-minute technical overview"
//     },
//     {
//       icon: MessageSquare,
//       title: "Live Chat",
//       description: "Chat with our support team",
//       contact: "Start Chat",
//       subtext: "Available during business hours"
//     }
//   ];

//   const officeLocations = [
//     {
//       city: "San Francisco",
//       address: "123 Quantum Street, Suite 400",
//       fullAddress: "San Francisco, CA 94105",
//       type: "Headquarters",
//       features: ["Main Office", "R&D Center", "Customer Success"]
//     },
//     {
//       city: "New York",
//       address: "456 Blockchain Avenue, Floor 12",
//       fullAddress: "New York, NY 10001",
//       type: "East Coast Office",
//       features: ["Sales Team", "Enterprise Support", "Partnerships"]
//     },
//     {
//       city: "London",
//       address: "789 Crypto Lane, Level 8",
//       fullAddress: "London EC2A 4BX, UK",
//       type: "European Operations",
//       features: ["EU Sales", "Technical Support", "Compliance"]
//     }
//   ];

//   const socialLinks = [
//     { icon: Linkedin, name: "LinkedIn", url: "linkedin.com/company/quantzen" },
//     { icon: Twitter, name: "Twitter", url: "@quantzen_io" },
//     { icon: Github, name: "GitHub", url: "github.com/quantzen" },
//     { icon: Globe, name: "Medium", url: "medium.com/@quantzen" }
//   ];

//   const supportCategories = [
//     { icon: HelpCircle, title: "General Inquiry", description: "Questions about our platform and services" },
//     { icon: Building, title: "Enterprise Sales", description: "Discuss enterprise solutions and partnerships" },
//     { icon: Users, title: "Technical Support", description: "SDK integration and technical assistance" },
//     { icon: Globe, title: "Media & Press", description: "Press inquiries and media relations" },
//     { icon: Shield, title: "Security", description: "Report security issues or vulnerabilities" },
//     { icon: Zap, title: "Partnerships", description: "Collaboration and integration opportunities" }
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <Navigation />
//       <div className="bg-gradient-to-br from-background to-secondary/10 overflow-x-hidden w-full">
//       {/* Navigation Spacing */}
//       <div className="h-16"></div>

//       {/* Hero Section */}
//       <section className="py-24 overflow-x-hidden w-full">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
//               Get in <span className="text-gradient">Touch</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
//               Ready to secure your blockchain infrastructure against quantum threats? Our team is here to help you understand how QuantZen™ can protect your organization's digital assets.
//             </p>
//           </motion.div>

//           {/* Contact Methods */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//           >
//             {contactMethods.map((method, index) => (
//               <motion.div
//                 key={method.title}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="gaming-card p-6 text-center h-full">
//                   <method.icon className="w-8 h-8 text-quantum-primary mx-auto mb-4" />
//                   <h3 className="text-lg font-bold mb-2">{method.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
//                   <p className="text-quantum-primary font-medium mb-1">{method.contact}</p>
//                   <p className="text-xs text-muted-foreground">{method.subtext}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Contact Form */}
//       <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-x-hidden w-full">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <Card className="gaming-card p-8">
//                 <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
//                 <p className="text-muted-foreground mb-8">
//                   Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
//                 </p>

//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">First Name *</label>
//                       <Input placeholder="John" className="quantum-input" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Last Name *</label>
//                       <Input placeholder="Doe" className="quantum-input" />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Email Address *</label>
//                       <Input type="email" placeholder="john@company.com" className="quantum-input" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Phone Number</label>
//                       <Input placeholder="+1 (555) 123-4567" className="quantum-input" />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Company/Organization *</label>
//                       <Input placeholder="Acme Corporation" className="quantum-input" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Job Title</label>
//                       <Input placeholder="CTO, Lead Developer, etc." className="quantum-input" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                       {supportCategories.map((category, index) => (
//                         <motion.button
//                           key={category.title}
//                           type="button"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.5, delay: index * 0.1 }}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="p-3 border border-border rounded-lg hover:border-quantum-primary hover:bg-quantum-primary/10 transition-all duration-300 text-left"
//                         >
//                           <category.icon className="w-5 h-5 text-quantum-primary mb-2" />
//                           <div className="text-sm font-medium">{category.title}</div>
//                         </motion.button>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Message *</label>
//                     <Textarea 
//                       placeholder="Tell us about your project, requirements, or questions..."
//                       className="quantum-input min-h-[120px]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
//                     <Input placeholder="Conference, referral, search engine, etc." className="quantum-input" />
//                   </div>

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button variant="quantum" size="lg" className="w-full group">
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-quantum-accent to-quantum-secondary"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </Button>
//                   </motion.div>

//                   <p className="text-xs text-muted-foreground text-center">
//                     By submitting this form, you agree to our Privacy Policy and Terms of Service.
//                   </p>
//                 </form>
//               </Card>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               {/* Office Hours */}
//               <Card className="gaming-card p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center">
//                   <Clock className="w-5 h-5 mr-2 text-quantum-primary" />
//                   Office Hours
//                 </h3>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday</span>
//                     <span>9:00 AM - 6:00 PM PST</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday</span>
//                     <span>10:00 AM - 2:00 PM PST</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span>Closed</span>
//                   </div>
//                   <div className="pt-2 border-t border-border">
//                     <p className="text-muted-foreground">Emergency support available 24/7 for enterprise customers</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Office Locations */}
//               <Card className="gaming-card p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center">
//                   <MapPin className="w-5 h-5 mr-2 text-quantum-primary" />
//                   Our Offices
//                 </h3>
//                 <div className="space-y-4">
//                   {officeLocations.map((office, index) => (
//                     <motion.div
//                       key={office.city}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="border-b border-border pb-4 last:border-b-0"
//                     >
//                       <div className="flex items-start justify-between mb-2">
//                         <h4 className="font-bold">{office.city}</h4>
//                         <span className="text-xs bg-quantum-primary/20 text-quantum-primary px-2 py-1 rounded">
//                           {office.type}
//                         </span>
//                       </div>
//                       <p className="text-sm text-muted-foreground mb-2">
//                         {office.address}<br />
//                         {office.fullAddress}
//                       </p>
//                       <div className="flex flex-wrap gap-1">
//                         {office.features.map((feature, featureIndex) => (
//                           <span key={featureIndex} className="text-xs bg-secondary/50 px-2 py-1 rounded">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Card>

//               {/* Social Links */}
//               <Card className="gaming-card p-6">
//                 <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {socialLinks.map((social, index) => (
//                     <motion.button
//                       key={social.name}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       whileHover={{ scale: 1.05 }}
//                       className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-quantum-primary/20 transition-all duration-300"
//                     >
//                       <social.icon className="w-5 h-5 text-quantum-primary" />
//                       <div className="text-left">
//                         <div className="text-sm font-medium">{social.name}</div>
//                         <div className="text-xs text-muted-foreground">{social.url}</div>
//                       </div>
//                     </motion.button>
//                   ))}
//                 </div>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 overflow-x-hidden w-full">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
//               Frequently Asked <span className="text-gradient">Questions</span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Common questions about QuantZen™ and quantum‑resistant blockchain security.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 question: "What is post‑quantum cryptography?",
//                 answer: "Post‑quantum cryptography refers to cryptographic algorithms that are secure against attacks by quantum computers, ensuring long‑term security for digital communications."
//               },
//               {
//                 question: "When will quantum computers threaten current blockchain security?",
//                 answer: "Current estimates suggest that cryptographically relevant quantum computers could emerge within 10‑15 years, making preparation critical today."
//               },
//               {
//                 question: "How does QuantZen™ integrate with existing blockchain applications?",
//                 answer: "QuantZen™ provides middleware that adds quantum‑resistant signatures without requiring changes to the underlying blockchain protocol."
//               },
//               {
//                 question: "What blockchains does QuantZen™ support?",
//                 answer: "We currently support Ethereum/EVM chains, with Cosmos SDK and Solana support in development. Contact us for other blockchain requirements."
//               },
//               {
//                 question: "Is QuantZen™ suitable for enterprise use?",
//                 answer: "Yes, QuantZen™ is designed for enterprise‑grade security with features like audit logging, compliance support, and enterprise key management."
//               },
//               {
//                 question: "How can I get started with QuantZen™?",
//                 answer: "Join our early access program to get hands‑on experience with our SDK and work directly with our engineering team."
//               }
//             ].map((faq, index) => (
//               <motion.div
//                 key={faq.question}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="gaming-card p-6">
//                   <h4 className="font-bold mb-3 text-quantum-primary">{faq.question}</h4>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Emergency Contact */}
//       <section className="py-16 bg-gradient-to-br from-quantum-primary/10 to-secondary/10 overflow-x-hidden w-full">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <Card className="gaming-card p-8 max-w-2xl mx-auto">
//               <Shield className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
//               <p className="text-muted-foreground mb-6">
//                 For security‑related issues or enterprise emergency support, contact our dedicated response team available 24/7.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="quantum">
//                   <Phone className="w-4 h-4 mr-2" />
//                   Emergency Hotline
//                 </Button>
//                 <Button variant="outline">
//                   <MessageSquare className="w-4 h-4 mr-2" />
//                   Priority Support
//                 </Button>
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { Mail, Send, Calendar } from "lucide-react"; // Updated icons

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Mail Us",
      contact: "support@quantzen.live",
      subtext: "We respond within 24 hours",
    },
    {
      icon: Send,
      title: "Telegram",
      contact: "@quantzen",
      subtext: "24/7 support for critical issues",
    },
    {
      icon: Calendar,
      title: "Book directly",
      contact: "https://outlook.office.com/bookwithme/user/6c40c19ef70d49a4a0b26a289f3b3005@quantzen.live/meetingtype/FTx1cTuAEkq6RUz2kd8k7w2?anonymous&ismsaljsauthenabled&ep=mlink",
      subtext: "Book Now",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation logo="/quantzen-logo.png" />
      <div className="bg-gradient-to-br from-background to-secondary/10 overflow-x-hidden w-full">
        <div className="h-16"></div>

        {/* Hero Section */}
        <section 
          className="py-24 w-full"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to secure your blockchain infrastructure against quantum
                threats? Our team is here to help you understand how QuantZen™ can
                protect your organization's digital assets.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className={`gaming-card p-6 text-center h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      copied === method.contact
                        ? "border-quantum-primary/60 shadow-[0_0_15px_rgba(80,200,255,0.6)]"
                        : ""
                    }`}
                    onClick={() => {
                      if (method.title === "Book directly") {
                        window.open(method.contact, "_blank");
                      } else {
                        handleCopy(method.contact);
                      }
                    }}
                  >
                    <method.icon className="w-8 h-8 text-quantum-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                    <p className="text-quantum-primary font-medium mb-1">
                      {method.title === "Book directly" ? "Click here" : method.contact}
                    </p>
                    <p className="text-xs text-muted-foreground">{method.subtext}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* 📋 Copy Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
                       bg-text-gradient text-black px-6 py-3 rounded-full 
                       shadow-lg text-sm font-medium backdrop-blur-md z-50"
          >
            ✅ {copied} copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Contact;
