import { useState, useEffect } from 'react';
import { Cookie, ChevronUp, ChevronDown } from 'lucide-react';
import { cookieUtils, CookiePreferences } from '@/lib/cookies';
import { trackUserConsent } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    marketing: true,
    analytics: true,
  });
  const { toast } = useToast();

  useEffect(() => {
    if (cookieUtils.isFirstVisit()) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      marketing: true,
      analytics: true,
    };
    
    cookieUtils.setConsent(true, allAccepted);
    const userData = cookieUtils.initializeUserData(allAccepted);
    trackUserConsent(userData.userId, true, allAccepted);
    
    setIsVisible(false);
    toast({
      title: "All Cookies Accepted",
      description: "Thank you! Your preferences have been saved.",
    });
  };

  const handleAcceptSelection = () => {
    cookieUtils.setConsent(true, preferences);
    const userData = cookieUtils.initializeUserData(preferences);
    trackUserConsent(userData.userId, true, preferences);
    
    setIsVisible(false);
    toast({
      title: "Cookie Preferences Saved",
      description: "Your selection has been saved.",
    });
  };

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate if all optional cookies are enabled
  const allOptionalEnabled = preferences.marketing && preferences.analytics;
  const buttonText = allOptionalEnabled ? "Accept All Cookies" : "Accept Necessary Cookies";

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
      {/* Glittery floating elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`cookie-glitter-${i}`}
          className="absolute animate-float"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            backgroundColor: "hsl(var(--quantum-primary))",
            borderRadius: "50%",
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: `0 0 10px hsl(var(--quantum-primary)), 0 0 20px hsl(var(--quantum-secondary))`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 4 + 3}s`,
            opacity: 0.7,
            zIndex: -1
          }}
        />
      ))}
      
      <div 
        className="border-t shadow-quantum backdrop-blur-xl gaming-border animate-pulse-glow relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(57, 96, 134, 0.75) 0%, rgba(57, 96, 134, 0.85) 100%)",
          borderColor: "hsl(var(--quantum-primary) / 0.6)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: `
            0 -4px 20px rgba(57, 96, 134, 0.3),
            0 0 40px hsl(var(--quantum-primary) / 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Animated background lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`bg-line-${i}`}
            className="absolute animate-border-flow"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: '1px',
              background: `linear-gradient(90deg, transparent, hsl(var(--quantum-primary)), transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Content */}
          <div className="p-4 md:p-6">
            
            {/* Header Row */}
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center animate-glow-pulse"
                style={{
                  background: "hsl(var(--quantum-primary) / 0.3)",
                  boxShadow: "0 0 20px hsl(var(--quantum-primary) / 0.5)"
                }}
              >
                <Cookie 
                  className="w-5 h-5" 
                  style={{ 
                    color: "hsl(var(--quantum-primary))",
                    filter: "drop-shadow(0 0 4px currentColor)"
                  }} 
                />
              </div>
              <div className="flex-1">
                <h2 className="text-white font-bold text-xl mb-2 glow-text">🍪 Cookies</h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  We use cookies to enhance your experience and analyze site traffic. 
                  You can customize your preferences below.
                </p>
              </div>
            </div>

            {/* Collapsible Details */}
            {showDetails && (
              <div className="mb-4 space-y-4 animate-fade-in">
                
                {/* Necessary Cookies */}
                <div 
                  className="rounded-lg p-3 md:p-4 border gaming-card hover-lift"
                  style={{
                    background: "rgba(237, 245, 253, 0.08)",
                    borderColor: "hsl(var(--quantum-primary) / 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 15px rgba(57, 96, 134, 0.15)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base">Necessary cookies</h3>
                    <Switch
                      checked={preferences.necessary}
                      disabled
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed">
                    Required for site functionality. These cookies allow you to browse our website and use our features.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div 
                  className="rounded-lg p-3 md:p-4 border gaming-card hover-lift"
                  style={{
                    background: "rgba(237, 245, 253, 0.08)",
                    borderColor: "hsl(var(--quantum-primary) / 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 15px rgba(57, 96, 134, 0.15)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base">Marketing cookies</h3>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={() => handleToggle('marketing')}
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed">
                    Track your activity to help deliver more relevant advertising campaigns.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div 
                  className="rounded-lg p-3 md:p-4 border gaming-card hover-lift"
                  style={{
                    background: "rgba(237, 245, 253, 0.08)",
                    borderColor: "hsl(var(--quantum-primary) / 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 15px rgba(57, 96, 134, 0.15)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base">Analytics cookies</h3>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={() => handleToggle('analytics')}
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>

                {/* Footer Info */}
                <div className="text-xs text-black leading-relaxed px-2 font-medium">
                  Further information can be found in our{' '}
                  <a 
                    href="/privacy" 
                    className="text-black hover:underline transition-all duration-300 font-semibold"
                  >
                    Privacy Statement
                  </a>{' '}
                  and{' '}
                  <a 
                    href="/cookies" 
                    className="text-black hover:underline transition-all duration-300 font-semibold"
                  >
                    Cookie Policy
                  </a>.
                </div>
              </div>
            )}

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 justify-center px-2">
              
              {/* Customize Button */}
              <Button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 sm:flex-none sm:min-w-[140px] md:min-w-[160px] lg:w-48 h-10 sm:h-11 md:h-12 text-white font-bold text-sm md:text-base transition-all duration-300 hover-lift px-3 sm:px-4 md:px-6"
                style={{
                  background: allOptionalEnabled 
                    ? "linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-secondary)))"
                    : "linear-gradient(135deg, hsl(var(--quantum-primary) / 0.8), hsl(var(--quantum-primary)))",
                  border: "1px solid hsl(var(--quantum-primary) / 0.5)",
                  borderRadius: "8px sm:10px md:12px",
                  boxShadow: `
                    0 4px 15px rgba(57, 96, 134, 0.4),
                    0 0 20px hsl(var(--quantum-primary) / 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
              >
                {showDetails ? (
                  <>
                    <ChevronDown className="w-3 h-3 md:w-4 md:h-4 mr-1 sm:mr-2" />
                    <span className="truncate">
                      <span className="hidden sm:inline">Hide Details</span>
                      <span className="sm:hidden">Hide</span>
                    </span>
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-3 h-3 md:w-4 md:h-4 mr-1 sm:mr-2" />
                    <span className="truncate">
                      <span className="hidden sm:inline">Customize</span>
                      <span className="sm:hidden">Options</span>
                    </span>
                  </>
                )}
              </Button>

              {/* Accept Selection (only show when details expanded) */}
              {showDetails && (
                <Button
                  onClick={handleAcceptSelection}
                  className="flex-1 sm:flex-none sm:min-w-[140px] md:min-w-[160px] lg:w-48 h-10 sm:h-11 md:h-12 text-white font-bold text-sm md:text-base transition-all duration-300 hover-lift px-3 sm:px-4 md:px-6"
                  style={{
                    background: allOptionalEnabled 
                      ? "linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-secondary)))"
                      : "linear-gradient(135deg, hsl(var(--quantum-primary) / 0.8), hsl(var(--quantum-primary)))",
                    border: "1px solid hsl(var(--quantum-primary) / 0.5)",
                    borderRadius: "8px sm:10px md:12px",
                    boxShadow: `
                      0 4px 15px rgba(57, 96, 134, 0.4),
                      0 0 20px hsl(var(--quantum-primary) / 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `
                  }}
                >
                  <span className="truncate">
                    <span className="hidden sm:inline">Accept Selection</span>
                    <span className="sm:hidden">Accept</span>
                  </span>
                </Button>
              )}

              {/* Dynamic Accept Button */}
              <Button
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none sm:min-w-[140px] md:min-w-[160px] lg:w-48 h-10 sm:h-11 md:h-12 text-white font-bold text-sm md:text-base transition-all duration-300 hover-lift animate-pulse-glow px-3 sm:px-4 md:px-6"
                style={{
                  background: allOptionalEnabled 
                    ? "linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-secondary)))"
                    : "linear-gradient(135deg, hsl(var(--quantum-primary) / 0.8), hsl(var(--quantum-primary)))",
                  border: "1px solid hsl(var(--quantum-primary) / 0.5)",
                  borderRadius: "8px sm:10px md:12px",
                  boxShadow: `
                    0 4px 15px rgba(57, 96, 134, 0.4),
                    0 0 20px hsl(var(--quantum-primary) / 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
              >
                <span className="truncate text-center w-full">
                  <span className="hidden sm:inline">{buttonText}</span>
                  <span className="sm:hidden">
                    {allOptionalEnabled ? "Accept All" : "Accept"}
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
