import { Award, Heart, Users, Truck } from 'lucide-react';
import showroomImage from '@/assets/showroom-interior.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-crimson font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, Junaid Furniture has been synonymous with exceptional 
            craftsmanship, timeless design, and unwavering commitment to quality.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-crimson font-bold mb-6">
              <span className="text-gradient-gold">Crafting Excellence</span> Since 2000
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by Junaid Khan with a vision to bring authentic craftsmanship to modern homes, 
              our showroom has grown from a small workshop to one of the region's most trusted 
              furniture destinations.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every piece in our collection tells a story of dedication, precision, and passion. 
              We believe furniture is more than functional—it's an expression of your lifestyle, 
              a reflection of your taste, and a foundation for life's most precious moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From hand-selected hardwoods to premium fabrics and finishes, we source only the 
              finest materials to ensure each piece meets our exacting standards of beauty and durability.
            </p>
          </div>
          <div className="lg:order-first">
            <img 
              src={showroomImage} 
              alt="Junaid Furniture Showroom Interior"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-crimson font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                No compromises on materials, construction, or finish. Every piece meets our 
                rigorous quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Crafted with Care</h3>
              <p className="text-muted-foreground">
                Each piece is lovingly handcrafted by skilled artisans who take pride in 
                their traditional techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We provide personalized service and 
                ongoing support for every purchase.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-crimson font-semibold mb-4">Complete Service</h3>
              <p className="text-muted-foreground">
                From selection to delivery and setup, we handle every detail to ensure 
                your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card-elegant">
              <div className="text-5xl font-crimson font-bold text-gold mb-2">25+</div>
              <h3 className="text-xl font-crimson font-semibold mb-2">Years of Excellence</h3>
              <p className="text-muted-foreground">
                Over two decades of serving families and businesses with premium furniture
              </p>
            </div>

            <div className="card-elegant">
              <div className="text-5xl font-crimson font-bold text-gold mb-2">5000+</div>
              <h3 className="text-xl font-crimson font-semibold mb-2">Happy Customers</h3>
              <p className="text-muted-foreground">
                Thousands of satisfied customers who trust us for their furniture needs
              </p>
            </div>

            <div className="card-elegant">
              <div className="text-5xl font-crimson font-bold text-gold mb-2">100%</div>
              <h3 className="text-xl font-crimson font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Every piece comes with our commitment to quality and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-crimson font-bold mb-6">
            Experience the Junaid Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our showroom and discover why customers choose us for their most important spaces
          </p>
          <a 
            href="/contact" 
            className="bg-gold hover:bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 inline-block"
          >
            Visit Our Showroom
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;