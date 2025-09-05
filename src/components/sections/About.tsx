'use client';

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "TensorFlow",
  "PydanticAI",
  "Pinecone",
  "React Native",
  "Azure DevOps"
];

const specializations = [
  'Knowledge Graph-RAG Systems',
  'Agentic AI Workflows',
  'Microservices Architecture',
  'Full-Stack AI Applications'
];

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-bg-secondary/50 to-surface/30 relative overflow-hidden"
      aria-label="About Me"
    >
      {/* Enhanced background pattern with depth */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header with Creative Typography */}
        <header className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 enhanced-text-gradient leading-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto rounded-full opacity-80"></div>
        </header>

        <div className="max-w-7xl mx-auto">
          {/* Modern Bento-Style Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            
            {/* Main Bio Section - Subtle, Clean Design */}
            <div className="lg:col-span-8 order-1 lg:order-1">
              <div className="space-y-6 slide-in-left">
                {/* Enhanced paragraph styling with perfect readability */}
                <p className="text-lg lg:text-xl text-text-2 leading-relaxed max-w-none">
                  I&rsquo;m a collaborative engineer who builds{' '}
                  <span className="text-accent-light font-semibold bg-accent/10 px-2 py-1 rounded-lg">
                    production-grade AI systems
                  </span>
                  —from agentic workflows to RAG platforms. Currently pursuing my Master&rsquo;s at UPenn while working as a Software Engineer at S2T AI, where I develop Knowledge Graph-RAG microservices and Agentic AI Chat Assistants.
                </p>
                
                <p className="text-lg lg:text-xl text-text-2 leading-relaxed max-w-none">
                  My experience spans from{' '}
                  <span className="text-success-light font-semibold bg-success/10 px-2 py-1 rounded-lg">
                    founding and leading Vessel Match
                  </span>{' '}
                  (a maritime marketplace startup) to building speech-to-speech translation tools for the Indian Parliament. I&rsquo;ve published research in ML and supply chain optimization.
                </p>
              </div>
            </div>

            {/* Key Specializations - Modern Glassmorphism Card */}
            <div className="lg:col-span-4 order-2 lg:order-2">
              <div className="surface surface-hover p-6 lg:p-8 rounded-3xl h-full slide-in-right backdrop-blur-xl bg-gradient-to-br from-surface/80 to-surface-2/60">
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center enhanced-text-gradient">
                  Key Specializations
                </h3>
                <div className="space-y-4">
                  {specializations.map((specialty, index) => (
                    <div
                      key={specialty}
                      className="group relative overflow-hidden px-5 py-4 bg-gradient-to-r from-accent/15 via-accent/10 to-success/15 text-text border border-accent/30 rounded-2xl text-sm lg:text-base font-medium text-center transition-all duration-500 hover:from-accent/25 hover:via-accent/20 hover:to-success/25 hover:border-accent/50 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quote Section - Creative Glassmorphism Design */}
          <div className="mb-16 fade-in-up">
            <div className="max-w-4xl mx-auto">
              <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-surface/60 via-surface-2/40 to-surface-3/60 border border-accent/20 backdrop-blur-xl overflow-hidden group hover:border-accent/40 transition-all duration-500">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote marks with enhanced styling */}
                <div className="absolute top-4 left-6 text-6xl lg:text-7xl text-accent/30 font-serif leading-none select-none">&ldquo;</div>
                <div className="absolute bottom-4 right-6 text-6xl lg:text-7xl text-accent/30 font-serif leading-none select-none">&rdquo;</div>
                
                <blockquote className="relative z-10 text-center px-8 lg:px-16 py-4">
                  <p className="text-lg lg:text-xl italic text-text-2 leading-relaxed font-light">
                    I approach complex AI systems with the same methodical curiosity I had solving puzzles as a kid—breaking down intricate problems into manageable components until elegant solutions emerge.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Core Technologies - Modern Pill Design */}
          <div className="text-center fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 enhanced-text-gradient">
              Core Technologies
            </h3>
            
            {/* Responsive grid for tech badges */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="group relative inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-surface/80 to-surface-2/60 text-text-2 border border-border/50 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:from-surface hover:to-surface-2 hover:border-accent/50 hover:text-accent hover:transform hover:scale-110 hover:shadow-lg hover:shadow-accent/20 backdrop-blur-sm cursor-pointer focus-enhanced"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Technology: ${skill}`}
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
