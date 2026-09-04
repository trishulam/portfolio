export const site = {
  name: "Vamsi Krishna",
  fullName: "Vamsi Krishna N K",
  email: "nkvk@engineering.upenn.edu",
  github: "https://github.com/trishulam",
  linkedin: "https://www.linkedin.com/in/vamsikrishnank/",
  resume: "/resume.pdf",
  location: "Santa Clara, CA",
  tagline: "I build ML systems and AI agents.",
  intro:
    "Master's student in Data Science at Penn. Spent summer 2026 at Google on YouTube Trust & Safety, keeping multi-policy safety classifiers current with weight merging instead of replay buffers. Now at Amazon AGI on the model-customization platform inside SageMaker.",
  status: "Open to 2027 new grad roles in ML systems, AI infrastructure, and agents.",
};

export const now = [
  { label: "Now", value: "SDE Intern, ML at Amazon AGI, Sunnyvale" },
  { label: "Studying", value: "MSE Data Science, University of Pennsylvania, through May 2027" },
  { label: "Writing", value: "First-author paper under review at a NeurIPS 2026 workshop" },
  { label: "Thinking about", value: "Continual learning, model merging, agents that survive production" },
];

export const stats = [
  { value: "1st / 61", label: "Wharton Hack-AI-thon 2026" },
  { value: "+8.5 pp", label: "Recall at 95% precision" },
  { value: "4x → 1x", label: "Serving cost, merged" },
  { value: "2 + 1", label: "Papers, one under review" },
];

export interface Role {
  org: string;
  team?: string;
  title: string;
  period: string;
  location: string;
  now?: boolean;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export const experience: Role[] = [
  {
    org: "Google",
    team: "YouTube Trust & Safety, GenAI Guardrails",
    title: "Software Engineering Intern",
    period: "May 2026 – Aug 2026",
    location: "Mountain View, CA",
    bullets: [
      "Benchmarked 9 architectures and 8 weight-merging methods (SLERP, LERP, TIES, MagMax) in JAX on Gemma 3. Finding: consolidate in data space for encoders and weight space for decoders.",
      "Handed off a joint multi-task encoder at 98.33% macro ROC-AUC: +8.5 pp recall over per-policy experts at 95% precision, replacing a 4x ensemble at 1x cost and lifting worst-policy recall from 6.49% to 62.86%.",
      "Designed the OOD adaptation playbook (sequential zero-replay fine-tuning, then SLERP merge), cutting adaptation compute over 60% with no legacy-policy regression, and an agent that runs it end to end. First-author paper under review, NeurIPS 2026 workshop.",
    ],
  },
  {
    org: "Amazon AGI",
    now: true,
    team: "AWS SageMaker",
    title: "Software Development Engineer Intern, ML",
    period: "Sep 2026 – Dec 2026",
    location: "Sunnyvale, CA",
    bullets: [
      "Model-customization platform: production workflows for fine-tuning, preference optimization, prompt engineering, and custom evals, agnostic to model, inference stack, and compute.",
    ],
  },
  {
    org: "S2T AI",
    team: "AI-powered investigations",
    title: "Software Engineer",
    period: "Dec 2024 – Aug 2025",
    location: "Singapore",
    bullets: [
      "Owned the company's agentic AI from prototype to customers: knowledge-graph RAG over documents and databases, a multi-agent assistant with tool calling and generative UI, an AI ETL service, and 8 Kubernetes microservices via Azure DevOps.",
    ],
  },
  {
    org: "Vessel Match",
    team: "Incubated at Nirmaan, IIT Madras",
    title: "Founder & CEO",
    period: "May 2024 – Jun 2025",
    location: "Chennai, India",
    bullets: [
      "Maritime matching startup incubated at Nirmaan, IIT Madras. Event-driven services on AWS, FastAPI, Next.js. 200+ vessels and 150+ cargo listings a day in trials, 5 industry partnerships, INR 7L seed. No product-market fit; the most useful year I've had.",
    ],
    links: [{ label: "Product demo", url: "https://youtu.be/yBCJVwjMqBI" }],
  },
];

export interface Paper {
  title: string;
  venue: string;
  year: string;
  status: "Under review" | "Published";
  role: string;
  summary: string;
  url?: string;
}

export const research: Paper[] = [
  {
    title: "Adapt, Merge, Validate: Zero-Replay Continual Learning for Multi-Policy Safety Classifiers",
    venue: "CL4FMAgents Workshop, NeurIPS 2026",
    year: "2026",
    status: "Under review",
    role: "First author, with the YouTube Trust & Safety team at Google",
    summary:
      "Keep a multi-policy safety classifier current as content drifts, without replay: fine-tune sequentially on the new distribution, SLERP-merge with the previous checkpoint, and gate the merge on per-policy thresholds at the serving operating point. Evaluated against replay-buffer baselines across three distribution shifts and a stacked chain of adaptations, on open datasets and Gemma 3.",
  },
  {
    title: "Gesturize: Real-Time Hand-Gesture Control for Presentations",
    venue: "ICCV 2025 Workshop (RIWM)",
    year: "2025",
    status: "Published",
    role: "First author",
    summary:
      "Landmark-based gesture classifier for hands-free slide control, about 94% accuracy at under 100 ms latency, with a companion mobile app for classroom streaming.",
    url: "https://openreview.net/forum?id=i0kiVWK6HW",
  },
  {
    title: "Water Quality Analysis and Prediction",
    venue: "IEEE GCAT 2023",
    year: "2023",
    status: "Published",
    role: "Co-author",
    summary: "Machine-learning models for water potability prediction from sensor and chemical features.",
    url: "https://ieeexplore.ieee.org/document/10353317",
  },
];

export interface Project {
  name: string;
  when: string;
  kind: string;
  kindOverride?: string;
  blurb: string;
  result?: string;
  stack: string[];
  details?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: "SGC SWE Agent",
    when: "Apr 2026",
    kind: "CIS 7000",
    blurb: "State-governed checkpointing: a supervisor that keeps a coding agent on task. SWE-bench Verified mini 66.7% → 72.3%, 23% fewer steps.",
    stack: ["Python", "LangGraph", "Deep Agents", "Docker", "SWE-bench", "GPT-5.5", "Gemini Flash 3"],
    links: [
      { label: "Code", url: "https://github.com/trishulam/sgc-swe-agent" },
      { label: "Report", url: "https://drive.google.com/file/d/1F6dXct-tcWKm3CNtxAzHRWPngOST-lm0/view" },
    ],
    details: [
      "72.3% resolution vs 66.7% baseline on 50 instances (25 Django, 25 Sphinx); +11.2 pp on Django, flat on Sphinx.",
      "About 23% fewer acting-agent steps (25.4 vs 33.0) at roughly 2.8x wall clock.",
      "Checkpoint cadence matters: n=3 (77.8%) beat n=5 (60.0%) and n=7 (44.4%).",
      "Cheap actor (Gemini Flash 3) plus strong supervisor (GPT-5.5) matched the strong model acting alone on a 10-instance subset.",
      "With Panagiotis Giadikiaroglou.",
    ],
  },
  {
    name: "ThinkSpace",
    when: "Mar 2026",
    kind: "Hackathon",
    blurb: "Proactive multimodal tutor over voice and a shared canvas. A canvas interpreter decides when to step in.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "Gemini Live", "Google ADK", "tldraw", "MediaPipe", "GCP"],
    links: [
      { label: "Demo", url: "https://youtu.be/IUsZXupcB9Q" },
      { label: "Code", url: "https://github.com/trishulam/ThinkSpace" },
      { label: "Devpost", url: "https://devpost.com/software/thinkspace-chlw9z" },
    ],
  },
  {
    name: "WayWise",
    when: "Apr 2026",
    kind: "Hackathon",
    kindOverride: "Wharton Hack-AI-thon · 1st / 61",
    blurb: "Finds what hotel reviews don't answer and asks recent guests the right questions.",
    stack: ["Python", "LLMs", "Ranking", "Next.js"],
    links: [{ label: "Hack-AI-thon", url: "https://ai-analytics.wharton.upenn.edu/for-students/wharton-hack-ai-thon/" }],
  },
  {
    name: "Ayana",
    when: "Mar 2026",
    kind: "Hackathon",
    kindOverride: "YHack 2026 · Best use of Gemini",
    blurb: "Travel guide whose narration stays in sync with Google Maps 3D camera moves.",
    stack: ["Next.js", "FastAPI", "Gemini Live", "Google ADK", "Google Maps 3D", "MediaPipe", "Snap AR"],
    links: [{ label: "Devpost", url: "https://devpost.com/software/ayana-g0ys7f" }],
  },
  {
    name: "MindPad",
    when: "Nov 2025",
    kind: "Hackathon",
    kindOverride: "HackPrinceton 2025 · Best overall",
    blurb: "Multimodal learning on the OpenAI Realtime API and Gemini. Best of 195 teams.",
    stack: ["OpenAI Realtime API", "Gemini", "React", "TypeScript"],
    links: [{ label: "Devpost", url: "https://devpost.com/software/mindpad" }],
  },
  {
    name: "GuruHeal",
    when: "2025",
    kind: "Side project",
    blurb: "Wellness assistant with cited web search and graph-RAG over Ayurvedic sources.",
    stack: ["Next.js", "PydanticAI", "FastAPI", "PostgreSQL", "Redis", "Graph RAG"],
    links: [{ label: "Code", url: "https://github.com/trishulam/Guruheal" }],
  },
];

