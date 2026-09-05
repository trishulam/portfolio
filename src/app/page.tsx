import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Band } from "@/components/Band";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Band />
        <Experience />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
