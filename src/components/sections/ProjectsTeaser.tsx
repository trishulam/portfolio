'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Code, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  codeUrl?: string;
  slidesUrl?: string;
  thumbnail?: string;
}

const projects: Project[] = [
  {
    id: "guruheal",
    title: "GuruHeal - AI Wellness Platform",
    description: "Full-stack AI-powered wellness platform with multilingual chat, real-time web search with citations, and personalized Ayurvedic recommendations using Graph RAG knowledge base.",
    tags: ["Next.js", "PydanticAI", "TypeScript", "JavaScript", "FastAPI", "PostgreSQL", "Redis", "RAG"],
    category: "Full-stack",
    demoUrl: "https://v0-guruheal-presentation.vercel.app/",
    codeUrl: "https://github.com/trishulam/Guruheal"
  },
  {
    id: "ner-rag-system",
    title: "NER-RAG System",
    description: "End-to-end microservices-based text analysis pipeline to extract entities, map relationships, and provide context-enriched answers with Next.js frontend and graph visualization.",
    tags: ["Python", "Next.js", "Tailwind CSS", "React Force Graph", "SQL", "Docker", "Pinecone", "Pydantic"],
    category: "RAG",
    demoUrl: undefined,
    codeUrl: "https://github.com/trishulam/NER-RAG"
  },
  {
    id: "gesturize",
    title: "Gesturize - Gesture Control System",
    description: "AI-powered presentation tool enabling hands-free navigation via hand gestures classified through ANN. Includes React Native app for mobile video streaming to classrooms.",
    tags: ["Python", "OpenCV", "Google Mediapipe", "TensorFlow", "PyAutoGUI", "Flask", "Spark", "React Native"],
    category: "AI",
    demoUrl: undefined,
    codeUrl: "https://github.com/trishulam/Gesturize"
  },
  {
    id: "water-quality-analysis",
    title: "ML Water Quality Analysis",
    description: "Machine learning ensemble techniques for water quality analysis of Korattur Lake. Published research using XGBoost, KNN, Decision Tree Bagging, and other ML models.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Research", "IEEE"],
    category: "Research",
    demoUrl: undefined,
    codeUrl: "https://github.com/trishulam/Korattur-Lake---Water-Quality-Index"
  },
  {
    id: "hackathon-projects",
    title: "Award-Winning Hackathon Projects",
    description: "Winner of MLH PEC Hacks (₹60,000 prize) and 2nd place in Smart India Hackathon 2022 national finale. Various AI and full-stack solutions built in competitive environments.",
    tags: ["Python", "React", "ML", "Hackathon", "Innovation"],
    category: "Competition",
    demoUrl: undefined,
    codeUrl: undefined
  },
  {
    id: "iitm-paradox",
    title: "IITM Paradox Leadership",
    description: "Served as Steering Committee member, Secretary & FRB Core for one of India's largest student organizations, building from ground up to serve 22,000 students with 5,000+ footfall events.",
    tags: ["Leadership", "Event Management", "Community Building", "Strategy"],
    category: "Leadership",
    demoUrl: "http://www.iitmparadox.org",
    codeUrl: undefined
  }
];

export function ProjectsTeaser() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const handleCTAClick = (action: string, projectId: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: Record<string, string>) => void }).gtag;
      gtag('event', 'project_cta_click', {
        event_category: 'engagement',
        event_label: `${projectId}_${action}`,
        project_id: projectId,
        action: action
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const updateCardsPerView = () => {
    if (typeof window === 'undefined') return;
    const newCardsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    setCardsPerView(newCardsPerView);
  };

  const scrollToCard = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const cardWidth = scrollContainerRef.current.clientWidth / cardsPerView;
    const scrollAmount = cardWidth * cardsPerView;
    
    const newScrollLeft = direction === 'left'
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update current index for indicators
    const newIndex = Math.round(newScrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - cardsPerView)));
  };

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    updateCardsPerView();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isClient) return;

    const handleScroll = () => {
      updateScrollButtons();
      
      // Update current index based on scroll position
      const cardWidth = container.clientWidth / cardsPerView;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - cardsPerView)));
    };

    const handleResize = () => {
      updateScrollButtons();
      updateCardsPerView();
    };

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial update
    updateScrollButtons();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [cardsPerView, isClient]);

  const getMaxIndex = () => {
    return Math.max(0, projects.length - cardsPerView);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-bg-secondary/30 to-surface/20 pt-20 pb-8 relative"
      aria-label="Projects Showcase"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">
            Projects & Experiments
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            A collection of side projects, experiments, and technical demonstrations 
            spanning AI, full-stack development, and mobile applications.
          </p>
        </div>

        {/* Horizontal Scrollable Projects Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={() => scrollToCard('left')}
            disabled={!canScrollLeft}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full surface surface-hover nav-arrow items-center justify-center"
            aria-label="Scroll to previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-accent" />
          </button>

          <button
            onClick={() => scrollToCard('right')}
            disabled={!canScrollRight}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full surface surface-hover nav-arrow items-center justify-center"
            aria-label="Scroll to next projects"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide horizontal-scroll px-4 md:px-0 py-2"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-full md:w-1/2 lg:w-1/3 horizontal-scroll-item"
              >
                <Card 
                  className="surface surface-hover card-hover h-full flex flex-col transition-all duration-300 fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg lg:text-xl text-gradient leading-tight flex-1">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col space-y-4">
                    <p className="text-sm text-text-2 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="tech-tag text-xs" 
                          style={{ animationDelay: `${tagIndex * 0.05}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tech-tag text-xs opacity-70">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-2 pt-2 mt-auto">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs border-border/40 text-text-2 hover:bg-success/5 hover:border-success/50 hover:text-success transition-all duration-200 hover:shadow-sm"
                          onClick={() => {
                            window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('demo', project.id);
                          }}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs border-border/40 text-text-2 hover:bg-accent/5 hover:border-accent/50 hover:text-accent transition-all duration-200 hover:shadow-sm"
                          onClick={() => {
                            window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('code', project.id);
                          }}
                        >
                          <Code className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.slidesUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs border-border/40 text-text-2 hover:bg-warn/5 hover:border-warn/50 hover:text-warn transition-all duration-200 hover:shadow-sm"
                          onClick={() => {
                            window.open(project.slidesUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('slides', project.id);
                          }}
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          Slides
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          {isClient && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: getMaxIndex() + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = scrollContainerRef.current.clientWidth / cardsPerView;
                      const scrollLeft = index * cardWidth;
                      scrollContainerRef.current.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                      });
                      setCurrentIndex(index);
                    }
                  }}
                  className={`scroll-indicator w-2 h-2 rounded-full ${
                    index === currentIndex
                      ? 'active w-8'
                      : 'bg-border hover:bg-border-light'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-text-2 mb-4">
            Explore more projects and contributions on GitHub
          </p>
          <Button
            variant="outline"
            onClick={() => {
              window.open('https://github.com/trishulam', '_blank', 'noopener,noreferrer');
              handleCTAClick('github', 'all-projects');
            }}
            className="border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60 btn-hover"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
