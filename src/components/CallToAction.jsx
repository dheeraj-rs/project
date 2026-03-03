import React, { useState } from 'react';

    const CallToAction = () => {
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [isSuccess, setIsSuccess] = useState(false);
      const [isError, setIsError] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        setIsSuccess(false);
        setIsError(false);

        if (!email) {
          setMessage('Please enter your email address.');
          setIsError(true);
          return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
          setMessage('Please enter a valid email address.');
          setIsError(true);
          return;
        }

        // Simulate API call
        setTimeout(() => {
          console.log(`Email submitted: ${email}`);
          setMessage('Thank you for your interest! We\'ll be in touch shortly.');
          setIsSuccess(true);
          setEmail('');
        }, 1000);
      };

      return (
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-tr from-primary to-secondary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-slideInLeft">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-90 animate-slideInRight">
              Join thousands of satisfied customers who are already benefiting from D Software.
              Sign up for our newsletter or start a free trial today!
            </p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl animate-fadeInUp">
              <h3 className="text-2xl font-bold text-dark mb-6">Get Exclusive Updates</h3>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-dark placeholder-gray-500"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Subscribe Now
              </button>
              {message && (
                <p className={`mt-4 text-sm font-medium ${isSuccess ? 'text-green-600' : isError ? 'text-red-600' : 'text-gray-700'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
      );
    };

    export default CallToAction;
