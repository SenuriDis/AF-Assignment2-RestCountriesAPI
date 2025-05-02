import React from 'react';
import { FaGlobe, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center text-primary font-semibold">
              <FaGlobe className="text-primary mr-2" />
              <span className="text-xl">Discover World</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              Explore the world through our simple and elegant interface
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaCode size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-600 text-sm border-t border-gray-200 pt-4">
          <p>
            Built with <span className="text-red-500">♥</span> and 
            <span className="text-primary"> React</span> | 
            Data provided by <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">REST Countries API</a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Discover World | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 