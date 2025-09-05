'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Code, FileText, ArrowRight, Sparkles, Eye, Github } from 'lucide-react';

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

const categoryColors = {
  "Full-stack": "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "RAG": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 border-pink-500/30",
  "AI": "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Research": "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Competition": "bg-gradient-to-r from-red-500/20 to-rose-500/20 text-rose-400 border-rose-500/30",
  "Leadership": "bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-violet-400 border-violet-500/30"
};

export function ProjectsTeaser() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  return (
    <section
      id="projects"
      className="min-h-screen relative overflow-hidden"
      aria-label="Projects Showcase"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary/40 via-surface/20 to-bg-secondary/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent"></div>
      <div className="absolute inset-0 pattern-dots opacity-[0.03] pointer-events-none"></div>
      
      {/* Floating Orbs for Visual Interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-success/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warn/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10 pt-20 pb-16">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient enhanced-text-gradient">
            Projects & Experiments
          </h2>
          
          <p className="text-lg lg:text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            A collection of side projects, experiments, and technical demonstrations 
            spanning AI, full-stack development, and mobile applications.
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 lg:px-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={`
                  h-full flex flex-col transition-all duration-500 ease-out group cursor-pointer
                  bg-gradient-to-br from-surface/60 via-surface/80 to-surface-2/60
                  backdrop-blur-xl border border-border/30 rounded-2xl
                  hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10
                  hover:-translate-y-2 hover:scale-[1.02]
                  ${hoveredCard === project.id ? 'ring-2 ring-accent/20' : ''}
                `}
                  style={{
                    background: hoveredCard === project.id
                      ? 'linear-gradient(145deg, rgba(19, 26, 47, 0.9) 0%, rgba(26, 33, 56, 0.95) 100%)'
                      : undefined
                  }}
                >
                  {/* Compact Card Header */}
                  <CardHeader className="pb-3 pt-5 px-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <CardTitle className="text-lg lg:text-xl font-bold text-gradient leading-tight flex-1 group-hover:scale-105 transition-transform duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge
                        className={`
                          text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 backdrop-blur-sm
                          transition-all duration-300 group-hover:scale-110
                          ${categoryColors[project.category as keyof typeof categoryColors] || 'bg-surface-2/50 text-text-2 border-border/30'}
                        `}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col px-5 pb-5 pt-0">
                    {/* Compact Description */}
                    <p className="text-sm text-text-2 leading-relaxed mb-4 group-hover:text-text transition-colors duration-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Compact Tech Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="
                              px-2.5 py-1 text-xs font-medium rounded-md
                              bg-gradient-to-r from-surface-2/50 to-surface-3/50
                              text-text-2 border border-border/30
                              backdrop-blur-sm transition-all duration-300
                              hover:border-accent/40 hover:text-accent hover:scale-105
                              group-hover:border-border/50
                            "
                            style={{ animationDelay: `${tagIndex * 0.05}s` }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gradient-to-r from-muted/50 to-muted-light/50 text-text-3 border border-border/20 backdrop-blur-sm">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Compact CTA Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="
                            flex-1 h-9 text-xs font-semibold rounded-lg
                            bg-gradient-to-r from-success/10 to-success/20
                            text-success border border-success/30
                            hover:from-success/20 hover:to-success/30 hover:border-success/50
                            hover:shadow-lg hover:shadow-success/20 hover:-translate-y-0.5
                            transition-all duration-300 group/btn backdrop-blur-sm
                          "
                          onClick={() => {
                            window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('demo', project.id);
                          }}
                        >
                          <Eye className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button
                          size="sm"
                          className="
                            flex-1 h-9 text-xs font-semibold rounded-lg
                            bg-gradient-to-r from-accent/10 to-accent/20
                            text-accent border border-accent/30
                            hover:from-accent/20 hover:to-accent/30 hover:border-accent/50
                            hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5
                            transition-all duration-300 group/btn backdrop-blur-sm
                          "
                          onClick={() => {
                            window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('code', project.id);
                          }}
                        >
                          <Github className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                      )}
                      {project.slidesUrl && (
                        <Button
                          size="sm"
                          className="
                            flex-1 h-9 text-xs font-semibold rounded-lg
                            bg-gradient-to-r from-warn/10 to-warn/20
                            text-warn border border-warn/30
                            hover:from-warn/20 hover:to-warn/30 hover:border-warn/50
                            hover:shadow-lg hover:shadow-warn/20 hover:-translate-y-0.5
                            transition-all duration-300 group/btn backdrop-blur-sm
                          "
                          onClick={() => {
                            window.open(project.slidesUrl, '_blank', 'noopener,noreferrer');
                            handleCTAClick('slides', project.id);
                          }}
                        >
                          <FileText className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                          Slides
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
