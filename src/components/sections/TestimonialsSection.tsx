import { Star, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Financial Advisor",
      company: "Meridian Wealth Management",
      content: "WealthSync has completely transformed how I manage my client relationships. The AI-powered insights help me provide better advice, and I've saved over 8 hours per week on administrative tasks.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Portfolio Manager",
      company: "Summit Financial Group",
      content: "The automated reporting feature alone has been worth the investment. My clients love the real-time updates, and I can focus on what matters most - growing their wealth.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wealth Management Director",
      company: "Pinnacle Advisory Services",
      content: "Implementation was seamless, and the ROI was immediate. Our client satisfaction scores increased by 40% within the first quarter of using WealthSync.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Data Flow */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#testimonialGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className="animate-pulse"
          />
          <path
            d="M0,600 Q400,550 800,600 T1200,600"
            stroke="url(#testimonialGradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <defs>
            <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="testimonialGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm relative overflow-hidden">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="relative z-10">NEURAL FEEDBACK MATRIX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">WHAT FINANCIAL ADVISORS</span><br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent relative">
              <span className="relative z-10">ARE SAYING</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg -z-10"></div>
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of financial professionals who have transformed their practice with 
            <span className="text-cyan-400 font-semibold"> WealthSync's neural network technology.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Futuristic Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 sm:w-5 sm:h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="text-black font-bold text-sm sm:text-base relative z-10">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-transparent animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">{testimonial.name}</div>
                    <div className="text-cyan-300 text-xs sm:text-sm font-medium">{testimonial.role.toUpperCase()}</div>
                    <div className="text-blue-300 text-xs sm:text-sm font-medium">{testimonial.company.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Futuristic Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-base sm:text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto touch-target overflow-hidden">
            <span className="relative z-10">JOIN 120+ ADVISORY FIRMS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse"></div>
          </button>
          <div className="relative mt-4 sm:mt-6">
            <p className="text-cyan-400/80 text-xs sm:text-sm font-mono tracking-wider">
              ⚡ START YOUR FREE TRIAL TODAY • NO SETUP FEES • CANCEL ANYTIME
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
