import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Chatbot for Answering Questions",
      description:
        "We create intelligent chatbots that answer all your questions using advanced technologies like the ChatGPT API. These chatbots can be integrated into websites, apps, and platforms to provide instant assistance to users.",
      icon: "🤖",
      subServices: [
        "Automated responses to frequently asked questions",
        "24/7 customer support via chatbot",
        "Custom solutions tailored for each business",
      ],
    },
    {
      title: "API Integration for Chatbots",
      description:
        "We integrate powerful chatbot APIs like ChatGPT to provide tailored question-answering solutions. We ensure smooth integration into your existing platforms.",
      icon: "🔗",
      subServices: [
        "Integration of ChatGPT API into your applications",
        "Development of conversational applications",
        "Creation of an intelligent, scalable response system",
      ],
    },
    {
      title: "Response Analysis and Improvement",
      description:
        "We offer services to analyze and improve your chatbot's responses to ensure an optimal user experience. We optimize performance and accuracy of responses based on past interactions.",
      icon: "📊",
      subServices: [
        "Analysis of chatbot performance",
        "Optimization of responses based on user interactions",
        "Continuous improvement via machine learning",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Services
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
                Sub-services:
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
