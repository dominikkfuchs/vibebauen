export default function Testimonials() {
    return (
        <section className="py-16 lg:py-24 bg-brand-navy">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <svg className="w-12 h-12 text-brand-teal mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" /></svg>

                <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
                    &quot;Endlich habe ich die Logik hinter dem Programmieren verstanden! AhaKurs erklärt alles so, dass es auch ohne Mathe-Studium Sinn ergibt. Absolute Empfehlung.&quot;
                </blockquote>

                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-teal mb-3 bg-slate-300 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://i.pravatar.cc/150?img=11" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-white font-bold">Thomas Müller</div>
                    <div className="text-brand-teal text-sm">Berlin, HTML & CSS Kurs</div>
                </div>
            </div>
        </section>
    );
}
