import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Waves, Layers, ShieldCheck } from 'lucide-react';

export const InteractiveFeatures = () => {
    const features = [
        {
            icon: <Layers size={32} className="text-[#B8735C]" />,
            title: "Stamped & Seamless",
            desc: "From Ashlar slate to wood plank, we replicate natural, high-end materials with the durability of engineered concrete."
        },
        {
            icon: <Waves size={32} className="text-[#B8735C]" />,
            title: "Custom Pool Decks",
            desc: "Slip-resistant, heat-reflective pool surrounds designed to withstand harsh weather and daily entertainment."
        },
        {
            icon: <ShieldCheck size={32} className="text-[#B8735C]" />,
            title: "Commercial Foundations",
            desc: "Heavy-duty load-bearing slabs and precision structural pours trusted by North Carolina's top builders."
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#1C1C1A] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">Our Expertise</span>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Mastering the Elements.</h2>
                    <p className="text-white/70 font-light text-lg">
                        We offer comprehensive concrete solutions tailored to exact specifications, whether you're elevating a residential backyard or laying the groundwork for commercial development.
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
                            <a href="#quote" className="text-sm uppercase tracking-wider font-semibold text-[#B8735C] flex items-center gap-2 hover:text-white transition-colors">
                                Request an Estimate <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
