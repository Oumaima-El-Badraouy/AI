import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Chatbot pour Répondre aux Questions",
      description:
        "Nous créons des chatbots intelligents qui répondent à toutes vos questions grâce à des technologies avancées comme l'API de ChatGPT. Ces chatbots peuvent être intégrés à des sites web, applications et plateformes pour fournir une assistance instantanée aux utilisateurs.",
      icon: "🤖",
      subServices: [
        "Réponses automatisées à des questions fréquemment posées",
        "Support client 24/7 via chatbot",
        "Solutions personnalisées pour chaque entreprise",
      ],
    },
    {
      title: "Intégration d'API pour Chatbots",
      description:
        "Nous intégrons des API de chatbot puissantes comme ChatGPT pour offrir des solutions de réponse aux questions adaptées à vos besoins. Nous assurons une intégration fluide dans vos plateformes existantes.",
      icon: "🔗",
      subServices: [
        "Intégration de l'API ChatGPT dans vos applications",
        "Développement d'applications conversationnelles",
        "Création d'un système de réponse intelligent et évolutif",
      ],
    },
    {
      title: "Analyse et Amélioration des Réponses",
      description:
        "Nous offrons des services pour analyser et améliorer les réponses de vos chatbots afin de garantir une expérience utilisateur optimale. Nous optimisons les performances et l'exactitude des réponses en fonction des interactions passées.",
      icon: "📊",
      subServices: [
        "Analyse des performances du chatbot",
        "Optimisation des réponses en fonction des utilisateurs",
        "Amélioration continue via apprentissage automatique",
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
