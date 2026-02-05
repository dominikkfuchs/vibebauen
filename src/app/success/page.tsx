'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
    const searchParams = useSearchParams();
    const product = searchParams.get('product') || searchParams.get('course') || 'Dein Produkt';
    const method = searchParams.get('method');
    const sessionId = searchParams.get('session_id');
    const paymentIntent = searchParams.get('payment_intent');
    const redirectStatus = searchParams.get('redirect_status');

    const getMethodText = () => {
        if (redirectStatus === 'succeeded') {
            return 'Deine Zahlung wurde erfolgreich verarbeitet.';
        }

        switch (method) {
            case 'invoice': return 'Wir haben dir die Rechnung per E-Mail gesendet. Du hast 14 Tage Zeit für die Zahlung.';
            case 'paypal': return 'Deine PayPal-Zahlung war erfolgreich.';
            case 'klarna': return 'Deine Klarna-Zahlung wird verarbeitet.';
            case 'card': return 'Deine Zahlung wurde erfolgreich verarbeitet.';
            default: return 'Wir haben dir eine Bestätigungs-E-Mail gesendet.';
        }
    };

    return (
        <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-4 pt-28 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="blob w-[400px] h-[400px] bg-accent-tertiary/20 -top-20 -right-20" />
            <div className="blob w-[300px] h-[300px] bg-accent-primary/10 -bottom-20 -left-20" />

            <div className="relative z-10 max-w-xl w-full text-center">
                {/* Success Icon */}
                <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-tertiary to-accent-primary flex items-center justify-center animate-pulse-glow">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="absolute -inset-4 rounded-full bg-accent-tertiary/20 animate-ping" style={{ animationDuration: '2s' }} />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                    Deine Vision wird <span className="text-gradient">Realität</span>
                </h1>

                {/* Product Name */}
                <p className="text-xl font-semibold text-accent-primary mb-6">{decodeURIComponent(product)}</p>

                {/* Info Card */}
                <div className="card-premium mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-accent-tertiary/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-text-secondary text-lg">{getMethodText()}</p>
                    </div>
                    <p className="text-text-tertiary text-sm">
                        Deine Zugangsdaten zum Kursbereich erhältst du in wenigen Minuten per E-Mail.
                    </p>

                    {(sessionId || paymentIntent) && (
                        <div className="mt-4 pt-4 border-t border-accent-primary/10">
                            <p className="text-xs text-text-tertiary">
                                Transaktions-ID: <span className="font-mono">{(sessionId || paymentIntent)?.slice(0, 20)}...</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Next Steps */}
                <div className="bg-bg-secondary rounded-2xl p-6 mb-8 text-left">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                        <span className="text-xl">🚀</span> Deine nächsten Schritte
                    </h3>
                    <ul className="space-y-3">
                        {[
                            'Überprüfe deinen E-Mail-Posteingang',
                            'Klicke auf den Bestätigungslink',
                            'Starte mit Modul 1 des Curriculums',
                        ].map((step, i) => (
                            <li key={i} className="flex items-center gap-3 text-text-secondary">
                                <span className="w-6 h-6 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold flex items-center justify-center">
                                    {i + 1}
                                </span>
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA Button */}
                <Link
                    href="/"
                    className="btn-primary inline-flex items-center gap-2"
                >
                    <span>Zurück zur Startseite</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-accent-primary border-t-transparent rounded-full" />
            </div>
        }>
            <SuccessContent />
        </Suspense>
    )
}
