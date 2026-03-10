import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Star, MapPin, ArrowRight, CheckCircle2, SlidersHorizontal, Image as ImageIcon, Calculator, Play, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const Hero = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateHero = async () => {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: "Photorealistic architectural photography, wide angle, luxury modern home exterior at golden hour, featuring a sweeping premium stamped concrete driveway in a seamless slate pattern. High-end landscaping, warm lighting." }] },
          config: { imageConfig: { aspectRatio: "16:9" } }
        });
        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part?.inlineData) {
          setBgImage(`data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`);
        }
      } catch (err) {
        console.error("Hero image generation failed", err);
        setBgImage("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop");
      } finally {
        setLoading(false);
      }
    };
    generateHero();
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#1C1C1A]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin text-[#B8735C]" />
          </div>
        ) : (
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={bgImage!} 
            alt="Modern concrete architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#F5F4F0]/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.2em] text-sm font-semibold text-white/90 mb-6 block">
            Page Concrete • North Carolina
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8 font-light tracking-tight">
            Foundations of <span className="italic">Legacy.</span><br />
            Crafted for <span className="italic">Tomorrow.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            Elevating residential and commercial spaces with architectural concrete. 
            We don't just pour concrete; we sculpt the canvas of your daily life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#B8735C] hover:bg-[#9A5E4A] text-white px-8 py-4 rounded-full transition-all flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              Start Your Transformation <ArrowRight size={16} />
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full transition-all flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              <Play size={16} fill="currentColor" /> Watch Our Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBanner = () => {
  return (
    <div className="bg-[#1C1C1A] text-white py-8 relative z-20 -mt-12 mx-4 md:mx-12 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-[#B8735C] flex items-center justify-center">
            <Shield className="text-[#B8735C]" size={24} />
          </div>
          <div>
            <p className="font-serif text-2xl">25+ Years</p>
            <p className="text-xs uppercase tracking-widest text-white/60">Of Master Craftsmanship</p>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10"></div>
        
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#1C1C1A]" alt="Client" />
            ))}
          </div>
          <div>
            <div className="flex text-[#B8735C]">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">4.8/5 Average Rating</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/10"></div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-[#B8735C] flex items-center justify-center">
            <MapPin className="text-[#B8735C]" size={24} />
          </div>
          <div>
            <p className="font-serif text-2xl">North Carolina</p>
            <p className="text-xs uppercase tracking-widest text-white/60">Premier Concrete Artisans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Storytelling = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateStoryImage = async () => {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: "Photorealistic architectural photography, luxury backyard patio featuring high-end decorative stamped concrete. Seamless texture, warm earthy tones, outdoor kitchen in background, sunny day." }] },
          config: { imageConfig: { aspectRatio: "3:4" } }
        });
        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part?.inlineData) {
          setImage(`data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`);
        }
      } catch (err) {
        console.error("Story image generation failed", err);
        setImage("https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop");
      } finally {
        setLoading(false);
      }
    };
    generateStoryImage();
  }, []);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center">
            {loading ? (
              <Loader2 className="w-8 h-8 animate-spin text-[#B8735C]" />
            ) : (
              <img 
                src={image!} 
                alt="Architectural concrete patio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <p className="font-serif text-xl italic mb-2">"They didn't just pour a driveway, they elevated our entire property."</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B8735C]">— The Harrison Family</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">The Signature Transformation</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8">
            We don't just pour concrete. We <span className="italic text-[#8E8D8A]">sculpt</span> the canvas of your daily life.
          </h2>
          <p className="text-lg text-[#1C1C1A]/70 mb-8 font-light leading-relaxed">
            For over 25 years, Page Concrete has moved beyond the transactional "hire us for concrete" approach. We partner with homeowners and commercial developers to create structural art. 
          </p>
          <p className="text-lg text-[#1C1C1A]/70 mb-10 font-light leading-relaxed">
            From seamless stamped patios that mimic natural stone to robust, precision-engineered commercial foundations, our work is designed to outlast trends and weather generations.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Architectural Stamped & Decorative Concrete', 'High-Load Commercial Foundations', 'Premium Residential Driveways & Patios'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#B8735C]" size={20} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="border-b-2 border-[#1C1C1A] pb-1 font-semibold uppercase tracking-wider text-sm hover:text-[#B8735C] hover:border-[#B8735C] transition-colors">
            Explore Our Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const GeneratedPortfolio = () => {
  const [images, setImages] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({0: true, 1: true, 2: true});
  const [error, setError] = useState<string | null>(null);

  const prompts = [
    {
      title: "Ashlar Slate Patio",
      prompt: "Photorealistic architectural photography of a luxury backyard patio featuring stamped concrete in an Ashlar slate pattern. Warm terracotta and charcoal gray tones. Modern outdoor furniture, sunny day, high-end landscaping."
    },
    {
      title: "Cobblestone Driveway",
      prompt: "Photorealistic architectural photography of a premium wide residential driveway made of decorative stamped concrete. Cobblestone pattern with rich earthy brown and gray colors. Leading up to a beautiful modern craftsman home."
    },
    {
      title: "Wood-Plank Pool Deck",
      prompt: "Photorealistic architectural photography of a luxury pool deck featuring stamped concrete designed to look like weathered wood planks. Realistic wood grain texture in concrete, warm brown tones, crystal clear pool water, sunny."
    }
  ];

  useEffect(() => {
    const generateImages = async () => {
      try {
        for (let i = 0; i < prompts.length; i++) {
          setLoading(prev => ({ ...prev, [i]: true }));
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: prompts[i].prompt }],
            },
          });
          
          const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
          if (part?.inlineData) {
            const imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            setImages(prev => ({ ...prev, [i]: imageUrl }));
          }
          setLoading(prev => ({ ...prev, [i]: false }));
        }
      } catch (err) {
        console.error("Error generating images:", err);
        setError("Failed to generate some images. Please check API key or rate limits.");
        setLoading({0: false, 1: false, 2: false});
      }
    };

    generateImages();
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">AI Concept Studio</span>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Bespoke Stamped Concrete Concepts</h2>
        <p className="text-[#1C1C1A]/70 font-light text-lg">
          We've generated these unique stamped concrete styles in real-time using AI to showcase the versatility of our premium finishes.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center mb-8">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prompts.map((p, i) => (
          <div key={i} className="group relative rounded-3xl overflow-hidden bg-gray-100 aspect-square shadow-lg">
            {loading[i] ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#B8735C]">
                <Loader2 className="w-8 h-8 animate-spin mb-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Generating Concept...</span>
              </div>
            ) : images[i] ? (
              <img 
                src={images[i]} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Failed to load
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <h3 className="text-white font-serif text-2xl">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const InteractiveFeatures = () => {
  const features = [
    {
      icon: <SlidersHorizontal size={32} className="text-[#B8735C]" />,
      title: "Before & After Sliders",
      desc: "Drag the slider to see raw dirt transform into a luxury stamped patio in real-time."
    },
    {
      icon: <ImageIcon size={32} className="text-[#B8735C]" />,
      title: "Pattern Visualizer",
      desc: "Upload a photo of your yard and overlay our top 10 stamped concrete textures instantly."
    },
    {
      icon: <Calculator size={32} className="text-[#B8735C]" />,
      title: "Driveway ROI Calculator",
      desc: "Calculate how a premium concrete driveway increases your home's appraisal value."
    }
  ];

  return (
    <section className="py-24 bg-[#1C1C1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">Next-Gen Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Envision Your Space Before We Pour a Single Drop.</h2>
          <p className="text-white/70 font-light text-lg">
            We utilize 21st-century digital tools to ensure you have total confidence in your investment. Try our interactive planning suite below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
              <p className="text-white/60 font-light leading-relaxed mb-8">{f.desc}</p>
              <button className="text-sm uppercase tracking-wider font-semibold text-[#B8735C] flex items-center gap-2 hover:text-white transition-colors">
                Try it now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ type: '', scope: '', timeline: '' });

  const handleSelect = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    if (step < 3) setStep(step + 1);
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Frictionless Instant Quote</h2>
        <p className="text-[#1C1C1A]/60">Skip the endless phone tag. Tell us what you need in 3 clicks.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-black/5 overflow-hidden">
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-[#B8735C]' : 'bg-gray-100'}`} />
          ))}
        </div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0"
              >
                <h3 className="font-serif text-3xl mb-8 text-center">What type of project is this?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button onClick={() => handleSelect('type', 'Residential')} className="p-8 border-2 border-gray-100 rounded-2xl hover:border-[#B8735C] hover:bg-[#B8735C]/5 transition-all group text-left">
                    <h4 className="font-serif text-2xl mb-2 group-hover:text-[#B8735C]">Residential</h4>
                    <p className="text-gray-500 text-sm">Driveways, patios, pool decks, and home foundations.</p>
                  </button>
                  <button onClick={() => handleSelect('type', 'Commercial')} className="p-8 border-2 border-gray-100 rounded-2xl hover:border-[#B8735C] hover:bg-[#B8735C]/5 transition-all group text-left">
                    <h4 className="font-serif text-2xl mb-2 group-hover:text-[#B8735C]">Commercial</h4>
                    <p className="text-gray-500 text-sm">Parking lots, industrial floors, and structural concrete.</p>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0"
              >
                <h3 className="font-serif text-3xl mb-8 text-center">What is the primary scope?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {['Stamped / Decorative', 'Standard Driveway', 'Foundation / Slab', 'Walkway / Steps', 'Pool Deck', 'Other'].map(scope => (
                    <button key={scope} onClick={() => handleSelect('scope', scope)} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-[#B8735C] hover:bg-[#B8735C]/5 transition-all text-center font-medium">
                      {scope}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-8 text-sm text-gray-400 hover:text-black block mx-auto">← Back</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0"
              >
                <h3 className="font-serif text-3xl mb-8 text-center">Where should we send your estimate?</h3>
                <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Quote requested!"); setStep(1); }}>
                  <input type="text" placeholder="Full Name" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B8735C] focus:ring-1 focus:ring-[#B8735C]" />
                  <input type="email" placeholder="Email Address" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B8735C] focus:ring-1 focus:ring-[#B8735C]" />
                  <input type="tel" placeholder="Phone Number" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B8735C] focus:ring-1 focus:ring-[#B8735C]" />
                  <button type="submit" className="w-full bg-[#1C1C1A] text-white p-4 rounded-xl font-semibold uppercase tracking-wider hover:bg-[#B8735C] transition-colors mt-4">
                    Get My Instant Quote
                  </button>
                </form>
                <button onClick={() => setStep(2)} className="mt-8 text-sm text-gray-400 hover:text-black block mx-auto">← Back</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1A] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl text-white">Page Concrete</div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm">
          © 2026 Page Concrete NC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

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
