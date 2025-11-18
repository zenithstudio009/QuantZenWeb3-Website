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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
      <div 
        className="border-t shadow-2xl backdrop-blur-md"
        style={{
          background: "rgba(57, 96, 134, 0.95)",
          borderColor: "hsl(var(--quantum-primary) / 0.3)"
        }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="p-4 md:p-6">
            
            {/* Header Row */}
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "hsl(var(--quantum-primary) / 0.2)",
                }}
              >
                <Cookie className="w-5 h-5" style={{ color: "hsl(var(--quantum-primary))" }} />
              </div>
              <div className="flex-1">
                <h2 className="text-white font-bold text-xl mb-2">🍪 Cookies</h2>
                <p className="text-white/80 text-sm leading-relaxed">
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
                  className="rounded-lg p-4 border"
                  style={{
                    background: "rgba(237, 245, 253, 0.1)",
                    borderColor: "hsl(var(--quantum-primary) / 0.3)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">Necessary cookies</h3>
                    <Switch
                      checked={preferences.necessary}
                      disabled
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Required for site functionality. These cookies allow you to browse our website and use our features.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div 
                  className="rounded-lg p-4 border"
                  style={{
                    background: "rgba(237, 245, 253, 0.1)",
                    borderColor: "hsl(var(--quantum-primary) / 0.3)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">Marketing cookies</h3>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={() => handleToggle('marketing')}
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Track your activity to help deliver more relevant advertising campaigns.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div 
                  className="rounded-lg p-4 border"
                  style={{
                    background: "rgba(237, 245, 253, 0.1)",
                    borderColor: "hsl(var(--quantum-primary) / 0.3)"
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">Analytics cookies</h3>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={() => handleToggle('analytics')}
                      className="data-[state=checked]:bg-quantum-primary"
                    />
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>

                {/* Footer Info */}
                <div className="text-xs text-white/70 leading-relaxed">
                  Further information can be found in our{' '}
                  <a 
                    href="/privacy" 
                    className="hover:underline"
                    style={{ color: "hsl(var(--quantum-primary))" }}
                  >
                    Privacy Statement
                  </a>{' '}
                  and{' '}
                  <a 
                    href="/cookies" 
                    className="hover:underline"
                    style={{ color: "hsl(var(--quantum-primary))" }}
                  >
                    Cookie Policy
                  </a>.
                </div>
              </div>
            )}

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              
              {/* Customize Button */}
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white"
                style={{
                  borderColor: "hsl(var(--quantum-primary) / 0.5)",
                  background: "transparent"
                }}
              >
                {showDetails ? (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Customize
                  </>
                )}
              </Button>

              {/* Accept Selection (only show when details expanded) */}
              {showDetails && (
                <Button
                  onClick={handleAcceptSelection}
                  variant="outline"
                  className="w-full sm:w-auto text-white hover:bg-white/10"
                  style={{
                    borderColor: "hsl(var(--quantum-primary))",
                    color: "hsl(var(--quantum-primary))",
                    background: "transparent"
                  }}
                >
                  Accept Selection
                </Button>
              )}

              {/* Accept All */}
              <Button
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 text-white font-semibold hover:shadow-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-secondary)))",
                  border: "none"
                }}
              >
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
