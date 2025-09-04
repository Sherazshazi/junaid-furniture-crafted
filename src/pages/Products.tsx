import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import shedsImage from '@/assets/product-sheds.jpg';
import toolsImage from '@/assets/product-tools.jpg';
import materialsImage from '@/assets/product-materials.jpg';
import hardwareImage from '@/assets/product-hardware.jpg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Sheds', 'Tools', 'Building Materials', 'Hardware', 'Safety Equipment'];

  const products = [
    {
      id: 1,
      name: 'Garden Storage Shed',
      category: 'Sheds',
      price: '$899',
      image: shedsImage,
      description: 'Durable wooden shed perfect for garden tools and outdoor storage.'
    },
    {
      id: 2,
      name: 'Professional Tool Set',
      category: 'Tools',
      price: '$299',
      image: toolsImage,
      description: 'Complete set of professional-grade construction tools.'
    },
    {
      id: 3,
      name: 'Building Material Bundle',
      category: 'Building Materials',
      price: '$599',
      image: materialsImage,
      description: 'Quality lumber and construction materials for your project.'
    },
    {
      id: 4,
      name: 'Hardware Fasteners Kit',
      category: 'Hardware',
      price: '$89',
      image: hardwareImage,
      description: 'Complete collection of screws, bolts, and fastening hardware.'
    },
    {
      id: 5,
      name: 'Premium Workshop Shed',
      category: 'Sheds',
      price: '$1,299',
      image: shedsImage,
      description: 'Large workshop shed with windows and electrical options.'
    },
    {
      id: 6,
      name: 'Power Tools Collection',
      category: 'Tools',
      price: '$799',
      image: toolsImage,
      description: 'Professional power tools for serious construction work.'
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-roboto-slab font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality hardware, tools, and building materials for every project
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-gold to-accent text-primary shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="card-elegant group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-crimson font-semibold group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold">{product.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs text-accent font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                  <button className="btn-elegant text-sm px-4 py-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-crimson font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-elegant max-w-2xl mx-auto">
            <h2 className="text-3xl font-crimson font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our furniture experts are here to help you find the perfect pieces for your space.
            </p>
            <a 
              href="/contact"
              className="btn-hero"
            >
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;