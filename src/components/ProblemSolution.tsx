'use client';

export default function ProblemSolution() {
    return (
        <section id="method" className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 grid-pattern opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="badge mb-6">Der Paradigmenwechsel</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                        Von der <span className="text-text-tertiary line-through">Übergabe</span> <br className="hidden sm:block" />
                        zur <span className="text-gradient">Materialisierung</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Schluss mit dem ewigen Warten auf Entwickler. Du bist der Creator.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* OLD WAY - Traditional Dev */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50" />
                        <div className="relative card-premium border-red-200/50 bg-white/80">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-red-100">
                                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-red-500 uppercase tracking-wider">Früher</div>
                                    <h3 className="text-2xl font-bold text-text-primary">Traditional Development</h3>
                                </div>
                            </div>

                            {/* Pain Points */}
                            <div className="space-y-5">
                                {[
                                    { icon: '📋', title: 'Statische Mockups', desc: 'Figma-Designs ohne Leben, die niemand testet' },
                                    { icon: '🔄', title: 'Lost in Translation', desc: 'Entwickler interpretieren deine Vision falsch' },
                                    { icon: '⏳', title: 'Wochen bis zum Feedback', desc: 'Endlose Sprint-Zyklen für simple Änderungen' },
                                    { icon: '💔', title: 'Kreativität erstickt', desc: 'Deine besten Ideen sterben in der Backlog' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100/50">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <div className="font-semibold text-text-primary">{item.title}</div>
                                            <div className="text-sm text-text-secondary">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Result */}
                            <div className="mt-8 p-4 rounded-xl bg-red-100/50 border border-red-200">
                                <div className="flex items-center gap-2 text-red-600 font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Ergebnis: Frustration & Abhängigkeit
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW WAY - Vibe Coding */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/30 to-accent-tertiary/30 rounded-3xl blur-xl" />
                        <div className="relative card-premium border-accent-primary/20 bg-white">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-accent-primary/10">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-accent-primary uppercase tracking-wider">Jetzt</div>
                                    <h3 className="text-2xl font-bold text-text-primary">Vibe Coding</h3>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-5">
                                {[
                                    { icon: '🎨', title: 'Funktionale Prototypen', desc: 'Echte Apps, die Nutzer sofort testen können' },
                                    { icon: '🧠', title: 'KI versteht dich', desc: 'Cursor, Lovable & v0 sprechen deine Sprache' },
                                    { icon: '⚡', title: 'Echtzeit-Iteration', desc: 'Von Idee zu Ergebnis in Minuten, nicht Monaten' },
                                    { icon: '🚀', title: 'Creative Flow', desc: 'Deine Vision wird direkt zur Realität' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/10 hover:border-accent-primary/30 transition-colors">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <div className="font-semibold text-text-primary">{item.title}</div>
                                            <div className="text-sm text-text-secondary">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Result */}
                            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-tertiary/10 border border-accent-primary/20">
                                <div className="flex items-center gap-2 text-accent-primary font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Ergebnis: Autonomie & Schöpferkraft
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-bg-secondary border border-accent-primary/10">
                        <div className="text-4xl">💡</div>
                        <p className="text-lg text-text-secondary text-left">
                            <strong className="text-text-primary">Du brauchst keine Entwickler mehr zu überzeugen.</strong><br />
                            Du materialisierst deine Vision selbst.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
