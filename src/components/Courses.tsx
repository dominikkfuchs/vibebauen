import Link from 'next/link';
import CourseCard from './CourseCard';

export default function Courses() {
    return (
        <section id="courses" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">Unsere Kurse</h2>
                        <p className="mt-4 text-lg text-slate-600">Investiere in deine Zukunft mit Skills, die gefragt sind.</p>
                    </div>
                    <Link href="/kurse" className="text-brand-teal font-semibold hover:text-brand-tealDark flex items-center gap-1 group">
                        Alle Kurse ansehen
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CourseCard
                        title="HTML & CSS Masterclass"
                        description="Der perfekte Einstieg. Baue deine erste eigene Website von Grund auf, responsive und modern."
                        price={49}
                        originalPrice={99}
                        imageSrc="/images/course-html.png"
                        tag="Bestseller"
                        tagColor="bg-yellow-400 text-yellow-900"
                    />
                    <CourseCard
                        title="Python für Einsteiger"
                        description="Lerne die beliebteste Programmiersprache der Welt. Ideal für Automatisierung, Daten und KI."
                        price={59}
                        imageSrc="/images/course-python.png"
                        tag="Neu"
                    />
                    <CourseCard
                        title="JavaScript Deep Dive"
                        description="Verstehe, wie das Web wirklich funktioniert. Deep Dive in DOM, Async und modern ES6+."
                        price={55}
                        imageSrc="/images/course-js.png"
                        tag="Coming Soon"
                        tagColor="bg-slate-600 text-white"
                        comingSoon
                    />
                </div>
            </div>
        </section>
    );
}
