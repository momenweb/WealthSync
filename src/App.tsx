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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;