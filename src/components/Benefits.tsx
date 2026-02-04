export default function Benefits() {
    return (
        <section id="features" className="py-16 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">Warum AhaKurs?</h2>
                    <p className="mt-4 text-lg text-slate-600">Wir konzentrieren uns auf das Wesentliche, damit du schneller Ziele erreichst.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Praxis statt Theorie</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Kein stundenlanges "Büffeln". Wir bauen von Anfang an echte Projekte, die du für dein Portfolio nutzen kannst.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Lebenslanger Zugriff</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Lerne in deinem eigenen Tempo. Einmal gekauft, gehören die Kursinhalte, Updates inklusive, für immer dir.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Zertifikat inklusive</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Zeige was du kannst. Nach Abschluss jedes Kurses erhältst du ein persönliches Zertifikat für deinen Lebenslauf.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
