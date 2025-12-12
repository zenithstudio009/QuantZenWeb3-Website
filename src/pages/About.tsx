import { useState } from 'react';
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import {
  Building,
  Users,
  Award,
  Heart,
  Eye,
  Lightbulb,
  Handshake,
  TrendingUp,
  Shield,
  Globe,
  Target,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Sparkles,
  Lock,
  Zap
} from "lucide-react";


const About = () => {
  const [activeTab, setActiveTab] = useState('story');


  const teamMembers = [
    {
      name: "Claire (Elizabeth) C",
      role: "Head of Marketing & VP",
      expertise: "Award-winning Web3 PR & Investor Relations Expert",
      description: "Award-winning Web3 PR and investor relations expert with a decade of experience scaling blockchain brands through strategy, storytelling, and global reach.",
      image: "/clarie.jpg",
       imagePosition: "center center",
      linkedin: "https://www.linkedin.com/in/clairecblockchain/",
    },
    {
      name: "Pathanjali Sharma",
      role: "Head of Business Development & Investor Relations",
      expertise: "Venture Capitalist & Strategic Leader in Growth & Partnerships",
      description: "Experienced venture capitalist and strategic leader driving growth, partnerships, and investor relations spearheading business development and fundraising initiatives.",
      image: "/pathanjali.jpg",
      linkedin: "https://www.linkedin.com/in/pathanjalisharma21/",
    },
    {
      name: "Anna Beata",
      role: "Advisor",
      expertise: "Quantum Cybersecurity Expert, CEO at QuantumPrime",
      description: "Quantum cybersecurity expert and CEO at Quantum Security Defense and QuantumPrime, specialising in quantum-safe encryption, teleportation research, and global education empowering innovation and resilience in the post-quantum security landscape.",
      image: "/anna.jpg",
      linkedin: "https://www.linkedin.com/in/annabeata/",
    },
    {
      name: "Steve Vaile",
      role: "Advisor",
      expertise: "Global Leader in Quantum Innovation & Cybersecurity",
      description: "Global leader in cybersecurity and quantum innovation, bridging Quantum, AI, and Web3 to secure critical infrastructure worldwide. As Consulting Director at Quantum Security & Defence, he drives deep-tech transformation and resilience across international markets.",
      image: "/steve.jpg",
      linkedin: "https://www.linkedin.com/in/stevevaile/",
    },
    {
      name: "Ashish Janghel",
      role: "Founder & CEO",
      expertise: "Certified Quantum Security Engineer, M.Tech in Blockchain",
      description: "Lead architect behind QuantZen™, Certified Quantum Security Engineer and M.Tech in Blockchain pioneering the world's first Quantum-Proof Shield, securing Web3 infrastructure for the post-quantum era.",
      image: "/ashish.JPG",
      linkedin: "https://www.linkedin.com/in/ashish-janghel/",
      isCEO: true,
    }
  ];


  const coreValues = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision prioritizes the security and integrity of our users' data and transactions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible in quantum‑resistant cryptography and blockchain technology.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in open standards, community‑driven development, and transparent communication.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, research rigor, and customer service.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quantum‑resistant security should be accessible to developers and organizations of all sizes.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Heart,
      title: "Purpose",
      description: "We're committed to protecting the future of digital transactions and preserving user privacy.",
      color: "from-red-500 to-pink-500"
    }
  ];


  const stats = [
    { number: "2024", label: "Founded", icon: Sparkles },
    { number: "15+", label: "Team Members", icon: Users },
    { number: "∞", label: "Security Level", icon: Lock },
    { number: "24/7", label: "Protection", icon: Shield }
  ];


  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="bg-white overflow-x-hidden w-full">
        {/* Navigation Spacing */}
        <div className="h-16"></div>


      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>


        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Building the Quantum-Safe Future</span>
            </div>


            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient">
              About QuantZen™
            </h1>


            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We saw two broken paths: either wait for each chain to do multi‑year protocol surgery, or ask users to trade UX for security. We chose a third way. A pragmatic, Chain‑Agnostic layer developers can drop in today. It's the shortest route from "at risk" to quantum‑ready.
            </p>


            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 rounded-2xl transition-all duration-300"></div>
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Story & Mission Section with Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">


            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: 'story', label: 'Our Story', icon: Building },
                { id: 'mission', label: 'Mission & Values', icon: Eye },
                { id: 'problem', label: 'The Problem', icon: Lock },
                { id: 'solution', label: 'Our Solution', icon: Zap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                      : 'bg-card/50 text-muted-foreground hover:bg-card border border-border'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>


            {/* Tab Content */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">


              {/* Story Tab */}
              {activeTab === 'story' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                  </div>


                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        QuantZen™ was born from a simple but urgent realization: the cryptography that secures Web3 today won't survive the quantum era. Instead of waiting for costly, years-long protocol upgrades, the team at Zenith Studio built a plug-in SDK that makes every wallet, dApp, and exchange instantly quantum-proof.
                      </p>
                      <p>
                        Powered by NIST-approved algorithms and a unique dual-signature layer, QuantZen™ bridges today's Web3 with tomorrow's quantum world seamlessly, without forks or downtime.
                      </p>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Building, label: "Industry Leadership", desc: "Pioneering quantum‑resistant solutions" },
                        { icon: Award, label: "Research Excellence", desc: "Published in top conferences" },
                        { icon: Users, label: "Community Driven", desc: "Open‑source approach" },
                        { icon: Globe, label: "Global Impact", desc: "Protecting the Web3 ecosystem" }
                      ].map((item, index) => (
                        <div key={index} className="bg-card/80 rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300">
                          <item.icon className="w-8 h-8 text-primary mb-2" />
                          <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}


              {/* Mission Tab */}
              {activeTab === 'mission' && (
                <div className="space-y-12 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Mission & Values</h2>
                  </div>


                  {/* Mission Statement */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                    <Eye className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Give every Web3 transaction a future‑proof second signature, so the industry never has to choose between usability today and security tomorrow.
                    </p>
                  </div>


                  {/* Core Values Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                      <div
                        key={index}
                        className="group relative bg-card/80 rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Problem Tab */}
              {activeTab === 'problem' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">What's the Problem?</h2>
                  </div>


                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Today's Threats */}
                    <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-red-400" />
                        Today's Threats
                      </h3>
                      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                        <p>
                          The Web3 security landscape is already hostile: in H1 2025, 90 major incidents caused about $2.093B in losses, with six exchange attacks alone accounting for roughly $1.591B.
                        </p>
                        <p>
                          In Q1 2025, losses reached about $2B in just three months, a 96% increase over Q1 2024, driven largely by operational failures and access control exploits.
                        </p>
                        <p>
                          Attackers increasingly blend social engineering, compromised tooling, and stealthy vault flaws to bypass defenses, eroding real assets, trust, and reputations.
                        </p>
                      </div>
                    </div>


                    {/* Quantum Clock */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-purple-400" />
                        The Quantum Clock
                      </h3>
                      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                        <p>
                          The quantum threat is a ticking time bomb: algorithms like Shor's can break today's public‑key systems (ECC, RSA) on sufficiently powerful quantum hardware.
                        </p>
                        <p>
                          Adversaries already harvest‑now, decrypt‑later: collecting data and signatures today to break them once quantum capabilities arrive.
                        </p>
                        <p>
                          For Web3, protocol‑level migration demands hard forks, consensus changes, and multi‑year audits a path many networks will delay or resist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* Solution Tab */}
              {activeTab === 'solution' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">That's Where We Come In</h2>
                  </div>


                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      QuantZen™ offers a third path: let applications wallets, dApps, bridges adopt quantum-safe security now, without waiting for chain upgrades or risking community splits.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      This is not about replacing blockchains but augmenting them: you remain on your chosen chain, with the same UX, while gaining a future-proof dual-signature layer that defends against both today's and tomorrow's threats.
                    </p>
                  </div>


                  {/* Key Benefits */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "No Chain Migration", desc: "Stay on your existing blockchain" },
                      { title: "Instant Integration", desc: "Drop-in SDK solution" },
                      { title: "Future-Proof", desc: "NIST-approved algorithms" }
                    ].map((benefit, index) => (
                      <div key={index} className="bg-card/80 rounded-xl p-4 border border-border">
                        <ArrowRight className="w-6 h-6 text-primary mb-2" />
                        <h3 className="text-foreground font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Team Section - Updated with Full Details */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">World-Class Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep expertise in quantum cryptography, blockchain technology, and enterprise security.
            </p>
          </div>


          {/* Team Grid - Responsive 3/2/1 Column Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Row 1: First 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-card/80 to-card/60 border-border/50 hover:border-primary/50 hover:shadow-primary/20"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-3xl transition-all duration-500 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="w-full h-full rounded-3xl overflow-hidden transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 border-3 border-border group-hover:border-primary/70">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: member.imagePosition || 'center center' }}
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=320`;
                          }}
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                      <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                      
                      {/* Expertise Badge */}
                      <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
                        <p className="text-xs text-primary font-medium">
                          {member.expertise.split(',')[0].trim()}
                        </p>
                      </div>

                      {/* Full Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed px-2">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link w-12 h-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                      >
                        <Linkedin className="w-5 h-5 text-primary group-hover/link:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Steve and Ashish */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {teamMembers.slice(3, 5).map((member, index) => (
                <div
                  key={index + 3}
                  className="group relative backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-card/80 to-card/60 border-border/50 hover:border-primary/50 hover:shadow-primary/20"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-3xl transition-all duration-500 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="w-full h-full rounded-3xl overflow-hidden transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 border-3 border-border group-hover:border-primary/70">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: member.imagePosition || 'center center' }}
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=320`;
                          }}
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                      <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                      
                      {/* Expertise Badge */}
                      <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
                        <p className="text-xs text-primary font-medium">
                          {member.expertise.split(',')[0].trim()}
                        </p>
                      </div>

                      {/* Full Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed px-2">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link w-12 h-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                      >
                        <Linkedin className="w-5 h-5 text-primary group-hover/link:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>


              <div className="relative z-10 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Join Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Are you passionate about cryptography, blockchain security, or quantum computing? We're always looking for talented individuals to join our team.
                </p>
                <a
                  href="https://calendar.app.google/oHnneZM8DAmQ3hfF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};


export default About;
