import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-16">
          Trusted by traders worldwide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="flex flex-col h-full bg-gray-50 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="flex-grow text-gray-700 italic text-lg mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="h-10 w-10 rounded-full object-cover mr-4 bg-gray-300" 
                />
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;