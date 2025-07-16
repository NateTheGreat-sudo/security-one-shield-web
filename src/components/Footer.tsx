import { Shield, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Security One Inc</h1>
                <p className="text-sm text-muted-foreground">Professional Security Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted partner in security for over 15 years. Licensed, bonded, and committed to protecting what matters most to you with cutting-edge technology and 24/7 monitoring.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-semibold">(555) 123-SECURE</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@securityoneinc.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>1234 Security Blvd, Austin, TX 78701</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home Security Systems</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">24/7 Monitoring</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Video Surveillance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Access Control</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Smart Home Integration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Service Areas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Security One Inc. All rights reserved. | Licensed Security Company #PSB-123456
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>BBB A+ Rating</span>
              <span>UL Listed</span>
              <span>NICET Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};