'use client';

import { useState } from 'react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    productTitle: string;
    price: number;
}

export default function PaymentModal({ isOpen, onClose, productTitle, price }: PaymentModalProps) {
    const [selectedMethod, setSelectedMethod] = useState<string>('card');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handlePayment = async () => {
        setError('');
        if (!name || !email) {
            setError('Bitte fülle alle Pflichtfelder aus.');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    courseTitle: productTitle,
                    price,
                    paymentMethod: selectedMethod,
                    name,
                    email,
                }),
            });

            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else if (data.error) {
                setError(data.error);
                setLoading(false);
            }
        } catch {
            setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-text-primary/80 transition-opacity backdrop-blur-md"
                    aria-hidden="true"
                    onClick={onClose}
                />

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-accent-primary/10">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 px-6 py-5 flex justify-between items-center border-b border-accent-primary/10">
                        <h3 className="text-lg leading-6 font-bold text-text-primary flex items-center gap-3" id="modal-title">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            Sichere Bezahlung
                        </h3>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-accent-primary/5 transition-all"
                        >
                            <span className="sr-only">Schließen</span>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-6 py-6">
                        {/* Order Summary */}
                        <div className="bg-gradient-to-r from-accent-primary/5 to-accent-tertiary/5 rounded-2xl p-5 mb-6 flex justify-between items-center border border-accent-primary/10">
                            <div>
                                <p className="text-sm text-accent-primary font-medium mb-1">Deine Auswahl</p>
                                <h4 className="font-bold text-text-primary text-lg">{productTitle}</h4>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-text-tertiary mb-1">Einmalig</p>
                                <span className="text-3xl font-bold text-gradient">€{price}</span>
                            </div>
                        </div>

                        {/* User Info Fields */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                                    Vollständiger Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-xl border border-accent-primary/20 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all"
                                    placeholder="Max Mustermann"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                                    E-Mail-Adresse
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl border border-accent-primary/20 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all"
                                    placeholder="max@beispiel.de"
                                />
                            </div>
                        </div>

                        <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">Zahlungsmethode</h4>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {[
                                { id: 'card', label: 'Kreditkarte', icon: '💳' },
                                { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                                { id: 'klarna', label: 'Klarna', icon: '🛒' },
                                { id: 'invoice', label: 'Rechnung', icon: '📄' },
                            ].map((method) => (
                                <label
                                    key={method.id}
                                    className={`relative border rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all ${selectedMethod === method.id
                                            ? 'border-accent-primary bg-accent-primary/5 ring-2 ring-accent-primary/20'
                                            : 'border-accent-primary/10 hover:border-accent-primary/30'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment-method"
                                        className="sr-only"
                                        value={method.id}
                                        checked={selectedMethod === method.id}
                                        onChange={() => setSelectedMethod(method.id)}
                                    />
                                    <span className="text-xl">{method.icon}</span>
                                    <span className="font-medium text-text-primary text-sm">{method.label}</span>
                                    {selectedMethod === method.id && (
                                        <svg className="w-5 h-5 text-accent-primary ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </label>
                            ))}
                        </div>

                        {error && (
                            <div className="mb-4 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-center gap-2">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <div className="flex items-start gap-3 text-xs text-text-tertiary bg-bg-secondary p-4 rounded-xl mb-6">
                            <svg className="w-5 h-5 text-accent-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p>256-Bit SSL-Verschlüsselung. 14 Tage Geld-zurück-Garantie. Sofortiger Zugang.</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={handlePayment}
                                disabled={loading}
                                className="flex-1 btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Wird verarbeitet...
                                    </>
                                ) : (
                                    <>
                                        <span>Jetzt Materialisieren</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={loading}
                                className="sm:w-auto px-6 py-4 rounded-xl border border-accent-primary/20 text-text-secondary font-medium hover:bg-bg-secondary transition-all"
                            >
                                Abbrechen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
