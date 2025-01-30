import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description:
        "Nous créons des sites modernes, performants et adaptés à vos besoins spécifiques. Que ce soit pour un site vitrine, un e-commerce, ou une plateforme interactive, nous avons l'expertise nécessaire pour vous offrir une solution clé en main.",
      icon: "🌐",
      subServices: [
        "Sites vitrine sur mesure",
        "E-commerce avec intégration de paiement",
        "Plateformes interactives (blogs, forums, etc.)",
      ],
    },
    {
      title: "Application Mobile",
      description:
        "Nous développons des applications mobiles intuitives et réactives, en utilisant les dernières technologies pour garantir une expérience utilisateur fluide et agréable sur iOS et Android.",
      icon: "📱",
      subServices: [
        "Applications natives pour iOS et Android",
        "Applications hybrides avec React Native",
        "Applications sur mesure adaptées aux besoins des utilisateurs",
      ],
    },
    {
      title: "SEO & Marketing Digital",
      description:
        "Notre expertise en SEO et marketing digital vous aide à améliorer la visibilité de votre entreprise en ligne. Nous mettons en place des stratégies personnalisées pour booster votre présence sur les moteurs de recherche et les réseaux sociaux.",
      icon: "📈",
      subServices: [
        "Optimisation pour les moteurs de recherche (SEO)",
        "Publicité en ligne (Google Ads, Facebook Ads)",
        "Stratégies de contenu et de gestion de communautés",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <h4 className="text-lg font-semibold text-gray-700 mt-4">
                Sous-services :
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {service.subServices.map((subService, idx) => (
                  <li key={idx} className="mt-1">
                    {subService}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
