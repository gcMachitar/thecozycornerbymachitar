import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cyberpunk neon library background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/futuristic-library-neon-lighting-large-book-generative-ai-lit-towering-bookshelves-glowing-floor-creating-336510504.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-pink-900/30 to-black/80" />

      <div className="relative text-center px-8 z-10">
        <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
          The Cozy Corner
        </h1>
        <p className="text-2xl md:text-4xl text-gray-200 mb-16 drop-shadow-lg">
          Hand-picked books for your perfect reading escape
        </p>

        <div className="flex gap-10 justify-center">
          <Link
            href="/books"
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-xl font-bold hover:from-pink-500 hover:to-red-500 transition shadow-2xl shadow-pink-500/50"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="px-12 py-5 border-2 border-pink-500 rounded-full text-xl font-bold hover:bg-pink-500/20 transition shadow-lg shadow-pink-500/40"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}