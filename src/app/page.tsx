'use client';

import { useState, useEffect } from 'react';
// Note: UI components are imported in individual section components

// Components
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { ProjectsTeaser } from '@/components/sections/ProjectsTeaser';
import { QuickProof } from '@/components/sections/QuickProof';
import { Experience } from '@/components/sections/Experience';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        {/* <FeaturedWork /> */}
        <ProjectsTeaser />
        <QuickProof />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}