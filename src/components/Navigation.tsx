import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/10 safe-area-inset-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-950" />
          </div>
          <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">WealthSync™️</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 lg:px-5 py-2 text-sm font-medium text-white/90 hover:text-white border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-300">
            Login
          </button>
          <button className="px-4 lg:px-5 py-2 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
            Sign Up Free
          </button>
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
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/10 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-6 space-y-4 safe-area-inset-bottom">
            <div className="space-y-3">
              <a href="#features" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#testimonials" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
            </div>
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <button className="w-full px-5 py-3 text-center font-medium text-white/90 hover:text-white border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-5 py-3 font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
