import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-4">
        {/* Logo and Navigation */}
        <div className="space-y-8">
          <h2 className="text-2xl font-['Helvetica']">Eclypse</h2>
          <nav className="space-y-3">
            <a href="/" className="block text-white/60 hover:text-white transition-colors">Home</a>
            <a href="/about" className="block text-white/60 hover:text-white transition-colors">About</a>
            <a href="/buy" className="block text-white/60 hover:text-white transition-colors">Buy</a>
            <a href="/customers" className="block text-white/60 hover:text-white transition-colors">Our Customers</a>
            <a href="/contacts" className="block text-white/60 hover:text-white transition-colors">Contacts</a>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-white/40 uppercase text-sm tracking-wider">Contact</p>
            <p className="text-white/60">+91 123-456-7890</p>
          </div>
          <div className="space-y-3">
            <p className="text-white/40 uppercase text-sm tracking-wider">Email</p>
            <p className="text-white/60">eclypse@gmail.com</p>
          </div>
        </div>

        {/* Empty Column for Spacing */}
        <div></div>

        {/* Back to Top and Copyright */}
        <div className="flex flex-col justify-between items-end">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </button>
          <p className="text-white/40 text-sm">© Eclypse 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 