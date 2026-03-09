"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "SEO Analyst at IQRA IAS",
        description: "Leading campaign-based SEO initiatives, leveraging tools like Google Analytics and Google Tag Manager to increase online visibility, and contributing to the development of SPA-based websites to improve content navigation and user engagement.",
        years: "2026",
        date: "Jan 2026"
    },
    {
        role: "Full-Stack Engineer at The Office Solutions",
        description: "Developing scalable web applications using JavaScript and React, collaborating with cross-functional teams to translate business requirements into technical solutions, and optimizing applications for performance and SEO.",
        years: "2025",
        date: "May 2025 – Present"
    },
    {
        role: "Web Developer Intern at The Office Solutions",
        description: "Focusing on frontend improvements and responsive UI development.",
        years: "2025",
        date: "Feb 2025 – May 2025"
    },
    {
        role: "Product Analyst Intern at Junnar Agrotech",
        description: "Market and competitor analysis, identifying product opportunities through data insights, documenting bugs, and coordinating closely with development teams to improve product quality.",
        years: "2024",
        date: "Aug 2024 – Dec 2024"
    },
    {
        role: "Frontend Intern at TechnoHacks",
        description: "Building responsive user interfaces and strengthening core web development skills in HTML, CSS, JavaScript, and React.",
        years: "2024",
        date: "Nov 2024 – Feb 2024"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="bg-black text-white py-24 md:py-32 w-full font-[family-name:var(--font-encode)] border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-28">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center justify-center border border-gray-700/60 bg-white/5 rounded-full px-5 py-2 text-sm font-medium mb-8 text-gray-300 font-[family-name:var(--font-myfont)]">
                            Experience
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-white font-[family-name:var(--font-myfont)]"
                        >
                            A Yearly snapshot of my <br className="hidden md:block" />
                            career growth
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block md:max-w-xs lg:max-w-sm mt-8 md:mt-24 text-gray-400 text-base md:text-lg leading-relaxed pt-2"
                    >
                        An annual summary that summarizes my professional journey and development throughout the years.
                    </motion.div>
                </div>

                {/* Experience List Container */}
                <div className="flex flex-col border-t border-gray-800">
                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="group flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-800 py-10 md:py-14 transition-all duration-300 hover:bg-[#0a0a0a] px-4 -mx-4 sm:px-8 sm:-mx-8 rounded-2xl md:rounded-3xl cursor-default"
                        >
                            {/* Left Side: Role & Description */}
                            <div className="lg:w-7/12 lg:pr-12 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-medium mb-3 md:mb-4 text-white font-[family-name:var(--font-myfont)] group-hover:text-gray-100 transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 lg:mb-0 max-w-2xl">
                                    {exp.description}
                                </p>
                                {/* Mobile/Tablet Date Tag */}
                                <span className="lg:hidden text-xs font-semibold uppercase tracking-widest text-gray-500 mt-2 block">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Right Side: Large Years text */}
                            <div className="lg:w-5/12 flex lg:justify-end mt-6 lg:mt-0 relative z-10">
                                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-gray-300 group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-myfont)]">
                                    {exp.years}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
