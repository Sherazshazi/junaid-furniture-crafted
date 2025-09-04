import { Truck, Wrench, Phone, Shield } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-roboto-slab font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete hardware solutions from delivery to installation and ongoing support
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="card-professional">
            <div className="w-16 h-16 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mb-6">
              <Truck className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-roboto-slab font-bold mb-4">
              <span className="text-gradient-steel">Free Delivery</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We provide free delivery service within a 20-mile radius for orders over $200. 
              Our professional delivery team ensures your materials arrive safely and on time.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Free delivery on orders over $200</li>
              <li>• 20-mile radius coverage</li>
              <li>• Professional handling</li>
              <li>• Scheduled delivery slots</li>
            </ul>
          </div>

          <div className="card-professional">
            <div className="w-16 h-16 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mb-6">
              <Wrench className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-roboto-slab font-bold mb-4">
              <span className="text-gradient-steel">Shed Installation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our experienced installation team provides professional shed assembly and setup 
              services. From foundation preparation to final touches, we handle it all.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Foundation assessment</li>
              <li>• Professional assembly</li>
              <li>• Site preparation</li>
              <li>• Quality guarantee</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-professional text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-roboto-slab font-semibold mb-4">Expert Consultation</h3>
            <p className="text-muted-foreground">
              Get professional advice on material selection, project planning, and construction techniques 
              from our experienced team.
            </p>
          </div>

          <div className="card-professional text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-roboto-slab font-semibold mb-4">After-Sales Support</h3>
            <p className="text-muted-foreground">
              We stand behind our products with comprehensive after-sales support, warranty service, 
              and maintenance guidance.
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-secondary/30 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-roboto-slab font-bold text-center mb-8">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-roboto-slab font-semibold mb-2 text-steel-blue">Residential</h3>
              <p className="text-muted-foreground">
                Home improvement projects, garden sheds, and DIY construction needs
              </p>
            </div>
            <div>
              <h3 className="text-xl font-roboto-slab font-semibold mb-2 text-steel-blue">Commercial</h3>
              <p className="text-muted-foreground">
                Business construction projects, office buildings, and industrial applications
              </p>
            </div>
            <div>
              <h3 className="text-xl font-roboto-slab font-semibold mb-2 text-steel-blue">Contractors</h3>
              <p className="text-muted-foreground">
                Professional contractor services, bulk orders, and project partnerships
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-professional max-w-2xl mx-auto">
            <h2 className="text-3xl font-roboto-slab font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact our team to discuss your specific requirements and get a personalized service quote.
            </p>
            <a 
              href="/contact"
              className="btn-hero"
            >
              Get Service Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;