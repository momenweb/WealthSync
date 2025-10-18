import {
  Database,
  Shield,
  BarChart3,
  TrendingUp,
  LineChart,
  Lock,
  Activity
} from 'lucide-react';

export default function SocialProofSection() {
  return (
    <section className="py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <p className="text-cyan-400/80 text-sm mb-6 font-mono tracking-wider">INTEGRATED WITH LEADING FINANCIAL PLATFORMS</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Futuristic Partner Logos */}
            <div className="flex items-center gap-2 text-cyan-300 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-3 py-2">
              <Database className="w-5 h-5" />
              <span className="font-semibold">SALESFORCE</span>
            </div>
            <div className="flex items-center gap-2 text-blue-300 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-lg px-3 py-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">WEALTHBOX</span>
            </div>
            <div className="flex items-center gap-2 text-teal-300 bg-slate-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg px-3 py-2">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold">MICROSOFT DYNAMICS</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg px-3 py-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">MORNINGSTAR</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300 bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-lg px-3 py-2">
              <LineChart className="w-5 h-5" />
              <span className="font-semibold">BLOOMBERG TERMINAL</span>
            </div>
          </div>
        </div>
        
        {/* Futuristic Trust Indicators */}
        <div className="relative bg-gradient-to-r from-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 lg:p-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">SECURITY & COMPLIANCE MATRIX</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div className="text-sm font-semibold text-cyan-300">SOC 2 CERTIFIED</div>
                <div className="text-xs text-cyan-400/80 font-medium">ENTERPRISE SECURITY</div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <div className="text-sm font-semibold text-blue-300">GDPR COMPLIANT</div>
                <div className="text-xs text-blue-400/80 font-medium">DATA PROTECTION</div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <div className="text-sm font-semibold text-teal-300">256-BIT ENCRYPTION</div>
                <div className="text-xs text-teal-400/80 font-medium">BANK-LEVEL SECURITY</div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <Activity className="w-6 h-6 text-black" />
                </div>
                <div className="text-sm font-semibold text-purple-300">99.9% UPTIME</div>
                <div className="text-xs text-purple-400/80 font-medium">ALWAYS AVAILABLE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

