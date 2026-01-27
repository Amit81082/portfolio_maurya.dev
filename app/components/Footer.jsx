"use client";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        <p className="text-sm">
          © 2026 <span className="text-white font-semibold">Amit Maurya</span>
        </p>

        <p className="text-xs">Built with ❤️ using Next.js & Tailwind CSS</p>

        <div className="flex justify-center gap-4 text-lg">
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
