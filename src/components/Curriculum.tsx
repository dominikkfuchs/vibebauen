'use client';

export default function Curriculum() {
    const modules = [
        {
            number: '01',
            title: 'Die Vibe-Grundlagen',
            subtitle: 'Dein Mindset-Shift',
            description: 'Verstehe, wie KI-gestützte Tools deine Design-Intention in Code übersetzen. Lerne die Sprache der Prompts.',
            tools: ['Cursor', 'Claude'],
            duration: '2 Wochen',
            color: 'from-violet-500 to-purple-600',
        },
        {
            number: '02',
            title: 'Vom Vibe zum Prototyp',
            subtitle: 'Interface-Materialisierung',
            description: 'Verwandle Figma-Konzepte in funktionale React-Komponenten. Zero-to-Hero mit v0 und Lovable.',
            tools: ['v0', 'Lovable', 'Figma'],
            duration: '3 Wochen',
            color: 'from-indigo-500 to-blue-600',
        },
        {
            number: '03',
            title: 'Logik verstehen, nicht schreiben',
            subtitle: 'Backend-Basics für Designer',
            description: 'APIs, Datenbanken und Authentifizierung — erklärt für visuelle Denker. Supabase macht\'s möglich.',
            tools: ['Supabase', 'Cursor'],
            duration: '3 Wochen',
            color: 'from-blue-500 to-cyan-600',
        },
        {
            number: '04',
            title: 'Echtzeit-Iteration',
            subtitle: 'Deploy & Iterate',
            description: 'Ship fast, learn faster. Vercel-Deployment, Analytics und Nutzerfeedback in deinem Workflow.',
            tools: ['Vercel', 'Analytics'],
            duration: '2 Wochen',
            color: 'from-cyan-500 to-teal-600',
        },
        {
            number: '05',
            title: 'Das vollständige Produkt',
            subtitle: 'Capstone-Projekt',
            description: 'Baue eine vollständige SaaS-App von der Idee bis zum Launch. Dein Portfolio-Stück.',
            tools: ['Alle Tools'],
            duration: '4 Wochen',
            color: 'from-teal-500 to-emerald-600',
        },
    ];

    return (
        <section id="curriculum" className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-pattern" />
            <div className="blob w-[400px] h-[400px] bg-accent-primary/10 top-0 right-0" />
            <div className="blob w-[300px] h-[300px] bg-accent-tertiary/10 bottom-0 left-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="badge mb-6">Das Curriculum</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                        5 Meilensteine zur <br className="hidden sm:block" />
                        <span className="text-gradient">Design-Autonomie</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Keine Syntax pauken. Keine Theorie-Wüste. Nur kreative Meilensteine,
                        die dich zum funktionalen Designer machen.
                    </p>
                </div>

                {/* Modules Timeline */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-accent-secondary/50 to-accent-tertiary/50 hidden md:block" />

                    <div className="space-y-12 lg:space-y-16">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary ring-4 ring-bg-secondary hidden md:block" />

                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                                    <div className="card-premium group hover:border-accent-primary/30">
                                        {/* Module Header */}
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                                {module.number}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-accent-primary mb-1">{module.subtitle}</div>
                                                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                                                    {module.title}
                                                </h3>
                                            </div>
                                            <div className="flex-shrink-0 px-3 py-1 rounded-full bg-bg-accent text-sm font-medium text-text-secondary">
                                                {module.duration}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-secondary leading-relaxed mb-6">
                                            {module.description}
                                        </p>

                                        {/* Tools */}
                                        <div className="flex flex-wrap gap-2">
                                            {module.tools.map((tool, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-accent-primary/10 text-sm font-medium text-text-secondary hover:border-accent-primary/30 hover:text-accent-primary transition-colors cursor-default"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-accent-tertiary" />
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden lg:block" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-8 rounded-3xl bg-white border border-accent-primary/10 shadow-lg">
                        <div className="text-left">
                            <div className="text-sm font-medium text-accent-primary mb-1">Gesamt: 14 Wochen</div>
                            <div className="text-2xl font-bold text-text-primary">Von Designer zu funktionalem Creator</div>
                        </div>
                        <a
                            href="#pricing"
                            className="btn-primary whitespace-nowrap"
                        >
                            Jetzt Materialisieren
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
