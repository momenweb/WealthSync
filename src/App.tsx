import {
  Navigation,
  HeroSection,
  SocialProofSection,
  HowItWorksSection,
  FeaturesSection,
  TestimonialsSection,
  PricingSection,
  Footer
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Futuristic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_cyan-500/5_60deg,_transparent_120deg,_blue-500/5_180deg,_transparent_240deg,_teal-500/5_300deg,_transparent_360deg)]"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating Data Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;