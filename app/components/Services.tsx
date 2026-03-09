"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type ServiceInfo = {
    title: string;
    description: string;
    isDark?: boolean;
};

const services: ServiceInfo[] = [
    {
        title: "Website Design",
        description:
            "High-performance, responsive websites designed to engage users and convert visitors into customers.",
    },
    {
        title: "SEO Optimization",
        description:
            "Improve search rankings and drive consistent organic traffic with proven SEO strategies.",
    },
    {
        title: "Market & Product Analysis",
        description:
            "Data-driven research to understand your market, competitors, and the best positioning for your product.",
        isDark: true,
    },
    {
        title: "Social Media Ads",
        description:
            "Targeted ad campaigns that reach the right audience and generate measurable leads and sales.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 15,
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="bg-black text-white py-16 md:py-24 lg:py-32 w-full mx-auto overflow-hidden relative border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Content */}
                <div className="lg:w-1/3 flex flex-col items-start font-[family-name:var(--font-myfont)]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="border border-gray-700/60 bg-white/5 rounded-full px-5 py-2 text-sm md:text-base font-medium mb-8 flex items-center gap-2 tracking-wide text-gray-300"
                    >
                        Services
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold mb-6 tracking-tight text-white drop-shadow-sm"
                    >
                        Comprehensive look at what we offer and how we deliver
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block text-gray-400 font-[family-name:var(--font-encode)] text-base md:text-lg max-w-sm mb-10 leading-relaxed"
                    >
                        Discover our full suite of expertise and the streamlined execution model we use to transform your vision into reality.
                    </motion.p>

                    <motion.a
                        href="tel:7823842448"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-black rounded-full px-8 py-3.5 font-[family-name:var(--font-encode)] font-medium text-lg hover:bg-gray-200 transition-colors shadow-lg cursor-pointer"
                    >
                        Schedule a Call
                    </motion.a>
                </div>

                {/* Right Content - Grid Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-300 min-h-[320px] md:min-h-[360px] cursor-pointer overflow-hidden backdrop-blur-sm ${service.isDark
                                ? "bg-[#FAFAFA] border-gray-200 text-gray-900 shadow-sm hover:shadow-lg hover:shadow-white/5"
                                : "bg-gradient-to-br from-[#111] to-[#0a0a0a] border-[#222] text-white shadow-xl hover:shadow-2xl hover:border-[#333]"
                                }`}
                        >
                            {/* Abstract Rings for Dark Card (which is now light in dark mode) */}
                            {service.isDark && (
                                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] hover:opacity-[0.06] transition-opacity">
                                    <svg className="absolute w-[150%] h-[150%] right-[-30%] top-[-30%]" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMin slice">
                                        <circle cx="300" cy="150" r="100" stroke="black" strokeWidth="2" fill="none" />
                                        <circle cx="380" cy="80" r="120" stroke="black" strokeWidth="2" fill="none" />
                                        <circle cx="250" cy="280" r="80" stroke="black" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                            )}

                            {/* Decorative Line */}
                            <div
                                className={`w-12 h-[2px] mb-8 ${service.isDark ? "bg-gray-400/60" : "bg-white/40"}`}
                            />

                            <h3
                                className="text-2xl md:text-3xl lg:text-[28px] font-semibold mb-4 leading-tight whitespace-pre-line font-[family-name:var(--font-myfont)] relative z-10"
                            >
                                {service.title}
                            </h3>

                            <p
                                className={`text-sm md:text-base leading-relaxed font-[family-name:var(--font-encode)] relative z-10 pr-4 ${service.isDark ? "text-gray-600" : "text-gray-400"
                                    }`}
                            >
                                {service.description}
                            </p>

                            {/* Arrow Icon positioned at bottom right */}
                            <div className="mt-auto self-end relative z-10 pt-8">
                                {service.isDark ? (
                                    <ArrowRight className="w-8 h-8 text-gray-800 stroke-[1.5]" />
                                ) : (
                                    <ArrowUpRight className="w-8 h-8 text-white stroke-[1.5]" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
