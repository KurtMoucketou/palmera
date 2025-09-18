import React from 'react';
import { ChefHat, Users, Calendar, Star, ArrowRight } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const partners = [
    { id: 1, name: 'MTN Guinée', logo: '/public/images/logo-loumo-400.png' },
    { id: 2, name: 'Orange Guinée', logo: '/public/images/sosno-logo.png' },
    { id: 3, name: 'Bank of Africa', logo: '/public/images/Orange-guinee.png' },
    { id: 4, name: 'Ecobank Guinée', logo: '/public/images/GMC-logo.webp' },
    { id: 5, name: 'Hotel Kaloum', logo: '/public/images/logos.png' },
    { id: 6, name: 'Chambre de Commerce', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-orange-500" />,
      title: 'Chefs Expérimentés',
      description: 'Notre équipe de chefs professionnels crée des plats exceptionnels avec des ingrédients frais locaux.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Service Personnalisé',
      description: 'Nous adaptons nos menus selon vos préférences, budget et nombre d\'invités pour chaque occasion.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: 'Planification Complète',
      description: 'De la conception du menu à la livraison, nous gérons tous les aspects culinaire de votre événement.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Palmera
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 animate-fadeInUp animation-delay-300">
            Restauration sur mesure à Conakry
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fadeInUp animation-delay-600">
            Conception de repas personnalisés pour vos employés, clients, cérémonies et partenaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-900">
            <button 
              onClick={() => onPageChange('services')}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Découvrir nos Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Demander un Devis
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi Choisir Palmera ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Notre expertise en restauration événementielle et notre engagement envers l'excellence 
              font de nous le partenaire idéal pour tous vos besoins culinaires.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Créations Culinaires
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Découvrez quelques-unes de nos réalisations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
              'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
            ].map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Plat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('prestations')}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir Toutes nos Prestations
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Partenaires de Confiance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ils nous font confiance pour leurs événements d'entreprise
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll space-x-16">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Star className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Créer un Événement Mémorable ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé gratuit.
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Demander un Devis Gratuit
          </button>
        </div>
      </section>
    </div>
  );
};