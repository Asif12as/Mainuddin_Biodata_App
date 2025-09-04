import React from 'react';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Family', href: '#family' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-emerald-800 font-semibold text-xl">Mohammad Mainuddin</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-700 hover:text-emerald-700 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-emerald-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-gray-700 hover:text-emerald-700 transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#" 
              className="bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-emerald-800 transition-colors duration-200"
            >
              <Download size={16} />
              <span>PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;