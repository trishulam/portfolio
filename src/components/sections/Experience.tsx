'use client';

import { GraduationCap, Briefcase, Rocket, MapPin } from 'lucide-react';

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

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen pt-20 pb-20 bg-surface/30"
      aria-label="Experience & Education"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & Education
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            My professional journey and academic background in AI, data science, and software engineering
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          {/* Work Experience Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">Professional Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="space-y-8">
                {workExperience.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-2 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      item.type === 'founder' 
                        ? 'bg-warn border-warn/20' 
                        : 'bg-accent border-accent/20'
                    }`}>
                      {item.type === 'founder' ? (
                        <Rocket className="w-3 h-3 text-bg" />
                      ) : (
                        <Briefcase className="w-3 h-3 text-bg" />
                      )}
                    </div>
                    
                    <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-border/30">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <span className="text-sm font-mono text-text-2 bg-muted px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-semibold text-accent">{item.organization}</span>
                        {item.location && (
                          <>
                            <span className="text-text-2">•</span>
                            <div className="flex items-center gap-1 text-text-2">
                              <MapPin className="w-3 h-3" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {item.description && (
                        <div className="prose prose-sm max-w-none">
                          <p className="text-text-2 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-success">Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 bg-success border-4 border-success/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-bg" />
                    </div>
                    
                    <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-border/30">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <h4 className="font-bold text-lg">{item.degree}</h4>
                        <span className="text-sm font-mono text-text-2 bg-muted px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-semibold text-success">{item.institution}</span>
                        <span className="text-text-2">•</span>
                        <div className="flex items-center gap-1 text-text-2">
                          <MapPin className="w-3 h-3" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        {item.gpa && (
                          <>
                            <span className="text-text-2">•</span>
                            <span className="text-sm font-semibold text-success">GPA: {item.gpa}</span>
                          </>
                        )}
                      </div>
                      
                      {item.highlights && (
                        <div className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-text-2 leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}