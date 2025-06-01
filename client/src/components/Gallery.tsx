import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import logo from '../assets/Logo.jpg';
import alternateLogo from '../assets/Alternate_logo.png';
import backgroundVideo from '../assets/video.mp4';
import secondVideo from '../assets/second_video.mp4';
import style1 from '../assets/style_1.jpg';
import style2 from '../assets/style_2.jpg';
import style3 from '../assets/style_3.jpg';
import tiger from '../assets/tiger.jpg';
import Footer from './Footer';
import Checkout from './Checkout';

const Gallery: React.FC = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 py-6 px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm' : ''}`}>
        <div className="w-12">
          <img src={logo} alt="Eclypse" className="h-12" />
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-12 text-white/60 text-lg">
            <a href="/about-us" className="hover:text-white transition-colors tracking-wide">About Us</a>
            <a href="/waitlist" className="hover:text-white transition-colors tracking-wide">Waitlist</a>
            <a href="/cart" className="hover:text-white transition-colors tracking-wide">Cart</a>
          </div>
          <button className="bg-white text-black px-8 py-2 rounded-full hover:bg-white/90 transition-colors text-lg font-medium">
            Buy
          </button>
        </div>
      </header>

      {/* Main Content - starts directly with first gallery section */}
      <div className="max-w-[1440px] mx-auto px-8 pt-32">
        {/* First Gallery Section */}
        <section className="pb-16">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="aspect-[16/10] rounded-md overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={backgroundVideo}
              />
            </div>
            <div className="group relative aspect-[16/10] rounded-md overflow-hidden">
              <img 
                src={image1} 
                alt="Red fabric detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-[42px] font-[350] tracking-normal text-left p-8 leading-tight font-['Helvetica']">
                  Premium wool blend in signature vermilion
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="group relative aspect-square rounded-md overflow-hidden">
              <img 
                src={image2} 
                alt="Clothing detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-[42px] font-[350] tracking-normal text-left p-8 leading-tight font-['Helvetica']">
                  Discreet side pockets with clean finish
                </p>
              </div>
            </div>
            <div className="group relative aspect-square rounded-md overflow-hidden">
              <img 
                src={image3} 
                alt="Design process" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-[42px] font-[350] tracking-normal text-left p-8 leading-tight font-['Helvetica']">
                  Hand-cut and assembled in small batches
                </p>
              </div>
            </div>
            <div 
              className="aspect-square rounded-md overflow-hidden bg-black flex items-center justify-center transition-all duration-300"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <img 
                src={isLogoHovered ? alternateLogo : logo} 
                alt="Eclypse logo" 
                className="w-1/2 transition-opacity duration-300"
              />
            </div>
          </div>
        </section>

        {/* Title Section */}
        <section className="py-32">
          <h1 className="text-[64px] font-[350] tracking-normal leading-none font-['Helvetica'] text-white">
            Silhouette No. 1 – Vermilion
          </h1>
        </section>

        {/* Product Showcase Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 gap-0">
            {/* Left Video Column */}
            <div className="aspect-[4/5] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={secondVideo}
              />
            </div>

            {/* Right Images Column */}
            <div className="bg-white p-12">
              <div className="space-y-6">
                <p className="text-[18px] font-[350] tracking-normal leading-relaxed font-['Helvetica'] text-black mb-8">
                  A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    src={style1} 
                    alt="Style detail 1" 
                    className="w-full aspect-square object-cover"
                  />
                  <img 
                    src={style2} 
                    alt="Style detail 2" 
                    className="w-full aspect-square object-cover"
                  />
                  <img 
                    src={style3} 
                    alt="Style detail 3" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="mt-8">
                  <p className="text-[32px] font-[350] text-black mb-2">₹ 7,999</p>
                  <p className="text-sm text-gray-500 mb-8">MRP incl. of all taxes</p>
                  <div className="space-y-6">
                    <div>
                      <p className="mb-4 text-black">Please select a size</p>
                      <div className="flex gap-4">
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            className="px-6 py-3 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors text-black"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-3 border border-black rounded-sm text-black hover:bg-gray-50 transition-colors">
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => setIsCheckoutOpen(true)}
                        className="flex-1 px-6 py-3 bg-black text-white rounded-sm hover:bg-[#FF0000] transition-colors font-bold"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Info Accordion */}
        <section className="bg-black text-white">
          <div className="max-w-4xl mx-auto">
            {/* Size & Fit */}
            <div className="border-b border-white/20">
              <button
                onClick={() => toggleSection('size')}
                className="w-full py-8 flex justify-between items-center text-left"
              >
                <span className="text-[24px] font-['Helvetica']">Size & Fit</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedSection === 'size' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedSection === 'size' && (
                <div className="pb-8">
                  <p className="text-white/70 font-['Helvetica'] text-lg">
                    • Regular fit, true to size<br />
                    • Model is 175cm/5'9" and wears size S<br />
                    • Shoulder-to-hem length: 75cm/29.5" (size S)
                  </p>
                </div>
              )}
            </div>

            {/* Delivery & Returns */}
            <div className="border-b border-white/20">
              <button
                onClick={() => toggleSection('delivery')}
                className="w-full py-8 flex justify-between items-center text-left"
              >
                <span className="text-[24px] font-['Helvetica']">Delivery & Returns</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedSection === 'delivery' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedSection === 'delivery' && (
                <div className="pb-8">
                  <p className="text-white/70 font-['Helvetica'] text-lg">
                    • Free standard delivery on all orders<br />
                    • Express delivery available<br />
                    • Free returns within 30 days<br />
                    • See our full returns policy
                  </p>
                </div>
              )}
            </div>

            {/* How This Was Made */}
            <div className="border-b border-white/20">
              <button
                onClick={() => toggleSection('made')}
                className="w-full py-8 flex justify-between items-center text-left"
              >
                <span className="text-[24px] font-['Helvetica']">How This Was Made</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedSection === 'made' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedSection === 'made' && (
                <div className="pb-8">
                  <p className="text-white/70 font-['Helvetica'] text-lg">
                    • Crafted in our atelier in Mumbai<br />
                    • Made from premium Italian wool blend<br />
                    • Fully lined with sustainable viscose<br />
                    • Hand-finished details
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-sm uppercase tracking-wider mb-16 font-['Helvetica']">Our Customers</h2>
            
            <div className="flex justify-between items-start">
              <div className="max-w-xl">
                <blockquote className="text-[42px] font-['Helvetica'] leading-tight mb-8">
                  "Understated, but unforgettable. It feels like it was made for me"
                </blockquote>
                <div>
                  <p className="font-['Helvetica']">Random Woman</p>
                  <p className="text-white/60 text-sm font-['Helvetica']">NY, USA</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src={tiger} 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-white/10"></div>
                <div className="w-16 h-16 rounded-full bg-white/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Checkout Popup */}
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};

export default Gallery;