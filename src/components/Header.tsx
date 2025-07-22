import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Security One Inc</h1>
                <p className="text-xs text-muted-foreground">Professional Security Solutions</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold">(555) 123-SECURE</span>
            </div>
            <Button variant="hero" size="sm">
              Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};