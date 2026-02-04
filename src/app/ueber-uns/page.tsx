import Image from 'next/image';

export default function UeberUns() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative py-24 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Unsere Mission: <span className="text-brand-teal">Einfach. Klar. Aha!</span>
                    </h1>
                    <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                        Wir demokratisieren das Programmieren. Weg mit elitärem Jargon, her mit verständlicher Praxis.
                        Wir glauben, dass jeder Coden lernen kann – mit der richtigen Anleitung.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Maximale Praxisnähe</h3>
                            <p className="text-slate-600">Keine langweilige Theorie. Bei uns baust du vom ersten Tag an echte Projekte, die du vorzeigen kannst.</p>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Didaktische Qualität</h3>
                            <p className="text-slate-600">Unsere Kurse werden von Experten entwickelt und didaktisch so aufbereitet, dass Wissen hängen bleibt.</p>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Starke Community</h3>
                            <p className="text-slate-600">Lerne nicht allein. Tausche dich mit Tausenden anderen Lernenden aus und wachse gemeinsam.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story/Team Section */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-navy to-brand-teal shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Abstract decoration instead of image for now */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
                                <svg className="w-24 h-24 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                <span className="text-3xl font-bold tracking-tight">Code is Art.</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-brand-teal font-bold uppercase tracking-wider text-sm">Über Uns</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-6">Vom Frust zur Leidenschaft</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-4">
                                AhaKurs wurde 2024 gegründet, weil wir frustriert waren von veralteten, trockenen Tutorials, die mehr Fragen aufwerfen als beantworten.
                            </p>
                            <p className="mb-4">
                                Wir sind ein Team aus Entwicklern, Pädagogen und Designern, die ein gemeinsames Ziel haben: <strong>Bildung zugänglich machen.</strong>
                            </p>
                            <p>
                                Heute lernen bereits über 10.000 Menschen mit uns. Wir sind stolz darauf, Teil ihrer Reise zu sein – vom ersten "Hello World" bis zum ersten Job.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
