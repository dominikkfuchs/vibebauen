export default function Impressum() {
    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-12 tracking-tight">Impressum</h1>

                <div className="prose prose-lg prose-slate prose-headings:text-brand-navy prose-a:text-brand-teal max-w-none">
                    <h3>Angaben gemäß § 5 TMG</h3>
                    <p>
                        AhaKurs GmbH (Musterfirma)<br />
                        Musterstraße 123<br />
                        12345 Musterstadt
                    </p>

                    <h3>Vertreten durch</h3>
                    <p>Max Mustermann</p>

                    <h3>Kontakt</h3>
                    <p>
                        Telefon: +49 (0) 123 456789<br />
                        E-Mail: info@ahakurs.de
                    </p>

                    <h3>Registereintrag</h3>
                    <p>
                        Eintragung im Handelsregister.<br />
                        Registergericht: Amtsgericht Musterstadt<br />
                        Registernummer: HRB 12345
                    </p>

                    <h3>Umsatzsteuer-ID</h3>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE 123456789
                    </p>

                    <h3>Streitschlichtung</h3>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
        </div>
    );
}
