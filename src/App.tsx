import React from 'react';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { Storytelling } from './components/Storytelling';
import { GeneratedPortfolio } from './components/GeneratedPortfolio';
import { InteractiveFeatures } from './components/InteractiveFeatures';
import { QuoteFlow } from './components/QuoteFlow';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1C1A] font-sans overflow-x-hidden">
      <Hero />
      <TrustBanner />
      <Storytelling />
      <GeneratedPortfolio />
      <InteractiveFeatures />
      <QuoteFlow />
      <Footer />
    </div>
  );
}
