'use client';

import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="blob w-[600px] h-[600px] bg-accent-primary/20 -bottom-40 left-1/2 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/30 via-accent-secondary/30 to-accent-tertiary/30 rounded-[40px] blur-2xl" />

                    <div className="relative bg-gradient-to-br from-text-primary to-slate-900 rounded-[32px] p-12 lg:p-16 text-center overflow-hidden">
                        {/* Inner decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-tertiary/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
                                <span className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
                                <span className="text-sm font-medium text-white/80">Beginn jederzeit möglich</span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Bereit, deine Vision<br />
                                <span className="text-gradient">zu materialisieren?</span>
                            </h2>

                            {/* Subtext */}
                            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                                In 14 Wochen vom Designer zum funktionalen Creator.
                                Keine Syntax. Keine Entwickler-Abhängigkeit. Nur deine Vision, materialisiert.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <Link
                                    href="#curriculum"
                                    className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group"
                                >
                                    <span>Jetzt Materialisieren</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/kontakt"
                                    className="text-white/70 hover:text-white font-medium transition-colors underline underline-offset-4"
                                >
                                    Hast du Fragen?
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Lebenslanger Zugriff</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Exklusive Community</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>14-Tage Geld-zurück</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
