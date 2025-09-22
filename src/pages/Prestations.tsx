import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Prestations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'corporate', name: 'Entreprise' },
    { id: 'wedding', name: 'Mariages' },
    { id: 'private', name: 'Privé' },
    { id: 'catering', name: 'Traiteur' }
  ];

  const prestations = [
    {
      id: 1,
      title: 'Séminaire MTN Guinée',
      category: 'corporate',
      description: 'Déjeuner d\'affaires pour 150 participants',
      images: [
        '/images/Palmera_007.jpg',
        'https://images.pexels.com/photos/1640791/pexels-photo-1640791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640792/pexels-photo-1640792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640793/pexels-photo-1640793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    },
    {
      id: 2,
      title: 'Mariage Traditionnel',
      category: 'wedding',
      description: 'Cérémonie de mariage pour 300 invités',
      images: [
        'https://images.pexels.com/photos/1640794/pexels-photo-1640794.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640795/pexels-photo-1640795.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640796/pexels-photo-1640796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640797/pexels-photo-1640797.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    },
    {
      id: 3,
      title: 'Lancement Produit Orange',
      category: 'corporate',
      description: 'Cocktail dînatoire avec présentation',
      images: [
        'https://images.pexels.com/photos/1640798/pexels-photo-1640798.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640799/pexels-photo-1640799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640800/pexels-photo-1640800.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    },
    {
      id: 4,
      title: 'Anniversaire Privé',
      category: 'private',
      description: 'Fête d\'anniversaire intimiste',
      images: [
        'https://images.pexels.com/photos/1640801/pexels-photo-1640801.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640802/pexels-photo-1640802.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640803/pexels-photo-1640803.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    },
    {
      id: 5,
      title: 'Livraison Traiteur',
      category: 'catering',
      description: 'Service traiteur pour réunion de famille',
      images: [
        'https://images.pexels.com/photos/1640804/pexels-photo-1640804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640805/pexels-photo-1640805.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    },
    {
      id: 6,
      title: 'Gala de Charité',
      category: 'corporate',
      description: 'Dîner de gala pour 200 convives',
      images: [
        'https://images.pexels.com/photos/1640806/pexels-photo-1640806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640807/pexels-photo-1640807.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        'https://images.pexels.com/photos/1640808/pexels-photo-1640808.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
      ]
    }
  ];

  const filteredPrestations = selectedCategory === 'all' 
    ? prestations 
    : prestations.filter(p => p.category === selectedCategory);

  const ImageGallery: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <img 
            src={images[currentIndex]} 
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(images[currentIndex])}
          />
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Prestations
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Découvrez nos réalisations et laissez-vous inspirer pour votre prochain événement
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredPrestations.map((prestation) => (
              <div key={prestation.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {prestation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {prestation.description}
                  </p>
                  <ImageGallery images={prestation.images} title={prestation.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Votre Projet Nous Inspire
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Chaque événement est unique. Parlons de vos besoins et créons ensemble 
            une expérience culinaire mémorable.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Planifier Mon Événement
          </button>
        </div>
      </section>
    </div>
  );
};