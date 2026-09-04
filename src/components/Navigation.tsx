'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Home,
  User,
  Grid3X3,
  Briefcase,
  FileText,
  Mail,
  X,
  ChevronRight
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Grid3X3 },
  { id: 'research', label: 'Research', icon: FileText },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLDivElement>(null);

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

  // Swipe to close functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isMobileMenuOpen) return;

    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Focus management
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Focus the first focusable element when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    }
  }, [isMobileMenuOpen]);

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

        {/* Mobile Navigation Drawer - Modal Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop with blur effect */}
          <div
            className={`absolute inset-0 bg-bg/40 backdrop-blur-md transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Modal Drawer */}
          <div
            ref={drawerRef}
            className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-surface/95 to-surface-2/95
              backdrop-blur-xl border-l border-border-accent/50 shadow-2xl
              transform transition-all duration-500 ease-out
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{
              background: 'linear-gradient(135deg, rgba(19, 26, 47, 0.95) 0%, rgba(26, 33, 56, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 255, 0.1)'
            }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-border-accent/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <span className="text-bg font-bold text-sm">V</span>
                </div>
                <span className="text-lg font-semibold text-text">Navigation</span>
              </div>
              
              <button
                ref={firstFocusableRef}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-surface-2/50 border border-border-accent/30
                  flex items-center justify-center text-text-2 hover:text-accent hover:border-accent/50
                  transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50
                  backdrop-blur-sm"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-4 py-6 overflow-y-auto">
              <nav className="space-y-2" role="navigation" aria-label="Main navigation">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative w-full flex items-center gap-4 px-4 py-4 text-left
                        rounded-xl transition-all duration-300 ease-out min-h-[48px]
                        hover:bg-gradient-to-r hover:from-surface-2/60 hover:to-surface-3/40
                        hover:backdrop-blur-sm hover:scale-[1.02] hover:shadow-lg
                        focus:bg-gradient-to-r focus:from-surface-2/60 focus:to-surface-3/40
                        focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-transparent
                        active:scale-95
                        ${isActive
                          ? 'bg-gradient-to-r from-accent/20 to-accent-light/10 text-accent border border-accent/30 shadow-lg glow-accent'
                          : 'text-text-2 hover:text-text border border-transparent'
                        }
                      `}
                      style={{
                        animationDelay: `${index * 80}ms`,
                        animation: isMobileMenuOpen ? 'slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 transition-all duration-300 ${
                        isActive ? 'text-accent' : 'text-text-3 group-hover:text-accent'
                      }`}>
                        <IconComponent className="w-full h-full" />
                      </div>
                      
                      {/* Label */}
                      <span className="font-medium text-lg flex-1">{item.label}</span>
                      
                      {/* Active indicator & Arrow */}
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        )}
                        <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                          isActive ? 'text-accent translate-x-1' : 'text-text-3 group-hover:text-accent group-hover:translate-x-1'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Stats/Metrics Section */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-surface-2/40 to-surface-3/30 border border-border-accent/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center">
                    <div className="text-accent font-bold text-lg">5+</div>
                    <div className="text-text-3">Projects</div>
                  </div>
                  <div className="w-px h-8 bg-border-accent/30"></div>
                  <div className="text-center">
                    <div className="text-accent font-bold text-lg">3+</div>
                    <div className="text-text-3">Years Exp</div>
                  </div>
                  <div className="w-px h-8 bg-border-accent/30"></div>
                  <div className="text-center">
                    <div className="text-success font-bold text-lg">Available</div>
                    <div className="text-text-3">Status</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Theme Toggle */}
            <div className="p-4 border-t border-border-accent/30 bg-gradient-to-r from-surface/50 to-surface-2/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-text-2 font-medium">Theme</span>
                </div>
                <div ref={lastFocusableRef}>
                  <ThemeToggle />
                </div>
              </div>
              
              {/* Copyright */}
              <div className="mt-3 pt-3 border-t border-border-accent/20">
                <p className="text-xs text-text-3 text-center">
                  © 2024 Vamsiverse. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
