'use client';

interface Metric {
  value: string;
  label: string;
  description?: string;
}

const metrics: Metric[] = [
  {
    value: "15%",
    label: "Audio spoofing detection accuracy improvement",
    description: "Enhanced at S2T AI"
  },
  {
    value: "₹7L+",
    label: "Seed funding + AWS credits secured",
    description: "For Vessel Match startup"
  },
  {
    value: "500+",
    label: "Hours of video processed",
    description: "Speech translation for Indian Parliament"
  },
  {
    value: "8",
    label: "Kubernetes microservices deployed",
    description: "Production AI systems at S2T AI"
  }
];

export function QuickProof() {
  return (
    <section 
      className="section-spacing"
      aria-label="Performance Metrics and Achievements"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Proven Impact
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            Measurable results from recent projects, demonstrating technical excellence 
            and business impact across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="metric-pill bg-surface border-border hover:border-accent transition-colors cursor-default">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
              {metric.description && (
                <p className="text-xs text-text-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-text-2">
            * Metrics represent safe, publicly shareable data from recent projects
          </p>
        </div>
      </div>
    </section>
  );
}
