"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, ChevronsRight, Github, Linkedin } from "lucide-react";
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

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0d0d0d] text-white pt-20 pb-8 overflow-hidden font-sans border-t border-white/5 shadow-2xl">
            {/* Subtle Background Glow for that extra spice */}
            <div className="absolute top-0 right-1/4 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 -translate-x-1/4 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Top Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`text-5xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] text-white ${myFont.className}`}
                    >
                        Let's Connect<br />
                    </motion.h2>

                    <motion.a
                        href="https://wa.me/7823842448"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group flex items-center gap-4 bg-[#1c1c1c] hover:bg-[#252525] border border-white/5 transition-all duration-300 rounded-full p-2 pr-8 text-neutral-300 hover:text-white shrink-0 cursor-pointer"
                    >
                        <span className="bg-[#2a2a2a] group-hover:bg-white text-white group-hover:text-black transition-colors duration-300 p-4 rounded-full flex items-center justify-center">
                            <ChevronsRight size={24} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="font-medium text-base sm:text-lg tracking-wide">Hire Me Now!</span>
                    </motion.a>
                </div>

                {/* First Divider */}
                <div className="w-full h-px bg-white/[0.08] mb-12 flex justify-center mt-2"></div>

                {/* Middle Info Section */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 mb-4">

                    {/* Brand & Socials (Left Column) */}
                    <div className="lg:w-5/12 flex flex-col gap-6">
                        <div className="flex items-center gap-4 font-semibold">
                            <div className="bg-white text-black p-2.5 rounded-xl flex items-center justify-center w-12 h-12 transform transition-transform hover:rotate-12 duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L14.75 9.25L23 12L14.75 14.75L12 23L9.25 14.75L1 12L9.25 9.25L12 1Z" />
                                </svg>
                            </div>
                            <span className="text-[28px] tracking-wide text-white">
                                <ShinyText
                                    text="ZEEYAWNL"
                                    className={myFont.className}
                                    color="#9ca3af"
                                    shineColor="#ffffff"
                                    spread={45}
                                    pauseOnHover={true}
                                />
                            </span>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed max-w-[340px] font-light mt-1">
                            I solve problems you didn't know you had in ways you don't understand. You're welcome.
                        </p>

                        <div className="flex flex-wrap items-center gap-5 mt-4">
                            <a href="https://www.instagram.com/ziiyaaaaaaa" className="text-neutral-400 hover:text-white transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/zeeyawnl7" className="text-neutral-400 hover:text-white transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                                <Twitter size={20} />
                            </a>
                            <a href="https://github.com/zeeyawnl/" className="text-neutral-400 hover:text-white transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/zeeyawnl/" className="text-neutral-400 hover:text-white transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>

                            <a href="https://pin.it/7cKytOKaz" className="text-neutral-400 hover:text-white transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.427 2.977 7.427 6.953 0 4.156-2.617 7.502-6.252 7.502-1.222 0-2.373-.635-2.768-1.385l-.754 2.871c-.273 1.041-1.015 2.345-1.509 3.141 1.141.353 2.346.545 3.593.545 6.607 0 11.966-5.368 11.966-11.989C23.95 5.367 18.591 0 12.017 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links & Info (Right Columns) */}
                    <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-6 pt-2">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-white font-semibold text-[15px] tracking-wide">Address</h4>
                            <div className="flex flex-col gap-3">
                                <p className="text-[#a1a1aa] text-sm leading-relaxed font-light">Byculla, Mumbai. India.</p>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed font-light">Camp Pune, India.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="text-white font-semibold text-[15px] tracking-wide">Email Address</h4>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:zeeya21.tech@gmail.com" className="text-[#a1a1aa] text-sm font-light hover:text-white transition-colors">zeeya21.tech@gmail.com</a>
                                <a href="mailto:notzeeya@gmail.com" className="text-[#a1a1aa] text-sm font-light hover:text-white transition-colors">notzeeya@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="text-white font-semibold text-[15px] tracking-wide">Phone Number</h4>
                            <div className="flex flex-col gap-3">
                                <p className="text-[#a1a1aa] text-sm font-light">+91 7823842448</p>

                            </div>
                        </div>
                    </div>

                </div>



                {/* Final Divider & Copyright */}
                <div className="w-full h-px bg-white/[0.08] mb-8"></div>
                <div className="flex justify-center">
                    <p className="text-[#a1a1aa] text-[13px] tracking-wide font-light">
                        All rights reserved @<span className={myFont.className}>ZEEYAWNL</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
