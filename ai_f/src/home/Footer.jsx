import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Information about Flowbit */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Flowbit</h3>
            <p className="text-gray-300 mt-2">
              Flowbit is an intelligent chatbot powered by ChatGPT, capable of answering all your questions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Flowbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
