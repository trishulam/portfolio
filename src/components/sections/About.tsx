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

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 pb-8 bg-gradient-to-b from-bg-secondary/50 to-surface/30 relative"
      aria-label="About Me"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Bio Section - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4 slide-in-left">
              <p className="text-base text-text-2 leading-relaxed">
                I&rsquo;m a collaborative engineer who builds <span className="text-accent-light font-semibold">production-grade AI systems</span>—from agentic
                workflows to RAG platforms. Currently pursuing my Master&rsquo;s at UPenn while working
                as a Software Engineer at S2T AI, where I develop Knowledge Graph-RAG microservices
                and Agentic AI Chat Assistants.
              </p>
              <p className="text-base text-text-2 leading-relaxed">
                My experience spans from <span className="text-success-light font-semibold">founding and leading Vessel Match</span> (a maritime marketplace
                startup) to building speech-to-speech translation tools for the Indian Parliament.
                I&rsquo;ve published research in ML and supply chain optimization.
              </p>
              
              {/* Enhanced quote with better styling */}
              <div className="mt-6 p-6 surface rounded-xl border-l-4 border-accent glow-accent">
                <blockquote className="text-sm italic text-text-2 relative pl-6 pr-6 pt-2 pb-2">
                  <span className="text-accent text-2xl absolute top-0 left-0">&ldquo;</span>
                  I approach complex AI systems with the same methodical curiosity I had
                  solving puzzles as a kid—breaking down intricate problems into manageable
                  components until elegant solutions emerge.
                  <span className="text-accent text-2xl absolute bottom-0 right-0">&rdquo;</span>
                </blockquote>
              </div>
            </div>

            {/* Key Specializations - Takes 1 column */}
            <div className="surface surface-hover p-6 rounded-2xl slide-in-right">
              <h4 className="text-lg font-bold mb-4 text-center text-gradient">Key Specializations</h4>
              <div className="space-y-3">
                {[
                  'Knowledge Graph-RAG Systems',
                  'Agentic AI Workflows',
                  'Microservices Architecture',
                  'Full-Stack AI Applications'
                ].map((specialty, index) => (
                  <div
                    key={specialty}
                    className="px-4 py-3 bg-gradient-to-r from-accent/15 to-success/15 text-text border border-accent/30 rounded-lg text-sm font-medium text-center transition-all duration-300 hover:from-accent/25 hover:to-success/25 hover:border-accent/50 hover:transform hover:scale-105 glow-accent"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Technologies - Compact horizontal layout */}
          <div className="text-center fade-in-up">
            <h3 className="text-xl font-bold mb-6 text-gradient">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="tech-tag animate-shimmer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
