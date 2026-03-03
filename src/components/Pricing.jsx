import React from 'react';

    const pricingTiers = [
      {
        name: 'Starter',
        price: '$29',
        frequency: 'per month',
        features: [
          'Basic Automation',
          'Standard Analytics',
          'Email Support',
          '5 User Accounts',
          '10GB Storage',
        ],
        buttonText: 'Get Started',
        buttonLink: '#contact',
        highlight: false,
      },
      {
        name: 'Professional',
        price: '$79',
        frequency: 'per month',
        features: [
          'Advanced Automation',
          'Customizable Dashboards',
          'Priority Email & Chat Support',
          '20 User Accounts',
          '100GB Storage',
          'Cloud Integration',
        ],
        buttonText: 'Choose Professional',
        buttonLink: '#contact',
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        frequency: '',
        features: [
          'Full Automation Suite',
          'Dedicated Analytics Team',
          '24/7 Phone & On-site Support',
          'Unlimited User Accounts',
          'Unlimited Storage',
          'Custom Integrations & APIs',
        ],
        buttonText: 'Contact Sales',
        buttonLink: '#contact',
        highlight: false,
      },
    ];

    const PricingCard = ({ tier }) => (
      <div
        className={`bg-white rounded-xl shadow-lg p-8 flex flex-col border border-gray-100 animate-fadeInUp
          ${tier.highlight ? 'border-primary-600 ring-4 ring-primary-200 shadow-2xl scale-105' : 'hover:scale-105 hover:shadow-xl'}
          transition-all duration-300`}
      >
        <h3 className={`text-2xl font-bold mb-4 ${tier.highlight ? 'text-primary' : 'text-dark'}`}>
          {tier.name}
        </h3>
        <p className="text-5xl font-extrabold text-dark mb-2">
          {tier.price}
          <span className="text-lg font-medium text-gray-500"> {tier.frequency}</span>
        </p>
        {tier.name !== 'Enterprise' && (
          <p className="text-gray-500 mb-8">{tier.frequency}</p>
        )}

        <ul className="text-left text-gray-700 space-y-3 mb-10 flex-grow">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={tier.buttonLink}
          className={`block w-full text-center px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
            ${tier.highlight
              ? 'bg-primary text-white hover:bg-secondary shadow-lg'
              : 'bg-gray-100 text-primary hover:bg-primary hover:text-white shadow-md'
            }`}
        >
          {tier.buttonText}
        </a>
      </div>
    );

    const Pricing = () => {
      return (
        <section id="pricing" className="py-20 md:py-32 bg-light">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 animate-slideInLeft">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-16 animate-slideInRight">
              Choose the plan that best fits your business needs. No hidden fees, just powerful software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {pricingTiers.map((tier, index) => (
                <PricingCard key={index} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Pricing;
