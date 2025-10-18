import { DollarSign, ArrowRight, MessageSquare } from 'lucide-react';

export default function PricingSection() {
  const features = [
    'Unlimited client accounts',
    'AI-powered insights',
    'Automated reporting',
    'CRM integrations',
    'Real-time portfolio tracking',
    '24/7 priority support'
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M0,150 Q200,100 400,150 T800,150 L1000,100"
            stroke="url(#pricingGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
          />
          <path
            d="M0,450 Q300,350 600,450 T1200,450"
            stroke="url(#pricingGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <defs>
            <linearGradient id="pricingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="pricingGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm relative overflow-hidden">
          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="relative z-10">NEURAL PRICING MATRIX</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">START FREE, SCALE</span><br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent relative">
            <span className="relative z-10">AS YOU GROW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg -z-10"></div>
          </span>
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
          No hidden fees, no long-term contracts. Pay only for what you use with transparent, 
          <span className="text-cyan-400 font-semibold"> AI-optimized pricing algorithms.</span>
        </p>

        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 relative">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">$99</span>
                <span className="text-lg sm:text-xl text-cyan-300">/month</span>
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl -z-10"></div>
              </div>
              <div className="text-cyan-300 text-sm sm:text-base font-medium">PER ADVISOR • BILLED MONTHLY</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/10 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0 animate-pulse" />
                  <span className="text-cyan-300 text-sm sm:text-base font-medium">{feature.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-base sm:text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 touch-target overflow-hidden">
              <span className="relative z-10">INITIALIZE 14-DAY TRIAL</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse"></div>
            </button>
            <button className="group px-8 sm:px-10 py-4 sm:py-5 text-cyan-300 font-semibold text-base sm:text-lg border-2 border-cyan-500/40 rounded-2xl hover:border-cyan-400/60 hover:bg-cyan-500/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 touch-target">
              SCHEDULE DEMO
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="relative mt-6 sm:mt-8">
            <p className="text-cyan-400/80 text-xs sm:text-sm font-mono tracking-wider">
              ⚡ NO SETUP FEES • CANCEL ANYTIME • 30-DAY MONEY-BACK GUARANTEE
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
      </div>
    </section>
  );
}
