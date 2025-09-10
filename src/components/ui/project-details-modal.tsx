'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Code, Zap, AlertTriangle, CheckCircle, Github, Eye, FileText, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);
  
  // Reset lightbox state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setLightboxOpen(false);
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Combine hero image and additional images for the lightbox (avoid duplicates)
  useEffect(() => {
    if (!project) {
      setAllImages([]);
      return;
    }
    
    const images: string[] = [];
    const imageSet = new Set<string>();
    
    // Add hero image first
    if (project.heroImage) {
      images.push(project.heroImage);
      imageSet.add(project.heroImage);
    }
    
    // Add additional images (skip duplicates)
    if (project.additionalImages) {
      project.additionalImages.forEach(img => {
        if (!imageSet.has(img)) {
          images.push(img);
          imageSet.add(img);
        }
      });
    }
    
    setAllImages(images);
  }, [project]);

  const openLightbox = (imageIndex: number) => {
    console.log('Opening lightbox with image index:', imageIndex); // Debug log
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    console.log('Closing lightbox'); // Debug log
    setLightboxOpen(false);
  };

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    console.log('Navigate:', direction, 'Current:', currentImageIndex, 'Total:', allImages.length); // Debug log
    
    setCurrentImageIndex((prev) => {
      if (direction === 'prev') {
        const newIndex = prev > 0 ? prev - 1 : allImages.length - 1;
        console.log('Previous - New index:', newIndex); // Debug log
        return newIndex;
      } else {
        const newIndex = prev < allImages.length - 1 ? prev + 1 : 0;
        console.log('Next - New index:', newIndex); // Debug log
        return newIndex;
      }
    });
  }, [allImages.length, currentImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      console.log('Key pressed:', e.key); // Debug log
      
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          console.log('Left arrow - navigating previous'); // Debug log
          navigateImage('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          console.log('Right arrow - navigating next'); // Debug log
          navigateImage('next');
          break;
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, navigateImage]);

  // Helper function to get descriptive labels for each image
  const getImageLabel = (projectId: string, imageIndex: number, hasHeroImage: boolean): string => {
    // For GuruHeal project
    if (projectId === 'guruheal') {
      // Adjust index if hero image is counted separately
      const adjustedIndex = hasHeroImage ? imageIndex - 1 : imageIndex;
      
      // If it's the hero image
      if (imageIndex === 0 && hasHeroImage) {
        return "AI Chat Interface";
      }
      
      // For the other images
      switch (adjustedIndex) {
        case 0: return "Product Card";
        case 1: return "In Line Product Recommendations";
        case 2: return "Language Picker";
        case 3: return "Product List";
        case 4: return "Web Search Results with Citations";
        case 5: return "Model Response PDF";
        default: return `GuruHeal Screenshot ${adjustedIndex + 1}`;
      }
    }
    
    // For NER-RAG project
    if (projectId === 'ner-rag-system') {
      if (imageIndex === 0 && hasHeroImage) {
        return "Entity Graph Visualization";
      }
      return imageIndex === 0 || (hasHeroImage && imageIndex === 1) ? 
        "Network Graph Visualization" : "Entity Relationships Panel";
    }
    
    // For Gesturize project
    if (projectId === 'gesturize') {
      // Adjust index if hero image is counted separately
      const adjustedIndex = hasHeroImage ? imageIndex - 1 : imageIndex;
      
      // If it's the hero image
      if (imageIndex === 0 && hasHeroImage) {
        return "Gesture Recognition Dashboard";
      }
      
      // For the other images
      switch (adjustedIndex) {
        case 0: return "Hand Gesture Detection";
        case 1: return "Landmark Tracking Visualization";
        case 2: return "Presentation Control Interface";
        case 3: return "Gesture Classification Model";
        case 4: return "Mobile Streaming App";
        case 5: return "Multi-Gesture Recognition";
        case 6: return "System Architecture Diagram";
        case 7: return "Classroom Implementation";
        case 8: return "Performance Analytics";
        default: return `Gesturize Screenshot ${adjustedIndex + 1}`;
      }
    }
    
    // For other projects
    if (imageIndex === 0 && hasHeroImage) {
      return "Hero Image";
    }
    return `Project Screenshot ${imageIndex}`;
  };
  
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
          {/* Large Image Preview - Clickable */}
          <div 
            className="h-48 rounded-lg border border-border/20 mb-6 overflow-hidden relative group cursor-pointer"
            onClick={() => project.heroImage && openLightbox(0)}
          >
            {project.heroImage ? (
              <div className="relative h-full w-full">
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                
                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm text-white/90 font-medium">{project.category} Project</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded">Click to expand</p>
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
          {allImages.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Project Gallery
                <span className="text-sm text-text-3 font-normal ml-2">Click to expand</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-border/30 hover:border-accent/40 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Zoom icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Image label */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">
                        {getImageLabel(project.id, index, !!project.heroImage)}
                      </p>
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
      
      {/* Debug: lightboxOpen={lightboxOpen.toString()}, allImages.length={allImages.length} */}
      {/* Full-Screen Image Lightbox Portal - Renders outside dialog */}
      {lightboxOpen && allImages.length > 0 && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors duration-200 shadow-2xl"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation buttons */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Previous button clicked'); // Debug log
                  navigateImage('prev');
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-4 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors duration-200 shadow-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Next button clicked'); // Debug log
                  navigateImage('next');
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-4 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors duration-200 shadow-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          
          {/* Current image - True full screen */}
          <div 
            className="w-full h-full flex items-center justify-center p-8 cursor-pointer"
            onClick={(e) => {
              // Close on background click, but not on image click
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <img
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              style={{
                width: 'auto',
                height: 'auto'
              }}
            />
          </div>
          
          {/* Image counter and info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
            <div className="bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl">
              <span className="text-accent font-bold">{currentImageIndex + 1}</span> / {allImages.length}
              <span className="mx-3">•</span>
              <span>
                {getImageLabel(project.id, currentImageIndex, !!project.heroImage)}
              </span>
              {/* Remove debug info for production */}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="absolute top-6 left-6 z-40">
            <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm shadow-2xl">
              <p>Use ← → keys to navigate • ESC to close • Click outside to close</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </Dialog>
  );
}
