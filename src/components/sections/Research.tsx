'use client';

import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Paper {
  title: string;
  venue: string;
  year: string;
  status: 'published' | 'under review';
  role: string;
  summary: string;
  url?: string;
}

const papers: Paper[] = [
  {
    title: "Adapt, Merge, Validate: Zero-Replay Continual Learning for Multi-Policy Safety Classifiers",
    venue: "CL4FMAgents Workshop, NeurIPS 2026",
    year: "2026",
    status: "under review",
    role: "First author, with the YouTube Trust & Safety team at Google",
    summary: "Keeping a multi-policy safety classifier current as content drifts, without replay buffers: sequentially fine-tune on the new distribution, SLERP-merge with the previous checkpoint, and gate the merge on per-policy thresholds at the serving operating point. Compared against replay-buffer baselines across three distribution shifts and a stacked chain of adaptations, on open datasets and Gemma 3."
  },
  {
    title: "Gesturize: Real-Time Hand-Gesture Control for Presentations",
    venue: "ICCV 2025 Workshop (RIWM), non-archival",
    year: "2025",
    status: "published",
    role: "First author",
    summary: "Landmark-based gesture classifier for hands-free slide control, about 94% accuracy at under 100 ms latency, with a companion mobile app for classroom streaming.",
    url: "https://openreview.net/forum?id=i0kiVWK6HW"
  },
  {
    title: "Knee Osteoarthritis Detection and Grading from X-rays and Clinical Data",
    venue: "IEEE CSNT 2025",
    year: "2025",
    status: "published",
    role: "Co-author",
    summary: "EfficientNet-B3 on radiographs combined with clinical features; about 95% detection accuracy and 84% grading accuracy."
  },
  {
    title: "Water Quality Analysis and Prediction",
    venue: "IEEE GCAT 2023, Bangalore",
    year: "2023",
    status: "published",
    role: "Co-author",
    summary: "Machine-learning models for water potability prediction from sensor and chemical features.",
    url: "https://ieeexplore.ieee.org/document/10353317"
  }
];

export function Research() {
  return (
    <section id="research" className="section-spacing relative overflow-hidden" aria-label="Research and publications">
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 enhanced-text-gradient leading-tight">
            Research
          </h2>
          <p className="text-lg lg:text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            I&rsquo;m not aiming for a research career, but I use it to get technically deep. Current thread: model merging and continual learning for models that have to stay in production.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {papers.map((paper) => (
            <Card
              key={paper.title}
              className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 border border-border/30 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-muted/50 border-border/50 text-text-2 font-mono text-xs px-3 py-1 rounded-full">
                    {paper.venue}
                  </Badge>
                  {paper.status === 'under review' ? (
                    <Badge className="bg-warn/20 text-warn border border-warn/30 font-semibold text-xs px-3 py-1 rounded-full">
                      Under review
                    </Badge>
                  ) : (
                    <Badge className="bg-success/15 text-success-light border border-success/30 font-semibold text-xs px-3 py-1 rounded-full">
                      Published
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg lg:text-xl font-bold text-text leading-snug group-hover:text-accent transition-colors duration-300">
                  <span className="inline-flex items-start gap-2">
                    <FileText className="w-5 h-5 mt-1 shrink-0 text-accent" />
                    <span>{paper.title}</span>
                  </span>
                </CardTitle>
                <p className="text-sm text-text-2 mt-1">{paper.role}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-text-2 leading-relaxed text-sm lg:text-base">{paper.summary}</p>
                {paper.url && (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                  >
                    Read paper <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
