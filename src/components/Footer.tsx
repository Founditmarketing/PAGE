import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#1C1C1A] text-white pt-20 pb-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl text-white">Page Concrete</h2>
                        <p className="text-white/60 font-light leading-relaxed text-sm pr-4">
                            North Carolina's premier architectural concrete artisans. Shaping legacies one pour at a time through precise craftsmanship and unparalleled vision.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#B8735C] hover:border-[#B8735C] transition-all group">
                                <Instagram size={18} className="text-white/60 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#B8735C] hover:border-[#B8735C] transition-all group">
                                <Facebook size={18} className="text-white/60 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-[#B8735C] mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><a href="/#portfolio" className="hover:text-white transition-colors">Our Portfolio</a></li>
                            <li><a href="/#services" className="hover:text-white transition-colors">Residential Services</a></li>
                            <li><a href="/#services" className="hover:text-white transition-colors">Commercial Foundations</a></li>
                            <li><a href="/faq" className="hover:text-white transition-colors">FAQ & Knowledge Base</a></li>
                            <li><a href="/#about" className="hover:text-white transition-colors">About Our Craft</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-[#B8735C] mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#B8735C] shrink-0 mt-0.5" />
                                <span>123 Artisan Way<br />Charlotte, NC 28202</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#B8735C] shrink-0" />
                                <span>(555) 704-8902</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#B8735C] shrink-0" />
                                <span>quotes@pageconcrete.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="text-[#B8735C] shrink-0" />
                                <span>Mon-Fri: 7:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-[#B8735C] mb-6">Join Our Newsletter</h3>
                        <p className="text-white/60 text-sm mb-4 font-light leading-relaxed">
                            Get seasonal maintenance tips and see our latest luxury projects. We never spam.
                        </p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8735C] text-white placeholder:text-white/30"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#B8735C] flex items-center justify-center hover:bg-[#9A5E4A] transition-colors"
                                aria-label="Subscribe"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>© {new Date().getFullYear()} Page Concrete NC. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contractor License #847291</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
