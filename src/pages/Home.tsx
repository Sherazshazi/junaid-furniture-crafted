import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-hardware.jpg';
import shedsImage from '@/assets/product-sheds.jpg';
import toolsImage from '@/assets/product-tools.jpg';
import materialsImage from '@/assets/product-materials.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(215 80% 35% / 0.9), hsl(215 60% 45% / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-roboto-slab font-bold mb-6 leading-tight">
            Strong Solutions <br />
            <span className="text-gradient-steel">for Every Build</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter">
            Your trusted supplier of sheds, construction materials, and hardware tools
          </p>
          <Link 
            to="/products" 
            className="btn-hero inline-flex items-center gap-2 text-lg"
          >
            Shop Hardware <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roboto-slab font-bold text-foreground mb-4">
              Why Choose Ukasha Hardware?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted supplier with quality products, professional service, and reliable support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-roboto-slab font-semibold mb-4">Quality Products</h3>
              <p className="text-muted-foreground">
                Premium construction materials, tools, and hardware from trusted brands, ensuring durability and reliability.
              </p>
            </div>

            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-roboto-slab font-semibold mb-4">Trusted Service</h3>
              <p className="text-muted-foreground">
                Professional delivery, installation services, and comprehensive warranty coverage with ongoing support.
              </p>
            </div>

            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-steel-blue to-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-roboto-slab font-semibold mb-4">Quick Delivery</h3>
              <p className="text-muted-foreground">
                Fast, reliable delivery service to get your projects moving. Same-day pickup available for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roboto-slab font-bold text-foreground mb-4">
              Featured Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive range of hardware and construction supplies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/products" className="group">
              <div className="card-professional overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={shedsImage} 
                    alt="Garden Sheds"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-roboto-slab font-semibold mb-2">Garden Sheds</h3>
                <p className="text-muted-foreground mb-4">
                  Durable storage solutions for your outdoor space and tools
                </p>
                <span className="text-steel-blue font-medium inline-flex items-center gap-2">
                  View Sheds <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="card-professional overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={toolsImage} 
                    alt="Construction Tools"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-roboto-slab font-semibold mb-2">Construction Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Professional-grade tools for every construction project
                </p>
                <span className="text-steel-blue font-medium inline-flex items-center gap-2">
                  View Tools <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="card-professional overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={materialsImage} 
                    alt="Building Materials"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-roboto-slab font-semibold mb-2">Building Materials</h3>
                <p className="text-muted-foreground mb-4">
                  Quality lumber, cement, and construction materials
                </p>
                <span className="text-steel-blue font-medium inline-flex items-center gap-2">
                  View Materials <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-roboto-slab font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our hardware store or browse our complete catalog online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Shop Hardware
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Visit Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;