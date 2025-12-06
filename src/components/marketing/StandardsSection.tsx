import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, CheckCircle, Mail, FileText, Shield, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendSubscriptionEmail } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";





const StandardsSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendSubscriptionEmail(email);
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail("");
        toast({
          title: "Successfully subscribed!",
          description: result.message,
          variant: "default",
        });
      } else {
        toast({
          title: "Subscription failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-24 overflow-x-hidden w-full">
      {/* Custom Color Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(57, 96, 134, 0.08)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">,
          

        {/* Standards Grid */}
        

        {/* Certification Details */}
       

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="gaming-card p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-quantum-primary mr-3" />
              <h3 className="text-2xl font-bold">THE Q2Z NEWSLETTER
</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Your Friday 5-minute read on post-quantum security, Web3 risk, and practical migration insights.
Stay informed  subscribe to get the latest in your inbox.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto px-4 sm:px-0">
                <div className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-quantum-primary hover:bg-quantum-primary/90 text-white px-8 w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-gradient-to-r from-green-500/20 to-quantum-primary/20 rounded-lg p-6 border border-green-500/30"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-green-500 mb-2">
                  Successfully Subscribed!
                </h4>
                <p className="text-muted-foreground">
                  You'll receive the latest quantum security updates and QuantZen™ news.
                </p>
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Compliance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-quantum-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-quantum-primary mr-3" />
              <h3 className="text-2xl font-bold">Enterprise-Grade Compliance</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              QuantZen™ meets the most stringent security requirements for government, financial, and enterprise use. 
              Our quantum-safe infrastructure is audited, certified, and ready for mission-critical applications.
            </p>
          </div> */}
        </motion.div>
      </div>
      </section>
    );
  };

  export default StandardsSection;