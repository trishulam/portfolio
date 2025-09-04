'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const footerNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/trishulam',
    ariaLabel: 'View my GitHub profile'
  },
  {
    name: 'LinkedIn', 
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/vamsikrishnank/',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:nkvk@seas.upenn.edu',
    ariaLabel: 'Send me an email'
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

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left - Signature & Brief */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                N K Vamsi Krishna
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">
                AI & Full-Stack Engineer at S2T AI, MSE Data Science student at UPenn. 
                Founder of Vessel Match. Building production-grade agentic systems 
                and RAG applications.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={link.ariaLabel}
                    className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Center - Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Quick Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-text-2 hover:text-accent text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right - Contact & Back to Top */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-text mb-2">Get In Touch</h4>
              <p className="text-sm text-text-2 mb-3">
                Open to new opportunities and interesting conversations.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="border-accent text-accent hover:bg-accent/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-text-2 hover:text-accent"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex justify-center items-center">
          <div className="text-sm text-text-2">
            <p>
              © {new Date().getFullYear()} N K Vamsi Krishna
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
