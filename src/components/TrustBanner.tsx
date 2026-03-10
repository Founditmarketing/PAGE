import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';

export const TrustBanner = () => {
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
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-[#1C1C1A]" alt="Client" />
                        ))}
                    </div>
                    <div>
                        <div className="flex text-[#B8735C]">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
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
