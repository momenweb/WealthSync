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
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Mobile-Optimized Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-b from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs sm:text-sm text-amber-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>ENTERPRISE-GRADE FEATURES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-white">Everything You Need to</span><br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Elevate Client Relationships</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Powerful AI-driven tools designed specifically for financial advisors. 
            Streamline operations, enhance client experiences, and scale your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Mobile-Optimized Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-amber-400" />
                </div>

                {/* Mobile-Optimized Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{feature.desc}</p>

                {/* Mobile-Optimized Benefits */}
                <div className="space-y-1.5 sm:space-y-2">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <div key={benefitIdx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 sm:mb-2">99.9%</div>
                <div className="text-slate-400 text-xs sm:text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-1 sm:mb-2">50+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-slate-400 text-xs sm:text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">SOC 2</div>
                <div className="text-slate-400 text-xs sm:text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
