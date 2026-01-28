"use client";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Amit Maurya</span>
        </p>

        <p className="text-xs">Built with ❤️ using Next.js & Tailwind CSS</p>

        <div className="flex justify-center gap-4 text-lg">
          <a
            target="_blank"
            href="https://github.com/Amit81082"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amitmaurya-webdev8234/"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://x.com/AmitMau16639518"
            className="hover:text-white transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
