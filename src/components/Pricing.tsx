'use client';

import { useState } from 'react';
import PaymentModal from './PaymentModal';

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ title: string; price: number } | null>(null);

    const handleSelectProduct = (title: string, price: number) => {
        setSelectedProduct({ title, price });
        setIsModalOpen(true);
    };

    const products = [
        {
            id: 'starter',
            name: 'Das KI-Starter-Kit',
            tagline: 'Dein Einstieg ins Vibe Coding',
            price: 97,
            originalPrice: 197,
            features: [
                'Die Vibe-Grundlagen Masterclass',
                'Prompt Engineering für Designer',
                'Cursor & v0 Crash-Course',
                'Erste funktionale Komponenten',
                '3 Monate Community-Zugang',
            ],
            highlighted: false,
            cta: 'Starter holen',
        },
        {
            id: 'masterkurs',
            name: 'Der Masterkurs',
            tagline: 'Das komplette Vibe Coding System',
            price: 497,
            originalPrice: 997,
            features: [
                'Alle 5 Curriculum-Module',
                'Lebenslanger Zugriff',
                'Capstone-Projekt Betreuung',
                'Cursor, Lovable, v0, Supabase',
                'Exklusive Designer-Community',
                '1:1 Feedback Sessions',
                'Zertifikat nach Abschluss',
            ],
            highlighted: true,
            cta: 'Jetzt Materialisieren',
            badge: 'Beliebteste Wahl',
        },
        {
            id: 'team',
            name: 'Team-Lizenz',
            tagline: 'Für Design-Teams & Agenturen',
            price: 1497,
            originalPrice: 2997,
            features: [
                'Bis zu 5 Teammitglieder',
                'Alle Masterkurs-Inhalte',
                'Team-Dashboard & Analytics',
                'Dedizierter Success Manager',
                'Custom Onboarding Session',
                'Prioritäts-Support',
            ],
            highlighted: false,
            cta: 'Team starten',
        },
    ];

    return (
        <>
            <section id="pricing" className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="blob w-[500px] h-[500px] bg-accent-primary/10 -top-40 -right-40" />
                <div className="blob w-[400px] h-[400px] bg-accent-tertiary/10 -bottom-40 -left-40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge mb-6">Investiere in deine Autonomie</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                            Wähle deinen <span className="text-gradient">Weg</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Von der ersten Komponente bis zum vollständigen Produkt —
                            finde das Paket, das zu deiner Vision passt.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`relative rounded-3xl p-8 transition-all duration-300 ${product.highlighted
                                        ? 'bg-gradient-to-b from-text-primary to-slate-900 text-white transform md:scale-105 shadow-2xl'
                                        : 'bg-white border border-accent-primary/10 hover:border-accent-primary/30 hover:shadow-xl'
                                    }`}
                            >
                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="badge badge-gradient shadow-lg">
                                            ⭐ {product.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Header */}
                                <div className="mb-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${product.highlighted ? 'text-white' : 'text-text-primary'}`}>
                                        {product.name}
                                    </h3>
                                    <p className={`text-sm ${product.highlighted ? 'text-white/70' : 'text-text-secondary'}`}>
                                        {product.tagline}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-5xl font-bold ${product.highlighted ? 'text-white' : 'text-gradient'}`}>
                                            €{product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className={`text-lg line-through ${product.highlighted ? 'text-white/40' : 'text-text-tertiary'}`}>
                                                €{product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-sm mt-1 ${product.highlighted ? 'text-white/60' : 'text-text-tertiary'}`}>
                                        Einmalige Zahlung, lebenslanger Zugriff
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${product.highlighted ? 'text-accent-tertiary' : 'text-accent-primary'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className={`text-sm ${product.highlighted ? 'text-white/90' : 'text-text-secondary'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleSelectProduct(product.name, product.price)}
                                    className={`w-full py-4 rounded-xl font-semibold transition-all ${product.highlighted
                                            ? 'bg-white text-text-primary hover:bg-white/90 shadow-lg'
                                            : 'btn-primary'
                                        }`}
                                >
                                    {product.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-text-tertiary">
                        {[
                            { icon: '🔒', text: 'Sichere Bezahlung' },
                            { icon: '↩️', text: '14 Tage Geld-zurück' },
                            { icon: '♾️', text: 'Lebenslanger Zugriff' },
                            { icon: '🇩🇪', text: 'Deutsche Rechnungen' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Modal */}
            {selectedProduct && (
                <PaymentModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    productTitle={selectedProduct.title}
                    price={selectedProduct.price}
                />
            )}
        </>
    );
}
