export default function AboutPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Neon Library Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/neon-lit-reading-corner-futuristic-design-chair-bookshelves-vibrant-colors-blending-technology-love-literature-335945900.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-pink-900/40 to-black/90" />

      <div className="relative text-center px-8 max-w-5xl z-10">
        <h1 className="text-7xl md:text-9xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
          About The Cozy Corner
        </h1>

        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-16 drop-shadow-lg">
          Welcome to a digital sanctuary where classic reading meets cyberpunk neon aesthetics. 
          The Cozy Corner is a futuristic online bookstore, hand-curating recommendations that blend timeless stories with a glowing, immersive atmosphere. 
          Escape into literature — illuminated by pink and red neon lights in a virtual library that never sleeps.
        </p>

        <p className="text-xl md:text-2xl text-pink-300 max-w-3xl mx-auto">
          Built for readers who crave both comfort and edge. Dive deep into worlds reimagined in digital glow.
        </p>
      </div>
    </div>
  );
}