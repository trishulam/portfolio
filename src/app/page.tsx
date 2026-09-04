import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-5 sm:px-6">
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
      <Reveal />
    </>
  );
}
