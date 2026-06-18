"use client";
import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");
      if (e.target.name.value === "" || e.target.email.value === "" || e.target.message.value === "") {
        setStatus("error");
        setErrorMsg("All fields are required");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(res.ok ? "success" : "error");
      if (!res.ok) setErrorMsg(await res.text());
      setTimeout(() => setStatus("idle"), 3000);
      e.target.reset();
    };
  return (
    <section id="contact" className="min-h-screen px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">Sent ✔</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">{errorMsg} </p>
          )}
        </form>
      </div>
    </section>
  );
}
