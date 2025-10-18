import { Zap, Database, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      icon: Database,
      title: 'Connect & Integrate',
      desc: 'Seamlessly connect your existing CRM, portfolio management systems, and data sources. Our secure API integrations work with 50+ financial platforms.',
      features: ['CRM Integration', 'Portfolio Data Sync', 'Real-time Updates', 'Bank-level Security']
    },
    {
      step: '02',
      icon: Sparkles,
      title: 'AI Automation',
      desc: 'Watch as our AI analyzes your data and automatically generates personalized client communications, reports, and actionable insights.',
      features: ['Smart Reports', 'Client Insights', 'Risk Analysis', 'Performance Tracking']
    },
    {
      step: '03',
      icon: MessageSquare,
      title: 'Engage & Scale',
      desc: 'Deliver exceptional client experiences at scale. Automated workflows free up your time for high-value relationship building.',
      features: ['Client Portal', 'Automated Updates', 'Meeting Scheduler', 'Performance Alerts']
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Mobile-Optimized Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs sm:text-sm text-amber-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>SIMPLE. POWERFUL. EFFECTIVE.</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-white">Transform Your Practice in</span><br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Three Simple Steps</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            From setup to success in minutes, not months. Our AI-powered platform integrates seamlessly 
            with your existing workflow to deliver immediate value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Mobile-Optimized Step Number */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500/20">{item.step}</div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-950" />
                  </div>
                </div>

                {/* Mobile-Optimized Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{item.desc}</p>

                {/* Mobile-Optimized Features */}
                <div className="space-y-2 sm:space-y-3">
                  {item.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow for connection (except last item) - Hidden on mobile */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-amber-500/50" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base sm:text-lg rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto touch-target">
            Start Your Free Trial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">No credit card required • 14-day free trial • Setup in 5 minutes</p>
        </div>
      </div>
    </section>
  );
}
