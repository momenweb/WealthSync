import { Sparkles, MessageSquare, Users, Shield } from 'lucide-react';

export default function Footer() {
  const productLinks = ['Features', 'Integrations', 'API', 'Security', 'Pricing'];
  const companyLinks = ['About', 'Careers', 'Blog', 'Press', 'Partners'];
  const supportLinks = ['Help Center', 'Documentation', 'Contact', 'Status', 'Community'];

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Futuristic Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img src="/images/logo-no-bg.png" alt="WealthSync Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">WealthSync™️</span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Empowering financial advisors with 
              <span className="text-cyan-400 font-semibold"> AI-driven neural networks</span> and automated workflows to deliver exceptional client experiences.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 touch-target group">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 touch-target group">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 touch-target group">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Futuristic Product Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">NEURAL PRODUCTS</h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-cyan-300 hover:text-cyan-400 text-sm sm:text-base transition-colors font-medium">
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Futuristic Company Links */}
          <div>
            <h3 className="text-blue-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">CORPORATE MATRIX</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-blue-300 hover:text-blue-400 text-sm sm:text-base transition-colors font-medium">
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Futuristic Support Links */}
          <div>
            <h3 className="text-teal-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">SUPPORT NETWORK</h3>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-teal-300 hover:text-teal-400 text-sm sm:text-base transition-colors font-medium">
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Futuristic Bottom Bar */}
        <div className="relative border-t border-cyan-500/20 pt-6 sm:pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-cyan-400/80 text-xs sm:text-sm text-center sm:text-left font-mono tracking-wider">
              © 2024 GLOBAL WEALTH FINANCE INC. ALL RIGHTS RESERVED.
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#privacy" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">PRIVACY POLICY</a>
              <a href="#terms" className="text-blue-300 hover:text-blue-400 transition-colors font-medium">TERMS OF SERVICE</a>
              <a href="#cookies" className="text-teal-300 hover:text-teal-400 transition-colors font-medium">COOKIE POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
