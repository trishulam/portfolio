'use client';

import { useState, useEffect } from 'react';

interface Metric {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

const metrics: Metric[] = [
  {
    value: "15%",
    label: "Audio spoofing detection accuracy improvement",
    description: "Enhanced at S2T AI",
    icon: "📈"
  },
  {
    value: "₹7L+",
    label: "Seed funding + AWS credits secured",
    description: "For Vessel Match startup",
    icon: "💰"
  },
  {
    value: "500+",
    label: "Hours of video processed",
    description: "Speech translation for Indian Parliament",
    icon: "🎥"
  },
  {
    value: "8",
    label: "Kubernetes microservices deployed",
    description: "Production AI systems at S2T AI",
    icon: "⚙️"
  }
];

export function QuickProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<string[]>(['0', '0', '0', '0']);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate metric values
          metrics.forEach((metric, index) => {
            setTimeout(() => {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = metric.value;
                return newValues;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('proven-impact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proven-impact"
      className="section-spacing relative overflow-hidden"
      aria-label="Performance Metrics and Achievements"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 enhanced-text-gradient">
            Proven Impact
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            Measurable results from recent projects, demonstrating technical excellence
            and business impact across different domains.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
          role="list"
          aria-label="Performance metrics and achievements"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              role="listitem"
            >
              {/* Modern Metric Card */}
              <div className="relative">
                {/* Card Background with Glassmorphism */}
                <div
                  className="relative bg-gradient-to-br from-surface/80 to-surface-2/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/10 group-hover:-translate-y-2 focus-enhanced"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`metric-${index}-value`}
                  aria-describedby={`metric-${index}-description`}
                >
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div
                    className="text-2xl lg:text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {metric.icon}
                  </div>
                  
                  {/* Metric Value */}
                  <div className="relative mb-3">
                    <div
                      id={`metric-${index}-value`}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 font-mono tracking-tight"
                      aria-label={`${metric.value} ${metric.label}`}
                    >
                      {animatedValues[index]}
                    </div>
                    
                    {/* Accent Line */}
                    <div
                      className="w-12 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto lg:mx-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      aria-hidden="true"
                    />
                  </div>
                  
                  {/* Metric Label */}
                  <div
                    className="text-sm lg:text-base text-text font-medium leading-snug min-h-[2.5rem] flex items-center justify-center lg:justify-start text-center lg:text-left"
                    id={`metric-${index}-label`}
                  >
                    {metric.label}
                  </div>
                </div>

                {/* Description Tooltip */}
                {metric.description && (
                  <div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 z-10 pointer-events-none"
                    id={`metric-${index}-description`}
                    role="tooltip"
                    aria-live="polite"
                  >
                    <div className="bg-surface-3/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 text-xs text-text-2 whitespace-nowrap shadow-lg">
                      {metric.description}
                      {/* Arrow */}
                      <div
                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-surface-3/95 border-l border-t border-border/50 rotate-45"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
            <span className="text-xs text-accent">*</span>
            <p className="text-xs lg:text-sm text-text-2">
              Metrics represent safe, publicly shareable data from recent projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
