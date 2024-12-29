import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      // Make the target section visible immediately
      element.classList.add('visible');
      
      // Also make all sections above it visible
      let current = element.previousElementSibling;
      while (current) {
        if (current.classList.contains('scroll-section')) {
          current.classList.add('visible');
        }
        current = current.previousElementSibling;
      }

      // Scroll to the section
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-300"
          >
            RO
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Contact'].map((item, index) => {
              const sectionId = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(e) => handleNavClick(e, sectionId)}
                  className={`text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group ${
                    activeSection === sectionId ? 'text-blue-400' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </nav>

          <button 
            className="md:hidden transform transition-all duration-300 hover:scale-110 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="animate-spin-once" />
            ) : (
              <Menu className="hover:rotate-180 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['About', 'Experience', 'Skills', 'Contact'].map((item, index) => {
            const sectionId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === sectionId
                    ? 'text-blue-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateX(${isMenuOpen ? '0' : '-10px'})`,
                  opacity: isMenuOpen ? 1 : 0,
                  transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;