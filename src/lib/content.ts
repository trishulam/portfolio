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

export interface Role {
  org: string;
  team?: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export const experience: Role[] = [
  {
    org: "Amazon AGI",
    team: "AWS SageMaker",
    title: "Software Development Engineer Intern, ML",
    period: "Sep 2026 – Dec 2026",
    location: "Sunnyvale, CA",
    bullets: [
      "Model-customization platform: production workflows for fine-tuning, preference optimization, prompt engineering, and custom evals, agnostic to model, inference stack, and compute.",
    ],
  },
  {
    org: "Google",
    team: "YouTube Trust & Safety, GenAI Guardrails",
    title: "Software Engineering Intern",
    period: "May 2026 – Aug 2026",
    location: "Mountain View, CA",
    bullets: [
      "Benchmarked 9 architectures and 8 weight-merging methods (SLERP, LERP, TIES, MagMax) in JAX across Gemma-3 encoder classifiers and causal-decoder raters. Finding: consolidation has to happen in data space for encoders and weight space for decoders, from gradient conflict and later-layer representation drift respectively.",
      "Handed off a joint unmasked multi-task encoder (shared violative head) at 98.33% macro ROC-AUC and +8.5 pp recall over per-policy experts at 95% precision, replacing a 4x ensemble at 1x cost and lifting worst-policy recall from 6.49% to 62.86%.",
      "Designed the team's OOD adaptation playbook: sequential zero-replay fine-tuning plus SLERP 60/40 weight merging, eliminating the 15% replay buffer, cutting adaptation compute over 60%, and holding ID AUC at 91.3% with no legacy-policy regression. First-author paper under review at a NeurIPS 2026 workshop.",
      "Built a long-horizon human-in-the-loop AutoML agent that runs the playbook end to end: curates OOD data, launches training, merges weights, validates checkpoints against quality thresholds, then promotes a production candidate.",
    ],
  },
  {
    org: "S2T AI",
    team: "AI-powered investigations",
    title: "Software Engineer",
    period: "Dec 2024 – Aug 2025",
    location: "Singapore",
    bullets: [
      "Owned the company's agentic AI from prototype to customers: a knowledge-graph RAG microservice searching documents and databases, plus an agentic assistant with multi-agent orchestration, tool calling, and generative UI.",
      "Developed an AI ETL service for natural-language queries on unstructured data; deployed 8 Kubernetes microservices through Azure DevOps; improved audio spoofing detection by 15%.",
    ],
  },
  {
    org: "Vessel Match",
    team: "Incubated at Nirmaan, IIT Madras",
    title: "Founder & CEO",
    period: "May 2024 – Jun 2025",
    location: "Chennai, India",
    bullets: [
      "Founded and led a full-stack AI platform automating vessel/cargo matching and pre-fixture workflows: event-driven microservices on AWS (Lambda, SQS, EC2), FastAPI, Next.js, Supabase, RAG, and MCP.",
      "Processed 200+ vessels and 150+ cargo listings daily in trials, forged 5 industry partnerships, and secured INR 700,000 seed funding plus $2K AWS credits while leading all technical development.",
      "No product-market fit in the end. I led all engineering and learned what I should have built instead.",
    ],
    links: [{ label: "Product demo", url: "https://youtu.be/yBCJVwjMqBI" }],
  },
  {
    org: "32Mins Digital",
    title: "AI Engineer Intern",
    period: "Feb 2024 – May 2024",
    location: "Chennai, India",
    bullets: [
      "AI dubbing system for 12 Indic languages; processed 500+ hours of content, including a pilot on parliamentary footage.",
    ],
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
  blurb: string;
  result?: string;
  stack: string[];
  details?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: "SGC: State-Governed Checkpointing for SWE Agents",
    when: "Apr 2026",
    kind: "Coursework, CIS 7000",
    blurb:
      "Supervisor middleware that keeps a long-running coding agent on task. It maintains a semantic working state (goal, subgoal, actions tried, known failures, active hypothesis) and injects a steering directive when the agent drifts.",
    result: "SWE-bench Verified (mini) resolution 66.7% → 72.3%, +11.2 pp on Django, 23% fewer agent steps",
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
    blurb:
      "Real-time proactive multimodal tutor that teaches over voice and a shared editable canvas. An autonomous canvas interpreter watches learner activity and decides when to intervene, catching confusion as it happens. Sessions resume across visits and export as recordings and lecture notes.",
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
    blurb:
      "Scores what is missing, stale, or contradictory across a hotel's reviews and asks recent guests exactly the questions whose answers would help the next traveler most.",
    result: "1st of 61 teams, Wharton Hack-AI-thon 2026",
    stack: ["Python", "LLMs", "Ranking", "Next.js"],
    links: [{ label: "Hack-AI-thon", url: "https://ai-analytics.wharton.upenn.edu/for-students/wharton-hack-ai-thon/" }],
  },
  {
    name: "Ayana",
    when: "Mar 2026",
    kind: "Hackathon",
    blurb:
      "Real-time travel guide. Agent narration stays in sync with Google Maps 3D camera transitions, so guidance is grounded in where you are on the map. Gesture and AR controls.",
    result: "Best Use of Gemini API, YHack 2026",
    stack: ["Next.js", "FastAPI", "Gemini Live", "Google ADK", "Google Maps 3D", "MediaPipe", "Snap AR"],
    links: [{ label: "Devpost", url: "https://devpost.com/software/ayana-g0ys7f" }],
  },
  {
    name: "MindPad",
    when: "Nov 2025",
    kind: "Hackathon",
    blurb:
      "Interactive, multimodal learning on the OpenAI Realtime API and Gemini: talk to it, watch it draw, quiz yourself on your own material.",
    result: "Best Overall, Practical AI Innovation, and Use of Gemini API at HackPrinceton (195 teams)",
    stack: ["OpenAI Realtime API", "Gemini", "React", "TypeScript"],
    links: [{ label: "Devpost", url: "https://devpost.com/software/mindpad" }],
  },
  {
    name: "GuruHeal",
    when: "2025",
    kind: "Side project",
    blurb:
      "Wellness assistant with multilingual chat, web search with inline citations, and a graph-RAG knowledge base of Ayurvedic sources.",
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
  { school: "University of Pennsylvania", degree: "MSE, Data Science", period: "2025 – 2027", note: "GPA 3.91. TA for CIS 5150 Linear Algebra & Optimization and CIS 5110 Theory of Computation. Courses: CIS 5210 AI, CIS 7000 Agentic AI, CIS 5190 Applied ML, CIS 5450 Big Data Analytics." },
  { school: "IIT Madras", degree: "BS, Data Science & Applications", period: "2021 – 2025", note: "GPA 3.91. Academic Merit Certificate. Coursework included Deep Learning and Reinforcement Learning. Completed alongside the B.E. below." },
  { school: "SSN College of Engineering, Anna University", degree: "B.E., Mechanical Engineering", period: "2020 – 2024", note: "Department topper, CGPA 9.21/10. Merit Scholarship, first three semesters." },
  { school: "National University of Singapore", degree: "Global Academic Internship Program, Deep Learning", period: "Jul 2023", note: "Best Performer in a ~100-person cohort." },
];

export const awards: { what: string; detail: string; when: string; url?: string }[] = [
  { what: "Winner, 2026 Wharton Hack-AI-thon", detail: "First among 61 teams, with WayWise", when: "2026", url: "https://ai-analytics.wharton.upenn.edu/for-students/wharton-hack-ai-thon/" },
  { what: "Best Use of Gemini API, YHack 2026", detail: "Ayana, real-time multimodal travel guide", when: "2026", url: "https://devpost.com/software/ayana-g0ys7f" },
  { what: "YC Startup School 2026", detail: "One of 6,000 technical builders invited to YC's invite-only AI summit in SF", when: "2026", url: "https://events.ycombinator.com/startup-school-2026" },
  { what: "Winner, HackPrinceton 2025 (MLH)", detail: "Best Overall, Practical AI Innovation, and Use of Gemini API among 195 teams, with MindPad", when: "2025", url: "https://devpost.com/software/mindpad" },
  { what: "IITM Paradox", detail: "Steering Committee, Secretary & Core; built the org from scratch for a 22,000-student community", when: "2025 – 2026", url: "https://www.iitmparadox.org" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Neo4j)"] },
  { group: "AI / ML", items: ["JAX", "PyTorch", "model merging", "continual learning", "multi-task SFT", "LoRA", "RAG", "knowledge graphs", "MCP"] },
  { group: "Tools & infra", items: ["FastAPI", "React", "Next.js", "Docker", "Kubernetes", "Git", "Azure DevOps", "AWS", "GCP", "Supabase", "Redis"] },
];
