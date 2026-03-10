import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Storytelling = () => {
    return (
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200">
                        <img
                            src="/images/story_patio_bluecollar.png"
                            alt="Architectural concrete patio"
                            className="w-full h-full object-cover"
                        />
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
