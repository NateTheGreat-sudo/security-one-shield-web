import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Shield, CheckCircle, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import heroImage from "@/assets/hero-security.jpg";

const instantQuoteSchema = z.object({
  propertyType: z.string().min(1, "Please select a property type"),
  squareFootage: z.string().min(1, "Please select square footage"),
  zipCode: z.string()
    .min(5, "ZIP code must be at least 5 digits")
    .max(5, "ZIP code must be exactly 5 digits")
    .regex(/^\d{5}$/, "ZIP code must contain only numbers")
});

export const Hero = () => {
  const form = useForm<z.infer<typeof instantQuoteSchema>>({
    resolver: zodResolver(instantQuoteSchema),
    defaultValues: {
      propertyType: "",
      squareFootage: "",
      zipCode: "",
    },
  });

  const onSubmit = (data: z.infer<typeof instantQuoteSchema>) => {
    console.log("Quote form submitted:", data);
    // Handle form submission
  };

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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Property Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-border rounded-lg bg-background">
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Home</SelectItem>
                              <SelectItem value="business">Business/Commercial</SelectItem>
                              <SelectItem value="apartment">Apartment/Condo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="squareFootage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Square Footage</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-border rounded-lg bg-background">
                                <SelectValue placeholder="Select square footage" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-1500">Under 1,500 sq ft</SelectItem>
                              <SelectItem value="1500-2500">1,500 - 2,500 sq ft</SelectItem>
                              <SelectItem value="2500-4000">2,500 - 4,000 sq ft</SelectItem>
                              <SelectItem value="over-4000">Over 4,000 sq ft</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">ZIP Code</FormLabel>
                          <FormControl>
                            <input 
                              {...field}
                              type="text" 
                              placeholder="Enter ZIP code"
                              className="w-full p-3 border border-border rounded-lg bg-background"
                              maxLength={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="hero" className="w-full py-3">
                      Get My Free Quote
                    </Button>
                  </form>
                </Form>
                
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