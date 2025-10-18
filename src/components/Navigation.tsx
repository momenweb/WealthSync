import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl mx-auto">
      <div className="bg-slate-900/90 backdrop-blur-xl border border-amber-500/10 rounded-2xl px-4 sm:px-6 py-2 flex items-center justify-between shadow-lg shadow-black/10">
        <div className="flex items-center gap-2.5">
          <img src="/images/logo-no-bg.png" alt="WealthSync Logo" className="w-9 h-9 sm:w-10 sm:h-10" />
          <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">WealthSync™️</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-5">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Testimonials
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white border border-amber-500/20 rounded-xl hover:border-amber-500/40 transition-all duration-300">
              Login
            </button>
            <button className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-xl hover:shadow-md hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300">
              Sign Up Free
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/90 hover:text-white transition-colors touch-target"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] px-2">
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border border-amber-500/10 rounded-xl overflow-hidden shadow-lg shadow-black/10 animate-in fade-in slide-in-from-top duration-200">
            <div className="p-3 space-y-3">
              <a href="#features" className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
            </div>
            <div className="border-t border-amber-500/5 p-3 space-y-2">
              <button className="w-full px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white border border-amber-500/20 rounded-lg hover:border-amber-500/40 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-lg hover:shadow-md hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300">
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
