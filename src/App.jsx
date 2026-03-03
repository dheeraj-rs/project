import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Testimonials from './components/Testimonials';
    import Pricing from './components/Pricing';
    import CallToAction from './components/CallToAction';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <CallToAction />
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
