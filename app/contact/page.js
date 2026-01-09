export default function ContactPage() {
  return (
    <section className="py-32 px-8 max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
        Contact Us
      </h1>

      <form className="space-y-8 bg-black/50 backdrop-blur-md border border-pink-800/50 rounded-2xl p-10 shadow-2xl shadow-pink-500/20">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border border-pink-700/50 p-4 rounded-lg focus:border-pink-400 focus:outline-none transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-transparent border border-pink-700/50 p-4 rounded-lg focus:border-pink-400 focus:outline-none transition"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={8}
          className="w-full bg-transparent border border-pink-700/50 p-4 rounded-lg focus:border-pink-400 focus:outline-none transition"
          required
        />
        <button 
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-xl font-bold hover:from-pink-500 hover:to-red-500 transition shadow-lg shadow-pink-500/60"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}