import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="bg-red-50 rounded-full p-6 mb-6">
                <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center">Zahlung abgebrochen</h1>
            <p className="text-slate-600 text-lg mb-8 text-center max-w-lg">
                Der Vorgang wurde abgebrochen. Es wurde keine Zahlung vorgenommen.
            </p>
            <Link href="/#courses" className="bg-slate-100 text-brand-navy px-8 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors">
                Zurück zu den Kursen
            </Link>
        </div>
    );
}
