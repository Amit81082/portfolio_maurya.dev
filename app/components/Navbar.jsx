"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ ADDED: active link on scroll
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (!section) continue;

        if (scrollY >= section.offsetTop) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* 👉 Logo */}
        <a href="#home" className="text-white font-bold text-xl">
          Amit<span className="text-blue-400">.</span>
        </a>

        {/* 👉 Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition ${
                active === link.id ? "text-blue-400" : "text-white/80"
              } hover:text-white`}
            >
              {link.label}
            </a>
          ))}

          {/* 👉 Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-500 transition"
          >
            Resume
          </a>
        </div>

        {/* 👉 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* 👉 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)} // ✅ ADDED: close after click
                className={`text-sm font-medium transition ${
                  active === link.id ? "text-cyan-400" : "text-white/80"
                } hover:text-white`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="w-fit px-4 py-2 rounded-xl bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-500 transition items-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