export interface School {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export const education: School[] = [
  { school: "University of Pennsylvania", degree: "MSE Data Science", period: "2025 – 27", note: "GPA 3.91" },
  { school: "IIT Madras", degree: "BS Data Science & Applications", period: "2021 – 25", note: "GPA 3.91" },
  { school: "NUS School of Computing", degree: "Deep learning program", period: "2023", note: "Best performer" },
];

export const awards: { what: string; when: string; url?: string }[] = [
  { what: "Winner, Wharton Hack-AI-thon", when: "2026", url: "https://ai-analytics.wharton.upenn.edu/for-students/wharton-hack-ai-thon/" },
  { what: "Best Use of Gemini API, YHack", when: "2026", url: "https://devpost.com/software/ayana-g0ys7f" },
  { what: "YC Startup School", when: "2026", url: "https://events.ycombinator.com/startup-school-2026" },
  { what: "Winner, HackPrinceton (MLH)", when: "2025", url: "https://devpost.com/software/mindpad" },
  { what: "Steering Committee, IITM Paradox", when: "2025 – 26", url: "https://www.iitmparadox.org" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Neo4j)"] },
  { group: "AI / ML", items: ["JAX", "PyTorch", "model merging", "continual learning", "multi-task SFT", "LoRA", "RAG", "knowledge graphs", "MCP"] },
  { group: "Tools & infra", items: ["FastAPI", "React", "Next.js", "Docker", "Kubernetes", "Git", "Azure DevOps", "AWS", "GCP", "Supabase", "Redis"] },
];
