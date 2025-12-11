import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Workflow</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            From Strategy to Alert in Minutes
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Complex trading logic doesn't have to be complicated to set up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-4"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary-600/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;