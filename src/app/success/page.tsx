'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
    const searchParams = useSearchParams();
    const course = searchParams.get('course') || 'Dein Kurs';
    const method = searchParams.get('method');

    const getMethodText = () => {
        switch (method) {
            case 'invoice': return 'Wir haben dir die Rechnung per E-Mail gesendet.';
            case 'paypal': return 'Deine PayPal-Zahlung war erfolgreich.';
            case 'klarna': return 'Deine Klarna-Zahlung wird verarbeitet.';
            case 'card': return 'Deine Kreditkarte wurde belastet.';
            default: return 'Wir haben dir eine Bestätigungs-E-Mail gesendet.';
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="bg-green-50 rounded-full p-6 mb-6 animate-bounce">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center">Vielen Dank!</h1>
            <p className="text-xl text-brand-teal font-semibold mb-2">{course}</p>

            <div className="bg-slate-50 p-6 rounded-xl max-w-lg mb-8 text-center">
                <p className="text-slate-600 text-lg mb-2">
                    {getMethodText()}
                </p>
                <p className="text-slate-500 text-sm">
                    Deine Zugangsdaten erhältst du in wenigen Minuten per E-Mail.
                </p>
            </div>

            <Link href="/" className="bg-brand-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg">
                Zurück zur Startseite
            </Link>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Laden...</div>}>
            <SuccessContent />
        </Suspense>
    )
}
