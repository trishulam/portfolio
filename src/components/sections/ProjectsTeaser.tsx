'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Eye, Github, Code, Play, Lightbulb, Zap } from 'lucide-react';
import { ProjectDetailsModal } from '@/components/ui/project-details-modal';

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  codeUrl?: string;
  slidesUrl?: string;
  heroImage?: string;
  additionalImages?: string[];
  features: string[];
  architecture: string[];
  impact: string[];
  challenges: string[];
  technologies: {
    name: string;
    description: string;
    icon?: string;
  }[];
}

const projects: Project[] = [
  {
    id: "guruheal",
    title: "GuruHeal - AI Wellness Platform",
    description: "Full-stack AI-powered wellness platform with multilingual chat, real-time web search with citations, and personalized Ayurvedic recommendations using Graph RAG knowledge base.",
    detailedDescription: "GuruHeal is a comprehensive AI wellness platform that combines modern AI capabilities with traditional Ayurvedic wisdom. The platform features a multilingual chat interface powered by PydanticAI, real-time web search with proper citations, and a sophisticated Graph RAG knowledge base for personalized wellness recommendations.",
    tags: ["Next.js", "PydanticAI", "TypeScript", "JavaScript", "FastAPI", "PostgreSQL", "Redis", "RAG"],
    category: "Full-stack",
    demoUrl: "https://v0-guruheal-presentation.vercel.app/",
    codeUrl: "https://github.com/trishulam/Guruheal",
    additionalImages: ["/guru_hero.png", "/guru1.png", "/guru2.png", "/guru3.png", "/guru4.png", "/guru5.png", "/guru6.png"],
    heroImage: "/hero_guru.png",
    features: [
      "Multilingual AI chat interface with PydanticAI integration",
      "Real-time web search with citation tracking",
      "Graph RAG knowledge base for personalized recommendations",
      "Ayurvedic wellness insights and recommendations",
      "Responsive Next.js frontend with modern UI/UX",
      "FastAPI backend with PostgreSQL and Redis caching"
    ],
    architecture: [
      "Next.js frontend with TypeScript and Tailwind CSS",
      "PydanticAI for structured AI responses and validation",
      "FastAPI backend with async operations",
      "PostgreSQL for persistent data storage",
      "Redis for caching and session management",
      "Graph RAG implementation for knowledge retrieval"
    ],
    impact: [
      "Built scalable AI chat system handling complex wellness queries",
      "Implemented real-time search with citation accuracy of 95%+",
      "Created personalized recommendation engine using Graph RAG",
      "Designed responsive UI supporting multiple languages"
    ],
    challenges: [
      "Integrating traditional Ayurvedic knowledge with modern AI",
      "Implementing real-time search while maintaining citation accuracy",
      "Building scalable Graph RAG system for complex queries",
      "Optimizing response times for multilingual processing"
    ],
    technologies: [
      { name: "Next.js", description: "React framework for production-ready frontend" },
      { name: "PydanticAI", description: "Type-safe AI agent framework for structured responses" },
      { name: "FastAPI", description: "High-performance Python API framework" },
      { name: "PostgreSQL", description: "Advanced relational database for data persistence" },
      { name: "Redis", description: "In-memory cache for session management" },
      { name: "Graph RAG", description: "Advanced retrieval system for knowledge graphs" }
    ]
  },
  {
    id: "ner-rag-system",
    title: "NER-RAG System",
    description: "End-to-end microservices-based text analysis pipeline to extract entities, map relationships, and provide context-enriched answers with Next.js frontend and graph visualization.",
    detailedDescription: "A sophisticated microservices architecture for Named Entity Recognition and Retrieval-Augmented Generation. The system processes text documents to extract entities, maps their relationships, and provides intelligent, context-aware responses through a modern Next.js interface with interactive graph visualizations.",
    tags: ["Python", "Next.js", "Tailwind CSS", "React Force Graph", "SQL", "Docker", "Pinecone", "Pydantic"],
    category: "RAG",
    demoUrl: undefined,
    codeUrl: "https://github.com/trishulam/NER-RAG",
    heroImage: "/ner_hero.png",
    features: [
      "Advanced Named Entity Recognition with custom models",
      "Interactive graph visualization of entity relationships",
      "Microservices architecture with Docker containerization",
      "Vector database integration with Pinecone",
      "Real-time text processing and entity extraction",
      "Context-enriched Q&A system with RAG pipeline"
    ],
    architecture: [
      "Python microservices for NER and text processing",
      "Next.js frontend with React Force Graph visualization",
      "Pinecone vector database for semantic search",
      "Docker containerization for service isolation",
      "RESTful APIs with Pydantic validation",
      "SQL database for entity relationship storage"
    ],
    impact: [
      "Built end-to-end NER pipeline with 92% accuracy",
      "Implemented scalable microservices handling 1000+ documents/hour",
      "Created interactive visualizations for complex entity relationships",
      "Achieved sub-second response times for entity queries"
    ],
    challenges: [
      "Designing efficient entity relationship mapping algorithms",
      "Optimizing vector search performance with large document sets",
      "Building responsive graph visualizations for complex networks",
      "Implementing real-time processing without blocking UI"
    ],
    technologies: [
      { name: "Python", description: "Core language for NLP and backend services" },
      { name: "Next.js", description: "Modern React framework for interactive frontend" },
      { name: "React Force Graph", description: "D3-based library for network visualizations" },
      { name: "Pinecone", description: "Vector database for semantic similarity search" },
      { name: "Docker", description: "Containerization for microservices deployment" },
      { name: "Pydantic", description: "Data validation and parsing library" }
    ],
    additionalImages: ["/ner1.png", "/ner2.png"]
  },
  {
    id: "gesturize",
    title: "Gesturize - Gesture Control System",
    description: "AI-powered presentation tool enabling hands-free navigation via hand gestures classified through ANN. Includes React Native app for mobile video streaming to classrooms.",
    detailedDescription: "Gesturize revolutionizes presentation control through AI-powered hand gesture recognition. Built with computer vision and neural networks, it enables completely hands-free presentation navigation while providing a companion React Native app for seamless mobile video streaming to classroom environments.",
    tags: ["Python", "OpenCV", "Google Mediapipe", "TensorFlow", "PyAutoGUI", "Flask", "Spark", "React Native"],
    category: "AI",
    demoUrl: undefined,
    codeUrl: "https://github.com/trishulam/Gesturize",
    heroImage: "/hero_ges.png",
    additionalImages: ["/ges_1.png", "/ges_2.png", "/ges_3.png", "/ges_4.png", "/ges_5.png", "/ges_6.png", "/ges_7.png", "/ges_8.png", "/ges_9.png"],
    features: [
      "Real-time hand gesture recognition with 95%+ accuracy",
      "Hands-free presentation control and navigation",
      "Custom ANN model trained for gesture classification",
      "React Native mobile app for video streaming",
      "Cross-platform compatibility (Windows, macOS, Linux)",
      "Low-latency gesture processing with OpenCV optimization"
    ],
    architecture: [
      "Python backend with OpenCV for computer vision",
      "Google Mediapipe for hand landmark detection",
      "TensorFlow ANN model for gesture classification",
      "PyAutoGUI for system-level presentation control",
      "Flask web server for mobile app communication",
      "Apache Spark for distributed processing capabilities"
    ],
    impact: [
      "Achieved 95%+ gesture recognition accuracy in real-time",
      "Reduced presentation setup time by 80% with hands-free control",
      "Successfully deployed in classroom environments",
      "Processed 30+ gestures per second with minimal latency"
    ],
    challenges: [
      "Training robust gesture models for varying lighting conditions",
      "Minimizing latency between gesture recognition and system response",
      "Building cross-platform compatibility for different OS environments",
      "Implementing reliable mobile video streaming with low latency"
    ],
    technologies: [
      { name: "OpenCV", description: "Computer vision library for real-time image processing" },
      { name: "Google Mediapipe", description: "Framework for hand landmark detection and tracking" },
      { name: "TensorFlow", description: "Machine learning framework for gesture classification" },
      { name: "PyAutoGUI", description: "Cross-platform automation for system control" },
      { name: "React Native", description: "Mobile framework for cross-platform app development" },
      { name: "Apache Spark", description: "Unified analytics engine for big data processing" }
    ]
  }
];

