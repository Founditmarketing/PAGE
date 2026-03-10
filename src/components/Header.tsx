import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'About', href: '#about' },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1C1A]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleScrollTo(e, '#home')}
                    className="font-serif text-2xl text-white z-50 relative tracking-wide"
                >
                    Page Concrete
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-white/80 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#quote"
                        onClick={(e) => handleScrollTo(e, '#quote')}
                        className="bg-[#B8735C] hover:bg-[#9A5E4A] text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-semibold transition-all shadow-md"
                    >
                        Get a Quote
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#1C1C1A] z-40 flex items-center justify-center flex-col gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-white text-3xl font-serif"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#quote"
                            onClick={(e) => handleScrollTo(e, '#quote')}
                            className="mt-6 bg-[#B8735C] text-white px-10 py-4 rounded-full text-lg uppercase tracking-wider font-semibold shadow-lg"
                        >
                            Get a Quote
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
