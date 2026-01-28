"use client";
import Image from "next/image";

const projects = [
  {
    title: "URL Shortener",
    desc: "Convert long URLs into short links, store them in database.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    live: "https://url-shortner-86rw.vercel.app/",
    code: "https://github.com/Amit81082/Url_shortner",
    image: "/projects/urlShortner.png",
  },
  {
    title: "Image Search Engine",
    desc: "Full-stack MERN application to search images from Unsplash with login via Google and GitHub.",
    tech: ["React", "Express.js", "MongoDB", "unsplash"],
    live: "https://mern-image-search-pied.vercel.app/",
    code: "https://github.com/Amit81082/Mern-Image-Search",
    image: "/projects/image-search.png",
  },
  {
    title: "Password Locker",
    desc: "Store your passwords in a secure way.",
    tech: ["React", "Tailwind"],
    live: "https://password-locker-e550f5.netlify.app/",
    code: "https://github.com/Amit81082/password-locker",
    image: "/projects/password-locker.png",
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
              <div className="relative w-full h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
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
                    target="_blank"
                    href={p.live}
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
                  >
                    Live
                  </a>
                  <a
                    target="_blank"
                    href={p.code}
                    rel="noopener noreferrer"
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
