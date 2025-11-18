import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import { initGA, trackPageView, trackUserSession } from '@/lib/analytics';
import { cookieUtils } from '@/lib/cookies';
import './test-env.js';
import Index from "./pages/Index";
import Product from "./pages/Product";
import WhyUs from "./pages/WhyUs";
import CallForPOCs from "./pages/CallForPOCs";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on mount
    initGA();

    // Track returning user
    const userData = cookieUtils.getUserData();
    if (userData && cookieUtils.hasConsent()) {
      trackUserSession(userData.userId);
    }
  }, []);

  useEffect(() => {
    // Track page views
    if (cookieUtils.hasConsent()) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <AnalyticsWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/call-for-pocs" element={<CallForPOCs />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
