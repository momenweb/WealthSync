import { useState, useEffect } from 'react';
import {
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  MessageSquare,
  Database,
  Lock,
  LineChart,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  PieChart
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">WealthSync™️</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-3">
            <button className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-300">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/10">
            <div className="px-4 py-6 space-y-4">
              <button className="w-full px-5 py-3 text-left font-medium text-white/90 hover:text-white border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-5 py-3 font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Simplified Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-amber-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-blue-500/5 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Simple Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm text-amber-400 font-medium">
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">AI-Powered Client Management</span>
                <span className="sm:hidden">AI-Powered</span>
              </div>

              {/* Clean Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Where Finance and Technology{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Stay in Sync
                </span>
              </h1>

              {/* Simple Description */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                WealthSync™ revolutionizes wealth management with AI-powered insights, 
                automated client communication, and real-time portfolio monitoring.
              </p>

              {/* Simple Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400">500+</div>
                  <div className="text-sm text-slate-400">Advisors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400">$2.5B+</div>
                  <div className="text-sm text-slate-400">AUM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">98%</div>
                  <div className="text-sm text-slate-400">Satisfaction</div>
                </div>
              </div>

              {/* Simple CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-amber-500/30 text-white font-semibold rounded-lg hover:border-amber-500/60 hover:bg-amber-500/5 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Simple Trust Indicators */}
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-3">Trusted by leading financial institutions</p>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="px-3 py-1 bg-slate-700/50 rounded text-xs font-medium">Goldman Sachs</div>
                  <div className="px-3 py-1 bg-slate-700/50 rounded text-xs font-medium">Morgan Stanley</div>
                  <div className="px-3 py-1 bg-slate-700/50 rounded text-xs font-medium">JP Morgan</div>
                </div>
              </div>
            </div>

            {/* Simple Dashboard Preview */}
            <div className="relative order-1 lg:order-2">
              <DashboardIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">How It Works</h2>
            <p className="text-slate-400 text-base sm:text-lg">Three simple steps to transform your practice</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                icon: Database,
                title: 'Connect',
                desc: 'Integrate your CRM and client data instantly with secure API connections.'
              },
              {
                step: '02',
                icon: Sparkles,
                title: 'Automate',
                desc: 'Let AI craft personalized updates, reports, and insights for every client.'
              },
              {
                step: '03',
                icon: MessageSquare,
                title: 'Engage',
                desc: 'Communicate seamlessly through one unified, intelligent platform.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-amber-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl group-hover:from-amber-400/40 transition-all duration-500" />

                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500/20 mb-3 sm:mb-4">{item.step}</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Features & Benefits</h2>
            <p className="text-slate-400 text-base sm:text-lg">Everything you need to elevate client relationships</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: MessageSquare, title: 'Smart Client Messaging', desc: 'AI drafts personalized emails and summaries.' },
              { icon: BarChart3, title: 'AI-Generated Reports', desc: 'Real-time performance and trend insights.' },
              { icon: Shield, title: 'Compliance Safe', desc: 'Built for data security and regulatory trust.' },
              { icon: Database, title: 'CRM Integration', desc: 'Works seamlessly with leading financial tools.' },
              { icon: LineChart, title: 'Client Insights Dashboard', desc: 'View engagement metrics and behavioral patterns.' },
              { icon: Zap, title: 'Task Automation', desc: 'Save hours on repetitive communication tasks.' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/30 backdrop-blur-sm border border-amber-500/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-amber-500/30 hover:bg-slate-900/50 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm text-amber-400 font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Live Demo
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Your Digital Co-Pilot for Every{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Client Interaction
                </span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                Experience the future of wealth management with AI-powered insights, 
                automated workflows, and real-time client engagement tools.
              </p>
            </div>

            <ProductShowcase />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 sm:mb-8" />

            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed mb-6 sm:mb-8 text-slate-200">
              "We built WealthSync™️ to make client communication effortless, insightful, and human."
            </blockquote>

            <div className="space-y-1 sm:space-y-2">
              <p className="font-semibold text-base sm:text-lg text-amber-400">Jorden J. Walls, CTSO</p>
              <p className="text-slate-400 text-sm sm:text-base">Global Wealth Finance Inc.</p>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-amber-500/10">
              <p className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">In collaboration with</p>
              <p className="font-medium text-slate-300 text-sm sm:text-base">Momen, Head of Product Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] lg:w-[800px] lg:h-[400px] bg-amber-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Transform your client relationships with{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              AI-powered precision
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10">
            Join leading financial professionals who trust WealthSync™️
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-base sm:text-lg rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              Sign Up
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-amber-500/40 text-white font-bold text-base sm:text-lg rounded-lg sm:rounded-xl hover:border-amber-500/70 hover:bg-amber-500/10 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-slate-950" />
                </div>
                <span className="text-base sm:text-lg font-bold">WealthSync™️</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm">
                Where Finance and Technology Stay in Sync.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Home</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">About</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Pricing</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mt-6 sm:mt-8 mb-4 sm:mb-6" />

          <div className="text-center text-slate-500 text-xs sm:text-sm">
            © 2025 WealthSync™️. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function DashboardIllustration() {
  const [activeClient, setActiveClient] = useState(0);
  
  const clients = [
    { name: 'Sarah Johnson', portfolio: '$2.4M', change: '+12.3%', status: 'active' },
    { name: 'Michael Chen', portfolio: '$1.8M', change: '+8.7%', status: 'pending' },
    { name: 'Emily Rodriguez', portfolio: '$3.1M', change: '+15.2%', status: 'active' }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl blur-3xl animate-pulse-slow" />

      <div className="relative bg-slate-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
        {/* Enhanced Dashboard Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-bold text-white">WealthSync Dashboard</div>
              <div className="text-xs sm:text-sm text-slate-400">Real-time Client Management</div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
          {[
            { value: '247', label: 'Active Clients', color: 'from-amber-500 to-amber-600', icon: TrendingUp },
            { value: '94%', label: 'Engagement Rate', color: 'from-emerald-500 to-emerald-600', icon: BarChart3 },
            { value: '12h', label: 'Time Saved/Week', color: 'from-blue-500 to-blue-600', icon: Zap },
            { value: '$2.5B', label: 'AUM Managed', color: 'from-purple-500 to-purple-600', icon: Shield }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/60 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <stat.icon className={`w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                <div className="text-xs text-emerald-400 font-medium">+5.2%</div>
              </div>
              <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Portfolio Performance Chart */}
        <div className="bg-slate-800/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-700/40 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-lg font-semibold text-white">Portfolio Performance</h3>
            <div className="flex gap-1 sm:gap-2">
              <button className="px-2 sm:px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-lg">1Y</button>
              <button className="px-2 sm:px-3 py-1 text-slate-400 text-xs rounded-lg hover:bg-slate-700/50">6M</button>
              <button className="px-2 sm:px-3 py-1 text-slate-400 text-xs rounded-lg hover:bg-slate-700/50">3M</button>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-24 sm:h-32 lg:h-40 gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[45, 52, 38, 65, 58, 72, 68, 85, 78, 92, 88, 95].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col justify-end group">
                <div
                  className="w-full bg-gradient-to-t from-amber-500/80 to-amber-400 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs text-slate-500 mt-1 sm:mt-2 text-center">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][idx]}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="text-emerald-400 font-medium">+24.7% YTD</div>
            <div className="text-slate-400">vs S&P 500 +18.2%</div>
          </div>
        </div>

        {/* Client List with Interactive Elements */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <h3 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4">Recent Client Activity</h3>
          {clients.map((client, idx) => (
            <div 
              key={idx}
              className={`flex items-center gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 cursor-pointer ${
                activeClient === idx 
                  ? 'bg-amber-500/10 border-amber-500/50' 
                  : 'bg-slate-800/30 border-slate-700/50 hover:border-amber-500/30'
              }`}
              onClick={() => setActiveClient(idx)}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-slate-950 font-bold text-xs sm:text-sm">{client.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-sm sm:text-base truncate">{client.name}</span>
                  <span className={`text-xs sm:text-sm font-medium ${client.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'} flex-shrink-0 ml-2`}>
                    {client.change}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span className="truncate">{client.portfolio}</span>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${client.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className="text-xs">{client.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights Panel */}
        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-500/20">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-slate-950" />
            </div>
            <h3 className="text-sm sm:text-lg font-semibold text-white">AI Insights</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-slate-300">Portfolio rebalancing recommended for 3 clients</p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">Based on market volatility analysis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-slate-300">Client communication scheduled for tomorrow</p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">5 personalized reports ready for review</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-slate-300">Risk assessment updated for Q4</p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">New compliance requirements detected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('inbox');

  const inboxMessages = [
    {
      id: 1,
      client: 'Sarah Johnson',
      initials: 'SJ',
      subject: 'Q4 Portfolio Review Ready',
      preview: 'AI has generated comprehensive portfolio analysis with 12.3% YTD performance...',
      time: '2 min ago',
      priority: 'high',
      status: 'ready'
    },
    {
      id: 2,
      client: 'Michael Chen',
      initials: 'MC',
      subject: 'Risk Assessment Update',
      preview: 'Market volatility analysis complete. Rebalancing recommendations prepared...',
      time: '15 min ago',
      priority: 'medium',
      status: 'pending'
    },
    {
      id: 3,
      client: 'Emily Rodriguez',
      initials: 'ER',
      subject: 'Client Meeting Summary',
      preview: 'Meeting notes processed. Next steps and action items identified...',
      time: '1 hour ago',
      priority: 'low',
      status: 'completed'
    }
  ];

  const reports = [
    {
      title: 'Portfolio Performance',
      icon: BarChart3,
      status: 'ready',
      generated: '2 min ago',
      metrics: { performance: '+12.3%', benchmark: '+8.7%' },
      color: 'emerald'
    },
    {
      title: 'Risk Analysis',
      icon: Shield,
      status: 'ready',
      generated: '5 min ago',
      metrics: { risk: 'Moderate', volatility: 'Low' },
      color: 'amber'
    },
    {
      title: 'Asset Allocation',
      icon: PieChart,
      status: 'ready',
      generated: '8 min ago',
      metrics: { equity: '65%', bonds: '25%', alternatives: '10%' },
      color: 'blue'
    },
    {
      title: 'Market Trends',
      icon: TrendingUp,
      status: 'ready',
      generated: '12 min ago',
      metrics: { trend: 'Bullish', sentiment: 'Positive' },
      color: 'purple'
    }
  ];

  const insights = [
    {
      metric: 'Client Engagement Rate',
      value: '+24%',
      change: '+5.2%',
      trend: 'up',
      description: 'Increased client interaction frequency',
      icon: MessageSquare
    },
    {
      metric: 'Average Response Time',
      value: '2.3h',
      change: '-15%',
      trend: 'up',
      description: 'Faster client communication',
      icon: Zap
    },
    {
      metric: 'Portfolio Review Completion',
      value: '94%',
      change: '+8%',
      trend: 'up',
      description: 'Higher review completion rate',
      icon: BarChart3
    },
    {
      metric: 'AI Accuracy Score',
      value: '98.7%',
      change: '+2.1%',
      trend: 'up',
      description: 'Improved prediction accuracy',
      icon: Sparkles
    }
  ];

  return (
    <div className="relative">
      {/* Enhanced Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto">
        {[
          { id: 'inbox', label: 'Smart Inbox', icon: MessageSquare, count: 3 },
          { id: 'reports', label: 'AI Reports', icon: BarChart3, count: 4 },
          { id: 'insights', label: 'Live Insights', icon: TrendingUp, count: null }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap relative ${
              activeTab === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/50'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{tab.label}</span>
            {tab.count && (
              <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                activeTab === tab.id 
                  ? 'bg-slate-950/20 text-slate-950' 
                  : 'bg-amber-500/20 text-amber-400'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Content */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/10 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[400px]">
        {activeTab === 'inbox' && (
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">AI-Generated Client Communications</h3>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Live Processing
              </div>
            </div>
            {inboxMessages.map((message) => (
              <div key={message.id} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-950 font-bold text-xs sm:text-sm">{message.initials}</span>
                  </div>
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                    message.priority === 'high' ? 'bg-red-500' : 
                    message.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="font-semibold text-sm sm:text-base text-white">{message.client}</span>
                    <span className="text-xs text-slate-500">{message.time}</span>
                  </div>
                  <h4 className="font-medium text-sm sm:text-base text-amber-400 mb-1">{message.subject}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">{message.preview}</p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      message.status === 'ready' ? 'bg-emerald-500/20 text-emerald-400' :
                      message.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {message.status}
                    </span>
                    <button className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">AI-Generated Financial Reports</h3>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <Lock className="w-4 h-4" />
                Secure & Compliant
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {reports.map((report, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      report.color === 'emerald' ? 'bg-emerald-500/20' :
                      report.color === 'amber' ? 'bg-amber-500/20' :
                      report.color === 'blue' ? 'bg-blue-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      <report.icon className={`w-4 h-4 ${
                        report.color === 'emerald' ? 'text-emerald-400' :
                        report.color === 'amber' ? 'text-amber-400' :
                        report.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs text-emerald-400 font-medium">{report.status}</span>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 text-sm sm:text-base text-white">{report.title}</h4>
                  <div className="space-y-1 mb-3">
                    {Object.entries(report.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400">Generated {report.generated}</p>
                    <button className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
                      Download →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Real-Time Performance Insights</h3>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Live Updates
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {insights.map((insight, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <insight.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-emerald-400 font-medium">{insight.change}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs sm:text-sm text-slate-400 mb-1">{insight.metric}</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">{insight.value}</p>
                  </div>
                  <p className="text-xs text-slate-400">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
