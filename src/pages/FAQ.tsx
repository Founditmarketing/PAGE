import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "How long until I can drive on my new concrete driveway?",
            a: "For standard vehicles, we recommend waiting at least 7 days before driving on a freshly poured concrete driveway. You can walk on it after 24 to 48 hours."
        },
        {
            q: "Does stamped concrete get slippery when wet?",
            a: "It can, but we mix a specialized slip-resistant additive into the final sealer to safely provide traction around pool decks and patios."
        },
        {
            q: "Do you handle the city permits for the concrete work?",
            a: "Yes. From pulling the mandatory building permits to scheduling the rough and final inspections, our team handles all compliance for you."
        },
        {
            q: "How long does a typical patio installation take?",
            a: "Most residential stamped patios take about 3 to 5 days from excavation and forming to pouring and the final seal coat, depending on the weather conditions."
        },
        {
            q: "How often do I need to reseal stamped concrete?",
            a: "To maintain the rich color and protect the surface, we recommend having your stamped concrete professionally resealed every 2 to 3 years."
        }
    ];

    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-[70vh]">
            <div className="text-center mb-16">
                <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">Knowledge Base</span>
                <h1 className="font-serif text-4xl md:text-5xl mb-6">Frequently Asked Questions</h1>
                <p className="text-[#1C1C1A]/70 font-light text-lg">
                    Everything you need to know about our processes, timelines, and maintaining your investment.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-black/10 rounded-2xl overflow-hidden bg-white">
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-medium pr-8">{faq.q}</span>
                            <span className="text-[#B8735C] shrink-0">
                                {open === i ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>
                        <AnimatePresence>
                            {open === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-5 text-[#1C1C1A]/70 font-light text-sm leading-relaxed"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};
