
import Navbar from "./components/Navbar";
import Bglight from "./components/Bglight";

import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Bglight
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.8}
          lightSpread={1.5}
          rayLength={3.2}
          fadeDistance={1.5}
          mouseInfluence={0.15}
          noiseAmount={0.12}
          saturation={0.9}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div>
          <Navbar />
          <Hero />
        </div>
        <Services />
        <About />
        <Experience />
        <Project />
        <Testimonial />
        <Footer />
      </div>

    </main>
  );
}
