import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-crimson font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our furniture experts. We're here to help you create your perfect space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-crimson font-bold mb-8">
              <span className="text-gradient-gold">Get in Touch</span>
            </h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-crimson font-semibold mb-2">Visit Our Showroom</h3>
                  <p className="text-muted-foreground">
                    123 Furniture Avenue<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-crimson font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">Monday - Saturday, 9 AM - 7 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-crimson font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@junaidfurniture.com" className="hover:text-gold transition-colors">
                      info@junaidfurniture.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:sales@junaidfurniture.com" className="hover:text-gold transition-colors">
                      sales@junaidfurniture.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-accent rounded-full flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-crimson font-semibold mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <h3 className="text-2xl font-crimson font-semibold mb-6">Find Us</h3>
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant">
            <h2 className="text-3xl font-crimson font-bold mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="custom">Custom Order</option>
                  <option value="delivery">Delivery & Setup</option>
                  <option value="warranty">Warranty & Support</option>
                  <option value="showroom">Showroom Visit</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none"
                  placeholder="Tell us about your furniture needs or questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-hero justify-center"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-4xl font-crimson font-bold mb-4">
              Ready to Visit Our Showroom?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience our furniture collections in person and work with our design experts 
              to create the perfect space for your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890"
                className="bg-gold hover:bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Call to Schedule
              </a>
              <a 
                href="#contact-form"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;