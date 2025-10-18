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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs sm:text-sm text-amber-400 font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>TRUSTED BY PROFESSIONALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-white">What Financial Advisors</span><br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of financial professionals who have transformed their practice with WealthSync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-slate-950 font-bold text-sm sm:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">{testimonial.role}</div>
                    <div className="text-amber-400 text-xs sm:text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base sm:text-lg rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto touch-target">
            Join 120+ Advisory Firms
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">Start your free trial today • No setup fees • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
