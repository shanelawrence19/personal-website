import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SL Tech - Shane's Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <a href="#" className="text-xl font-bold gradient-text">
                SL Tech
              </a>
              <div className="hidden space-x-8 md:flex">
                <a href="#about" className="text-slate-400 transition-colors hover:text-cyan-400">
                  About
                </a>
                <a href="#projects" className="text-slate-400 transition-colors hover:text-cyan-400">
                  Projects
                </a>
                <a href="#skills" className="text-slate-400 transition-colors hover:text-cyan-400">
                  Skills
                </a>
                <a href="#contact" className="text-slate-400 transition-colors hover:text-cyan-400">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
