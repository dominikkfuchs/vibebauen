import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-text-primary relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-lg">
                                V
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Vibe<span className="text-accent-glow">Bauen</span>
                            </span>
                        </Link>
                        <p className="text-text-tertiary text-sm leading-relaxed mb-6">
                            Die erste deutschsprachige Akademie für Designer,
                            die funktionale Software materialisieren wollen.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-primary/20 flex items-center justify-center text-text-tertiary hover:text-accent-glow transition-all"
                                    aria-label={social.name}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Akademie */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Akademie</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="#curriculum" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Curriculum
                                </Link>
                            </li>
                            <li>
                                <Link href="#method" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Die Methode
                                </Link>
                            </li>
                            <li>
                                <Link href="#why-de" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Warum .de?
                                </Link>
                            </li>
                            <li>
                                <Link href="/community" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Tools</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href="https://cursor.sh" target="_blank" rel="noopener" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Cursor
                                </a>
                            </li>
                            <li>
                                <a href="https://lovable.dev" target="_blank" rel="noopener" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Lovable
                                </a>
                            </li>
                            <li>
                                <a href="https://v0.dev" target="_blank" rel="noopener" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    v0
                                </a>
                            </li>
                            <li>
                                <a href="https://supabase.com" target="_blank" rel="noopener" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Supabase
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Rechtliches */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Rechtliches</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/impressum" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Datenschutz
                                </Link>
                            </li>
                            <li>
                                <Link href="/agb" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    AGB
                                </Link>
                            </li>
                            <li>
                                <Link href="/widerruf" className="text-text-tertiary hover:text-accent-glow transition-colors">
                                    Widerrufsrecht
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-tertiary">
                        &copy; 2026 VibeBauen.de — Wo Vision funktional wird.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-text-tertiary">
                        <span>Made with</span>
                        <span className="text-red-400">❤️</span>
                        <span>in Germany</span>
                        <span className="mx-2">•</span>
                        <span className="text-accent-glow font-medium">Powered by AI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
