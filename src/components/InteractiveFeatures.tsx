import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, SlidersHorizontal, Image as ImageIcon, Calculator } from 'lucide-react';

export const InteractiveFeatures = () => {
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
