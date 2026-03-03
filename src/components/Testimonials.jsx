import React from 'react';

    const testimonials = [
      {
        name: 'Sarah Chen',
        title: 'CEO, Tech Innovators',
        quote: "D Software completely revolutionized our workflow. The automation features saved us countless hours, and the insights are invaluable!",
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      {
        name: 'David Lee',
        title: 'Founder, Creative Solutions',
        quote: "We've tried many platforms, but D Software stands out with its intuitive interface and robust performance. Highly recommended!",
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      {
        name: 'Maria Garcia',
        title: 'Operations Manager, Global Corp',
        quote: "The scalability of D Software is incredible. It grew with us seamlessly, handling our expanding data with ease and efficiency.",
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      {
        name: 'James Wilson',
        title: 'Marketing Director, Bright Future',
        quote: "Support from the D Software team is exceptional. They are always quick to respond and incredibly helpful. A true partner!",
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    ];

    const TestimonialCard = ({ name, title, quote, avatar }) => (
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 animate-fadeInUp">
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-primary shadow-md"
          loading="lazy"
        />
        <p className="text-lg font-serif italic text-gray-700 mb-6 flex-grow">"{quote}"</p>
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    );

    const Testimonials = () => {
      return (
        <section id="testimonials" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 animate-slideInLeft">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-16 animate-slideInRight">
              Don't just take our word for it. Hear from the businesses that have transformed their operations with D Software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Testimonials;
