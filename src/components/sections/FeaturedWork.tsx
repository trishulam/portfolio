'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  context: string;
  role: string;
  stack: string[];
  architecture: string[];
  impact: string[];
  next: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "s2t-ai-investigations",
    title: "AI-Powered Investigation Platform",
    context: "Built Knowledge Graph-RAG microservice and Agentic AI Chat Assistant with Generative UI for semantic search over documents and databases at S2T AI.",
    role: "Software Engineer - Full-stack development of AI microservices, React microfrontends, and API development across 8 Kubernetes microservices.",
    stack: ["Python", "React", "Tailwind CSS", "FastAPI", "Kubernetes", "Azure DevOps", "Vector DB", "Graph DB", "RAG", "Generative UI"],
    architecture: [
      "Knowledge Graph-RAG microservice for semantic search",
      "Agentic AI Chat Assistant with industry-compliant Generative UI",
      "AI ETL service for NL queries on semi/unstructured data",
      "8 Kubernetes microservices deployed via Azure DevOps"
    ],
    impact: [
      "Enhanced audio spoofing detection accuracy by 15%",
      "Achieved 100% automation for document search workflows",
      "Implemented diarization, VAD, and noise estimation modules",
      "Successfully deployed production-grade AI microservices"
    ],
    next: [
      "Advanced multi-modal document analysis",
      "Real-time collaboration features",
      "Enhanced model accuracy optimization"
    ],
    demoUrl: undefined, // Company project - not publicly available
    codeUrl: undefined  // Private repository
  },
  {
    id: "vessel-match-startup",
    title: "Vessel Match - Maritime AI Platform",
    context: "Founded and led a full-stack AI platform automating vessel/cargo matching and pre-fixture workflows, achieving 100% automation and eliminating manual email-based searches.",
    role: "Founder & CEO - Led all technical development, architecture, AI implementation, and secured partnerships with industry leaders.",
    stack: ["Python", "React", "PostgreSQL", "Docker", "ML Pipelines", "FastAPI", "AWS", "Maritime APIs"],
    architecture: [
      "AI-powered vessel/cargo matching algorithms",
      "Real-time data processing for 200+ vessels daily",
      "Automated pre-fixture workflow system",
      "Integration with maritime industry APIs and data sources"
    ],
    impact: [
      "Processed 200+ vessels and 150+ cargo listings daily in trials",
      "Forged 5 strategic industry partnerships",
      "Secured INR 700,000 seed funding + $2K AWS credits",
      "Incubated at Nirmaan IIT Madras startup incubator"
    ],
    next: [
      "International market expansion",
      "Advanced ML ranking algorithms",
      "Real-time market analytics dashboard"
    ],
    demoUrl: "https://www.vesselmatch.com",
    codeUrl: undefined // Private repository
  },
  {
    id: "speech-translation-system",
    title: "Speech-to-Speech Translation Platform",
    context: "Built multilingual Speech-to-Speech Translation tool supporting 12 Indic languages for dubbing, successfully piloted with Indian Parliament.",
    role: "AI Engineer Intern - Developed complete pipeline from speech processing to translation, leveraging AI4Bharat models and advanced audio processing.",
    stack: ["Python", "AI4Bharat Models", "ASR", "NMT", "TTS", "Audio Processing", "FastAPI", "Docker"],
    architecture: [
      "Audio segmentation and language detection pipeline",
      "Multi-modal ASR, NMT, and TTS integration",
      "Pitch correction and gender detection modules",
      "Real-time processing for large-scale video content"
    ],
    impact: [
      "Processed 500+ hours of video content",
      "Reduced dubbing time from months to days",
      "Successfully piloted with Indian Parliament",
      "Supported 12 Indic languages with high accuracy"
    ],
    next: [
      "Real-time streaming translation",
      "Enhanced voice cloning capabilities",
      "Multi-speaker audio processing"
    ],
    demoUrl: undefined, // Company project
    codeUrl: undefined  // Private repository
  }
];

export function FeaturedWork() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleCardToggle = (caseId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(caseId)) {
        newSet.delete(caseId);
      } else {
        newSet.add(caseId);
      }
      return newSet;
    });

    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'case_study_expand', {
        event_category: 'engagement',
        event_label: `${caseId}_${expandedCards.has(caseId) ? 'collapse' : 'expand'}`,
        case_study: caseId,
        action: expandedCards.has(caseId) ? 'collapse' : 'expand'
      });
    }
  };

  const handleCTAClick = (action: string, caseId: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'case_study_cta_click', {
        event_category: 'engagement',
        event_label: `${caseId}_${action}`,
        case_study: caseId,
        action: action
      });
    }
  };

  return (
    <section
      id="work"
      className="min-h-screen pt-20 pb-8 bg-gradient-to-b from-surface/20 to-bg-secondary/30 relative"
      aria-label="Featured Work and Case Studies"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">
            Featured Work
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            Deep dives into production systems I&apos;ve architected and shipped,
            from agentic AI workflows to marketplace optimization.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedCards.has(study.id);
            
            return (
              <Card
                key={study.id}
                className="surface surface-hover card-hover overflow-hidden transition-all duration-300 fade-in-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <CardTitle className="text-2xl lg:text-3xl text-gradient leading-tight">
                        {study.title}
                      </CardTitle>
                      <p className="text-text-2 text-base leading-relaxed">
                        {study.context}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {study.demoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(study.demoUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('demo', study.id);
                          }}
                          className="border-success/40 text-success hover:bg-success/10 hover:border-success/60 btn-hover"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {study.codeUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(study.codeUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('code', study.id);
                          }}
                          className="border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60 btn-hover"
                        >
                          <Code className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Technologies - Always visible */}
                  <div>
                    <h4 className="font-semibold text-success-light mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.slice(0, 6).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="tech-tag" 
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {study.stack.length > 6 && (
                        <span className="tech-tag opacity-70">
                          +{study.stack.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expandable detailed content */}
                  <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {isExpanded && (
                      <div className="space-y-6 pt-4 border-t border-border-accent/30">
                        {/* Role & Responsibilities */}
                        <div>
                          <h4 className="font-semibold text-accent-light mb-3">Role & Responsibilities</h4>
                          <p className="text-text-2 leading-relaxed">{study.role}</p>
                        </div>

                        {/* Architecture & Flow */}
                        <div>
                          <h4 className="font-semibold text-accent-light mb-3">Architecture & Implementation</h4>
                          <ul className="space-y-2">
                            {study.architecture.map((item, archIndex) => (
                              <li key={archIndex} className="text-text-2 flex items-start">
                                <span className="text-accent-light mr-3 font-bold mt-1">→</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact & Results */}
                        <div>
                          <h4 className="font-semibold text-success-light mb-3">Impact & Results</h4>
                          <ul className="space-y-2">
                            {study.impact.map((item, impactIndex) => (
                              <li key={impactIndex} className="text-text-2 flex items-start">
                                <span className="text-success-light mr-3 font-bold mt-1">✓</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Next Steps & Roadmap */}
                        <div>
                          <h4 className="font-semibold text-warn-light mb-3">Future Roadmap</h4>
                          <ul className="space-y-2">
                            {study.next.map((item, nextIndex) => (
                              <li key={nextIndex} className="text-text-2 flex items-start">
                                <span className="text-warn-light mr-3 font-bold mt-1">◦</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle button */}
                  <div className="text-center pt-4 border-t border-border-accent/30">
                    <Button
                      variant="ghost"
                      onClick={() => handleCardToggle(study.id)}
                      className="text-accent-light hover:text-accent hover:bg-accent/10 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          View Full Details
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
