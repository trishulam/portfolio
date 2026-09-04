'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export function Hero() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Hello from your portfolio');
    const body = encodeURIComponent('Hi Vamsi,\n\nI came across your portfolio and wanted to reach out.\n\nBest regards,');
    window.location.href = `mailto:nkvk@engineering.upenn.edu?subject=${subject}&body=${body}`;
    
    // Analytics event
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('event', 'cta_email_click', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
  };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
    
    // Analytics event
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('event', 'cta_resume_click', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/trishulam', '_blank', 'noopener,noreferrer');
    
    // Analytics event
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('event', 'cta_github_click', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bg via-bg-secondary to-surface"
      aria-label="Hero section - Vamsi Krishna Portfolio"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-success/15 via-success/8 to-transparent rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 sm:mb-12 fade-in-scale">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-success/10 via-success/5 to-success/10 border border-success/20 rounded-full text-success-light font-medium backdrop-blur-md shadow-lg hover:shadow-success/20 transition-all duration-300 hover:scale-105 group"
              role="status"
              aria-label="Current availability status"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse shadow-[0_0_12px_rgba(0,230,118,0.6)]"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-success rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide">Open to 2027 new grad roles</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8 sm:space-y-12">
            {/* Heading */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight slide-in-left">
                <span className="block text-text mb-2 sm:mb-4">Hi, I&rsquo;m</span>
                <span className="block text-gradient animate-gradient bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Vamsi Krishna
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-text-2 leading-tight slide-in-right max-w-4xl mx-auto">
                I build ML systems and AI agents
              </h2>
            </div>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto fade-in-up">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-text-2 leading-relaxed font-light">
                MSE Data Science at Penn. Spent summer 2026 at{' '}
                <span className="text-accent-light font-semibold px-2 py-1 bg-accent/10 rounded-md border border-accent/20">
                  Google
                </span>
                {' '}building safety classifiers for YouTube&rsquo;s generative AI, now at{' '}
                <span className="text-success-light font-semibold px-2 py-1 bg-success/10 rounded-md border border-success/20">
                  Amazon AGI
                </span>
                {' '}on ML infrastructure. I care about continual learning, model merging, and agents that hold up in production.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12 fade-in-up">
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-bg font-semibold px-8 py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border-0 min-w-[200px] modern-button-primary"
                aria-label="Send email to connect with Vamsi Krishna"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 mr-3 relative z-10 group-hover:animate-bounce-subtle transition-transform duration-300" />
                <span className="relative z-10 tracking-wide">Let&rsquo;s Connect</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleResumeClick}
                className="group relative overflow-hidden border-2 border-accent/30 bg-gradient-to-r from-surface/80 to-surface/60 text-accent hover:text-accent-light hover:border-accent/60 font-semibold px-8 py-4 text-base sm:text-lg rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 min-w-[200px] modern-button-secondary"
                aria-label="Download and view resume PDF"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/8 to-accent/15 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-45deg from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 mr-3 relative z-10 group-hover:animate-bounce-subtle transition-transform duration-300" />
                <span className="relative z-10 tracking-wide">View Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
