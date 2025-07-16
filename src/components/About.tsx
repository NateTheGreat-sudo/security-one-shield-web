import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock } from "lucide-react";

export const About = () => {
  const certifications = [
    "Texas Department of Public Safety Licensed",
    "NICET Certified Technicians", 
    "UL Listed Central Station",
    "Better Business Bureau A+ Rating",
    "NFPA 72 Compliant"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose Security One Inc?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, Security One Inc has been the trusted choice for comprehensive security solutions across Texas. Our commitment to excellence, cutting-edge technology, and unparalleled customer service sets us apart in the industry.
            </p>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Certifications
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">Licensed</div>
                <p className="text-sm text-muted-foreground">Fully licensed and insured security company</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-trust-green/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-trust-green" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">Certified</div>
                <p className="text-sm text-muted-foreground">NICET certified security technicians</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">Trusted</div>
                <p className="text-sm text-muted-foreground">10,000+ satisfied customers</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-security-blue/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-security-blue" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Round-the-clock monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};