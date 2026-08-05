"use client";
import Image from "next/image";

const projects = [
  {
    title: "MessageHub",

    desc: "Real-time messaging platform with one-to-one & group chat, instant messaging, image sharing, online presence, seen status, and secure authentication.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Pusher",
      "Cloudinary",
    ],

    Live: "https://message-hub-9sj2.vercel.app/",

    GitHub: "https://github.com/Amit81082/MessageHub",

    image: "/projects/Messagehub.png",
  },
  {
    title: "Rentopia",

    desc: "Property booking platform inspired by Airbnb with authentication, property listings, reservations, favorites, trip management, location search, maps integration, and responsive modern UI.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Zustand",
      "Cloudinary",
      "Axios",
    ],

    Live: "https://rentopia-ysvy.vercel.app/",

    GitHub: "https://github.com/Amit81082/Rentopia",

    image: "/projects/Rentopia.png",
  },
  {
    title: "Cartify E-Commerce",
    desc: "Full-stack ecommerce app with cart, Razorpay payment, order management, and secure checkout flow.",

    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Razorpay"],

    Live: "https://cartify-e-commerce-gamma.vercel.app/", // 👉 UPDATE
    GitHub: "https://github.com/Amit81082/Cartify-E-commerce", // 👉 UPDATE

    image: "/projects/cartify.png", // 👉 ADD IMAGE IN PUBLIC
  },
  {
    title: "Twitter Clone",

    desc: " Full-stack Twitter clone with authentication, tweet creation, comments, likes, follow system, notifications, profile management, and responsive modern UI.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "SWR",
      "Axios",
    ],

    Live: "https://twi-tter-calone.vercel.app/",

    GitHub: "https://github.com/Amit81082/twi-tter-calone",

    image: "/projects/TwitterClone.png",
  },
  {
    title: "Neftlix Clone",

    desc: "Full-stack Neftlix clone with authentication, movie streaming, protected profiles, dynamic billboard, and responsive modern UI.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "SWR",
      "Zustand",
    ],

    Live: "https://neftlix-calone-oxhp.vercel.app/",

    GitHub: "https://github.com/Amit81082/Neftlix-calone",

    image: "/projects/NeftlixClone.png",
  },
  {
    title: "URL Shortener",
    desc: "Convert long URLs into short links, store them in database. And Ya, with proper authentication.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    Live: "https://url-shortner-86rw.vercel.app/",
    GitHub: "https://github.com/Amit81082/Url_shortner",
    image: "/projects/urlShortner.png",
  },
  {
    title: "Image Search Engine",
    desc: "Full-stack MERN application to search images from Unsplash with login via Google and GitHub.",
    tech: ["React", "Express.js", "MongoDB", "unsplash"],
    Live: "https://mern-image-search-pied.vercel.app/",
    GitHub: "https://github.com/Amit81082/Mern-Image-Search",
    image: "/projects/image-search.png",
  },
  {
    title: "Password Locker",
    desc: "Store your passwords in a secure way.",
    tech: ["React", "Tailwind"],
    Live: "https://password-locker-e550f5.netlify.app/",
    GitHub: "https://github.com/Amit81082/password-locker",
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
                    href={p.Live}
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
                  >
                    Live
                  </a>
                  <a
                    target="_blank"
                    href={p.GitHub}
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    GitHub
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
