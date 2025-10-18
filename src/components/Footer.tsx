import { Sparkles, MessageSquare, Users, Shield } from 'lucide-react';

export default function Footer() {
  const productLinks = ['Features', 'Integrations', 'API', 'Security', 'Pricing'];
  const companyLinks = ['About', 'Careers', 'Blog', 'Press', 'Partners'];
  const supportLinks = ['Help Center', 'Documentation', 'Contact', 'Status', 'Community'];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-950" />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">WealthSync™️</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Empowering financial advisors with AI-driven insights and automated workflows to deliver exceptional client experiences.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors touch-target">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-amber-400" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors touch-target">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-amber-400" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors touch-target">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-amber-400" />
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-amber-400 text-sm sm:text-base transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-amber-400 text-sm sm:text-base transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-amber-400 text-sm sm:text-base transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Global Wealth Finance Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#privacy" className="text-slate-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-slate-500 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-slate-500 hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
