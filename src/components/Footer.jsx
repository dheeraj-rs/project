import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-dark text-white py-12 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="col-span-full md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">D Software</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Innovative solutions for a smarter business. Empowering growth and efficiency.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.172-1.333h2.828v-5h-3.972c-3.121 0-4.028 2.053-4.028 4.385v2.615z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.797-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.468 0-6.273 2.798-6.273 6.271 0 .49.055.97.162 1.427-5.228-.26-9.873-2.766-13.003-6.592-.544.936-.858 2.036-.858 3.226 0 2.183 1.112 4.103 2.808 5.234-.519-.015-1.066-.157-1.59-.437v.08c0 3.02 2.14 5.545 4.978 6.11-.462.124-.972.188-1.494.188-.367 0-.724-.035-1.07-.103.794 2.479 3.084 4.275 5.823 4.325-2.09-.991-3.69-2.771-3.69-4.811 0-.334.029-.663.085-.983 1.44-.979 2.62-2.31 3.49-3.793z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-8.718c0-6.766-6.029-6.907-6.029-3.272v3.272z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors duration-300">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors duration-300">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-full lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">123 Software Lane, Innovation City, ST 98765</p>
              <p className="text-gray-400 mb-2">Email: <a href="mailto:info@dsoftware.com" className="hover:text-primary">info@dsoftware.com</a></p>
              <p className="text-gray-400 mb-2">Phone: <a href="tel:+15551234567" className="hover:text-primary">(555) 123-4567</a></p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} D Software. All rights reserved.
          </div>
        </footer>
      );
    };

    export default Footer;
