import Link from 'next/link';

export default function Karriere() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="py-24 bg-gradient-to-b from-slate-50 to-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-brand-teal font-bold uppercase tracking-wider text-sm mb-4 block">Komm ins Team</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Gestalte die Zukunft der Bildung</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Wir bauen die beste Plattform für Coding-Education in Deutschland.
                        Schließ dich unserer Mission an, Technologie verständlich für alle zu machen.
                    </p>
                </div>
            </div>

            {/* Benefits */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Warum AhaKurs?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Remote First</h3>
                            <p className="text-slate-600">Arbeite von wo du willst. Wir vertrauen auf Ergebnisse, nicht auf Anwesenheit.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Bildungsbudget</h3>
                            <p className="text-slate-600">2.000€ jährlich für deine persönliche Weiterbildung. Bücher, Konferenzen, Kurse.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Echte Impact</h3>
                            <p className="text-slate-600">Hilf Tausenden Menschen, neue Fähigkeiten zu lernen und ihre Karriere zu starten.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Positions / Empty State */}
            <div className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Offene Stellen</h2>

                    <div className="bg-white border text-center border-slate-200 rounded-2xl p-12 shadow-sm">
                        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Aktuell sind wir vollzählig</h3>
                        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                            Im Moment sind alle Positionen besetzt. Aber wir wachsen schnell!
                            Sende uns gerne eine Initiativbewerbung und wir melden uns, wenn eine passende Stelle frei wird.
                        </p>
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl">
                            Initiativbewerbung senden
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
