'use client';

interface CredibilityItem {
  name: string;
  url?: string;
  description: string;
}

const credibilityItems: CredibilityItem[] = [
  {
    name: "University of Pennsylvania",
    url: "https://www.upenn.edu",
    description: "MSE Data Science Student"
  },
  {
    name: "IIT Madras",
    url: "https://www.iitm.ac.in",
    description: "Bachelor's Data Science (3.91 GPA)"
  },
  {
    name: "S2T AI",
    url: "https://s2t.ai",
    description: "Software Engineer"
  },
  {
    name: "Nirmaan IIT Madras",
    url: "https://www.nirmaan.iitm.ac.in",
    description: "Startup Incubation"
  },
  {
    name: "IEEE Conference",
    url: "https://ieeexplore.ieee.org/document/10353317",
    description: "Published Research Author"
  }
];

export function CredibilityStrip() {
  return (
    <section 
      className="py-16 border-b border-border bg-surface/30"
      aria-label="Credibility and Achievements"
    >
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm text-text-2 font-medium uppercase tracking-wider">
            Education & Professional Affiliations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {credibilityItems.map((item, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-2 transition-opacity hover:opacity-70 focus:opacity-70"
                  aria-label={item.description}
                >
                  <div className="h-12 flex items-center justify-center">
                    <div className="w-32 h-8 bg-gradient-to-r from-text-2/20 to-text-2/10 rounded-md flex items-center justify-center">
                      <span className="text-sm font-semibold text-text-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="space-y-2">
                  <div className="h-12 flex items-center justify-center">
                    <div className="w-32 h-8 bg-gradient-to-r from-text-2/20 to-text-2/10 rounded-md flex items-center justify-center">
                      <span className="text-sm font-semibold text-text-2 opacity-60">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-text-2/60">
            * Replace with actual university, company, or award logos
          </p>
        </div>
      </div>
    </section>
  );
}
