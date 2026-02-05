'use client';

import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="blob w-[400px] h-[400px] bg-red-500/10 -top-20 -right-20" />
            <div className="blob w-[300px] h-[300px] bg-accent-primary/10 -bottom-20 -left-20" />

            <div className="relative z-10 max-w-xl w-full text-center">
                <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                    Zahlung <span className="text-red-500">abgebrochen</span>
                </h1>

                <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
                    Der Vorgang wurde abgebrochen. Es wurde keine Zahlung vorgenommen.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="btn-primary-outline inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Zurück zur Startseite</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
