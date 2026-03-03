import React, { useEffect, useRef } from 'react';

    const MobileMenu = ({ isOpen, onClose }) => {
      const menuRef = useRef(null);

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
          document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isOpen]);

      return (
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-[1000] p-6 transform transition-transform duration-300 ease-in-out md:hidden
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-primary text-3xl focus:outline-none"
              aria-label="Close mobile menu"
            >
              &times;
            </button>
          </div>
          <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation</h2>
          <nav className="flex flex-col space-y-6">
            <a href="#hero" onClick={onClose} className="text-xl font-medium text-dark hover:text-primary transition-colors duration-300">Home</a>
            <a href="#features" onClick={onClose} className="text-xl font-medium text-dark hover:text-primary transition-colors duration-300">Features</a>
            <a href="#pricing" onClick={onClose} className="text-xl font-medium text-dark hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#testimonials" onClick={onClose} className="text-xl font-medium text-dark hover:text-primary transition-colors duration-300">Testimonials</a>
            <a href="#contact" onClick={onClose} className="text-xl font-medium text-dark hover:text-primary transition-colors duration-300">Contact</a>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-primary text-white text-lg rounded-lg hover:bg-secondary transition-all duration-300 shadow-md text-center"
            >
              Get Started
            </a>
          </nav>
        </div>
      );
    };

    export default MobileMenu;
