"use client";

const projects = [
  {
    title: "URL Shortener",
    desc: "Shorten links with login and dashboard.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with modern UI.",
    tech: ["Next.js", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce UI",
    desc: "Product listing and cart UI.",
    tech: ["React", "Tailwind"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-cyan-400/30 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_#22d3ee] transition"
            >
              {/* 👉 Image placeholder */}
              <div className="h-40 bg-cyan-400/10 flex items-center justify-center text-white/50">
                Screenshot
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm mb-4">{p.desc}</p>

                {/* 👉 Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 👉 Actions */}
                <div className="flex gap-4">
                  <a
                    href={p.live}
                    className="px-4 py-2 text-sm rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.code}
                    className="px-4 py-2 text-sm rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
