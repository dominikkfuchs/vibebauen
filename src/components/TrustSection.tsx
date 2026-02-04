'use client';

export default function TrustSection() {
    return (
        <section id="why-de" className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Trust Block */}
                <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-[40px] blur-3xl" />

                    <div className="relative bg-white rounded-[32px] border border-accent-primary/10 p-12 lg:p-16 shadow-xl">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Side - Content */}
                            <div>
                                <span className="badge badge-gradient mb-6">Warum .de?</span>

                                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                    Wo deutsche <br />
                                    <span className="text-gradient">Ingenieurskunst</span><br />
                                    auf AI-Design trifft.
                                </h2>

                                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                    VibeBauen.de ist nicht einfach ein Kurs — es ist die erste deutschsprachige
                                    Akademie für Designer, die <strong className="text-text-primary">funktionale Software materialisieren</strong> wollen.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: '🇩🇪',
                                            title: 'Deutsch gedacht, deutsch gemacht',
                                            desc: 'Inhalte von deutschen Designern für den DACH-Markt'
                                        },
                                        {
                                            icon: '⚙️',
                                            title: 'German Engineering Mindset',
                                            desc: 'Präzision, Qualität und systematisches Denken'
                                        },
                                        {
                                            icon: '🛡️',
                                            title: 'DSGVO & Datenschutz',
                                            desc: 'Tools und Methoden, die europäische Standards erfüllen'
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-bg-secondary/50 border border-accent-primary/5 hover:border-accent-primary/20 transition-colors">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <div className="font-semibold text-text-primary">{item.title}</div>
                                                <div className="text-sm text-text-secondary">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Visual */}
                            <div className="relative">
                                {/* Abstract visual representation */}
                                <div className="relative aspect-square max-w-md mx-auto">
                                    {/* Outer ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-primary/20 animate-spin" style={{ animationDuration: '30s' }} />

                                    {/* Middle ring */}
                                    <div className="absolute inset-8 rounded-full border-2 border-dashed border-accent-secondary/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

                                    {/* Center content */}
                                    <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-2xl">
                                        <div className="text-center text-white">
                                            <div className="text-6xl font-bold mb-2">.de</div>
                                            <div className="text-sm opacity-80">VibeBauen</div>
                                        </div>
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white border border-accent-primary/20 shadow-lg text-sm font-medium animate-float">
                                        🎨 Design
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-full bg-white border border-accent-primary/20 shadow-lg text-sm font-medium animate-float" style={{ animationDelay: '-2s' }}>
                                        ⚡ Funktional
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white border border-accent-primary/20 shadow-lg text-sm font-medium animate-float" style={{ animationDelay: '-1s' }}>
                                        🤖 KI-gestützt
                                    </div>
                                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white border border-accent-primary/20 shadow-lg text-sm font-medium animate-float" style={{ animationDelay: '-3s' }}>
                                        🇩🇪 DACH
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-16 pt-12 border-t border-accent-primary/10">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                {[
                                    { value: '500+', label: 'Designer in der Community' },
                                    { value: '14', label: 'Wochen zum Ziel' },
                                    { value: '100%', label: 'Deutschsprachig' },
                                    { value: '4.9★', label: 'Bewertung' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                                        <div className="text-sm text-text-secondary">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools Marquee */}
                <div className="mt-20">
                    <div className="text-center mb-8">
                        <span className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
                            Die Tools, die du meistern wirst
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {['Cursor', 'v0', 'Lovable', 'Claude', 'Supabase', 'Vercel', 'Figma', 'Framer'].map((tool, i) => (
                            <div
                                key={i}
                                className="px-6 py-4 rounded-2xl bg-white border border-accent-primary/10 shadow-sm hover:shadow-md hover:border-accent-primary/30 transition-all cursor-default"
                            >
                                <span className="text-lg font-semibold text-text-primary">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
