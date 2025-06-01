import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.jpg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Eclypse" className="h-10" />
          </div>
          
          <nav className="flex items-center space-x-12">
            <a href="#about" className="text-white text-lg tracking-wider font-normal hover:text-gray-300 transition-colors">
              About Us
            </a>
            <a href="#waitlist" className="text-white text-lg tracking-wider font-normal hover:text-gray-300 transition-colors">
              Waitlist
            </a>
            <a href="#cart" className="text-white text-lg tracking-wider font-normal hover:text-gray-300 transition-colors">
              Cart
            </a>
            <button className="bg-white text-black px-8 py-2.5 rounded-full text-lg tracking-wider font-normal hover:bg-gray-200 transition-colors">
              Buy
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 