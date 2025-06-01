import React from 'react';
import logo from '../assets/Logo.jpg';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Eclypse" className="h-10" />
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </a>
            <a href="#waitlist" className="text-white hover:text-gray-300 transition-colors">
              Waitlist
            </a>
            <a href="#cart" className="text-white hover:text-gray-300 transition-colors">
              Cart
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 