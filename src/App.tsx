import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { Storytelling } from './components/Storytelling';
import { GeneratedPortfolio } from './components/GeneratedPortfolio';
import { InteractiveFeatures } from './components/InteractiveFeatures';
import { Testimonials } from './components/Testimonials';
import { QuoteFlow } from './components/QuoteFlow';
import { Footer } from './components/Footer';
import { FAQ } from './pages/FAQ';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <TrustBanner />
    <Storytelling />
    <GeneratedPortfolio />
    <InteractiveFeatures />
    <Testimonials />
    <QuoteFlow />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="min-h-screen bg-[#F5F4F0] text-[#1C1C1A] font-sans overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
