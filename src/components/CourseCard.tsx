'use client';

import Image from 'next/image';
import { useState } from 'react';
import PaymentModal from './PaymentModal';

interface CourseCardProps {
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    imageSrc: string;
    tag?: string;
    tagColor?: string;
    comingSoon?: boolean;
}

export default function CourseCard({ title, description, price, originalPrice, imageSrc, tag, tagColor, comingSoon }: CourseCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        if (comingSoon) return;
        setIsModalOpen(true);
    };

    return (
        <>
            <div className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${comingSoon ? 'grayscale opacity-75 hover:grayscale-0 hover:opacity-100' : ''}`}>
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    {tag && (
                        <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${tagColor || 'bg-brand-teal text-white'}`}>
                            {tag}
                        </span>
                    )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-2">{title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        {comingSoon ? (
                            <span className="text-sm font-medium text-slate-500">Bald verfügbar</span>
                        ) : (
                            <div>
                                {originalPrice && <span className="text-sm text-slate-500 line-through mr-2">€{originalPrice}</span>}
                                <span className="text-2xl font-bold text-brand-navy">€{price}</span>
                            </div>
                        )}

                        <button
                            onClick={handleClick}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${comingSoon ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-100 text-brand-navy hover:bg-brand-navy hover:text-white'}`}
                            disabled={comingSoon}
                        >
                            {comingSoon ? 'Vormerken' : 'Zum Kurs'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle={title}
                price={price}
            />
        </>
    );
}
