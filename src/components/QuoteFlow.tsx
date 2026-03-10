import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const QuoteFlow = () => {
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
