"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Project Data
// Update "image" and "link" fields with your actual local photos and URLs
const projects = [
    {
        id: 1,
        title: "Logisync",
        category: "Full Stack Application to manage data",
        link: "https://logisync-smoky.vercel.app/",
        image: "/images/logisync.png",
    },
    {
        id: 2,
        title: "OMR Scanner",
        category: "Software to generate OMR results",
        link: "https://github.com/zeeyawnl/omr-scanner",
        image: "/images/omrscanner.png",
    },
    {
        id: 3,
        title: "IQRA DWIJ",
        category: "Website for a Donation Campaign",
        link: "https://www.iqradwijfoundation.com/",
        image: "/images/dwij.png",
    },
    {
        id: 4,
        title: "BigData Website",
        category: "Website for a EdTech Company",
        link: "https://hadoop-website.vercel.app/",
        image: "/images/bigdata.png",
    },
    {
        id: 5,
        title: "Gaming Website",
        category: "Reinforcement Learning Game Project",
        link: "https://zeeyawnl.github.io/RL_Website/",
        image: "/images/reinforment.png",
    },
    {
        id: 6,
        title: "IQRA IAS Courses",
        category: "Website to launch new courses",
        link: "https://iqra-ias-newcourses.vercel.app/",
        image: "/images/newcourse.png",
    },
];

export default function Project() {
    return (
        <section id="projects" className="bg-black text-white py-24 md:py-32 w-full font-[family-name:var(--font-encode)] border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Header Section from Reference */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center justify-center border border-gray-700/60 bg-white/5 rounded-full px-5 py-2 text-sm font-medium mb-8 text-gray-300 font-[family-name:var(--font-myfont)]">
                            Portfolio
                        </div>
                        {/* Main Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.1] text-white font-[family-name:var(--font-myfont)]"
                        >
                            Explore my portfolio of <br className="hidden md:block" />
                            creative solutions
                        </motion.h2>
                    </div>

                    {/* Right Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:max-w-xs lg:max-w-sm mt-8 md:mt-24 text-gray-400 text-base md:text-lg leading-relaxed pt-2"
                    >
                        Explore my portfolio full of creative solutions designed to drive performance and user engagement.
                    </motion.div>
                </div>

                {/* Projects Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col"
                        >
                            {/* Image Card Container wrapped in Link (Clickable) */}
                            <Link
                                href={project.link}
                                target="_blank"
                                className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0d0d0d] mb-5 border border-gray-800 shadow-xl group-hover:border-gray-500 transition-colors duration-500"
                            >
                                {/* Fallback pattern in case image is missing */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 z-0"></div>

                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                    // Automatically uses placeholder svg if you don't have the image file yet
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect fill="%231a1a1a" width="800" height="600"/><circle cx="400" cy="270" r="40" fill="%23333" /><text fill="%23555555" font-family="sans-serif" font-size="20" dy="8" font-weight="500" x="50%" y="60%" text-anchor="middle">Image Placeholder</text></svg>';
                                    }}
                                />

                                {/* Premium Hover Overlay Icon */}
                                <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-2xl">
                                    <ArrowUpRight className="text-white w-5 h-5" />
                                </div>
                            </Link>

                            {/* Project Info Underneath */}
                            <div className="flex flex-col">
                                <Link href={project.link} target="_blank" className="hover:opacity-80 transition-opacity">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white font-[family-name:var(--font-myfont)] mb-1 group-hover:text-gray-200 transition-colors">
                                        {project.title}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-gray-400 text-sm md:text-base tracking-wide">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
