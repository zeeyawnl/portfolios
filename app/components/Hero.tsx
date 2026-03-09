"use client";

import LightRays from "./Bglight";
import Link from "next/link";
import ShinyText from "./ShinyText";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">

      {/* WebGL Background */}
      <LightRays
        className="absolute inset-0"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={2.2}
        rayLength={4.2}
        pulsating={true}
        fadeDistance={2.2}
        saturation={0.2}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.15}
        distortion={0.6}
      />

      {/* Soft Gradient Overlay (Luxury Depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 h-full w-full" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">

        <p className=" text-sm tracking-[0.3em] uppercase text-gray-300 mb-6 mt-18 md:mt-6">
          Product Designer & Frontend Engineer
        </p>
        <h1 className="text-5xl mt-8 md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight">
          Where Design Meets
          <ShinyText
            text="STRATEGY & PERFORMANCE"
            speed={7}
            className="
    block uppercase
    bg-gradient-to-r from-gray-400 via-white to-gray-400
    bg-clip-text text-transparent
  "
            color="transparent"
            shineColor="#ffffff"
            spread={35}

          />
        </h1>
        <p className="mt-10 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
          Hi, I am ZEEYA and I craft scalable digital experiences backed by SEO strategy, product research, and performance analytics to drive measurable growth.
        </p>

        <div className="mt-10 mb-10 md:mb-2 flex flex-row items-center justify-center gap-3 sm:gap-4">

          <Link
            href="#projects"
            className="whitespace-nowrap px-6 sm:px-8 py-3 rounded-full bg-white text-black font-medium text-sm sm:text-base transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            View Work
          </Link>

          <Link
            href="#contact"
            className="whitespace-nowrap px-6 sm:px-8 py-3 rounded-full border border-gray-600 text-gray-300 text-sm sm:text-base font-medium transition-all hover:border-white hover:text-white hover:bg-white/5 active:scale-95"
          >
            Contact Me
          </Link>

        </div>


      </div>


    </section>


  );
}