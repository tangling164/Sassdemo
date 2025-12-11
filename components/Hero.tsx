import React from 'react';
import EmailSignup from './EmailSignup';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
              v2.0 is now live
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Crypto Opportunity</span> Again.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Automate your strategy monitoring. We watch the charts 24/7 so you can sleep soundly, knowing you'll be alerted the moment your conditions are met.
            </p>

            <div className="max-w-md mx-auto lg:mx-0">
              <EmailSignup />
              <p className="mt-4 text-xs text-gray-500">
                14-day free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl shadow-2xl bg-gray-900 overflow-hidden border border-gray-800 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
               {/* Abstract UI Mockup */}
               <div className="absolute inset-0 bg-gray-900">
                  {/* Header of mockup */}
                  <div className="h-12 border-b border-gray-800 flex items-center px-4 space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Body of mockup */}
                  <div className="p-6">
                     <div className="flex justify-between items-end mb-8">
                       <div>
                         <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                         <div className="h-8 w-48 bg-gray-600 rounded"></div>
                       </div>
                       <div className="h-8 w-24 bg-green-900/30 text-green-400 border border-green-900 rounded flex items-center justify-center text-sm font-mono">
                         +12.5%
                       </div>
                     </div>
                     {/* Fake Chart */}
                     <div className="space-y-2 mt-12 flex items-end justify-between h-48 px-2">
                        {[40, 60, 45, 70, 85, 60, 75, 50, 65, 90, 80, 95].map((h, i) => (
                          <div 
                            key={i} 
                            className="w-full mx-1 bg-gradient-to-t from-primary-900/50 to-primary-500 rounded-t-sm"
                            style={{ height: `${h}%`, opacity: 0.5 + (i/24) }}
                          ></div>
                        ))}
                     </div>
                     {/* Alert Notification Overlay */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl w-64 animate-bounce-slow">
                        <div className="flex items-start space-x-3">
                           <div className="bg-green-500/20 p-2 rounded-full">
                              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                           </div>
                           <div>
                              <div className="text-sm font-bold text-white">Entry Triggered</div>
                              <div className="text-xs text-gray-400">BTC/USDT crossed 65,000</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;