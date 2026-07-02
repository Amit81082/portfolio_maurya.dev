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

        {/* 👉 Updated Intro */}
        <p className="text-white/70 max-w-3xl mb-12 leading-relaxed">
          I'm a Full-Stack Developer focused on building modern, responsive, and
          scalable web applications using Next.js, React, TypeScript, Tailwind
          CSS, Node.js, Express, MongoDB, Prisma, and NextAuth. I enjoy turning
          ideas into real-world products with clean UI, secure authentication,
          and optimized performance.
        </p>

        {/* 👉 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 👉 Card 1 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaCode className="text-cyan-400 text-3xl mb-4" />

            {/* 🔥 Updated */}
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack Development
            </h3>

            {/* 🔥 Updated */}
            <p className="text-white/70">
              Building complete applications using Next.js, React, TypeScript,
              Node.js, Express, MongoDB, Prisma, and REST APIs.
            </p>
          </div>

          {/* 👉 Card 2 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaLaptopCode className="text-cyan-400 text-3xl mb-4" />

            {/* 🔥 Updated */}
            <h3 className="text-xl font-semibold mb-2">Real World Projects</h3>

            {/* 🔥 Updated */}
            <p className="text-white/70">
              Developed projects like Twitter Clone, Netflix Clone, Realtime
              Chat App, authentication systems, dashboards, and modern portfolio
              websites.
            </p>
          </div>

          {/* 👉 Card 3 */}
          <div className="border border-cyan-400/30 rounded-2xl p-6 hover:shadow-[0_0_25px_#22d3ee] transition">
            <FaRocket className="text-cyan-400 text-3xl mb-4" />

            {/* 🔥 Updated */}
            <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>

            {/* 🔥 Updated */}
            <p className="text-white/70">
              Passionate about learning modern technologies, improving
              problem-solving skills, and building production-ready applications
              with industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
