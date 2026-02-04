'use client';

import { useState } from 'react';
import PaymentModal from '@/components/PaymentModal';

export default function JavaScriptKurs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const courseTitle = "JavaScript Bootcamp";
    const coursePrice = 99;

    const curriculum = [
        { module: 1, title: "JavaScript Grundlagen", lessons: ["Variablen & Datentypen", "Operatoren", "String-Methoden"] },
        { module: 2, title: "Kontrollfluss", lessons: ["If/Else & Switch", "For & While Loops", "Logische Ausdrücke"] },
        { module: 3, title: "Funktionen", lessons: ["Funktionsdeklarationen", "Arrow Functions", "Closures"] },
        { module: 4, title: "Arrays & Objekte", lessons: ["Array-Methoden (map, filter, reduce)", "Objekte verstehen", "Destructuring"] },
        { module: 5, title: "DOM Manipulation", lessons: ["Elemente auswählen", "Events verstehen", "Dynamische UIs bauen"] },
        { module: 6, title: "Asynchrones JavaScript", lessons: ["Callbacks", "Promises", "Async/Await"] },
        { module: 7, title: "APIs & Fetch", lessons: ["HTTP verstehen", "Fetch API nutzen", "JSON verarbeiten"] },
        { module: 8, title: "Moderne Tooling", lessons: ["NPM & Packages", "ES Modules", "Bundler Basics"] },
        { module: 9, title: "Abschlussprojekt", lessons: ["Interaktive Web-App planen", "Features umsetzen", "Deployment"] },
    ];

    return (
        <>
            <div className="bg-white">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-slate-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="triangles" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <polygon points="5,0 10,10 0,10" fill="black" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#triangles)" />
                        </svg>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-slate-900 text-yellow-400 text-sm font-bold px-3 py-1 rounded-full">⚡ JS</span>
                                    <span className="bg-white/30 backdrop-blur-sm text-slate-900 text-sm font-bold px-3 py-1 rounded-full">Mittelstufe</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{courseTitle}</h1>
                                <p className="text-xl md:text-2xl text-slate-800 mb-8 leading-relaxed">
                                    Die Sprache des Webs meistern. Baue interaktive Apps, die im Browser laufen.
                                </p>
                                <div className="flex flex-wrap items-center gap-6 text-slate-700">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>18+ Stunden Video</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>9 Module</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                        <span>Zertifikat</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex-shrink-0">
                                <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl w-full md:w-80">
                                    <div className="text-center mb-6">
                                        <span className="text-5xl font-bold text-brand-navy">€{coursePrice}</span>
                                        <span className="text-slate-500 ml-1">einmalig</span>
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full bg-slate-900 text-yellow-400 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl mb-4"
                                    >
                                        Jetzt starten
                                    </button>
                                    <p className="text-center text-sm text-slate-500">30 Tage Geld-zurück-Garantie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What You'll Learn */}
                <div className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Was du lernen wirst</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "JavaScript Syntax & Best Practices",
                                "DOM-Manipulation & Events",
                                "Asynchrone Programmierung",
                                "Moderne ES6+ Features",
                                "APIs konsumieren & Daten anzeigen",
                                "Interaktive Web-Apps bauen"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Curriculum */}
                <div className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">Kursinhalt</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">9 Module mit über 70 Lektionen. Von den Grundlagen bis zum fertigen Projekt.</p>
                        <div className="space-y-4">
                            {curriculum.map((mod) => (
                                <div key={mod.module} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                    <div className="p-5 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="w-10 h-10 bg-yellow-500 text-slate-900 rounded-lg flex items-center justify-center font-bold">{mod.module}</span>
                                            <h3 className="font-bold text-brand-navy">{mod.title}</h3>
                                        </div>
                                        <span className="text-sm text-slate-500">{mod.lessons.length} Lektionen</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="py-20 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Werde JavaScript-Profi!</h2>
                        <p className="text-xl text-slate-400 mb-10">Erstelle dynamische Websites und Apps, die Nutzer begeistern.</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Jetzt für €{coursePrice} starten
                        </button>
                    </div>
                </div>
            </div>

            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle={courseTitle}
                price={coursePrice}
            />
        </>
    );
}
