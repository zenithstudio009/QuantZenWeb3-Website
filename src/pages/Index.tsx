import { lazy, Suspense } from "react";
import Navigation from "@/components/marketing/Navigation";
import NewHero from "@/components/marketing/NewHero";

// Lazy load below-the-fold components
const TrustSection = lazy(() => import("@/components/marketing/TrustSection"));
const PressReleaseSection = lazy(() => import("@/components/marketing/PressReleaseSection"));
const ProblemSection = lazy(() => import("@/components/marketing/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/marketing/SolutionSection"));
const HowItWorksSection = lazy(() => import("@/components/marketing/HowItWorksSection"));
const BenefitsSection = lazy(() => import("@/components/marketing/BenefitsSection"));
const StandardsSection = lazy(() => import("@/components/marketing/StandardsSection"));
const Footer = lazy(() => import("@/components/marketing/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">

      <Navigation />
      <NewHero />

      <Suspense fallback={<div className="h-screen" />}>
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

      {/* TRUST → PRESS RELEASE */}
      <div className="relative">
        <div className="relative z-20">
          <PressReleaseSection />
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

      {/* PRESS RELEASE → PROBLEM */}
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
      </Suspense>
    </div>
  );
};

export default Index;
