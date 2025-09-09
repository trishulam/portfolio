'use client';

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Code, Zap, AlertTriangle, CheckCircle, Github, Eye, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailsModalProps {
  project: {
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
    }[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!project?.additionalImages) return;
    
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % project.additionalImages.length
      : (lightboxIndex - 1 + project.additionalImages.length) % project.additionalImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(project.additionalImages[newIndex]);
  }, [project?.additionalImages, lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxIndex, navigateLightbox]);

  if (!project) return null;

  const handleCTAClick = (action: string, projectId: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: Record<string, string>) => void }).gtag;
      gtag('event', 'project_modal_cta_click', {
        event_category: 'engagement',
        event_label: `${projectId}_${action}`,
        project_id: projectId,
        action: action
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-surface/95 via-surface-2/95 to-surface/95 backdrop-blur-xl border border-border/30">
        {/* Header with image preview and basic info */}
        <div className="relative">
          {/* Large Image Preview */}
          <div className="h-48 rounded-lg border border-border/20 mb-6 overflow-hidden relative">
            {project.heroImage ? (
              <div className="relative h-full w-full">
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm text-white/90 font-medium">{project.category} Project</p>
                </div>
              </div>
            ) : (
              <div className={`h-full bg-gradient-to-br ${categoryGradients[project.category as keyof typeof categoryGradients]} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center">
                    {project.category === 'Full-stack' && <Code className="w-8 h-8 text-cyan-400" />}
                    {project.category === 'RAG' && <Sparkles className="w-8 h-8 text-pink-400" />}
                    {project.category === 'AI' && <Zap className="w-8 h-8 text-emerald-400" />}
                  </div>
                  <p className="text-sm text-text-2">{project.category} Project</p>
                </div>
              </div>
            )}
          </div>

          <DialogHeader className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold text-gradient mb-2">
                  {project.title}
                </DialogTitle>
                <Badge className={`${categoryColors[project.category as keyof typeof categoryColors]} mb-3`}>
                  {project.category}
                </Badge>
              </div>
            </div>
            
            <p className="text-text-2 leading-relaxed">
              {project.detailedDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {project.demoUrl && (
                <Button
                  className="bg-gradient-to-r from-success/10 to-success/20 text-success border border-success/30 hover:from-success/20 hover:to-success/30"
                  onClick={() => {
                    window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                    handleCTAClick('demo', project.id);
                  }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.codeUrl && (
                <Button
                  className="bg-gradient-to-r from-accent/10 to-accent/20 text-accent border border-accent/30 hover:from-accent/20 hover:to-accent/30"
                  onClick={() => {
                    window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
                    handleCTAClick('code', project.id);
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              )}
              {project.slidesUrl && (
                <Button
                  className="bg-gradient-to-r from-warn/10 to-warn/20 text-warn border border-warn/30 hover:from-warn/20 hover:to-warn/30"
                  onClick={() => {
                    window.open(project.slidesUrl, '_blank', 'noopener,noreferrer');
                    handleCTAClick('slides', project.id);
                  }}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Presentation
                </Button>
              )}
            </div>
          </DialogHeader>
        </div>

        {/* Detailed Content */}
        <div className="space-y-8">
          {/* Project Gallery */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(image, index)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-border/30 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">
                        {index === 0 ? "Network Graph Visualization" : "Entity Relationships"}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 rounded-full p-1.5">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="group relative">
                  <span className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-surface-2/80 to-surface-3/80 text-text border border-border/30 backdrop-blur-sm hover:border-accent/40 hover:text-accent transition-all duration-300">
                    {tech.name}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-surface-2 border border-border/30 rounded-lg p-2 text-xs text-text-2 whitespace-nowrap max-w-xs">
                      {tech.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-text-2 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Architecture & Implementation
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="text-text-2 flex items-start gap-3">
                  <span className="text-accent-light font-bold mt-1">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & Results */}
          <div>
            <h3 className="text-lg font-semibold text-success mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Impact & Results
            </h3>
            <ul className="space-y-2">
              {project.impact.map((item, idx) => (
                <li key={idx} className="text-text-2 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-warn mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Challenges & Solutions
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="text-text-2 flex items-start gap-3">
                  <span className="text-warn font-bold mt-1">◦</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {project.additionalImages && project.additionalImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Large Image */}
            <img 
              src={lightboxImage} 
              alt={`${project.title} - Full Size`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            {project.additionalImages && project.additionalImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white text-sm">
                {lightboxIndex + 1} / {project.additionalImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </Dialog>
  );
}
