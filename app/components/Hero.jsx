"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      // 🔥 CHANGED
      strings: [
        "Frontend Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "React Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        {/* 👉 LEFT */}
        <div>
          {/* 🔥 CHANGED */}

          <p className="text-cyan-400 font-medium tracking-wider uppercase">
            Frontend Developer
          </p>

          <h1
            className={`text-4xl md:text-5xl font-extrabold mt-4 leading-tight`}
          >
            Amit <span className="text-cyan-400">Maurya</span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-4 text-white/90">
            Building Modern Web Applications
          </h2>

          <div className="mt-3 text-lg">
            <span ref={textRef} className="text-cyan-400 font-semibold"></span>
          </div>

          {/* 🔥 CHANGED */}

          <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
            I build scalable, responsive, and production-ready web applications
            using React, Next.js, TypeScript, Node.js, MongoDB, Prisma, and
            Tailwind CSS.
          </p>

          {/* 👉 CTA */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-500 font-semibold hover:bg-cyan-600 transition"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-white/20 text-white/90 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

          {/* 👉 SOCIAL */}
          <SocialLinks />
        </div>

        {/* 👉 RIGHT (IMAGE PLACEHOLDER) */}
        {/* 🔥 CHANGED */}

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

          <div className="relative w-72 h-72 md:w-95 md:h-95 rounded-full p-1 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400">
            <Image
              src="/my_image.jpeg"
              alt="Amit Maurya"
              fill
              className=" rounded-full object-cover border-4 border-black "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
