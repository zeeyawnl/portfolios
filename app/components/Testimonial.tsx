"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
    return (
        <section className="relative w-full py-24 sm:py-32 flex items-center justify-center overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center relative"
                >
                    {/* Vast Background Quote Mark for "Spice" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[350px] md:text-[450px] leading-none font-serif text-white/[0.03] select-none pointer-events-none z-0">
                        &#8220;
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-300 italic max-w-4xl mx-auto leading-relaxed tracking-wide mb-10 sm:mb-14">
                            "Without Zeeya, we would never had been able to implement this system ourselves. Being a small team we don't have enough hours in the day.<br /><br />
                            Zeeya along with IQRA IAS team researched our brand, planned the content and provided clean and UI friendly websites, optimization and weekly feedback to improve the performance. The results have been amazing and we couldn't ask for a better partner."
                        </h3>

                        {/* Extravagant Divider Line */}
                        <div className="flex items-center justify-center w-full mb-10 sm:mb-14 relative">
                            <div className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            {/* glowing dot */}
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.8)] relative z-10"></div>
                        </div>

                        {/* Author Info with modern Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="inline-flex items-center justify-center gap-4 sm:gap-5 bg-white/[0.03] border border-white/[0.05] py-2.5 px-6 rounded-full backdrop-blur-md shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-white/[0.06] cursor-pointer"
                        >
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 ring-offset-1 ring-offset-transparent">
                                <img
                                    src="/images/faisalsirgemini.png"
                                    alt="Faisal Shah"
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>
                            <div className="text-left flex flex-col justify-center">
                                <h4 className="text-white font-medium text-base sm:text-lg tracking-wide leading-tight mb-1">Faisal Shah</h4>
                                <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wide leading-tight">Founder, IQRA IAS</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
