import Image from "next/image";

export default function BooksPage() {
  return (
    <section className="py-20 px-8">
      <h1 className="text-6xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
        Book Recommendations
      </h1>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="group relative overflow-hidden rounded-2xl border border-pink-800/50 hover:border-pink-500 transition shadow-2xl hover:shadow-pink-500/50">
          <img 
            src="https://thumbs.dreamstime.com/b/futuristic-library-neon-lighting-large-book-generative-ai-lit-towering-bookshelves-glowing-floor-creating-336510504.jpg" 
            alt="Futuristic neon book collection in cyberpunk style" 
            className="w-full h-96 object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative p-8 text-center">
            <h3 className="text-3xl font-bold text-pink-300 mb-4">Neon Classics</h3>
            <p className="text-gray-400">Timeless stories reimagined in digital glow</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-pink-800/50 hover:border-pink-500 transition shadow-2xl hover:shadow-pink-500/50">
          <img 
            src="https://thumbs.dreamstime.com/b/neon-lit-modern-library-generative-ai-lights-colorful-illuminated-bookshelves-creating-vibrant-futuristic-atmosphere-330264667.jpg" 
            alt="Cyberpunk library with glowing bookshelves" 
            className="w-full h-96 object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative p-8 text-center">
            <h3 className="text-3xl font-bold text-pink-300 mb-4">Digital Treasures</h3>
            <p className="text-gray-400">Curated editions for the modern reader</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-pink-800/50 hover:border-pink-500 transition shadow-2xl hover:shadow-pink-500/50">
          <img 
            src="https://thumbs.dreamstime.com/b/futuristic-library-interior-neon-lighting-books-ai-generated-image-image-depicts-futuristic-library-science-385104699.jpg" 
            alt="Futuristic science fiction books in neon atmosphere" 
            className="w-full h-96 object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative p-8 text-center">
            <h3 className="text-3xl font-bold text-pink-300 mb-4">Future Reads</h3>
            <p className="text-gray-400">Sci-fi and fantasy in glowing detail</p>
          </div>
        </div>
      </div>
    </section>
  );
}