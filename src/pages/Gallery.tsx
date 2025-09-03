import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-furniture.jpg';
import showroomImage from '@/assets/showroom-interior.jpg';
import sofaImage from '@/assets/product-sofa.jpg';
import bedImage from '@/assets/product-bed.jpg';
import diningImage from '@/assets/product-dining.jpg';
import chairImage from '@/assets/product-chair.jpg';
import officeImage from '@/assets/product-office.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Showroom', 'Living Room', 'Bedroom', 'Dining Room', 'Office'];

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: 'Premium Furniture Showroom',
      category: 'Showroom',
      title: 'Main Showroom Display'
    },
    {
      id: 2,
      src: showroomImage,
      alt: 'Showroom Interior',
      category: 'Showroom',
      title: 'Elegant Showroom Interior'
    },
    {
      id: 3,
      src: sofaImage,
      alt: 'Premium Leather Sofa',
      category: 'Living Room',
      title: 'Luxury Living Room Setup'
    },
    {
      id: 4,
      src: bedImage,
      alt: 'Master Bedroom',
      category: 'Bedroom',
      title: 'Master Bedroom Collection'
    },
    {
      id: 5,
      src: diningImage,
      alt: 'Formal Dining Room',
      category: 'Dining Room',
      title: 'Elegant Dining Experience'
    },
    {
      id: 6,
      src: officeImage,
      alt: 'Executive Office',
      category: 'Office',
      title: 'Executive Office Suite'
    },
    {
      id: 7,
      src: chairImage,
      alt: 'Office Chair',
      category: 'Office',
      title: 'Premium Office Seating'
    },
    {
      id: 8,
      src: sofaImage,
      alt: 'Living Room Sofa',
      category: 'Living Room',
      title: 'Comfortable Living Spaces'
    },
  ];

  const filteredImages = galleryImages.filter(image => 
    activeCategory === 'All' || image.category === activeCategory
  );

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const currentImage = filteredImages.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-crimson font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful showroom spaces and furniture collections in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-crimson font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-2xl font-crimson font-semibold mb-2">No images found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && currentImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-crimson font-semibold">{currentImage.title}</h3>
                <p className="text-gold">{currentImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-elegant max-w-2xl mx-auto">
            <h2 className="text-3xl font-crimson font-bold mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground mb-6">
              Experience our furniture collections in person and get personalized design advice from our experts.
            </p>
            <a 
              href="/contact"
              className="btn-hero"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;