import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: { default: "The Cozy Corner", template: "%s | The Cozy Corner" },
  description: "A futuristic digital bookstore with hand-picked recommendations in a neon cyberpunk atmosphere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-200 min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-pink-500/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                The Cozy Corner
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-8 text-lg">
                <Link href="/" className="hover:text-pink-400 transition">Home</Link>
                <Link href="/about" className="hover:text-pink-400 transition">About</Link>
                <Link href="/books" className="hover:text-pink-400 transition">Books</Link>
                <Link href="/contact" className="hover:text-pink-400 transition">Contact</Link>
              </nav>

              {/* Mobile Hamburger - Animated Pink Bars */}
              <input type="checkbox" id="mobile-menu" className="hidden peer" />
              <label
                htmlFor="mobile-menu"
                className="md:hidden cursor-pointer p-3 z-50"
                aria-label="Toggle mobile menu"
              >
                <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                  <span className="block w-8 h-1 bg-pink-500 rounded-full transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-3" />
                  <span className="block w-8 h-1 bg-pink-500 rounded-full transition-all duration-300 peer-checked:opacity-0" />
                  <span className="block w-8 h-1 bg-pink-500 rounded-full transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-3" />
                </div>
              </label>
            </div>
          </div>

          {/* Mobile Menu - Clearly visible dropdown */}
          <div className="absolute inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-lg border-b border-pink-500/30 shadow-2xl shadow-pink-900/50 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto md:hidden transition-all duration-500 ease-out">
            <nav className="flex flex-col items-center py-16 space-y-12 text-3xl font-semibold tracking-wide">
              <Link href="/" className="text-pink-400 hover:text-pink-200 transition">
                Home
              </Link>
              <Link href="/about" className="text-pink-400 hover:text-pink-200 transition">
                About
              </Link>
              <Link href="/books" className="text-pink-400 hover:text-pink-200 transition">
                Books
              </Link>
              <Link href="/contact" className="text-pink-400 hover:text-pink-200 transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Backdrop - tap to close */}
          <label
            htmlFor="mobile-menu"
            className="fixed inset-0 z-30 bg-black/70 hidden peer-checked:block md:hidden"
          />
        </header>

        <main className="pt-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          {children}
        </main>

        <footer className="py-10 mt-20 border-t border-pink-900/30 text-center">
          <p className="text-pink-400 text-sm sm:text-base">© 2026 The Cozy Corner — Neon Reading Redefined</p>
        </footer>
      </body>
    </html>
  );
}