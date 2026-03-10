import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const GeneratedPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const portfolio = [
        {
            title: "Ashlar Slate Patio",
            img: "/images/port_ashlar.png",
            desc: "Warm terracotta and charcoal gray tones in a classic seamless slate texture."
        },
        {
            title: "Cobblestone Driveway",
            img: "/images/port_cobble.png",
            desc: "Rich earthy brown and gray colors configured in a wide European cobblestone pattern."
        },
        {
            title: "Wood-Plank Pool Deck",
            img: "https://images.unsplash.com/photo-1584622781864-1e089a80e466?q=80&w=2070&auto=format&fit=crop",
            desc: "Weathered wood grain texture permanently stamped into structural concrete."
        }
    ];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#B8735C] uppercase tracking-widest text-sm font-semibold mb-4 block">Bespoke Finishes</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Signature Concrete Textures</h2>
                <p className="text-[#1C1C1A]/70 font-light text-lg">
                    Explore our most popular architectural finishes, curated specifically to elevate modern and traditional home exteriors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolio.map((item, i) => (
                    <motion.div
                        key={i}
                        className="group relative rounded-3xl overflow-hidden bg-gray-100 aspect-square shadow-lg cursor-pointer"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-white font-serif text-2xl mb-2">{item.title}</h3>
                            <p className="text-white/70 text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
