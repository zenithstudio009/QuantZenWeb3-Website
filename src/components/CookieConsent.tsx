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
  const buttonText = allOptionalEnabled ? "Accept All" : "Accept Selection";
  const handleMainAction = allOptionalEnabled ? handleAcceptAll : handleAcceptSelection;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
      {/* Main Cookie Banner */}
      <div 
        className="shadow-lg relative overflow-hidden border-t"
        style={{
          background: "white",
          borderColor: "#e5e7eb",
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Main Banner Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 p-4 lg:p-6">
            
            {/* Left side - Icon and Text */}
            <div className="flex items-start gap-3 flex-1">
              <div 
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "hsl(var(--quantum-primary) / 0.1)",
                  border: "1px solid hsl(var(--quantum-primary) / 0.2)"
                }}
              >
                <Cookie 
                  className="w-4 h-4" 
                  style={{ color: "hsl(var(--quantum-primary))" }}
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  We value your privacy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences anytime.
                </p>
              </div>
            </div>

            {/* Right side - Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              
              {/* Customize Button */}
              <Button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 rounded-md flex items-center justify-center gap-2"
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                </div>
                Customize
              </Button>

              {/* Dynamic Accept Button */}
              <Button
                onClick={handleMainAction}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border-0 text-white transition-all duration-200 rounded-md flex items-center justify-center gap-2"
                style={{
                  background: "hsl(var(--quantum-primary))"
                }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.5 8L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Collapsible Details */}
          {showDetails && (
            <div className="border-t border-gray-200 bg-gray-50/50 animate-fade-in">
              <div className="max-w-7xl mx-auto p-4 lg:p-6">
                <h4 className="text-gray-900 font-semibold text-lg mb-6">Cookie Preferences</h4>
                
                <div className="space-y-6">
                  
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="text-gray-900 font-semibold text-base">Necessary Cookies</h5>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Always Active
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Essential cookies required for basic website functionality, security, and user authentication.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Switch
                        checked={true}
                        disabled
                        className="data-[state=checked]:bg-green-500"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h5 className="text-gray-900 font-semibold text-base mb-2">Analytics Cookies</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Help us understand how visitors interact with our website by collecting anonymous information.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Switch
                        checked={preferences.analytics}
                        onCheckedChange={() => handleToggle('analytics')}
                        className="data-[state=checked]:bg-blue-500"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h5 className="text-gray-900 font-semibold text-base mb-2">Marketing Cookies</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Used to track visitors across websites to display relevant ads and marketing campaigns.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Switch
                        checked={preferences.marketing}
                        onCheckedChange={() => handleToggle('marketing')}
                        className="data-[state=checked]:bg-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Actions when details are shown */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Further information can be found in our{' '}
                    <a 
                      href="/privacy" 
                      className="underline hover:no-underline transition-all duration-200"
                      style={{ color: "hsl(var(--quantum-primary))" }}
                    >
                      Privacy Statement
                    </a>{' '}
                    and{' '}
                    <a 
                      href="/cookies" 
                      className="underline hover:no-underline transition-all duration-200"
                      style={{ color: "hsl(var(--quantum-primary))" }}
                    >
                      Cookie Policy
                    </a>.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
