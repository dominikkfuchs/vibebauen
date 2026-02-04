'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl border-b border-accent-primary/10 shadow-sm'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
                                V
                            </div>
                            <span className="text-xl font-bold tracking-tight text-text-primary">
                                Vibe<span className="text-gradient">Bauen</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#method"
                            className="text-text-secondary hover:text-accent-primary font-medium transition-colors relative group"
                        >
                            Die Methode
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
                        </Link>
                        <Link
                            href="#curriculum"
                            className="text-text-secondary hover:text-accent-primary font-medium transition-colors relative group"
                        >
                            Curriculum
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
                        </Link>
                        <Link
                            href="#why-de"
                            className="text-text-secondary hover:text-accent-primary font-medium transition-colors relative group"
                        >
                            Warum .de?
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
                        </Link>
                        <Link
                            href="#curriculum"
                            className="btn-primary px-6 py-3 text-sm"
                        >
                            Vision Materialisieren
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                            aria-label="Menü öffnen"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full transition-all duration-300 ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                <div className="bg-white/95 backdrop-blur-xl border-b border-accent-primary/10 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="#method"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Die Methode
                        </Link>
                        <Link
                            href="#curriculum"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Curriculum
                        </Link>
                        <Link
                            href="#why-de"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Warum .de?
                        </Link>
                        <div className="pt-4 px-2">
                            <Link
                                href="#curriculum"
                                className="btn-primary block w-full text-center py-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Vision Materialisieren
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
