import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: 'Adresse',
      content: 'Quartier Almamya, Commune de Kaloum\nConakry, Guinée',
      link: null
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: 'Téléphone',
      content: '+224 621 488 484\n+224 655 789 012',
      link: 'tel:+224622123456'
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: 'Email',
      content: 'contact@palmera-guinea.com\ninfo@palmera-guinea.com',
      link: 'mailto:contact@palmera-guinea.com'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Horaires',
      content: 'Lun - Ven: 8h - 18h\nSam - Dim: 9h - 17h',
      link: null
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Nous sommes là pour réaliser vos projets culinaires
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Informations de Contact
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'WhatsApp'].map((social, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="text-sm font-semibold">
                        {social.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Demande de Devis
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                          placeholder="+224 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Type d'Événement *
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="corporate">Événement d'entreprise</option>
                          <option value="wedding">Mariage</option>
                          <option value="private">Fête privée</option>
                          <option value="catering">Service traiteur</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Date de l'Événement
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nombre d'Invités
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          min="1"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                          placeholder="Nombre de personnes"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white resize-none"
                        placeholder="Décrivez vos besoins, préférences alimentaires, budget approximatif..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Envoyer ma Demande</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-300 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Google Maps</h3>
            <p>Quartier Almamya, Commune de Kaloum, Conakry</p>
            <a 
              href="https://maps.google.com?q=Conakry,+Guinea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'Quel est le délai minimum pour une commande ?',
                answer: 'Nous recommandons un délai minimum de 48h pour les petites commandes et d\'une semaine pour les grands événements.'
              },
              {
                question: 'Proposez-vous des menus halal et végétariens ?',
                answer: 'Oui, nous proposons des options halal, végétariennes et végétaliennes. Nous nous adaptons aux régimes alimentaires spécifiques.'
              },
              {
                question: 'Livrez-vous dans toute la région de Conakry ?',
                answer: 'Oui, nous livrons dans toute la région de Conakry. Des frais de livraison peuvent s\'appliquer selon la distance.'
              },
              {
                question: 'Peut-on déguster vos plats avant l\'événement ?',
                answer: 'Absolument ! Nous organisons des séances de dégustation pour les grands événements afin de finaliser votre menu.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};