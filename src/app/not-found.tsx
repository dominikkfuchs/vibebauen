export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-brand-teal mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ups! Seite nicht gefunden.</h2>
                <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                    Die Seite, die du suchst, existiert nicht oder wurde verschoben.
                    Vielleicht findest du im Kurs-Katalog, was du suchst?
                </p>
                <a
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-navy hover:bg-brand-dark transition-colors"
                >
                    Zurück zur Startseite
                </a>
            </div>
        </div>
    );
}
