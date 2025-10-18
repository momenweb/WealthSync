import { ArrowRight, PieChart } from 'lucide-react';
import DashboardMockup from '../DashboardMockup';

export default function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-32 px-4 sm:px-6 overflow-hidden safe-area-inset-top">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          {/* Mobile-Optimized Badge */}
          <div className="inline-block mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              🚀 Trusted by 120+ wealth advisory firms
            </span>
          </div>

          {/* Mobile-Optimized Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto">
            <span className="text-white block mb-1 sm:mb-2">Stay Ahead of Every Client —</span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent block">
              Effortlessly.
            </span>
          </h1>

          {/* Mobile-Optimized Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
            WealthSync™️ simplifies portfolio tracking, client communication, and reporting 
            with one intelligent, <span className="text-amber-400 font-semibold">AI-powered hub.</span>
          </p>

          {/* Mobile-Optimized Value Props */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-slate-400 px-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
              <span className="text-sm">Save 6+ hours weekly</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
              <span className="text-sm">Boost engagement 40%</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
              <span className="text-sm">Setup in 5 minutes</span>
            </div>
          </div>

          {/* Mobile-Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-4">
            <button className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/50 hover:scale-105 touch-target">
              Sign Up Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg border-2 border-slate-600 rounded-xl hover:border-amber-500/50 hover:bg-amber-500/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 touch-target">
              Watch Demo
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile-Optimized Trust Note */}
          <p className="text-slate-500 text-xs sm:text-sm mb-12 sm:mb-20 px-4">
            ✨ No credit card required • 14-day free trial • GDPR compliant
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-5xl mx-auto">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
