'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink, Download, MapPin, Clock } from 'lucide-react';

const footerNavItems = [
  { id: 'home', label: 'Home', section: 'hero' },
  { id: 'about', label: 'About', section: 'about' },
  { id: 'work', label: 'Experience', section: 'experience' },
  { id: 'projects', label: 'Projects', section: 'projects' },
  { id: 'contact', label: 'Contact', section: 'contact' },
  { id: 'resume', label: 'Resume', section: 'resume' },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/trishulam',
    ariaLabel: 'View my GitHub profile',
    description: 'Open source projects'
  },
  {
    name: 'LinkedIn', 
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/vamsikrishnank/',
    ariaLabel: 'Connect with me on LinkedIn',
    description: 'Professional network'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:nkvk@engineering.upenn.edu',
    ariaLabel: 'Send me an email',
    description: 'Direct contact'
  }
];

const quickLinks = [
  {
    name: 'Download Resume',
    icon: Download,
    url: '/resume.pdf',
    external: false,
    description: 'Latest CV (PDF)'
  },
  {
    name: 'View Projects',
    icon: ExternalLink,
    action: 'scroll',
    target: 'projects',
    description: 'Featured work'
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuickLinkClick = (link: typeof quickLinks[0]) => {
    if (link.action === 'scroll' && link.target) {
      scrollToSection(link.target);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-surface via-surface-2 to-surface-3 border-t border-border-accent/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand & About Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-3">
                  N K Vamsi Krishna
                </h3>
                <p className="text-text-2 leading-relaxed max-w-md">
                  AI & Full-Stack Engineer at S2T AI, MSE Data Science student at UPenn. 
                  Founder of Vessel Match. Building production-grade agentic systems 
                  and RAG applications that solve real-world problems.
                </p>
              </div>
              
              {/* Location & Availability */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm text-text-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Philadelphia, PA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>EST Timezone</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-text mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target={link.name !== 'Email' ? '_blank' : undefined}
                        rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                        aria-label={link.ariaLabel}
                        className="group relative"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-surface-2/80 to-surface-3/80 border border-border hover:border-accent/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 backdrop-blur-sm">
                          <IconComponent className="w-5 h-5 text-text-2 group-hover:text-accent transition-colors duration-300" />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-border rounded-lg text-xs text-text-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {link.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-surface border-r border-b border-border rotate-45 -mt-1" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Navigation Column */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent-light rounded-full" />
                  Quick Navigation
                </h4>
                <nav className="space-y-2">
                  {footerNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.section)}
                      className="block text-sm text-text-2 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact & Actions Column */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-success to-success-light rounded-full" />
                  Get In Touch
                </h4>
                <p className="text-sm text-text-2 mb-4 leading-relaxed">
                  Open to new opportunities and interesting conversations. 
                  Let&apos;s build something amazing together.
                </p>
                
                {/* Contact CTA Button */}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-accent to-accent-light text-bg hover:from-accent-light hover:to-accent font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 mb-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>

              {/* Quick Actions */}
              <div>
                <h5 className="font-medium text-text-2 mb-3 text-sm">Quick Actions</h5>
                <div className="space-y-2">
                  {quickLinks.map((link) => {
                    const IconComponent = link.icon;
                    return link.url ? (
                      <a
                        key={link.name}
                        href={link.url}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <button
                        key={link.name}
                        onClick={() => handleQuickLinkClick(link)}
                        className="flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{link.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="w-full text-text-2 hover:text-accent hover:bg-surface-2/50 border border-border hover:border-accent/30 rounded-xl transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-2 text-center md:text-left">
              <p className="mb-1">
                © {new Date().getFullYear()} N K Vamsi Krishna. All rights reserved.
              </p>
              <p className="text-xs text-text-3">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-2/50 border border-border rounded-full backdrop-blur-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-success rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-xs text-text-2">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
