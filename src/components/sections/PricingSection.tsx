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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs sm:text-sm text-amber-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm">
          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>SIMPLE PRICING</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="text-white">Start Free, Scale</span><br />
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">As You Grow</span>
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
          No hidden fees, no long-term contracts. Pay only for what you use with transparent, advisor-friendly pricing.
        </p>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              $99<span className="text-lg sm:text-xl text-slate-400">/month</span>
            </div>
            <div className="text-slate-400 text-sm sm:text-base">Per advisor • Billed monthly</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base sm:text-lg rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 touch-target">
              Start 14-Day Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg border-2 border-slate-600 rounded-xl hover:border-amber-500/50 hover:bg-amber-500/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 touch-target">
              Schedule Demo
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          
          <p className="text-slate-500 text-xs sm:text-sm mt-4 sm:mt-6">
            ✨ No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
