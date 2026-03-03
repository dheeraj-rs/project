import React from 'react';

    const Hero = () => {
      return (
        <section id="hero" className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white tracking-tight">
              Unlock Your Potential with <span className="block lg:inline-block text-accent">D Software</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
              Revolutionary solutions designed to streamline your workflows, boost productivity, and drive growth.
              Experience the future of business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-block"
              >
                Start Your Free Trial
              </a>
              <a
                href="#features"
                className="px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg shadow-md hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-block"
              >
                Learn More
              </a>
            </div>
            <div className="mt-16 animate-pulseOnce">
              <img
                src="https://images.unsplash.com/photo-1517032768007-8820c7d67f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfHNlYXJjaHw1NXx8c29mdHdhcmUlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzA3NjQ0OTI2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="D Software Dashboard Mockup"
                className="mx-auto rounded-xl shadow-2xl border-4 border-white border-opacity-20 max-w-full h-auto w-[800px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
