import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/90 text-sm font-medium">
                4.9/5 Customer Rating
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Professional
              <span className="block text-accent">Security Solutions</span>
              You Can Trust
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Protect what matters most with Security One Inc's 24/7 monitoring, professional installation, and cutting-edge technology. Licensed, bonded, and trusted by thousands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Get Free Security Assessment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20">
                Call (555) 123-SECURE
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-trust-green" />
                <span className="text-sm font-medium">Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-trust-green" />
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-trust-green" />
                <span className="text-sm font-medium">Professional Installation</span>
              </div>
            </div>
          </div>

          <div className="lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              <div className="relative bg-card/90 backdrop-blur p-8 rounded-lg shadow-hero border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Instant Quote</h3>
                    <p className="text-muted-foreground">Get pricing in under 60 seconds</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Property Type</label>
                    <select className="w-full p-3 border border-border rounded-lg bg-background">
                      <option>Residential Home</option>
                      <option>Business/Commercial</option>
                      <option>Apartment/Condo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Square Footage</label>
                    <select className="w-full p-3 border border-border rounded-lg bg-background">
                      <option>Under 1,500 sq ft</option>
                      <option>1,500 - 2,500 sq ft</option>
                      <option>2,500 - 4,000 sq ft</option>
                      <option>Over 4,000 sq ft</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      placeholder="Enter ZIP code"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  
                  <Button variant="hero" className="w-full py-3">
                    Get My Free Quote
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  No obligation • No spam • Instant results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};