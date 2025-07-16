import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Camera, Shield, Phone, Lock } from "lucide-react";
import installationImage from "@/assets/installation-service.jpg";
import monitoringImage from "@/assets/monitoring-service.jpg";
import businessImage from "@/assets/business-security.jpg";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Security",
      description: "Complete home security systems with 24/7 monitoring, smart home integration, and professional installation.",
      image: installationImage,
      features: ["Wireless Security Systems", "Smart Locks & Keypads", "Video Doorbells", "Mobile App Control"]
    },
    {
      icon: Building,
      title: "Commercial Security",
      description: "Comprehensive business security solutions including access control, surveillance, and alarm systems.",
      image: businessImage,
      features: ["Access Control Systems", "CCTV Surveillance", "Fire & Safety Systems", "Security Consultation"]
    },
    {
      icon: Camera,
      title: "24/7 Monitoring",
      description: "Professional monitoring center staffed 24/7 with immediate emergency response coordination.",
      image: monitoringImage,
      features: ["Central Station Monitoring", "Police/Fire Dispatch", "Mobile Alerts", "Video Verification"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential to commercial properties, we provide cutting-edge security systems tailored to your specific needs with professional installation and ongoing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-muted-foreground">Fully licensed, bonded, and insured for your peace of mind and protection.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-trust-green/10 rounded-full mb-4">
              <Phone className="h-8 w-8 text-trust-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Round-the-clock customer support and emergency response coordination.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
            <p className="text-muted-foreground">Comprehensive warranty coverage on all equipment and installation work.</p>
          </div>
        </div>
      </div>
    </section>
  );
};