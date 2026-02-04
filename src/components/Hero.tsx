'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
            {/* Decorative Background */}
            <div className="absolute inset-0 grid-pattern" />
            
            {/* Floating Blobs */}
            <div className="blob w-[600px] h-[600px] bg-accent-primary/20 -top-40 -right-40 animate-morph" />
            <div className="blob w-[500px] h-[500px] bg-accent-secondary/15 -bottom-40 -left-40 animate-morph" style={{ animationDelay: '-4s' }} />
            <div className="blob w-[300px] h-[300px] bg-accent-tertiary/20 top-1/3 left-1/4 animate-float" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-accent border border-accent-primary/20 mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
                        <span className="text-sm font-medium text-text-secondary">Die Zukunft des Design-to-Code ist da</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 animate-fade-in-up delay-100">
                        <span className="text-text-primary">Das statische</span><br />
                        <span className="text-text-primary">Mockup ist </span>
                        <span className="text-gradient">tot.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                        <span className="font-semibold text-accent-primary">Vibe Coding</span> verwandelt deine Design-Intention in 
                        funktionalen Code — in <span className="font-semibold text-accent-secondary">Echtzeit</span>. 
                        Keine Syntax. Nur Vision.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
                        <Link 
                            href="#curriculum" 
                            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 group"
                        >
                            <span>Vision Materialisieren</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link 
                            href="#method" 
                            className="btn-secondary inline-flex items-center gap-2 px-8 py-4"
                        >
                            <span>Die Methode entdecken</span>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-secondary animate-fade-in-up delay-400">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div 
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xs font-bold shadow-md"
                                        style={{ 
                                            background: `linear-gradient(135deg, hsl(${220 + i * 20}, 70%, 60%) 0%, hsl(${260 + i * 20}, 70%, 50%) 100%)`
                                        }}
                                    >
                                        {['M', 'K', 'L', 'S', 'A'][i - 1]}
                                    </div>
                                ))}
                            </div>
                            <span>
                                <strong className="text-text-primary">500+ Designer</strong> materialisieren bereits
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-text-tertiary/30" />
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span>4.9 Bewertung</span>
                        </div>
                    </div>
                </div>

                {/* Floating Visual Element */}
                <div className="mt-16 relative max-w-4xl mx-auto animate-fade-in-up delay-500">
                    <div className="relative rounded-3xl overflow-hidden border border-accent-primary/20 shadow-2xl bg-white p-2">
                        <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-accent flex items-center justify-center relative overflow-hidden">
                            {/* Code window mockup */}
                            <div className="absolute inset-4 flex gap-4">
                                {/* Figma side */}
                                <div className="flex-1 rounded-xl bg-white/90 border border-accent-primary/10 p-4 shadow-lg">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                        <span className="text-xs text-text-tertiary ml-2 font-mono">design.fig</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-8 bg-accent-primary/10 rounded-lg" />
                                        <div className="h-24 bg-accent-secondary/10 rounded-lg" />
                                        <div className="flex gap-2">
                                            <div className="h-10 flex-1 bg-accent-tertiary/10 rounded-lg" />
                                            <div className="h-10 flex-1 bg-accent-primary/10 rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Arrow */}
                                <div className="flex items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center text-white animate-pulse-glow">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Code side */}
                                <div className="flex-1 rounded-xl bg-text-primary border border-accent-primary/10 p-4 shadow-lg">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                        <span className="text-xs text-text-tertiary ml-2 font-mono">app.tsx</span>
                                    </div>
                                    <div className="font-mono text-xs space-y-1">
                                        <div className="text-accent-tertiary">{'<Button'}</div>
                                        <div className="text-accent-glow pl-4">variant=&quot;primary&quot;</div>
                                        <div className="text-accent-secondary pl-4">onClick={'{launch}'}</div>
                                        <div className="text-accent-tertiary">{'>'}</div>
                                        <div className="text-white pl-4">Materialisieren</div>
                                        <div className="text-accent-tertiary">{'</Button>'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -left-4 top-1/3 badge badge-gradient shadow-lg animate-float">
                        <span>🎨 Design</span>
                    </div>
                    <div className="absolute -right-4 top-1/4 badge shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
                        <span>⚡ Funktional</span>
                    </div>
                    <div className="absolute -bottom-4 left-1/4 badge shadow-lg animate-float" style={{ animationDelay: '-3s' }}>
                        <span>🚀 Echtzeit</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
