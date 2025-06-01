import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 pl-6 sm:pl-12"> {/* Added left padding to match Hero component */}
      <div className="space-y-16">
        {/* Philosophy Text */}
        <p className="text-[2.75rem] leading-[1.2] font-normal text-white max-w-4xl tracking-wide">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>

        {/* Learn More Link */}
        <div>
          <a 
            href="#learn-more" 
            className="inline-flex items-center text-white text-lg hover:text-gray-300 transition-colors group"
          >
            <span className="border-b-2 border-white/50 pb-1 group-hover:border-gray-300 tracking-wide font-normal">
              Learn more about Eclypse
            </span>
            <span className="ml-3 text-xl translate-y-[1px]">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;