import React from 'react';

    const features = [
      {
        icon: '💡',
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks and free up your team to focus on strategic initiatives. Our AI-powered tools learn and adapt.',
      },
      {
        icon: '📊',
        title: 'Advanced Analytics',
        description: 'Gain deep insights into your business performance with customizable dashboards and real-time reporting features.',
      },
      {
        icon: '☁️',
        title: 'Seamless Cloud Integration',
        description: 'Connect effortlessly with your existing cloud services. D Software integrates with all major platforms for a unified experience.',
      },
      {
        icon: '🔒',
        title: 'Enterprise-Grade Security',
        description: 'Your data is our top priority. We employ industry-leading encryption and security protocols to keep your information safe.',
      },
      {
        icon: '⚙️',
        title: 'Customizable Workflows',
        description: 'Tailor D Software to fit your unique business processes. Flexible modules and configurations adapt to your needs.',
      },
      {
        icon: '🚀',
        title: 'Scalable Performance',
        description: 'Designed to grow with your business. D Software scales seamlessly to handle increased demands without sacrificing performance.',
      },
    ];

    const FeatureCard = ({ icon, title, description }) => (
      <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 animate-fadeInUp">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );

    const Features = () => {
      return (
        <section id="features" className="py-20 md:py-32 bg-light">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 animate-slideInLeft">
              Powerful Features, Unmatched Innovation
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-16 animate-slideInRight">
              D Software offers a suite of tools designed to propel your business forward.
              Discover how our cutting-edge features can transform your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Features;
