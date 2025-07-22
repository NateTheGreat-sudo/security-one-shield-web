import { Services } from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Security Services</h1>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Comprehensive security solutions tailored to protect what matters most to you.
        </p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;