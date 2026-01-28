"use client";

import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/Amit81082" },
  { icon: <FaTwitter />, link: "https://x.com/AmitMau16639518" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/amitmaurya-webdev8234/",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-6">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee]"
        >
          <span className="text-lg">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}
