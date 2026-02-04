'use client';

import { useState } from 'react';

export default function Kontakt() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API
    };

    return (
        <div className="py-12 lg:py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-brand-navy mb-4">Schreib uns eine Nachricht</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Du hast Fragen zu einem Kurs oder brauchst Unterstützung? Unser Team ist für dich da.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Email Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy">E-Mail</h3>
                                <p className="text-slate-500 text-sm mb-1">Für allgemeine Anfragen</p>
                                <a href="mailto:info@ahakurs.de" className="text-brand-teal font-medium hover:underline">info@ahakurs.de</a>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy">Support</h3>
                                <p className="text-slate-500 text-sm mb-1">Technische Hilfe</p>
                                <a href="mailto:support@ahakurs.de" className="text-brand-teal font-medium hover:underline">support@ahakurs.de</a>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy">Büro</h3>
                                <p className="text-slate-500 text-sm">
                                    AhaKurs GmbH<br />
                                    Musterstraße 123<br />
                                    12345 Berlin
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                            {submitted ? (
                                <div className="bg-green-50 border border-green-100 text-green-700 p-8 rounded-xl text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Nachricht gesendet!</h3>
                                    <p className="text-lg mb-6">Wir haben deine Nachricht erhalten und melden uns in Kürze bei dir.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-green-800 font-semibold hover:underline">Neue Nachricht schreiben</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Dein Name</label>
                                            <input required type="text" id="name" className="w-full rounded-xl border-slate-200 bg-slate-50 p-3 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20 transition-all" placeholder="Max Mustermann" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Deine E-Mail</label>
                                            <input required type="email" id="email" className="w-full rounded-xl border-slate-200 bg-slate-50 p-3 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20 transition-all" placeholder="max@beispiel.de" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Betreff</label>
                                        <select id="subject" className="w-full rounded-xl border-slate-200 bg-slate-50 p-3 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20 transition-all">
                                            <option>Allgemeine Anfrage</option>
                                            <option>Support / Technische Hilfe</option>
                                            <option>Rechnung & Zahlung</option>
                                            <option>Partnerschaft</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Nachricht</label>
                                        <textarea required id="message" rows={6} className="w-full rounded-xl border-slate-200 bg-slate-50 p-3 shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal/20 transition-all" placeholder="Wie können wir dir helfen?"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-brand-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                        Nachricht absenden
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
