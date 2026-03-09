
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
