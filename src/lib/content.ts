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
      "Compared 9 architectures and 8 weight-merging methods (JAX, Gemma 3) for multi-policy safety classifiers.",
      "A joint multi-task encoder with a shared violative head beat per-policy experts by 8.5 pp recall at 95% precision and removed an aggregation layer from serving.",
      "Weight-merged causal decoders matched a 4-model ensemble at 1x serving cost.",
      "Built a zero-replay continual-learning recipe (sequential fine-tune, then SLERP merge, gated on per-policy thresholds) for adapting to new content distributions without forgetting, plus an agent that runs it end to end. Written up as a first-author workshop paper.",
    ],
  },
  {
    org: "S2T AI",
    team: "AI-powered investigations",
    title: "Software Engineer",
    period: "Dec 2024 – Aug 2025",
    location: "Singapore",
    bullets: [
      "Built the company's first agentic AI assistant from zero to customers: multi-agent orchestration, tool calling, generative UI.",
      "Knowledge-graph RAG service over Neo4j; AI ETL service for natural-language queries on unstructured data.",
      "Shipped ~8 Kubernetes microservices via Azure DevOps; improved audio spoofing detection by 15%.",
    ],
  },
  {
    org: "Vessel Match",
    team: "Incubated at Nirmaan, IIT Madras",
    title: "Founder & CEO",
    period: "May 2024 – Jun 2025",
    location: "Chennai, India",
    bullets: [
      "AI platform matching vessels with cargo and automating pre-fixture work. Event-driven services on AWS Lambda, SQS, EC2; FastAPI and Next.js.",
      "Trials processed 200+ vessels and 150+ cargo listings a day; five industry partnerships; INR 7L seed funding.",
      "No product-market fit in the end. I led all engineering and learned what I should have built instead.",
    ],
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
    title: "Knee Osteoarthritis Detection and Grading from X-rays and Clinical Data",
    venue: "IEEE CSNT 2025",
    year: "2025",
    status: "Published",
    role: "Co-author",
    summary:
      "EfficientNet-B3 on radiographs combined with clinical features; about 95% detection accuracy and 84% grading accuracy.",
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
    result: "+5.6 pp on SWE-bench Verified mini over a vanilla agent",
    stack: ["Python", "LangGraph", "Deep Agents", "Docker", "SWE-bench"],
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
      "Proactive multimodal tutor. Teaches through voice, an editable canvas, generated diagrams, flashcards, and gestures. A canvas interpreter watches what the learner is doing and steps in without being asked.",
    stack: ["React", "TypeScript", "FastAPI", "Gemini Live", "Google ADK", "tldraw", "MediaPipe", "GCP"],
  },
  {
    name: "WayWise",
    when: "Apr 2026",
    kind: "Hackathon",
    blurb:
      "Scores what is missing, stale, or contradictory across a hotel's reviews and asks recent guests exactly the questions whose answers would help the next traveler most.",
    result: "1st of 61 teams, Wharton Hack-AI-thon 2026",
    stack: ["Python", "LLMs", "Ranking", "Next.js"],
  },
  {
    name: "Ayana",
    when: "Mar 2026",
    kind: "Hackathon",
    blurb:
      "Real-time travel guide. Agent narration stays in sync with Google Maps 3D camera transitions, so guidance is grounded in where you are on the map. Gesture and AR controls.",
    result: "Best Use of Gemini API, YHack 2026",
    stack: ["Next.js", "FastAPI", "Gemini Live", "Google ADK", "Google Maps 3D", "MediaPipe", "Snap AR"],
  },
  {
    name: "MindPad",
    when: "Nov 2025",
    kind: "Hackathon",
    blurb:
      "Interactive, multimodal learning on the OpenAI Realtime API and Gemini: talk to it, watch it draw, quiz yourself on your own material.",
    result: "Best Overall, Practical AI Innovation, and Use of Gemini API at HackPrinceton (195 teams)",
    stack: ["OpenAI Realtime API", "Gemini", "React", "TypeScript"],
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
  { school: "University of Pennsylvania", degree: "MSE, Data Science", period: "2025 – 2027", note: "GPA 3.91. TA for CIS 5150, Linear Algebra & Optimization." },
  { school: "IIT Madras", degree: "BS, Data Science & Applications", period: "2021 – 2025", note: "GPA 3.91 (CGPA 9.04/10), Academic Merit Certificate. Completed alongside the B.E. below." },
  { school: "SSN College of Engineering, Anna University", degree: "B.E., Mechanical Engineering", period: "2020 – 2024", note: "Department topper, CGPA 9.21/10. Merit Scholarship, first three semesters." },
  { school: "National University of Singapore", degree: "Global Academic Internship Program, Deep Learning", period: "Jul 2023", note: "Best Performer in a ~100-person cohort." },
];

export const awards = [
  { what: "Winner, Wharton Hack-AI-thon", detail: "1st of 61 teams, WayWise", when: "2026" },
  { what: "Best Use of Gemini API, YHack", detail: "Ayana", when: "2026" },
  { what: "Finalist, Meta × Hugging Face OpenEnv RL Hackathon", detail: "", when: "2026" },
  { what: "YC Startup School", detail: "Selected, invite-only cohort", when: "2026" },
  { what: "Best Overall, HackPrinceton (MLH)", detail: "Also Practical AI Innovation and Use of Gemini API, of 195 teams; MindPad", when: "2025" },
  { what: "Winner, Karnataka State Police Datathon", detail: "", when: "2024" },
  { what: "Steering Committee, Paradox IIT Madras", detail: "Secretary in 2025; one of India's largest student fests, 22,000-student community", when: "2025 – 2026" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "C++", "Java", "SQL", "R"] },
  { group: "ML", items: ["JAX", "PyTorch", "TensorFlow", "model merging", "LoRA", "multi-task SFT", "continual learning", "encoder classifiers", "LLM raters", "OOD adaptation"] },
  { group: "Agents", items: ["LangGraph", "Deep Agents", "Google ADK", "PydanticAI", "RAG", "knowledge graphs"] },
  { group: "Systems", items: ["FastAPI", "Next.js", "React", "PostgreSQL", "Neo4j", "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Azure DevOps"] },
];
