import React, { useState } from 'react';
import Card from '../ui/Card';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'portrait' | 'work';
}

// Using paths from the public folder - no imports needed
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/my-portrait1.jpg', // Path relative to public folder
    alt: 'Professional portrait',
    category: 'portrait'
  },
  {
    id: 2,
    src: '/images/my-portrait2.jpg',
    alt: 'Casual portrait',
    category: 'portrait'
  },
  {
    id: 3,
    src: '/images/my-portrait3.jpg',
    alt: 'Casual portrait',
    category: 'portrait'
  },
  {
    id: 4,
    src: '/images/my-portrait4.jpg',
    alt: 'Casual portrait',
    category: 'portrait'
  },
  {
    id: 5,
    src: '/images/my-portrait5.jpg',
    alt: 'Casual portrait',
    category: 'portrait'
  },
  {
    id: 6,
    src: '/images/my-portrait6.jpg',
    alt: 'Casual portrait',
    category: 'portrait'
  },
  {
    id: 7,
    src: '/images/my-worklife1.jpg',
    alt: 'Working with machinery',
    category: 'work'
  },
  {
    id: 8,
    src: '/images/my-worklife2.jpg',
    alt: 'At workplace',
    category: 'work'
  },
  {
    id: 9,
    src: '/images/my-worklife3.jpg',
    alt: 'At workplace',
    category: 'work'
  },
  {
    id: 10,
    src: '/images/my-worklife4.jpg',
    alt: 'At workplace',
    category: 'work'
  },
  {
    id: 11,
    src: '/images/my-worklife5.jpg',
    alt: 'At workplace',
    category: 'work'
  }
  
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
    
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-4">Photo Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into my professional and personal life through these selected photographs.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap gap-2 bg-emerald-50 p-2 rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-transparent text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              All Photos
            </button>
            
            <button
              onClick={() => setSelectedCategory('portrait')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'portrait' 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-transparent text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Portraits
            </button>
            
            <button
              onClick={() => setSelectedCategory('work')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'work' 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-transparent text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Work Life
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-white mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;