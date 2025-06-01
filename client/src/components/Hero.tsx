import React from 'react';
import backgroundVideo from '../assets/video.mp4';
import alternateLogo from '../assets/Alternate_logo.png';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-12 pt-32 pb-10 space-y-8"> {/* Added pt-32 for top padding */}
      {/* Logo and year row */}
      <div className="flex justify-between items-start">
        <img
          src={alternateLogo}
          alt="Eclypse"
          className="h-20 sm:h-24 w-auto select-none pointer-events-none"
        />
        <span className="text-sm sm:text-base pt-2">© 2025</span>
      </div>

      {/* Video with tagline overlay */}
      <div className="relative rounded-xl overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <p className="absolute bottom-4 right-4 text-white text-base sm:text-lg bg-black/50 px-4 py-2 rounded">
          A silhouette worth remembering
        </p>
      </div>
    </section>
  );
};

export default Hero;