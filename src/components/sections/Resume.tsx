'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export function Resume() {
  const handleOpenResumeClick = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
    
    // Analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: Record<string, string>) => void }).gtag;
      gtag('event', 'resume_open_tab', {
        event_category: 'engagement',
        event_label: 'resume_section'
      });
    }
  };

  return (
    <section
      id="resume"
      className="min-h-screen pt-20 pb-8 bg-surface/20"
      aria-label="Resume and CV"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Résumé
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            Complete overview of my experience, education, and technical background 
            in a traditional format for your records.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="surface">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-accent">
                Professional Resume
              </CardTitle>
              <p className="text-text-2">
                Updated {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Action Button */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handleOpenResumeClick}
                  className="bg-accent text-bg hover:bg-accent/90 font-semibold px-8 py-3 btn-hover"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
              </div>

              {/* Resume Summary/Highlights */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <h3 className="font-semibold text-accent mb-3">Quick Highlights</h3>
                  <ul className="space-y-2 text-sm text-text-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      MSE Data Science student at University of Pennsylvania
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Software Engineer at S2T AI building production RAG systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Founded Vessel Match startup with ₹7L funding + incubation
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Published IEEE research + Winner of multiple hackathons
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Teaching Assistant for CIS 5150 at UPenn
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-accent mb-3">Contact for References</h3>
                  <p className="text-sm text-text-2 leading-relaxed">
                    Professional references from former colleagues, managers, 
                    and collaborators available upon request. Happy to provide 
                    specific examples of code, architecture decisions, and 
                    project outcomes.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Note about customization */}
          <div className="text-center mt-8">
            <p className="text-sm text-text-2">
              Need a role-specific version? I can provide a tailored resume 
              highlighting relevant experience for your position.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
