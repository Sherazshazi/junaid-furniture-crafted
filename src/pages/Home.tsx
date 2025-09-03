import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-furniture.jpg';
import sofaImage from '@/assets/product-sofa.jpg';
import bedImage from '@/assets/product-bed.jpg';
import diningImage from '@/assets/product-dining.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(25 45% 25% / 0.8), hsl(25 35% 35% / 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-crimson font-bold mb-6 leading-tight">
            Crafting Comfort <br />
            <span className="text-gradient-gold">with Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter">
            Discover premium furniture that transforms your space into a masterpiece
          </p>
          <Link 
            to="/products" 
            className="btn-hero inline-flex items-center gap-2 text-lg"
          >
            Explore Collection <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-crimson font-bold text-foreground mb-4">
              Why Choose Junaid Furniture?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of traditional craftsmanship and modern design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Handcrafted furniture using the finest materials and traditional techniques passed down through generations.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                We stand behind our craftsmanship with comprehensive warranty coverage and exceptional after-sales service.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Timeless Design</h3>
              <p className="text-muted-foreground">
                Classic designs that never go out of style, ensuring your investment remains beautiful for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-crimson font-bold text-foreground mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our most popular furniture categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/products" className="group">
              <div className="card-elegant overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={sofaImage} 
                    alt="Premium Sofas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-crimson font-semibold mb-2">Premium Sofas</h3>
                <p className="text-muted-foreground mb-4">
                  Luxurious seating solutions crafted for ultimate comfort
                </p>
                <span className="text-gold font-medium inline-flex items-center gap-2">
                  View Collection <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="card-elegant overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={bedImage} 
                    alt="Elegant Beds"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-crimson font-semibold mb-2">Elegant Beds</h3>
                <p className="text-muted-foreground mb-4">
                  Sleep in style with our handcrafted bedroom furniture
                </p>
                <span className="text-gold font-medium inline-flex items-center gap-2">
                  View Collection <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="card-elegant overflow-hidden">
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={diningImage} 
                    alt="Dining Sets"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-crimson font-semibold mb-2">Dining Sets</h3>
                <p className="text-muted-foreground mb-4">
                  Gather in elegance with our exquisite dining collections
                </p>
                <span className="text-gold font-medium inline-flex items-center gap-2">
                  View Collection <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-crimson font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our showroom or browse our complete collection online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-gold hover:bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;