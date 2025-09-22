import React from 'react';
import { Award, Heart, Users2, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Users2 className="w-8 h-8" />, number: '500+', label: 'Clients Satisfaits' },
    { icon: <Award className="w-8 h-8" />, number: '1000+', label: 'Événements Réussis' },
    { icon: <Heart className="w-8 h-8" />, number: '15', label: 'Années d\'Expérience' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Service Disponible' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            À Propos de Palmera
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            L'excellence culinaire au service de vos événements depuis 2009
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Fondée en 2009 à Conakry, Palmera est née de la passion de notre fondateur pour la gastronomie 
                  et l'art de recevoir. Nous avons commencé comme un petit service de traiteur familial et 
                  sommes aujourd'hui l'un des leaders de la restauration événementielle en Guinée.
                </p>
                <p>
                  Notre mission est simple : créer des expériences culinaires exceptionnelles qui marquent 
                  les esprits et créent des souvenirs durables. Nous croyons que chaque événement, qu'il 
                  soit professionnel ou personnel, mérite une attention particulière et un service de qualité supérieure.
                </p>
                <p>
                  Avec une équipe de chefs expérimentés et un personnel dévoué, nous nous engageons à 
                  dépasser vos attentes à chaque occasion. Notre approche personnalisée nous permet de 
                  nous adapter à tous vos besoins, du petit-déjeuner d'entreprise au grand gala de mariage.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Palmera_003.jpg"
                alt="Chef Palmera"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                <p className="font-bold text-2xl">15+ Ans</p>
                <p className="text-white/90">d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et définissent notre engagement envers l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Passion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous mettons notre cœur dans chaque plat que nous préparons, avec amour et créativité.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous visons la perfection dans chaque détail, de la sélection des ingrédients au service.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users2 className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Votre satisfaction est notre priorité absolue. Nous écoutons et nous adaptons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Palmera en Chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mamadou Diallo',
                role: 'Chef Exécutif & Fondateur',
                image: '/images/palmera_004.jpg',
                description: 'Avec 15 ans d\'expérience, Mamadou allie tradition guinéenne et techniques modernes.'
              },
              {
                name: 'Fatoumata Camara',
                role: 'Directrice Événementiel',
                image: '/images/palmera_009.jpg',
                description: 'Spécialiste en organisation d\'événements, elle coordonne chaque détail avec perfection.'
              },
              {
                name: 'Alpha Bah',
                role: 'Chef Pâtissier',
                image: '/images/palmera_008.jpg',
                description: 'Artiste de la pâtisserie, il crée des desserts qui émerveilleront vos invités.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};