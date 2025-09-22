import React from 'react';
import { Building, Heart, Users, Utensils, Calendar, Clock } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Événements d\'Entreprise',
      description: 'Séminaires, conférences, lancements de produits, formations et réunions d\'affaires',
      icon: <Building className="w-12 h-12 text-orange-500" />,
      image: '../public/images/palmera_008.jpg',
      features: [
        'Petits-déjeuners d\'affaires',
        'Déjeuners de travail',
        'Cocktails dînatoires',
        'Repas de gala',
        'Pauses café personnalisées'
      ]
    },
    {
      id: 2,
      title: 'Mariages & Célébrations',
      description: 'Cérémonies de mariage traditionnelles et modernes, anniversaires et fêtes privées',
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      features: [
        'Banquets de mariage',
        'Réceptions privées',
        'Anniversaires',
        'Baptêmes et communions',
        'Fêtes traditionnelles'
      ]
    },
    {
      id: 3,
      title: 'Restauration Collective',
      description: 'Services de restauration pour entreprises, écoles et institutions',
      icon: <Users className="w-12 h-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      features: [
        'Cantines d\'entreprise',
        'Livraison de repas',
        'Menus équilibrés',
        'Service continu',
        'Gestion complète'
      ]
    },
    {
      id: 4,
      title: 'Service Traiteur',
      description: 'Livraison de repas gourmets à domicile ou sur votre lieu d\'événement',
      icon: <Utensils className="w-12 h-12 text-orange-500" />,
      image: '/images/palmera_005.jpg',
      features: [
        'Livraison à domicile',
        'Buffets chauds et froids',
        'Plateaux-repas',
        'Service de table',
        'Vaisselle incluse'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: 'Planification Complète',
      description: 'Organisation de A à Z de votre événement culinaire'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Service 24/7',
      description: 'Disponibilité pour vos événements à toute heure'
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: 'Cuisine Personnalisée',
      description: 'Menus adaptés à vos goûts et contraintes alimentaires'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Une gamme complète de services culinaires pour tous vos événements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Nos prestations :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous offrons bien plus qu'un simple service de restauration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Comment Nous Travaillons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Un processus simple et efficace pour réussir votre événement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Nous discutons de vos besoins, préférences et budget'
              },
              {
                step: '02',
                title: 'Proposition',
                description: 'Création d\'un menu personnalisé et devis détaillé'
              },
              {
                step: '03',
                title: 'Préparation',
                description: 'Nos chefs préparent vos plats avec les meilleurs ingrédients'
              },
              {
                step: '04',
                title: 'Service',
                description: 'Livraison et service professionnel le jour J'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-600 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Planifier Votre Événement ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contactez-nous pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Demander un Devis
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Appeler Maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};