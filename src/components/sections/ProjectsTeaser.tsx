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
    id: "sgc-agent",
    title: "SGC: State-Governed Checkpointing for SWE Agents",
    description: "Supervisor middleware that keeps a long-running coding agent on task. Maintains a semantic working state and injects a steering directive when the agent drifts. +5.6 pp on SWE-bench Verified mini over a vanilla agent.",
    detailedDescription: "Long-running LLM agents lose the thread: they retry known failures, forget the subgoal, and burn steps. SGC sits above the acting agent as a supervisor that maintains a Semantic Working State (goal, subgoal, actions tried, known failures, active hypothesis, needs_resteer) and, every n steps, decides whether to inject a concrete steering directive. Built with Panagiotis Giadikiaroglou for CIS 7000 at Penn.",
    tags: ["Python", "LangGraph", "Deep Agents", "Docker", "SWE-bench"],
    category: "Agents",
    codeUrl: undefined,
    features: [
      "Semantic Working State tracked across the whole episode",
      "Checkpoint every n steps; supervisor emits a steering directive only when drift is detected",
      "Works with a cheap actor and a stronger supervisor",
      "Evaluated on SWE-bench Verified mini (50 instances: 25 Django, 25 Sphinx) and qualitatively on WebArena"
    ],
    architecture: [
      "Acting agent: Gemini Flash 3 via OpenRouter",
      "Supervisor: GPT-5.5, reads state and recent trajectory",
      "LangGraph orchestration with Deep Agents tooling",
      "Dockerized SWE-bench harness"
    ],
    impact: [
      "72.3% resolution vs 66.7% vanilla baseline (+5.6 pp overall, +11.2 pp on Django, flat on Sphinx)",
      "About 23% fewer acting-agent steps (25.4 vs 33.0), at roughly 2.8x wall clock",
      "Cheap actor + strong supervisor matched the strong model acting alone on a 10-instance subset ($0.74 vs $0.66 per task)",
      "Checkpoint cadence matters: n=3 (77.8%) beat n=5 (60.0%) and n=7 (44.4%)"
    ],
    challenges: [
      "Deciding when a directive helps versus when it interrupts productive exploration",
      "Keeping the working state small enough to fit in the supervisor's context",
      "Wall-clock overhead from the supervisor call"
    ],
    technologies: [
      { name: "LangGraph", description: "Agent orchestration and state" },
      { name: "Deep Agents", description: "Tooling and planning primitives" },
      { name: "SWE-bench", description: "Evaluation harness" },
      { name: "Docker", description: "Isolated repo environments" }
    ]
  },
  {
    id: "thinkspace",
    title: "ThinkSpace: Proactive Multimodal AI Tutor",
    description: "Real-time tutor that teaches through voice, an editable canvas, generated diagrams, flashcards, and gestures. A canvas interpreter watches what the learner is doing and steps in with context-aware guidance.",
    detailedDescription: "Most AI tutors wait to be asked. ThinkSpace watches the canvas. An autonomous interpreter reads what the learner draws or writes, decides whether they are stuck, and offers help through voice, a diagram, or a flashcard, without being prompted. Built in March 2026.",
    tags: ["React", "TypeScript", "FastAPI", "Gemini Live", "Google ADK", "tldraw", "MediaPipe", "GCP"],
    category: "Multimodal",
    features: [
      "Live voice conversation via Gemini Live",
      "Editable tldraw canvas the tutor can read and draw on",
      "Generated diagrams and flashcards on demand",
      "Hand-gesture controls via MediaPipe",
      "Autonomous canvas interpreter that offers guidance proactively"
    ],
    architecture: [
      "React + TypeScript frontend with tldraw",
      "FastAPI backend orchestrating Google ADK agents",
      "Gemini Live for real-time audio",
      "Deployed on GCP"
    ],
    impact: [
      "Working end-to-end proactive tutoring loop: observe, decide, intervene",
      "Foundation reused for Ayana's real-time agent layer"
    ],
    challenges: [
      "Deciding when to interrupt a learner and when to stay quiet",
      "Keeping audio, canvas state, and agent reasoning in sync in real time"
    ],
    technologies: [
      { name: "Gemini Live", description: "Real-time multimodal model" },
      { name: "Google ADK", description: "Agent framework" },
      { name: "tldraw", description: "Canvas engine" },
      { name: "MediaPipe", description: "Gesture recognition" }
    ]
  },
  {
    id: "waywise",
    title: "WayWise: Filling the Gaps in Hotel Reviews",
    description: "Ranks what is missing, stale, or contradictory across a hotel's reviews and generates targeted follow-up questions for travelers. Won the 2026 Wharton Hack-AI-thon, first of 61 teams.",
    detailedDescription: "Hotel reviews are plentiful but uneven: some questions get answered a hundred times, others never, and answers go stale. WayWise scores review coverage per topic, flags conflicts and outdated claims, and asks recent guests exactly the questions whose answers would help the next traveler most.",
    tags: ["Python", "LLMs", "Ranking", "Next.js"],
    category: "Applied AI",
    features: [
      "Topic-level coverage scoring across a hotel's reviews",
      "Detection of stale and conflicting claims",
      "Targeted follow-up question generation for recent guests"
    ],
    architecture: [
      "LLM-based extraction of claims and topics from reviews",
      "Ranking layer over information gaps",
      "Lightweight web front end for the demo"
    ],
    impact: [
      "First place, Wharton Hack-AI-thon 2026 (61 teams)"
    ],
    challenges: [
      "Separating a genuinely missing answer from one that is simply phrased differently",
      "Building a convincing ranking in a hackathon timeframe"
    ],
    technologies: [
      { name: "LLMs", description: "Claim extraction and question generation" },
      { name: "Next.js", description: "Demo interface" }
    ]
  },
  {
    id: "mindpad",
    title: "MindPad: Multimodal Learning Platform",
    description: "Interactive learning built on the OpenAI Realtime API and Gemini. Best Overall, Practical AI Innovation, and Best Use of Gemini API at HackPrinceton 2025, out of 195 teams.",
    detailedDescription: "MindPad turns study material into an interactive, multimodal session: talk to it, see it draw, quiz yourself. Built at HackPrinceton (MLH) in November 2025. The win came with about $10,000 in OpenAI credits.",
    tags: ["OpenAI Realtime API", "Gemini", "TypeScript", "React"],
    category: "Multimodal",
    features: [
      "Real-time voice interaction via the OpenAI Realtime API",
      "Gemini for multimodal understanding of notes and images",
      "Interactive exercises generated from the learner's own material"
    ],
    architecture: [
      "React front end",
      "Realtime API session for low-latency voice",
      "Gemini for document and image understanding"
    ],
    impact: [
      "Best Overall, Practical AI Innovation, and Use of Gemini API at HackPrinceton 2025 (195 teams)"
    ],
    challenges: [
      "Coordinating two model providers in one real-time loop",
      "Latency budget for voice"
    ],
    technologies: [
      { name: "OpenAI Realtime API", description: "Voice" },
      { name: "Gemini", description: "Multimodal understanding" }
    ]
  },
  {
    id: "ayana",
    title: "Ayana: Real-Time Multimodal Travel Guide",
    description: "Turns an itinerary into an interactive journey. Voice narration stays in sync with 3D map transitions, with gesture and AR controls. Best Use of Gemini API at YHack 2026.",
    detailedDescription: "Ayana narrates a trip while flying you through it on Google Maps 3D. The agent's speech is synchronized with camera transitions so the guidance is grounded in where you are on the map. Built in March 2026.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Gemini Live", "Google ADK", "Google Maps 3D", "MediaPipe", "Snap AR"],
    category: "Multimodal",
    features: [
      "Voice-guided itinerary walkthrough",
      "Agent narration synchronized with Google Maps 3D camera moves",
      "Gesture control via MediaPipe and AR via Snap"
    ],
    architecture: [
      "Next.js front end with Google Maps 3D",
      "FastAPI backend with Google ADK agents",
      "Gemini Live for real-time audio"
    ],
    impact: [
      "Best Use of Gemini API, YHack 2026"
    ],
    challenges: [
      "Keeping narration and map transitions aligned in real time"
    ],
    technologies: [
      { name: "Gemini Live", description: "Real-time multimodal model" },
      { name: "Google Maps 3D", description: "Photorealistic map rendering" },
      { name: "Google ADK", description: "Agent framework" }
    ]
  },
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
      "Implemented real-time web search with inline citations",
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
            Coursework, hackathons, and weekend builds. Mostly agents and real-time multimodal systems.
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
