
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 font-medium">© {currentYear} Rayan Gharbi. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
