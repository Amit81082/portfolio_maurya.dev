"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiPrisma } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 85, icon: <FaJs /> },

  { name: "TypeScript", level: 75, icon: <SiTypescript /> },

  { name: "React.js", level: 80, icon: <FaReact /> },
  { name: "Next.js", level: 75, icon: <SiNextdotjs /> },

  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },

  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
  { name: "Express.js", level: 65, icon: <SiExpress /> },

  { name: "MongoDB", level: 70, icon: <SiMongodb /> },
  { name: "Prisma ORM", level: 65, icon: <SiPrisma /> },

  { name: "Git & GitHub", level: 75, icon: <FaGitAlt /> },
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
