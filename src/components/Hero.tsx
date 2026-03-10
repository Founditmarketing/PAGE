import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Loader2 } from 'lucide-react';
import { ai } from '../lib/gemini';

export const Hero = () => {
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
