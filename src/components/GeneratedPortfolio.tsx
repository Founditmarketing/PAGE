import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { ai } from '../lib/gemini';

export const GeneratedPortfolio = () => {
    const [images, setImages] = useState<Record<number, string>>({});
    const [loading, setLoading] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });
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
                setLoading({ 0: false, 1: false, 2: false });
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
