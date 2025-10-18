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
    <section className="py-12 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-slate-400 text-sm mb-6">Integrated with leading financial platforms</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Partner Logos */}
            <div className="flex items-center gap-2 text-slate-500">
              <Database className="w-5 h-5" />
              <span className="font-semibold">Salesforce</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Wealthbox</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold">Microsoft Dynamics</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Morningstar</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <LineChart className="w-5 h-5" />
              <span className="font-semibold">Bloomberg Terminal</span>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-emerald-400 mb-2" />
              <div className="text-sm font-semibold text-white">SOC 2 Certified</div>
              <div className="text-xs text-slate-400">Enterprise Security</div>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-sm font-semibold text-white">GDPR Compliant</div>
              <div className="text-xs text-slate-400">Data Protection</div>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm font-semibold text-white">256-bit Encryption</div>
              <div className="text-xs text-slate-400">Bank-level Security</div>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="w-8 h-8 text-amber-400 mb-2" />
              <div className="text-sm font-semibold text-white">99.9% Uptime</div>
              <div className="text-xs text-slate-400">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
