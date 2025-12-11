import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EmailSignup from './components/EmailSignup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary-100 selection:text-primary-900">
      <Header />
      
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        
        {/* Bottom CTA Section */}
        <section className="py-20 bg-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Ready to automate your trading workflow?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of traders who are reclaiming their time. Set up your first strategy in under 5 minutes.
            </p>
            <div className="max-w-md mx-auto">
               <EmailSignup 
                className="justify-center" 
                buttonText="Start Now" 
                placeholder="Enter email to get started"
               />
            </div>
            <p className="mt-4 text-xs text-primary-200 opacity-80">
              No credit card required for free tier.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;