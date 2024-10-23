import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-blue-400">RO</a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" 
               className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
               onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience"
               className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
               onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills"
               className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
               onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact"
               className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
               onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;