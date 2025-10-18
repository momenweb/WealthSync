import {
  Shield,
  MessageSquare,
  BarChart3,
  Database,
  LineChart,
  Zap
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { 
      icon: MessageSquare, 
      title: 'Smart Client Messaging', 
      desc: 'AI-powered communication that drafts personalized emails, meeting summaries, and client updates in your voice.',
      benefits: ['Personalized tone', '90% time savings', 'Multi-language support']
    },
    { 
      icon: BarChart3, 
      title: 'AI-Generated Reports', 
      desc: 'Comprehensive performance reports and market analysis generated automatically with real-time data.',
      benefits: ['Real-time insights', 'Custom branding', 'Automated delivery']
    },
    { 
      icon: Shield, 
      title: 'Compliance & Security', 
      desc: 'Bank-level security with built-in compliance features for FINRA, SEC, and international regulations.',
      benefits: ['SOC 2 certified', 'GDPR compliant', '256-bit encryption']
    },
    { 
      icon: Database, 
      title: 'Universal Integration', 
      desc: 'Seamlessly connects with 50+ CRM platforms, portfolio management systems, and financial data providers.',
      benefits: ['50+ integrations', 'Real-time sync', 'No data migration']
    },
    { 
      icon: LineChart, 
      title: 'Advanced Analytics', 
      desc: 'Deep client insights, behavioral analytics, and predictive modeling to enhance your advisory services.',
      benefits: ['Predictive insights', 'Risk analysis', 'Performance tracking']
    },
    { 
      icon: Zap, 
      title: 'Workflow Automation', 
      desc: 'Automate repetitive tasks, client onboarding, and routine communications to focus on high-value activities.',
      benefits: ['80% task reduction', 'Smart scheduling', 'Custom workflows']
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,300 Q200,200 400,300 T800,300 L1000,200"
            stroke="url(#featureGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q300,400 600,500 T1200,500"
            stroke="url(#featureGradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="featureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="featureGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="relative z-10">NEURAL NETWORK FEATURES</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">EVERYTHING YOU NEED TO</span><br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent relative">
              <span className="relative z-10">ELEVATE CLIENT RELATIONSHIPS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg -z-10"></div>
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Advanced AI-driven neural networks designed specifically for financial advisors. 
            Streamline operations, enhance client experiences, and scale your practice with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Futuristic Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Futuristic Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-400 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-transparent animate-pulse"></div>
                </div>

                {/* Futuristic Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{feature.desc}</p>

                {/* Futuristic Benefits */}
                <div className="space-y-2 sm:space-y-3">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <div key={benefitIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0 animate-pulse" />
                      <span className="text-cyan-300 text-xs sm:text-sm font-medium">{benefit.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Futuristic Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="relative bg-gradient-to-r from-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">SYSTEM PERFORMANCE METRICS</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-cyan-300 text-xs sm:text-sm font-medium">UPTIME SLA</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-blue-300 text-xs sm:text-sm font-medium">INTEGRATIONS</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-teal-300 text-xs sm:text-sm font-medium">SUPPORT</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">SOC 2</div>
                  <div className="text-purple-300 text-xs sm:text-sm font-medium">CERTIFIED</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
