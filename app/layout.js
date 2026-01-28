import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit Maurya | Frontend Developer",
  description:
    "Amit Maurya is a Frontend Developer specializing in React and Next.js. View projects, skills, and contact.",
  keywords: [
    "Amit Maurya",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],

  openGraph: {
    title: "Amit Maurya | Frontend Developer",
    description:
      "Frontend Developer building modern web apps using React & Next.js",
    url: "https://portfolio-maurya-dev.vercel.app/",
    siteName: "Amit Maurya Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Amit Maurya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amit Maurya | Frontend Developer",
    description:
      "Frontend Developer building modern web apps using React & Next.js",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
