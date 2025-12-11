import React, { useState } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <BarChart2 className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">TradePulse</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">How it Works</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
            <button className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">How it Works</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Features</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Stories</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Pricing</a>
            <button className="w-full mt-4 bg-primary-600 text-white px-5 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;