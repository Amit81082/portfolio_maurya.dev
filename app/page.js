"use client";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import Hero from "./components/Hero";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {


  return (
    <div>
      {/* 👉 HERO */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTopButton />
      <WhatsAppButton />
    </div>
  );
}
