"use client";

import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* 👉 Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* 👉 Intro */}
        <p className="text-white/70 max-w-2xl mb-12">
          I’m a Frontend Developer focused on building clean, responsive, and
          performance-driven web applications using React and Next.js.
        </p>

        {/* 👉 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 👉 Card 1 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaCode className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-white/70">
              I write readable, reusable, and maintainable code following modern
              best practices.
            </p>
          </div>

          {/* 👉 Card 2 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaLaptopCode className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
            <p className="text-white/70">
              I build complete real-world projects with authentication,
              dashboards, and clean UI.
            </p>
          </div>

          {/* 👉 Card 3 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaRocket className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Always Improving</h3>
            <p className="text-white/70">
              I continuously learn new technologies and improve my
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
