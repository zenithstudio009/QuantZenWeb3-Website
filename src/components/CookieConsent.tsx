import { useState, useEffect } from 'react';
import { X, Cookie, Shield, MapPin, User, Mail } from 'lucide-react';
import { cookieUtils } from '@/lib/cookies';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'India', 'Japan', 'Singapore', 'Netherlands', 'Other'
];

export const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    // Show banner if user hasn't made a choice
    if (cookieUtils.isFirstVisit()) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    cookieUtils.setConsent(true);
    setShowForm(true);
    toast({
      title: "Thank you!",
      description: "Please provide your details to enhance your experience.",
    });
  };

  const handleDecline = () => {
    cookieUtils.setConsent(false);
    setIsVisible(false);
    onDecline?.();
    toast({
      title: "Cookies declined",
      description: "You can still browse our website with limited features.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.country) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    const success = cookieUtils.setUserData(formData);
    
    if (success) {
      setIsVisible(false);
      onAccept?.();
      toast({
        title: "Welcome to QuantZen! 🎉",
        description: `Thanks ${formData.name}! Your preferences have been saved.`,
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-0 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl border border-teal-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cookie className="h-6 w-6 text-white" />
              <h3 className="text-xl font-bold text-white">
                {showForm ? 'Tell us about yourself' : 'Cookie Consent'}
              </h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecline}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showForm ? (
            <>
              <div className="mb-6 space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies to enhance your experience, analyze site traffic, 
                  and personalize content. Your privacy matters to us.
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-teal-400 mt-0.5" />
                    <span>Quantum-safe encryption for your data</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Cookie className="h-4 w-4 text-teal-400 mt-0.5" />
                    <span>Essential cookies for site functionality</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-teal-400 mt-0.5" />
                    <span>Location data for personalized content</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Accept & Continue
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Decline
                </Button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Your Name</span>
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Address</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-gray-300 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Country</span>
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                  required
                >
                  <SelectTrigger className="bg-slate-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
              >
                Save & Continue
              </Button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-900/50 px-6 py-3 text-xs text-gray-400 text-center">
          Your data is protected with quantum-safe encryption. Read our{' '}
          <a href="/privacy" className="text-teal-400 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};
