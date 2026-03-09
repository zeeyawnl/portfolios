"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import ShinyText from "./ShinyText";

const myFont = localFont({
  src: [
    {
      path: "../fonts/ZalandoSansSemiExpanded-VariableFont_wght.ttf",
      weight: "200",
    },
  ],
  variable: "--font-my",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      {/* Glassmorphism Capsule Container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl px-8 py-4">
        
        {/* Mobile = flex | Desktop = grid */}
        <div className="relative flex items-center justify-between md:grid md:grid-cols-3">

          {/* Logo */}
          <div className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto">
            <Link href="/" className="text-lg font-semibold">
             <ShinyText
  text="ZEEYAWNL"
  className={myFont.className}
  color="#9ca3af"
  shineColor="#ffffff"
  spread={45}
  pauseOnHover={true}
/>


            </Link>
          </div>

          {/* Center Menu (Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:flex justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white/90 hover:text-white transition duration-300 group font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gray-600 to-gray-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </motion.div>

          {/* Right side */}
          <div className="flex justify-end items-center gap-4">

            {/* Github Button (Desktop) - Green Theme */}
            <a
              href="https://github.com/zeeyawnl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-300 transition-all duration-300 font-medium"
            >
              <Github size={18} />
              GitHub
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Also glassmorphic capsule */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col items-center gap-6 py-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white transition font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://github.com/zeeyawnl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}