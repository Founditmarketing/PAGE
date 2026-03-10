import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-[#1C1C1A] text-white/60 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-serif text-2xl text-white">Page Concrete</div>
                <div className="flex gap-8 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <div className="text-sm">
                    © 2026 Page Concrete NC. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
