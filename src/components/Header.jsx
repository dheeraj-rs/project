import React, { useState, useEffect, useRef } from 'react';
    import MobileMenu from './MobileMenu';

    const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const headerRef = useRef(null);

      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
      };

      // Close menu when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (headerRef.current && !headerRef.current.contains(event.target)) {
            closeMobileMenu();
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


      return (
        <header ref={headerRef} className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 flex justify-between items-center animate-fadeInUp">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
              D Software
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">Home</a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="hamburger"
              onClick={toggleMobileMenu}
              className={`relative w-6 h-6 focus:outline-none ${isMobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute block w-full h-0.5 bg-dark transition-all duration-300 ease-in-out top-0"></span>
              <span className="absolute block w-full h-0.5 bg-dark transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2"></span>
              <span className="absolute block w-full h-0.5 bg-dark transition-all duration-300 ease-in-out bottom-0"></span>
            </button>
          </div>

          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </header>
      );
    };

    export default Header;
