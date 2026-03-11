import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials = () => {
    const reviews = [
        {
            name: "Mike T.",
            text: "The crew was on time, professional, and the new driveway looks incredible. Couldn't ask for a better job.",
            date: "2 weeks ago"
        },
        {
            name: "Sarah Jenkins",
            text: "We wanted a stamped patio for the backyard and they delivered beyond our expectations. Very clean work.",
            date: "1 month ago"
        },
        {
            name: "David R.",
            text: "Honest pricing and solid craftsmanship. They poured a new foundation for our garage and it's perfect.",
            date: "3 months ago"
        }
    ];

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">Trusted by Homeowners</h2>
                <p className="text-[#1C1C1A]/60 font-light text-sm md:text-base">Real reviews from our recent concrete projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((rev, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-black/5"
                    >
                        <div className="flex text-[#B8735C] mb-3">
                            {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-[#1C1C1A]/80 font-light text-sm italic mb-4">"{rev.text}"</p>
                        <div className="flex justify-between items-center text-xs text-[#1C1C1A]/50 mt-auto">
                            <span className="font-semibold text-[#1C1C1A]">{rev.name}</span>
                            <span>{rev.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
