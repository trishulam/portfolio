'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export function Hero() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Let&rsquo;s Connect - Portfolio Inquiry');
    const body = encodeURIComponent('Hi Vamsi,\n\nI came across your portfolio and would love to discuss opportunities. Looking forward to connecting!\n\nBest regards,');
    window.location.href = `mailto:nkvk@seas.upenn.edu?subject=${subject}&body=${body}`;
    
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
      className="gradient-bg min-h-screen flex items-center relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl animate-float glow-accent"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-success/10 to-success/5 rounded-full blur-3xl animate-float glow-success" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 via-success/6 to-accent/8 rounded-full blur-3xl animate-rotate-slow"></div>
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-success/15 to-success/10 border border-success/30 rounded-full text-success-light text-sm font-medium backdrop-blur-sm glow-success fade-in-scale">
            <div className="w-2 h-2 bg-success rounded-full animate-bounce-subtle shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
            Available for opportunities
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight slide-in-left">
              Hi, I&rsquo;m{' '}
              <span className="text-gradient animate-gradient">
                Vamsi Krishna
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-text leading-relaxed slide-in-right">
              AI Engineer & Full-Stack Developer
            </div>
            
            <p className="text-lg lg:text-xl text-text-2 max-w-3xl mx-auto leading-relaxed fade-in-up">
              I build <span className="text-accent-light font-semibold">production-grade AI systems</span> and{' '}
              <span className="text-success-light font-semibold">agentic RAG solutions</span> that deliver real business impact.
              Ready to ship from day one.
            </p>
          </div>


          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 fade-in-up">
            <Button
              size="lg"
              onClick={handleEmailClick}
              className="cursor-pointer bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-bg font-semibold px-8 py-4 text-base btn-hover glow-accent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let&rsquo;s Connect
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleResumeClick}
              className="cursor-pointer border-2 border-accent/40 bg-gradient-to-r from-surface/50 to-surface/30 text-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 hover:text-accent-light hover:border-accent/60 font-semibold px-8 py-4 text-base btn-hover backdrop-blur-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
