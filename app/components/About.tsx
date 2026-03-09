"use client";

import { motion, Variants } from 'framer-motion';
import { MapPin, User, Activity, Code2, LineChart, Globe } from 'lucide-react';

const AboutSection = () => {
    // Basic Framer Motion variants for staggered elements
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
        hidden: { opacity: 0, y: 20 },
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

    return (
        <section
            id="about"
            className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24 border-t border-gray-900"
        >
            {/* Background Image Setup */}
            <div
                className="absolute inset-0 z-0 opacity-100 mix-blend-lighten"
                style={{
                    backgroundImage: `url('/images/aboutmebg.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    filter: "grayscale(50%)", // Keep it dark and thematic
                }}
            />

            {/* Dark gradient overlay to ensure text contrast and fade edges */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex flex-col items-start"
                >
                    <div className="border border-gray-700/60 bg-white/5 rounded-full px-5 py-2 text-sm font-medium mb-6 flex items-center gap-2 text-gray-300 font-[family-name:var(--font-myfont)]">
                        About Me
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-white drop-shadow-sm font-[family-name:var(--font-myfont)] max-w-3xl">
                        Merging Engineering Precision <br />
                        <span className="text-gray-500">with Strategic Insight.</span>
                    </h2>
                </motion.div>

                {/* Modern Bento Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[auto]"
                >
                    {/* Main Intro Card - Spans 2 cols */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 lg:col-span-2 relative p-8 rounded-[2rem] border border-[#222] bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col justify-end overflow-hidden group min-h-[300px]"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                            <Code2 size={120} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white z-10 font-[family-name:var(--font-myfont)]">
                            Full Stack Engineer & Researcher
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-encode)] z-10 max-w-md">
                            I am a Computer Engineering graduate redefining the digital landscape by bridging technical architecture and business growth. I don’t just build interfaces; I architect scalable systems designed for discoverability and high-volume engagement.
                        </p>
                    </motion.div>

                    {/* Personal Stats Card */}
                    <motion.div
                        variants={itemVariants}
                        className="p-8 md:col-span-1 lg:col-span-1 rounded-[2rem] border border-[#222] bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
                            <User size={24} />
                        </div>
                        <div>
                            <div className="space-y-4 font-[family-name:var(--font-encode)]">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-gray-500">Role</span>
                                    <span className="text-gray-200"> Web Architect</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-gray-500">Age</span>
                                    <span className="text-gray-200">22</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Stack</span>
                                    <span className="text-gray-200">MERN </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        variants={itemVariants}
                        className="p-8 md:col-span-3 lg:col-span-1 border border-[#222] rounded-[2rem] bg-gradient-to-br from-[#111] to-[#050505] relative overflow-hidden flex flex-col justify-between"
                    >
                        {/* Map decorative element */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

                        <div className="flex items-center gap-3 relative z-10 text-gray-400 mb-8 font-[family-name:var(--font-encode)] top-0">
                            <MapPin size={20} className="text-white" />
                            <span>Based In</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-semibold text-white font-[family-name:var(--font-myfont)]">Mumbai</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-500/80 text-sm font-medium">Available for work</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scale Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 lg:col-span-2 p-8 border border-[#222] rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col justify-between group"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h4 className="text-5xl font-semibold text-white mb-2 font-[family-name:var(--font-myfont)]">50,000+</h4>
                            <p className="text-gray-400 font-[family-name:var(--font-encode)]">
                                Monthly active users served across the applications I actively maintain & deploy, ensuring near-zero downtime and highly optimized conversion paths.
                            </p>
                        </div>
                    </motion.div>

                    {/* Speciality Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 lg:col-span-2 p-8 border border-gray-200 rounded-[2rem] bg-[#FAFAFA] text-black flex flex-col justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <LineChart size={240} strokeWidth={1} className="text-black" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm text-sm font-medium mb-6">
                                <Globe size={16} /> Strategy
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-[family-name:var(--font-myfont)] text-gray-900 pr-8">
                                SEO & Market Research Analyst
                            </h3>
                            <p className="text-gray-600 font-[family-name:var(--font-encode)] max-w-md leading-relaxed">
                                I translate complex market data into streamlined user experiences. My dual-faceted expertise means my digital products aren't just beautifully coded—they perform, rank, and move metrics.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>


            </div>
        </section>
    );
};

export default AboutSection;