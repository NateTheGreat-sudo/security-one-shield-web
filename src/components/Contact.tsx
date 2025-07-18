import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Z][a-zA-Z]*$/, "First name must start with capital letter and contain no numbers")
    .refine((val) => !val.endsWith(' '), "First name cannot end with a space"),
  lastName: z.string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Z][a-zA-Z]*$/, "Last name must start with capital letter and contain no numbers")
    .refine((val) => !val.endsWith(' '), "Last name cannot end with a space"),
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  address: z.string()
    .min(1, "Property address is required")
    .regex(/\d{5}/, "Address must include a valid ZIP code"),
  message: z.string()
    .max(500, "Message cannot exceed 500 characters")
    .optional()
});

export const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log("Contact form submitted:", data);
    // Handle form submission
  };

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
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">First Name</FormLabel>
                          <FormControl>
                            <input 
                              {...field}
                              type="text" 
                              className="w-full p-3 border border-border rounded-lg bg-background"
                              placeholder="John"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Last Name</FormLabel>
                          <FormControl>
                            <input 
                              {...field}
                              type="text" 
                              className="w-full p-3 border border-border rounded-lg bg-background"
                              placeholder="Smith"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <input 
                            {...field}
                            type="tel" 
                            className="w-full p-3 border border-border rounded-lg bg-background"
                            placeholder="5551234567"
                            maxLength={10}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Email Address</FormLabel>
                        <FormControl>
                          <input 
                            {...field}
                            type="email" 
                            className="w-full p-3 border border-border rounded-lg bg-background"
                            placeholder="john@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Property Address</FormLabel>
                        <FormControl>
                          <input 
                            {...field}
                            type="text" 
                            className="w-full p-3 border border-border rounded-lg bg-background"
                            placeholder="123 Main St, City, TX 12345"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Message (Optional)</FormLabel>
                        <FormControl>
                          <textarea 
                            {...field}
                            className="w-full p-3 border border-border rounded-lg bg-background h-24 resize-none"
                            placeholder="Tell us about your security needs..."
                            maxLength={500}
                          />
                        </FormControl>
                        <FormMessage />
                        {field.value && (
                          <p className="text-xs text-muted-foreground">
                            {field.value.length}/500 characters
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" variant="hero" className="w-full py-3">
                    Get My Free Quote Now
                  </Button>
                </form>
              </Form>
              
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