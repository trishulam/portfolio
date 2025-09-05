'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Rocket, MapPin, Calendar, Award, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: 'work' | 'founder';
  description?: string;
}

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
  highlights?: string[];
}

const workExperience: ExperienceItem[] = [
  {
    period: "Dec 2024 - Aug 2025",
    title: "Software Engineer",
    organization: "S2T AI - AI Powered Investigations",
    location: "Singapore",
    type: "work",
    description: "Building Knowledge Graph-RAG microservices and Agentic AI Chat Assistants with Generative UI. Developing AI ETL services and React microfrontends."
  },
  {
    period: "May 2024 - Jun 2025",
    title: "Founder & CEO",
    organization: "Vessel Match",
    location: "Chennai, India",
    type: "founder",
    description: "Founded AI platform automating vessel/cargo matching. Secured INR 700,000 seed funding and processed 200+ vessels daily. Incubated at Nirmaan IIT Madras."
  },
  {
    period: "Feb 2024 - May 2024",
    title: "AI Engineer Intern",
    organization: "32Mins Digital Consultancy Services",
    location: "Chennai, India", 
    type: "work",
    description: "Built Speech-to-Speech Translation tool for 12 Indic languages. Processed 500+ hours of video, cutting dubbing time from months to days."
  }
];

const education: EducationItem[] = [
  {
    period: "Aug 2025 - May 2027",
    degree: "Master of Science in Engineering (MSE), Data Science",
    institution: "University of Pennsylvania",
    location: "Philadelphia, PA, USA",
    highlights: ["Teaching Assistant for CIS 5150 - Linear Algebra & Optimization", "Courses: AI, Big Data Analytics, Statistics for Data Science"]
  },
  {
    period: "June 2023",
    degree: "Global Academic Internship Program — Data Analytics Using Deep Learning",
    institution: "National University of Singapore",
    location: "Singapore",
    highlights: ["On-campus 3-week NUS SoC program with seminars + capstone project", "Best performer in a 100-member cohort"]
  },
  {
    period: "Jan 2021 - Apr 2025", 
    degree: "Bachelor of Science - Data Science & Applications",
    institution: "Indian Institute of Technology, Madras",
    location: "Chennai, India",
    gpa: "3.91/4.0",
    highlights: ["Academic Merit Certificate - Top 1% GPA"]
  }
];

interface TimelineNodeProps {
  isActive: boolean;
  type: 'work' | 'founder' | 'education';
  index: number;
}

function TimelineNode({ isActive, type, index }: TimelineNodeProps) {
  const getNodeStyles = () => {
    const baseClasses = "absolute left-0 top-6 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-10";
    
    if (type === 'founder') {
      return `${baseClasses} ${isActive 
        ? 'bg-gradient-to-br from-warn to-warn-dark border-warn/30 shadow-lg shadow-warn/25 scale-110' 
        : 'bg-warn/80 border-warn/20 hover:scale-105'
      }`;
    } else if (type === 'education') {
      return `${baseClasses} ${isActive 
        ? 'bg-gradient-to-br from-accent to-accent-dark border-accent/30 shadow-lg shadow-accent/25 scale-110' 
        : 'bg-accent/80 border-accent/20 hover:scale-105'
      }`;
    } else {
      return `${baseClasses} ${isActive 
        ? 'bg-gradient-to-br from-accent to-accent-dark border-accent/30 shadow-lg shadow-accent/25 scale-110' 
        : 'bg-accent/80 border-accent/20 hover:scale-105'
      }`;
    }
  };

  

  const getIcon = () => {
    const iconClasses = "w-5 h-5 text-bg drop-shadow-sm";
    if (type === 'founder') return <Rocket className={iconClasses} />;
    if (type === 'education') return <GraduationCap className={iconClasses} />;
    return <Briefcase className={iconClasses} />;
  };

  return (
    <div className={getNodeStyles()}>
      {getIcon()}
      {isActive && (
        <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current"></div>
      )}
    </div>
  );
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  isVisible: boolean;
  isActive: boolean;
}

