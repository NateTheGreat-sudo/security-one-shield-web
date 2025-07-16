import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get started with a free security assessment and personalized quote. Our experts are standing by to help protect what matters most to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card/95 backdrop-blur border-white/20 shadow-hero">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Property Address</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="123 Main St, City, TX 12345"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Message (Optional)</label>
                <textarea 
                  className="w-full p-3 border border-border rounded-lg bg-background h-24 resize-none"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>
              
              <Button variant="hero" className="w-full py-3">
                Get My Free Quote Now
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications from Security One Inc. No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Call Us 24/7</h4>
                    <p className="text-primary-foreground/90 text-lg">(555) 123-SECURE</p>
                    <p className="text-primary-foreground/70 text-sm">Emergency: (555) 911-HELP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Email Us</h4>
                    <p className="text-primary-foreground/90">info@securityoneinc.com</p>
                    <p className="text-primary-foreground/70 text-sm">support@securityoneinc.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Visit Our Office</h4>
                    <p className="text-primary-foreground/90">1234 Security Blvd</p>
                    <p className="text-primary-foreground/90">Austin, TX 78701</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Business Hours</h4>
                    <p className="text-primary-foreground/90">Mon-Fri: 8AM - 6PM</p>
                    <p className="text-primary-foreground/90">Sat: 9AM - 4PM</p>
                    <p className="text-primary-foreground/70 text-sm">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h4 className="font-semibold text-primary-foreground mb-3">Free Security Assessment</h4>
              <p className="text-primary-foreground/90 text-sm mb-4">
                Our certified security professionals will visit your property to assess your needs and provide a customized security solution - completely free, no obligation.
              </p>
              <Button variant="cta" size="sm">
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};