import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <FaGlobe className="text-primary text-5xl animate-pulse" />
        <div className="absolute inset-0 rounded-full border-t-4 border-gray-300 border-opacity-50 animate-spin"></div>
      </div>
      <div className="mt-4 text-gray-700">
        <div className="text-xl font-semibold">Loading</div>
        <div className="flex space-x-1 justify-center mt-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 