function ExperienceCard({ item, index, isVisible, isActive }: ExperienceCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative pl-20 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
         style={{ animationDelay: `${index * 150}ms` }}>
      
      <TimelineNode 
        isActive={isActive} 
        type={item.type} 
        index={index} 
      />
      
      <Card className={`
        group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 
        border border-border/30 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl 
        hover:shadow-accent/10 hover:-translate-y-2 cursor-pointer
        ${isActive ? 'ring-2 ring-accent/30 shadow-xl shadow-accent/10' : ''}
      `}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl lg:text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </CardTitle>
              <div className="flex items-center gap-3 text-accent font-semibold mb-2">
                <Building2 className="w-4 h-4" />
                <span className="text-base lg:text-lg">{item.organization}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 lg:items-end">
              <Badge variant="outline" className="bg-muted/50 border-border/50 text-text-2 font-mono text-sm px-4 py-2 rounded-full">
                <Calendar className="w-3 h-3 mr-2" />
                {item.period}
              </Badge>
              {item.type === 'founder' && (
                <Badge className="bg-gradient-to-r from-warn to-warn-dark text-bg font-semibold px-3 py-1 rounded-full">
                  <Rocket className="w-3 h-3 mr-1" />
                  Founder
                </Badge>
              )}
            </div>
          </div>
          
          {item.location && (
            <div className="flex items-center gap-2 text-text-2 mt-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm lg:text-base">{item.location}</span>
            </div>
          )}
        </CardHeader>
        
        {item.description && (
          <CardContent className="pt-0">
            <p className="text-text-2 leading-relaxed text-sm lg:text-base">
              {item.description}
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

interface EducationCardProps {
  item: EducationItem;
  index: number;
  isVisible: boolean;
  isActive: boolean;
}

function EducationCard({ item, index, isVisible, isActive }: EducationCardProps) {
  return (
    <div className={`relative pl-20 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
         style={{ animationDelay: `${index * 150}ms` }}>
      
      <TimelineNode 
        isActive={isActive} 
        type="education" 
        index={index} 
      />
      
      <Card className={`
        group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 
        border border-border/30 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl 
        hover:shadow-accent/10 hover:-translate-y-2 cursor-pointer
        ${isActive ? 'ring-2 ring-accent/30 shadow-xl shadow-accent/10' : ''}
      `}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg lg:text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                {item.degree}
              </CardTitle>
              <div className="flex items-center gap-3 text-accent font-semibold mb-2">
                <Building2 className="w-4 h-4" />
                <span className="text-base lg:text-lg">{item.institution}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 lg:items-end">
              <Badge variant="outline" className="bg-muted/50 border-border/50 text-text-2 font-mono text-sm px-4 py-2 rounded-full">
                <Calendar className="w-3 h-3 mr-2" />
                {item.period}
              </Badge>
              {item.gpa && (
                <Badge className="bg-gradient-to-r from-accent to-accent-dark text-bg font-semibold px-3 py-1 rounded-full">
                  <Award className="w-3 h-3 mr-1" />
                  GPA: {item.gpa}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-text-2 mt-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm lg:text-base">{item.location}</span>
          </div>
        </CardHeader>
        
        {item.highlights && item.highlights.length > 0 && (
          <CardContent className="pt-0">
            <div className="space-y-3">
              {item.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 group/highlight">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/highlight:scale-125 transition-transform duration-200"></div>
                  <span className="text-text-2 leading-relaxed text-sm lg:text-base group-hover/highlight:text-text transition-colors duration-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
            // Add active state with slight delay for better visual effect
            setTimeout(() => {
              setActiveItems(prev => new Set([...prev, index]));
            }, 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('[data-timeline-item]');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Animate timeline path on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ));
      
      // Update CSS custom property for timeline animation
      timelineRef.current.style.setProperty('--timeline-progress', `${scrollProgress * 100}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen pt-20 pb-20 bg-surface/30 relative overflow-hidden"
      aria-label="Experience & Education"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg lg:text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic background in AI, data science, and software engineering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div 
            ref={timelineRef}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-accent/30 to-border overflow-hidden"
          >
            <div 
              className="w-full bg-gradient-to-b from-accent via-accent-light to-accent transition-all duration-1000 ease-out"
              style={{ 
                height: 'var(--timeline-progress, 0%)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
              }}
            ></div>
          </div>

          {/* Professional Experience Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12 pl-20">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                <Briefcase className="w-6 h-6 text-bg" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Professional Experience
              </h3>
            </div>
            
            <div className="space-y-0">
              {workExperience.map((item, index) => (
                <div key={index} data-timeline-item data-index={index}>
                  <ExperienceCard 
                    item={item} 
                    index={index}
                    isVisible={visibleItems.has(index)}
                    isActive={activeItems.has(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12 pl-20">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                <GraduationCap className="w-6 h-6 text-bg" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Education
              </h3>
            </div>
            
            <div className="space-y-0">
              {education.map((item, index) => {
                const globalIndex = workExperience.length + index;
                return (
                  <div key={index} data-timeline-item data-index={globalIndex}>
                    <EducationCard 
                      item={item} 
                      index={index}
                      isVisible={visibleItems.has(globalIndex)}
                      isActive={activeItems.has(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @media (max-width: 768px) {
          .container-custom {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}