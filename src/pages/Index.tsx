import Navigation from "@/components/marketing/Navigation";
import NewHero from "@/components/marketing/NewHero";
import TrustSection from "@/components/marketing/TrustSection";
import ProblemSection from "@/components/marketing/ProblemSection";
import SolutionSection from "@/components/marketing/SolutionSection";
import HowItWorksSection from "@/components/marketing/HowItWorksSection";
import BenefitsSection from "@/components/marketing/BenefitsSection";
import StandardsSection from "@/components/marketing/StandardsSection";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">

      <Navigation />
      <NewHero />

      {/* HERO → TRUST */}
      <div className="relative">
        <div className="relative z-20">
          <TrustSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#3F49E1",
            filter: "blur(200px)",
            top: 0,
            right: "-350px",
          }}
        />
      </div>

      {/* TRUST → PROBLEM */}
      <div className="relative">
        <div className="relative z-20">
          <ProblemSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#3F49E1",
            filter: "blur(200px)",
            top: 0,
            left: "-350px",
          }}
        />
      </div>

      {/* PROBLEM → SOLUTION */}
      <div className="relative">
        <div className="relative z-20">
          <SolutionSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#3F49E1",
            filter: "blur(200px)",
            top: 0,
            right: "-350px",
          }}
        />
      </div>

      {/* SOLUTION → HOW IT WORKS */}
      <div className="relative">
        <div className="relative z-20">
          <HowItWorksSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#3F49E1",
            filter: "blur(200px)",
            top: 0,
            left: "-350px",
          }}
        />
      </div>

      {/* HOW IT WORKS → BENEFITS */}
      <div className="relative">
        <div className="relative z-20">
          <BenefitsSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#3F49E1",
            filter: "blur(200px)",
            top: 0,
            right: "-350px",
          }}
        />
      </div>

      {/* BENEFITS → STANDARDS */}
      <div className="relative">
        <div className="relative z-20">
          <StandardsSection />
        </div>
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#3F49E1",
            filter: "blur(250px)",
            top: 0,
            left: "-400px",
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
