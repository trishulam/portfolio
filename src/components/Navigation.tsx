'use client';

import { useState, useEffect } from 'react';
// Button component imported but used in ThemeToggle
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  // { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Optimal offset for navbar spacing without spillover
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-bg/95 border-b border-border-accent shadow-lg' : 'bg-bg/95 border-b border-border-accent'
      }`}
    >
      <nav className="container-custom" aria-label="Primary navigation">
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-3 items-center py-4">
          {/* Empty spacer for left column */}
          <div></div>
          
          {/* Centered navigation links */}
          <div className="flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:bg-gradient-to-r hover:from-surface/60 hover:to-surface/40 hover:backdrop-blur-sm hover:text-accent-light hover:shadow-lg
                  focus:scale-105 focus:bg-gradient-to-r focus:from-surface/60 focus:to-surface/40 focus:text-accent-light focus:outline-none focus:ring-2 focus:ring-accent/50
                  active:scale-95
                  ${activeSection === item.id ? 'text-accent bg-gradient-to-r from-surface/50 to-surface/30 shadow-md glow-accent' : 'text-text-2'}
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full animate-in slide-in-from-bottom duration-300 glow-accent" />
                )}
              </button>
            ))}
          </div>
          
          {/* Theme toggle on the right */}
          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-4">
          {/* Logo/Brand space */}
          <div className="text-lg font-bold text-accent ml-4">Portfolio</div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="relative z-50 p-3 mr-4 rounded-lg bg-surface border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-lg"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-accent transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-accent transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-accent transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu - Full Screen Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
        >
          {/* Full viewport solid background */}
          <div className="absolute inset-0 bg-bg" style={{ backgroundColor: 'var(--bg)' }} />
          
          {/* Menu content */}
          <div className="relative h-full flex flex-col">
            {/* Header space to account for fixed navbar */}
            <div className="h-20"></div>
            
            {/* Menu items container */}
            <div className="flex-1 px-6 py-8">
              <div className="flex flex-col space-y-4">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-full text-left px-6 py-4 text-lg font-medium rounded-xl cursor-pointer
                      transition-all duration-300 ease-in-out
                      hover:bg-gradient-to-r hover:from-surface/60 hover:to-surface/40 hover:backdrop-blur-sm hover:text-accent-light hover:shadow-lg hover:scale-[1.02]
                      focus:bg-gradient-to-r focus:from-surface/60 focus:to-surface/40 focus:text-accent-light focus:outline-none focus:ring-2 focus:ring-accent/50
                      active:scale-95
                      ${activeSection === item.id ? 'text-accent bg-gradient-to-r from-surface/50 to-surface/30 shadow-md glow-accent' : 'text-text'}
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? 'slide-in-left 0.5s ease-out forwards' : 'none'
                    }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-accent to-accent-light rounded-full glow-accent" />
                    )}
                  </button>
                ))}
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-border-accent">
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text font-medium text-lg">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
