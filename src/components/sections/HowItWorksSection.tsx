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
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Process Flow */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M100,200 Q300,150 500,200 T900,200 L1100,200"
            stroke="url(#processGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
          />
          <path
            d="M100,400 Q400,350 700,400 T1100,400"
            stroke="url(#processGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="processGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm relative overflow-hidden">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="relative z-10">NEURAL PROCESSING PIPELINE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">TRANSFORM YOUR PRACTICE IN</span><br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent relative">
              <span className="relative z-10">THREE NEURAL STEPS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg -z-10"></div>
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            From setup to success in minutes, not months. Our 
            <span className="text-cyan-400 font-semibold"> AI-powered neural network</span> integrates seamlessly 
            with your existing workflow to deliver immediate value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Futuristic Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Futuristic Step Number */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-500/20">{item.step}</div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25 relative overflow-hidden">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Futuristic Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">{item.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{item.desc}</p>

                {/* Futuristic Features */}
                <div className="space-y-2 sm:space-y-3">
                  {item.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/10 rounded-lg px-3 py-1.5">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0 animate-pulse" />
                      <span className="text-cyan-300 text-xs sm:text-sm font-medium">{feature.toUpperCase()}</span>
                    </div>
                  ))}
                </div>

                {/* Futuristic Arrow for connection (except last item) */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Futuristic Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-base sm:text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto touch-target overflow-hidden">
            <span className="relative z-10">INITIALIZE NEURAL NETWORK</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse"></div>
          </button>
          <div className="relative mt-4 sm:mt-6">
            <p className="text-cyan-400/80 text-xs sm:text-sm font-mono tracking-wider">
              ⚡ NO CREDIT CARD REQUIRED • 14-DAY FREE TRIAL • SETUP IN 5 MINUTES
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