const categoryColors = {
  "Full-stack": "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "RAG": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 border-pink-500/30",
  "AI": "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30"
};

const categoryGradients = {
  "Full-stack": "from-blue-500/10 to-cyan-500/10",
  "RAG": "from-purple-500/10 to-pink-500/10", 
  "AI": "from-green-500/10 to-emerald-500/10"
};

export function ProjectsTeaser() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Simulate loading state for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);

    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'project_modal_open', {
        event_category: 'engagement',
        event_label: `${project.id}_modal_view`,
        project_id: project.id
      });
    }
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
            <Play className="w-3 h-3 text-success mx-1" />
            <Lightbulb className="w-3 h-3 text-pink-400 mx-1" />
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
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 lg:px-0">
              {[1, 2, 3].map((item) => (
                <div key={item} className="animate-pulse">
                  <div className="bg-surface/80 rounded-2xl h-96 border border-border/30 flex flex-col">
                    <div className="h-48 rounded-t-2xl bg-surface-2/50"></div>
                    <div className="p-6 space-y-6 flex-1">
                      <div className="h-7 bg-surface-2/70 rounded-lg w-2/3"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-surface-2/50 rounded w-full"></div>
                        <div className="h-4 bg-surface-2/50 rounded w-5/6"></div>
                        <div className="h-4 bg-surface-2/50 rounded w-4/6"></div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {[1, 2, 3].map((tag) => (
                          <div key={tag} className="h-7 bg-surface-2/40 rounded-md w-16"></div>
                        ))}
                      </div>
                      <div className="mt-auto pt-4 flex justify-center">
                        <div className="h-9 bg-surface-2/40 rounded-lg w-32"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 lg:px-0">
            {projects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className="fade-in-scale w-full max-w-sm mx-auto"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-aos="fade-up" 
                  data-aos-delay={index * 150}
                >
                <Card className={`
                  h-full flex flex-col transition-all duration-300 ease-out group cursor-pointer
                  bg-gradient-to-br from-surface/60 via-surface/80 to-surface-2/60
                  backdrop-blur-xl border border-border/30 rounded-2xl overflow-hidden
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
                  {/* Large Image Preview */}
                  <div className={`h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    {project.heroImage ? (
                      // Show actual project image if available
                      <div className="relative h-full w-full">
                        <img 
                          src={project.heroImage} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                        <div className="absolute top-4 right-4">
                          <Badge className={`${categoryColors[project.category as keyof typeof categoryColors]} text-xs`}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      // Fallback to gradient with icon
                      <div className={`h-full bg-gradient-to-br ${categoryGradients[project.category as keyof typeof categoryGradients]} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center">
                            {project.category === 'Full-stack' && <Code className="w-8 h-8 text-cyan-400" />}
                            {project.category === 'RAG' && <Sparkles className="w-8 h-8 text-pink-400" />}
                            {project.category === 'AI' && <Zap className="w-8 h-8 text-emerald-400" />}
                          </div>
                          <Badge className={`${categoryColors[project.category as keyof typeof categoryColors]} text-xs`}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Minimal Content Section */}
                  <CardHeader className="pb-2 pt-4 px-5">
                    <CardTitle className="text-lg font-bold text-gradient leading-tight group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col px-5 pb-5 pt-0">
                    {/* One-line Description */}
                    <p className="text-sm text-text-2 leading-relaxed mb-4 group-hover:text-text transition-colors duration-300">
                      {project.description.split('.')[0]}.
                    </p>

                    {/* Essential Tech Stack (3-4 main technologies) */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
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
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gradient-to-r from-muted/50 to-muted-light/50 text-text-3 border border-border/20 backdrop-blur-sm">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Clean Action Buttons */}
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
                        onClick={() => openProjectModal(project)}
                      >
                        <Eye className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
            </div>
          )}
        </div>

        {/* Project Details Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  );
}
