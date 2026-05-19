export default function EmailForm() {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-8">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none w-full"
      />

      <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-4 rounded-xl transition">
        Notify Me
      </button>
    </div>
  );
}