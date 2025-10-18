import { ArrowRight, PieChart } from 'lucide-react';
import DashboardMockup from '../DashboardMockup';

export default function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-32 px-4 sm:px-6 overflow-hidden safe-area-inset-top">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
          />
          <path
            d="M0,400 Q400,300 800,400 T1200,400"
            stroke="url(#circuitGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          {/* Futuristic Badge */}
          <div className="inline-block mb-6 sm:mb-8">
            <div className="relative">
              <span className="text-xs sm:text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10">⚡ TRUSTED BY 120+ WEALTH ADVISORY FIRMS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
              </span>
            </div>
          </div>

          {/* Futuristic Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto">
            <span className="text-white block mb-1 sm:mb-2 relative">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                STAY AHEAD OF EVERY CLIENT —
              </span>
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl -z-10"></div>
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent block relative">
              <span className="relative z-10">EFFORTLESSLY.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg -z-10"></div>
            </span>
          </h1>

          {/* Futuristic Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
            WealthSync™️ revolutionizes portfolio tracking, client communication, and reporting 
            with one intelligent, <span className="text-cyan-400 font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI-powered neural network.</span>
          </p>

          {/* Futuristic Value Props */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
            <div className="flex items-center justify-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl px-4 py-2">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0 animate-pulse" />
              <span className="text-sm text-cyan-300 font-medium">SAVE 6+ HOURS WEEKLY</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl px-4 py-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex-shrink-0 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">BOOST ENGAGEMENT 40%</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-teal-500/20 rounded-xl px-4 py-2">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex-shrink-0 animate-pulse" />
              <span className="text-sm text-teal-300 font-medium">SETUP IN 5 MINUTES</span>
            </div>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-4 sm:mb-6 px-4">
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-base sm:text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-cyan-500/50 hover:scale-105 touch-target overflow-hidden">
              <span className="relative z-10">INITIALIZE SYSTEM</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse"></div>
            </button>
            <button className="group px-8 sm:px-10 py-4 sm:py-5 text-cyan-300 font-semibold text-base sm:text-lg border-2 border-cyan-500/40 rounded-2xl hover:border-cyan-400/60 hover:bg-cyan-500/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 touch-target">
              ACCESS TERMINAL
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Futuristic Trust Note */}
          <div className="relative mb-12 sm:mb-20 px-4">
            <p className="text-cyan-400/80 text-xs sm:text-sm font-mono tracking-wider">
              ⚡ NO CREDIT CARD REQUIRED • 14-DAY FREE TRIAL • GDPR COMPLIANT • ENCRYPTED
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-5xl mx-auto">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
