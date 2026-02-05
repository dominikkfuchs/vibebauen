'use client';

import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../lib/stripe';
import CheckoutForm from './CheckoutForm';
import { Appearance } from '@stripe/stripe-js';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    productTitle: string;
    price: number;
}

export default function PaymentModal({ isOpen, onClose, productTitle, price }: PaymentModalProps) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    // Only reset error/loading when modal closes, keep clientSecret to avoid orphaned PaymentIntents
    useEffect(() => {
        if (!isOpen) {
            setError('');
            setLoading(false);
            // Note: We intentionally do NOT reset clientSecret here
            // This allows reusing the same PaymentIntent if user reopens the modal
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleInitiateCheckout = async () => {
        setError('');
        if (!name || !email) {
            setError('Bitte fülle alle Pflichtfelder aus.');
            return;
        }

        // If we already have a clientSecret, reuse it (don't create duplicate PaymentIntents)
        if (clientSecret) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: productTitle,
                    price,
                    name,
                    email,
                }),
            });

            const data = await res.json();

            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
            } else {
                setError(data.error || 'Fehler beim Initialisieren der Zahlung.');
            }
        } catch {
            setError('Verbindungsfehler. Bitte versuche es später erneut.');
        } finally {
            setLoading(false);
        }
    };

    const appearance: Appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#4F46E5', // Brand Indigo
            colorBackground: '#ffffff',
            colorText: '#0F172A',
            colorDanger: '#ef4444',
            fontFamily: 'Sora, system-ui, sans-serif',
            spacingUnit: '4px',
            borderRadius: '12px',
        },
        rules: {
            '.Tab': {
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            },
            '.Tab:hover': {
                color: '#4F46E5',
            },
            '.Tab--selected': {
                borderColor: '#4F46E5',
                boxShadow: '0 0 0 1px #4F46E5',
            },
            '.Input': {
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            },
            '.Input:focus': {
                border: '1px solid #4F46E5',
                boxShadow: '0 0 0 1px #4F46E5',
            }
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

                <div className="relative inline-block align-bottom bg-bg-primary rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-accent-primary/20">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 px-6 py-5 flex justify-between items-center border-b border-accent-primary/10">
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
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-accent-primary/10 transition-all"
                        >
                            <span className="sr-only">Schließen</span>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-6 py-6 bg-bg-primary">
                        {/* Order Summary */}
                        <div className="bg-bg-secondary rounded-2xl p-5 mb-6 flex justify-between items-center border border-accent-primary/10">
                            <div>
                                <p className="text-xs text-accent-primary font-medium mb-1 uppercase tracking-wider">Ausgewählt</p>
                                <h4 className="font-bold text-text-primary text-md sm:text-lg max-w-[200px] truncate">{productTitle}</h4>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-gradient">€{price}</span>
                            </div>
                        </div>

                        {clientSecret ? (
                            // Render Stripe Elements
                            <Elements options={{ clientSecret, appearance }} stripe={getStripe()}>
                                <CheckoutForm price={price} productTitle={productTitle} />
                            </Elements>
                        ) : (
                            // Render Step 1: User Details
                            <>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-text-secondary mb-2">
                                            Vollständiger Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => { setName(e.target.value); setError(''); }}
                                            className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all shadow-sm"
                                            placeholder="Max Mustermann"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-text-secondary mb-2">
                                            E-Mail-Adresse
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all shadow-sm"
                                            placeholder="max@beispiel.de"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="mb-4 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200 flex items-center gap-2">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        type="button"
                                        onClick={handleInitiateCheckout}
                                        disabled={loading}
                                        className="flex-1 btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Lade Bezahlsystem...
                                            </>
                                        ) : (
                                            <>
                                                <span>Weiter zur Zahlung</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        disabled={loading}
                                        className="sm:w-auto px-6 py-4 rounded-xl border border-slate-200 text-text-secondary font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
                                    >
                                        Abbrechen
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
