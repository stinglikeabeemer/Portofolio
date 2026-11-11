export interface PersonalInfo {
  name: string;
  shortName: string;
  rank: string;
  title: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  avatarImage: string;
  education: {
    university: string;
    degree: string;
    gpa: string;
    period: string;
    location: string;
    coursework: string[];
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: string;
  tag: string;
}

export interface SkillCategory {
  category: "Backend & APIs" | "Databases" | "Tools & CV";
  subtitle: string;
  accent: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: string;
  featureHighlight: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  year: string;
  title: string;
  organizer: string;
  badge: string;
}

export const portfolioData: {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
} = {
  personal: {
    name: "Raden Mas Galih Pradityo",
    shortName: "GALIH PRADITYO",
    rank: "S-RANK // BACKEND ARCHITECT",
    title: "Software Engineering Student | Backend & API Architecture Specialist",
    role: "5th Semester Software Engineering Student at IPB University, specializing in Backend Development, API Architecture, and Database Modeling.",
    headline:
      "Engineering resilient RESTful APIs, high-integrity SQL/NoSQL database schemas, and AI/Computer Vision backend pipelines.",
    summary:
      "A 5th Semester undergraduate Software Engineering student at IPB University (GPA 3.80/4.00) specializing in backend software development, API architecture, and database modeling, with robust full-stack capabilities. Proficient in building scalable web applications and microservices utilizing PHP (Laravel 12) and Python (FastAPI), backed by SQL/NoSQL databases, while seamlessly integrating modern frontend frameworks. Experienced in designing secure RESTful APIs, implementing multi-role authentication (RBAC, Sanctum, PostgreSQL RLS), and integrating advanced technologies such as Computer Vision (OpenCV) and the Google Gemini API.",
    location: "South Jakarta & Bogor, Indonesia",
    email: "galihpradityo19@gmail.com",
    phone: "+62 895-0514-2755",
    linkedin: "https://linkedin.com/in/galihpradityo",
    github: "https://github.com/galihpradityo",
    resumeUrl: "/CV_Raden Mas Galih Pradityo.pdf",
    avatarImage: "/images/hero-architect.svg",
    education: {
      university: "IPB University",
      degree: "Bachelor of Applied Engineering in Software Engineering",
      gpa: "3.80 / 4.00",
      period: "Aug 2024 – Present",
      location: "Bogor, Indonesia",
      coursework: [
        "Backend Development",
        "Database Systems",
        "Object-Oriented Programming",
        "Web Development",
        "Data Structures",
        "System Analysis and Design (SRS/UML)",
      ],
    },
    stats: [
      {
        label: "Current GPA",
        value: "3.80",
        detail: "Scale 4.00 @ IPB University",
      },
      {
        label: "Production Systems",
        value: "5+",
        detail: "Backend, AI & Full-Stack Apps",
      },
      {
        label: "Core Stack",
        value: "Laravel & FastAPI",
        detail: "RESTful APIs & Microservices",
      },
      {
        label: "Availability",
        value: "Open for Intern",
        detail: "Backend / Software Engineer",
      },
    ],
  },

  skills: [
    {
      category: "Backend & APIs",
      subtitle: "High-throughput server frameworks, token authentication & clean REST architecture",
      accent: "violet",
      skills: [
        {
          name: "Laravel",
          level: "Advanced",
          tag: "MVC, Sanctum Auth, RBAC, Eloquent ORM",
        },
        {
          name: "FastAPI",
          level: "Advanced",
          tag: "Async Python REST APIs, ML Model Serving",
        },
        {
          name: "Next.js",
          level: "Intermediate",
          tag: "App Router, SSR/SSG, Full-Stack API Routes",
        },
      ],
    },
    {
      category: "Databases",
      subtitle: "Relational schema design, Row-Level Security (RLS) & NoSQL document modeling",
      accent: "cyan",
      skills: [
        {
          name: "PostgreSQL",
          level: "Advanced",
          tag: "Supabase RLS, PL/pgSQL Triggers & Composite Indexing",
        },
        {
          name: "MySQL",
          level: "Advanced",
          tag: "Schema Migrations, Relational Normalization",
        },
        {
          name: "MongoDB",
          level: "Advanced",
          tag: "NoSQL Document Modeling, Regex & Aggregations",
        },
        {
          name: "Firebase",
          level: "Intermediate",
          tag: "FCM Push Notifications & Realtime Auth",
        },
      ],
    },
    {
      category: "Tools & CV",
      subtitle: "AI/LLM orchestration, computer vision pipelines & cloud PaaS deployment",
      accent: "amber",
      skills: [
        {
          name: "Google Gemini API",
          level: "Advanced",
          tag: "REST HTTP POST, Function Calling & Prompt Engineering",
        },
        {
          name: "OpenCV",
          level: "Intermediate",
          tag: "ExG/VARI Vegetation Indices & HSV Lesion Masks",
        },
        {
          name: "TensorFlow Lite",
          level: "Intermediate",
          tag: "Sub-second MobileNetV2 Disease Inference",
        },
        {
          name: "Docker",
          level: "Intermediate",
          tag: "Containerized Microservices & Runtime Isolation",
        },
        {
          name: "Railway",
          level: "Advanced",
          tag: "Cloud PaaS CI/CD & Production API Hosting",
        },
        {
          name: "Postman",
          level: "Advanced",
          tag: "API Contract Testing & Automated Test Suites",
        },
      ],
    },
  ],

  projects: [
    {
      id: "medigo",
      title: "MediGo",
      subtitle: "AI-Integrated Healthcare Backend Application",
      role: "Backend Developer",
      period: "Nov 2026 – Present",
      category: "Competition Project",
      featureHighlight: "API token authentication & AI integration",
      description:
        "Engineered the MVC backend infrastructure and custom MySQL schema migrations for clinical data management, featuring strict token authentication via Laravel Sanctum and smart medical assistant integration with the Google Gemini API.",
      architectureHighlights: [
        "Engineered the MVC backend infrastructure and designed custom MySQL database schema migrations for efficient data management.",
        "Implemented secure API token authentication for user endpoints utilizing Laravel Sanctum to enforce strict access control.",
        "Integrated an AI healthcare assistant by connecting to the Google Gemini API via direct REST HTTP POST requests and function calling.",
      ],
      techStack: ["Laravel", "MySQL", "Laravel Sanctum", "Google Gemini API"],
      image: "/images/projects/medigo.svg",
      githubUrl: "https://github.com/galihpradityo",
      accentColor: "from-violet-600/30 via-indigo-600/20 to-cyan-500/20",
    },
    {
      id: "agrivision",
      title: "Agrivision",
      subtitle: "Tomato Disease Detection & Health Monitoring System",
      role: "Backend Developer",
      period: "Sep 2026 – Present",
      category: "Academic Project",
      featureHighlight: "FastAPI on Railway, dual OpenCV pipeline, PostgreSQL RLS",
      description:
        "High-performance plant pathology system featuring scalable FastAPI REST endpoints on Railway for sub-second MobileNetV2 disease inference, a dual OpenCV vision pipeline, and a PostgreSQL schema protected by Row-Level Security (RLS).",
      architectureHighlights: [
        "Engineered and deployed scalable RESTful APIs using FastAPI on Railway to serve TFLite models (MobileNetV2), delivering sub-second disease classification across 10 classes of tomato leaves.",
        "Developed a dual computer vision processing pipeline with OpenCV to compute vegetation indices (ExG & VARI) and isolate lesion masks (HSV), accurately calculating plant damage percentage and severity levels.",
        "Designed a secure PostgreSQL (Supabase) schema implementing strict Row-Level Security (RLS), automated PL/pgSQL aggregation triggers, and idempotent transaction flows connected to Next.js and Flutter clients.",
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "OpenCV"],
      image: "/images/projects/agrivision.svg",
      githubUrl: "https://github.com/galihpradityo",
      accentColor: "from-emerald-600/30 via-teal-600/20 to-cyan-500/20",
    },
    {
      id: "ba-yu",
      title: "Ba-Yu",
      subtitle: "BelajarYuk! – Collaborative Study & Note-Sharing Platform",
      role: "Fullstack & System Analyst",
      period: "Feb 2026 – Jun 2026",
      category: "Academic Project",
      featureHighlight: "Responsive SPA, RESTful architecture, NoSQL data modeling",
      description:
        "Collaborative academic platform structured with end-to-end system analysis documentation (SRS/UML), responsive React Single Page Application (SPA), Laravel 12 RESTful API, and scalable MongoDB document modeling.",
      architectureHighlights: [
        "Designed the overall system architecture, authored technical documentation (SRS/UML), and architected scalable RESTful APIs with MongoDB schemas.",
        "Developed an end-to-end responsive SPA and Android app using React (TypeScript), Tailwind CSS, and Laravel 12 for rich-text note authoring.",
        "Integrated cross-platform mobile features using Capacitor JS, incorporating Firebase Cloud Messaging (FCM) for automated real-time push notifications.",
      ],
      techStack: ["React", "Laravel 12", "MongoDB"],
      image: "/images/projects/bayu.svg",
      githubUrl: "https://github.com/galihpradityo",
      accentColor: "from-cyan-600/30 via-blue-600/20 to-indigo-500/20",
    },
    {
      id: "qlc",
      title: "QLC",
      subtitle: "Qur'anic Leadership Centre – Academic & Student Management Platform",
      role: "Backend Developer",
      period: "Feb 2026 – Jun 2026",
      category: "Academic Project",
      featureHighlight: "4-tier RBAC authentication, MongoDB query pipeline",
      description:
        "Comprehensive educational management platform engineered with Laravel 12 and MongoDB, featuring multi-role authentication (RBAC) across 4 user roles, custom middleware guards, and high-efficiency regex query pipelines.",
      architectureHighlights: [
        "Architected and developed RESTful APIs using Laravel 12 and MongoDB to manage core academic operations, including student enrollment, program directories, partner institutions, and event scheduling.",
        "Implemented multi-role authentication and authorization (RBAC) supporting 4 distinct user roles (Admin, Teacher, Parents, and Mitra) using custom middleware and strict request validation.",
        "Engineered efficient MongoDB data queries with regex search, pagination, and secure multipart file handling for student registration documents, payment proofs, and institutional galleries.",
      ],
      techStack: ["PHP", "Laravel 12", "MongoDB"],
      image: "/images/projects/qlc.svg",
      githubUrl: "https://github.com/galihpradityo",
      accentColor: "from-amber-500/30 via-orange-600/20 to-violet-600/20",
    },
    {
      id: "set-ais",
      title: "SET Alumni Information System",
      subtitle: "Software Engineering Technology Alumni & Career Intelligence Platform",
      role: "Fullstack Developer & System Analyst",
      period: "Nov 2025 – Dec 2025",
      category: "Academic Project",
      featureHighlight: "Laravel 12 & React 19 Inertia SPA, Driver.js Onboarding, RBAC & PII Security",
      description:
        "Comprehensive alumni management and career network ecosystem engineered for IPB University Software Engineering Technology. Features full-stack architecture with Laravel 12 and React 19 (Inertia.js), strict RBAC with PII data privacy, composite indexing, Driver.js interactive tours, automated email verification, and exportable report generation.",
      architectureHighlights: [
        "Authored comprehensive Software Requirements Specifications (SRS/SKPL) and engineered the core full-stack architecture utilizing Laravel 12, React 19, and Inertia.js.",
        "Designed responsive SPA interfaces with Tailwind CSS and interactive onboarding (Driver.js), structured with optimized relational database constraints and composite indexing.",
        "Enforced strict RBAC and PII privacy protection, implementing rate-limited authentication, automated email verification, and XSS sanitization.",
      ],
      techStack: [
        "Laravel 12",
        "React 19",
        "Inertia.js",
        "Tailwind CSS",
        "MySQL / PostgreSQL",
        "PHPUnit",
      ],
      image: "/images/projects/set-ais.svg",
      githubUrl: "https://github.com/galihpradityo",
      accentColor: "from-emerald-600/30 via-teal-600/20 to-cyan-500/20",
    },
  ],

  experience: [
    {
      id: "site-2025",
      organization: "SITE 2025",
      role: "Group Facilitator",
      period: "Sep 2025 – Dec 2025",
      type: "Organizational Leadership",
      description:
        "Facilitated, mentored, and monitored freshmen during their comprehensive orientation and team-building program leading up to the final event.",
      highlights: [
        "Mentored and guided a group of 12 freshmen through a comprehensive orientation and team-building program leading up to the peak event.",
        "Facilitated group discussions, monitored participant engagement, and acted as the primary liaison between the new students and the organizing committee.",
        "Evaluated participant progress and coordinated with event supervisors to ensure all orientation objectives were successfully met.",
      ],
    },
    {
      id: "srd-2025",
      organization: "Scholarship Reach a Dreams",
      role: "Logistics Staff",
      period: "May 2025 – Sep 2025",
      type: "Operations & Asset Management",
      description:
        "Spearheaded procurement, layout planning, venue preparation, inventory tracking, and distribution of essential scholarship materials.",
      highlights: [
        "Spearheaded the procurement, design, and allocation of essential event equipment and physical assets.",
        "Coordinated end-to-end operational logistics, including venue setup, inventory tracking, and technical troubleshooting to ensure seamless event execution.",
        "Managed the distribution flow of scholarship materials, ensuring all logistical requirements were fulfilled on schedule.",
      ],
    },
    {
      id: "bem-sv-ipb-2025",
      organization: "Pendidikan Karya BEM SV IPB",
      role: "Sponsorship Staff",
      period: "Feb 2025 – Jun 2025",
      type: "Corporate Partnerships & Funding",
      description:
        "Prospected 100+ partner companies, pitched sponsorship proposals, negotiated strategic funding agreements, and ensured brand visibility commitments were met.",
      highlights: [
        "Prospected and reached out to 100+ target companies, successfully pitching and submitting tailored sponsorship proposals to secure event funding.",
        "Negotiated financial and in-kind partnerships to support the execution of a large-scale inter-institutional competition.",
        "Managed ongoing communications with corporate partners, ensuring all promotional agreements and brand visibility metrics were fulfilled during the event.",
      ],
    },
  ],

  achievements: [
    {
      year: "2026 / 2027",
      title: "Awardee of YPLI Scholarship",
      organizer: "YPLI Leadership & Academic Scholarship",
      badge: "Scholarship Awardee",
    },
    {
      year: "2025",
      title: "2nd Place, International Short Movie Competition",
      organizer: "Portal 7",
      badge: "International 2nd Place",
    },
    {
      year: "2025",
      title: "2nd Place, National Short Movie Competition",
      organizer: "SEMNASA ITCAS",
      badge: "National 2nd Place",
    },
    {
      year: "2025",
      title: "Semifinalist, Business Plan Competition",
      organizer: "Ideanation Competition",
      badge: "National Semifinalist",
    },
  ],
};
