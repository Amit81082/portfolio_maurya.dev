"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import SocialLinks from "./SocialLinks";


export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "React Developer", "Next.js Developer"],
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
          <h3 className="text-white/70 text-lg ">Hello, it's Me</h3>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            Amit Maurya
          </h1>

          <h3 className="text-2xl mt-2">
            And I'm a <span ref={textRef} className="text-sky-400"></span>
          </h3>

          <p className="mt-5 text-white/70 max-w-xl">
            I build modern, responsive, and fast web applications using React,
            Next.js, and Tailwind CSS.
          </p>

          {/* 👉 CTA */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-500 font-semibold hover:bg-cyan-600 transition"
            >
              View Projects
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
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <Image
              src="/my_image.jpeg"
              alt="Amit Maurya"
              width={1080}
              height={1920}
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
