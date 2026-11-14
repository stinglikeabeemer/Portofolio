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
  category: "Frameworks & APIs" | "Databases" | "Tools & CV";
  subtitle: string;
  accent: string;
  skills: SkillItem[];
}

export type ProjectTag = "backend" | "ai" | "fullstack";

export interface ProjectItem {
  id: string;
  tags: ProjectTag[];
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: string;
  featureHighlight: string;
  shortDescription: string;
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
        label: "Projects Built",
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
      category: "Frameworks & APIs",
      subtitle: "Server frameworks, token authentication & clean REST architecture",
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
          name: "React",
          level: "Intermediate",
          tag: "TypeScript SPAs with Inertia.js & Laravel",
        },
      ],
    },
    {
      category: "Databases",
      subtitle: "Relational schema design, Row-Level Security & NoSQL modeling",
      accent: "cyan",
      skills: [
        {
          name: "PostgreSQL",
          level: "Advanced",
          tag: "Supabase RLS, PL/pgSQL Triggers & Indexing",
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
          tag: "FCM Push Notifications & Auth",
        },
      ],
    },
    {
      category: "Tools & CV",
      subtitle: "LLM integration, computer vision pipelines & cloud deployment",
      accent: "amber",
      skills: [
        {
          name: "Google Gemini API",
          level: "Advanced",
          tag: "REST Requests, Function Calling & Prompting",
        },
        {
          name: "OpenCV",
          level: "Intermediate",
          tag: "ExG/VARI Vegetation Indices & HSV Lesion Masks",
        },
        {
          name: "TensorFlow Lite",
          level: "Intermediate",
          tag: "MobileNetV2 Model Serving",
        },
        {
          name: "Docker",
          level: "Intermediate",
          tag: "Containerized API Services",
        },
        {
          name: "Railway",
          level: "Advanced",
          tag: "Cloud PaaS API Hosting",
        },
        {
          name: "Postman",
          level: "Advanced",
          tag: "API Testing & Collections",
        },
      ],
    },
  ],

  projects: [
    {
      id: "medigo",
      tags: ["backend", "ai", "fullstack"],
      title: "MediGo",
      subtitle: "AI-Integrated Healthcare Platform",
      role: "Fullstack Developer",
      period: "Nov 2026 – Present",
      category: "Competition Project",
      featureHighlight: "Full-Stack Platform, Sanctum RBAC, MediBot Gemini AI & Google Maps",
      shortDescription:
        "Healthcare facility platform on Laravel and MySQL, with Sanctum-based RBAC and MediBot, a Gemini-powered assistant that recommends nearby facilities.",
      description:
        "A full-stack healthcare platform for finding and reviewing health facilities (faskes). Built on Laravel MVC with normalized MySQL schemas, Sanctum token authentication with role-based access, and MediBot — an AI assistant that uses Google Gemini function calling to recommend facilities with geospatial filtering and Google Maps navigation.",
      architectureHighlights: [
        "Engineered an end-to-end full-stack web platform utilizing Laravel MVC, Blade templating, and responsive UI components, while designing normalized MySQL database schemas and migrations for efficient healthcare facility data management.",
        "Implemented secure client-server communication and token authentication using Laravel Sanctum to enforce strict role-based access control across user review workflows, community discussion forums, and admin moderation panels.",
        "Integrated an interactive AI healthcare assistant (MediBot) by connecting Google Gemini API via REST requests and native function calling, enabling dynamic real-time faskes recommendations with geospatial filtering and Google Maps navigation.",
      ],
      techStack: [
        "Laravel",
        "Blade",
        "Bootstrap 5",
        "JavaScript (ES6/AJAX)",
        "MySQL",
        "Laravel Sanctum",
        "Google Gemini API",
        "Postman",
      ],
      image: "/images/projects/medigo.svg",
      githubUrl: "https://github.com/galihpradityo/medigo-backend",
      accentColor: "from-violet-600/30 via-indigo-600/20 to-cyan-500/20",
    },
    {
      id: "agrivision",
      tags: ["backend", "ai"],
      title: "Agrivision",
      subtitle: "Tomato Disease Detection & Health Monitoring System",
      role: "Backend Developer",
      period: "Sep 2026 – Present",
      category: "Academic Project",
      featureHighlight: "FastAPI on Railway, dual OpenCV pipeline, PostgreSQL RLS",
      shortDescription:
        "FastAPI service on Railway that classifies 10 tomato leaf diseases with TFLite and measures damage severity through an OpenCV pipeline.",
      description:
        "A tomato disease detection and health monitoring system. FastAPI endpoints on Railway serve a MobileNetV2 (TFLite) model for sub-second classification, a dual OpenCV pipeline estimates damage severity, and a Supabase PostgreSQL schema secured with Row-Level Security backs the Next.js and Flutter clients.",
      architectureHighlights: [
        "Engineered and deployed scalable RESTful APIs using FastAPI on Railway to serve TFLite models (MobileNetV2), delivering sub-second disease classification across 10 classes of tomato leaves.",
        "Developed a dual computer vision processing pipeline with OpenCV to compute vegetation indices (ExG & VARI) and isolate lesion masks (HSV), accurately calculating plant damage percentage and severity levels.",
        "Designed a secure PostgreSQL (Supabase) schema implementing strict Row-Level Security (RLS), automated PL/pgSQL aggregation triggers, and idempotent transaction flows connected to Next.js and Flutter clients.",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "OpenCV",
        "TensorFlow Lite",
        "Railway",
      ],
      image: "/images/projects/agrivision.svg",
      githubUrl: "https://github.com/galihpradityo/agrivision-fastapi",
      accentColor: "from-emerald-600/30 via-teal-600/20 to-cyan-500/20",
    },
    {
      id: "ba-yu",
      tags: ["fullstack", "backend"],
      title: "Ba-Yu",
      subtitle: "BelajarYuk! – Collaborative Study & Note-Sharing Platform",
      role: "Fullstack & System Analyst",
      period: "Feb 2026 – Jun 2026",
      category: "Academic Project",
      featureHighlight: "Responsive SPA, RESTful architecture, NoSQL data modeling",
      shortDescription:
        "Note-sharing platform for students: a React SPA and Android app on a Laravel 12 + MongoDB REST API, with FCM push notifications.",
      description:
        "A collaborative study and note-sharing platform. I led the system analysis (SRS/UML) and architecture, then built the Laravel 12 REST API with MongoDB schemas, a responsive React (TypeScript) SPA, and an Android build via Capacitor JS with Firebase Cloud Messaging.",
      architectureHighlights: [
        "Designed the overall system architecture, authored technical documentation (SRS/UML), and architected scalable RESTful APIs with MongoDB schemas.",
        "Developed an end-to-end responsive SPA and Android app using React (TypeScript), Tailwind CSS, and Laravel 12 for rich-text note authoring.",
        "Integrated cross-platform mobile features using Capacitor JS, incorporating Firebase Cloud Messaging (FCM) for automated real-time push notifications.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Laravel 12",
        "MongoDB",
        "Capacitor JS",
        "Firebase",
      ],
      image: "/images/projects/bayu.svg",
      githubUrl: "https://github.com/galihpradityo/ba-yu-platform",
      accentColor: "from-cyan-600/30 via-blue-600/20 to-indigo-500/20",
    },
    {
      id: "qlc",
      tags: ["backend"],
      title: "QLC",
      subtitle: "Qur'anic Leadership Centre – Academic & Student Management Platform",
      role: "Backend Developer",
      period: "Feb 2026 – Jun 2026",
      category: "Academic Project",
      featureHighlight: "4-role RBAC authentication, MongoDB query pipeline",
      shortDescription:
        "Laravel 12 + MongoDB REST API for an Islamic education centre, with role-based access for admins, teachers, parents and partners.",
      description:
        "A student and academic management platform for an Islamic education centre. The Laravel 12 + MongoDB REST API handles enrollment, programs, partner institutions and events, with RBAC across 4 user roles, custom middleware, paginated regex search and secure file uploads.",
      architectureHighlights: [
        "Architected and developed RESTful APIs using Laravel 12 and MongoDB to manage core academic operations, including student enrollment, program directories, partner institutions, and event scheduling.",
        "Implemented multi-role authentication and authorization (RBAC) supporting 4 distinct user roles (Admin, Teacher, Parents, and Mitra) using custom middleware and strict request validation.",
        "Engineered efficient MongoDB data queries with regex search, pagination, and secure multipart file handling for student registration documents, payment proofs, and institutional galleries.",
      ],
      techStack: [
        "PHP",
        "Laravel 12",
        "MongoDB",
        "Laravel Sanctum",
        "Inertia.js",
      ],
      image: "/images/projects/qlc.svg",
      githubUrl: "https://github.com/galihpradityo/qlc-academic-management",
      accentColor: "from-amber-500/30 via-orange-600/20 to-violet-600/20",
    },
    {
      id: "set-ais",
      tags: ["fullstack", "backend"],
      title: "SET Alumni Information System",
      subtitle: "Alumni Information System for Software Engineering Technology",
      role: "Fullstack Developer & System Analyst",
      period: "Nov 2025 – Dec 2025",
      category: "Academic Project",
      featureHighlight: "Laravel 12 & React 19 Inertia SPA, Driver.js Onboarding, RBAC & PII Security",
      shortDescription:
        "Alumni information system built as a Laravel 12 + React 19 Inertia SPA, with strict RBAC, PII protection and guided onboarding.",
      description:
        "An alumni information system for IPB University's Software Engineering Technology program. I authored the SRS/SKPL and built the full-stack architecture with Laravel 12 and React 19 (Inertia.js): composite-indexed relational schemas, strict RBAC with PII protection, rate-limited auth, email verification, Driver.js onboarding and exportable reports.",
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
      githubUrl: "https://github.com/galihpradityo/set-alumni-information-system",
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
      organizer: "YPLI",
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
