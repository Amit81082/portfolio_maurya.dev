"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "React", level: 75, icon: <FaReact /> },
  { name: "Next.js", level: 70, icon: <SiNextdotjs /> },
  { name: "Tailwind", level: 85, icon: <SiTailwindcss /> },
  { name: "Git", level: 70, icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border border-cyan-400/30 rounded-2xl p-5 hover:shadow-[0_0_20px_#22d3ee] transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl text-cyan-400">{skill.icon}</span>
                <span className="font-semibold">{skill.name}</span>
                <span className="ml-auto text-sm text-white/60">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
