import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeBauen.de | Wo Designer funktionale Software materialisieren",
  description: "Die erste deutschsprachige Akademie für UI/UX Designer, die mit Vibe Coding ihre eigenen Apps bauen wollen. Keine Syntax. Nur Vision.",
  keywords: ["Vibe Coding", "AI Design", "Designer lernen coden", "Cursor", "Lovable", "v0", "Figma to Code", "No-Code Deutschland"],
  authors: [{ name: "VibeBauen" }],
  openGraph: {
    title: "VibeBauen.de | Wo Designer funktionale Software materialisieren",
    description: "Die erste deutschsprachige Akademie für UI/UX Designer, die mit Vibe Coding ihre eigenen Apps bauen wollen.",
    type: "website",
    locale: "de_DE",
    siteName: "VibeBauen",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeBauen.de | Vibe Coding für Designer",
    description: "Materialisiere deine Design-Vision in funktionale Software. Keine Syntax. Nur Vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
