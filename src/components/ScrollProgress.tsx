import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      // Show/hide progress bar based on scroll position
      setIsVisible(scrolled > 100);
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 animate-gradient"
        style={{ 
          width: `${progress}%`,
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgress;