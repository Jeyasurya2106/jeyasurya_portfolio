export interface SocialLink {
  label: string;
  href: string;
  platform: "github" | "linkedin" | "twitter" | "email";
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  techStack?: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  // githubUrl: string;
  // liveUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}

export interface AiToolItem {
  name: string;
  mark: string;
  kind: string;
  usage: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  statement: string;
  summary: string;
  focus: string[];
  marquee: string[];
  services: ServiceItem[];
  aiTools: AiToolItem[];
  aiPrinciples: { title: string; text: string }[];
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  socials: SocialLink[];
  stats: StatItem[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const profileData: ProfileData = {
  name: "Jeya Surya M",
  role: "MERN Stack Developer",
  tagline:
    "Architecting responsive, high-performance web applications with React.js, Node.js and a modern, AI-assisted full-stack workflow.",
  statement:
    "I turn complex business workflows — supply chains, banking, ride dispatch, construction sites — into fast, clean and reliable web applications.",
  focus: ["fast interfaces", "scalable APIs", "clean architecture", "AI-accelerated delivery"],
  marquee: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "MySQL",
    "GraphQL",
    "Redux",
    "Tailwind CSS",
    "Jest",
    "Vitest",
  ],
  services: [
    {
      title: "Frontend Engineering",
      description:
        "Responsive, accessible interfaces built from reusable components — dashboards, catalogs, forms and data-heavy screens that stay fast as they grow.",
      tags: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      title: "Backend & API Development",
      description:
        "REST and GraphQL services with authentication, role-based access control and business logic structured so it can be tested and extended.",
      tags: ["Node.js", "NestJS", "Express.js", "JWT", "GraphQL"],
    },
    {
      title: "Database Design",
      description:
        "Schemas, relationships, migrations and query tuning across document and relational stores — chosen to fit the data, not the trend.",
      tags: ["PostgreSQL", "Prisma", "MySQL", "MongoDB"],
    },
    {
      title: "AI-Accelerated Delivery",
      description:
        "AI coding tools woven into the daily workflow for scaffolding, refactoring, tests and reviews — shipping sooner without lowering the bar.",
      tags: ["Cursor", "Claude Code", "GitHub Copilot", "ChatGPT"],
    },
  ],
  aiTools: [
    {
      name: "Cursor",
      mark: "Cu",
      kind: "AI code editor",
      usage:
        "My daily editor. Multi-file edits, codebase-aware chat and quick refactors across React and Node projects.",
    },
    {
      name: "Claude Code",
      mark: "Cl",
      kind: "Agentic CLI",
      usage:
        "Longer tasks from the terminal — exploring unfamiliar code, wiring features end to end and writing tests alongside them.",
    },
    {
      name: "GitHub Copilot",
      mark: "Co",
      kind: "Inline completion",
      usage:
        "Autocomplete for boilerplate, repetitive handlers, DTOs and unit-test cases while I stay focused on the logic.",
    },
    {
      name: "ChatGPT",
      mark: "Gp",
      kind: "Reasoning partner",
      usage:
        "Talking through architecture trade-offs, debugging strategies, SQL tuning and clear documentation.",
    },
    {
      name: "v0 by Vercel",
      mark: "v0",
      kind: "UI prototyping",
      usage:
        "Turning an idea into a first React + Tailwind draft in minutes, then rebuilding it properly as components.",
    },
    {
      name: "Gemini",
      mark: "Ge",
      kind: "Research & review",
      usage:
        "A second opinion on approaches, quick research across docs and summarising long threads or specs.",
    },
  ],
  aiPrinciples: [
    {
      title: "AI drafts, I decide",
      text: "Tools propose. Architecture, naming and trade-offs stay my call.",
    },
    {
      title: "Every diff gets read",
      text: "Nothing generated ships without review, tests and a clear reason to exist.",
    },
    {
      title: "Speed goes into quality",
      text: "Time saved on boilerplate is spent on edge cases, accessibility and performance.",
    },
  ],
  summary:
    "MERN Stack Developer with 2.6 years of experience specializing in React.js, Node.js, and modern web technologies including HTML, CSS, JavaScript, and Bootstrap. Proficient in building responsive, high-performance user interfaces with a focus on clean design and seamless user experience, backed by a strong understanding of component-based architecture and front-end development best practices.",
  contact: {
    phone: "+91 9042975096",
    email: "jeyasurya2106@gmail.com",
    location: "Chennai",
  },
  socials: [
    {
      label: "Email",
      href: "mailto:jeyasurya2106@gmail.com",
      platform: "email",
    },
    {
      label: "Github",
      href: "https://github.com/Jeyasurya2106",
      platform: "github",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/jeya-surya-818901242/",
      platform: "linkedin",
    },
  ],
  stats: [
    { label: "Years Experience", value: "2.6", suffix: "+" },
    { label: "Core Technologies", value: "18", suffix: "+" },
    { label: "Enterprise Projects", value: "4", suffix: "" },
    { label: "AI Tools in Workflow", value: "6", suffix: "" },
  ],
  skills: [
    {
      category: "Frontend Architecture",
      items: [
        { name: "React.js & Next.js", proficiency: 95 },
        { name: "JavaScript (ES6+) & TypeScript", proficiency: 92 },
        { name: "Redux & State Management", proficiency: 90 },
        { name: "Tailwind CSS , Bootstrap , MaterialUI", proficiency: 94 },
        { name: "HTML5, CSS3 & jQuery", proficiency: 95 },
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js", proficiency: 92 },
        { name: "Express.js", proficiency: 90 },
        { name: "Nest.js", proficiency: 85 },
        { name: "REST APIs", proficiency: 94 },
        { name: "GraphQL", proficiency: 82 },
        { name: "Core Java", proficiency: 78 },
      ],
    },
    {
      category: "Databases & Testing",
      items: [
        { name: "MongoDB", proficiency: 88 },
        { name: "PostgreSQL & Prisma ORM", proficiency: 90 },
        { name: "MySQL", proficiency: 92 },
        { name: "Jest , Enzyme (Unit Testing) , Vitest", proficiency: 88 },
      ],
    },
  ],
  experience: [
    {
      company: "Globewebizze Pvt Ltd",
      role: "Full Stack Developer",
      period: "JAN 2026 - PRESENT",
      bullets: [
        "Formulated and implemented detailed marketing strategies and technical initiatives alongside scalable full-stack web solutions.",
        "Developed and maintained scalable, responsive web applications using React.js, JavaScript, HTML5, and CSS3.",
        "Built reusable components and front-end libraries for future use, adhering strictly to component-based architecture.",
        "Integrated RESTful APIs and third-party services to fetch and render dynamic data across React applications.",
      ],
    },
    {
      company: "SparksBay Infotech",
      role: "Junior Software Engineer",
      period: "APR 2024 - NOV 2025",
      bullets: [
        "Used React Router for single-page application (SPA) routing and managed application state with Redux, Context API, and local state.",
        "Collaborated closely with UI/UX designers to translate designs and wireframes into high-quality production code.",
        "Ensured cross-browser compatibility, mobile responsiveness, and accessibility compliance.",
        "Performed code reviews, debugging, and unit testing using Jest, React Testing Library, and Chrome DevTools.",
        "Worked in Agile/Scrum teams, participating in daily stand-ups, sprint planning, and retrospectives.",
        "Utilized version control systems such as Git, GitHub, and GitLab for collaborative development and optimized front-end performance to reduce load times.",
      ],
    },
  ],
  projects: [
    {
      title: "Supply Chain Management - B2B Application",
      category: "B2B Commerce",
      description:
        "Web-based B2B platform streamlining transactions between suppliers, distributors, wholesalers, and retailers with product catalog management, bulk ordering, inventory tracking, and purchase order processing.",
      responsibilities: [
        "Built reusable React components for product catalogs, dashboards, order management, and inventory screens.",
        "Developed RESTful APIs using Node.js and Express.js with MongoDB and MySQL data persistence.",
        "Implemented user authentication and role-based access control (RBAC) for administrators, suppliers, distributors, and buyers.",
        "Engineered product search, bulk ordering, purchase order creation, order tracking, and real-time inventory updates.",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Nest.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "GraphQL",
        "MySQL",
        "JWT",
        "Git",
      ],

    },
    {
      title: "Digital Banking and Transaction Management System",
      category: "FinTech",
      description:
        "Secure web-based banking platform enabling customers to inspect account balances, audit transaction history, manage beneficiaries, initiate fund transfers, and monitor transaction statuses alongside an admin dashboard.",
      responsibilities: [
        "Developed responsive banking interfaces and reusable components for dashboards, beneficiary management, and transaction history.",
        "Designed MongoDB schemas and built Express.js/Node.js REST APIs for customer accounts and transaction workflows.",
        "Implemented JWT-based authentication, authorization checks, and role-based access control for sensitive banking operations.",
        "Built search, filtering, pagination, and strict form validation for fund transfers and customer management screens.",
      ],
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "JWT",
        "Git",
      ],

    },
    {
      title: "Taxi Booking Application",
      category: "Mobility",
      description:
        "On-demand taxi booking and dispatch platform featuring real-time ride tracking, route estimation, driver-passenger matching, and high-performance transactional data persistence.",
      responsibilities: [
        "Architected NestJS RESTful microservices and business logic for booking lifecycles, ride state management, and geospatial dispatching.",
        "Built modern Next.js client interface with TypeScript, delivering real-time ride tracking, interactive booking forms, and driver management.",
        "Designed PostgreSQL database schemas and optimized data queries with Prisma ORM migrations and relationships.",
        "Implemented JWT authentication, route protection, and role-based access controls for passengers and drivers.",
      ],
      techStack: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "TailwindCSS",
        "JWT",
      ],

    },
    {
      title: "Construction Site Management System",
      category: "Operations",
      description:
        "Comprehensive web-based platform designed to manage construction site operations, inventory logistics, equipment deployment, workforce attendance, and project milestone reporting.",
      responsibilities: [
        "Developed dynamic, responsive UI with React.js, including interactive supervisor dashboards and progress tracking tables.",
        "Engineered Express.js and Node.js REST APIs for labor management, inventory dispatch, and project status updates.",
        "Designed and maintained normalized MySQL relational databases with stored procedures, indexes, and transactional consistency.",
        "Implemented multi-role access control for project managers, engineers, and site contractors.",
      ],
      techStack: [
        "React.js",
        "Express.js",
        "Node.js",
        "MySQL",
        "JavaScript",
        "REST APIs",
        "TailwindCSS",
        "JWT",
      ],

    },
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Coimbatore Marine College",
      period: "2019 - 2022",
    },
  ],
  certifications: [
    {
      title: "MERN Stack",
      issuer: "WiseTech Solution",
      year: "2024",
    },
  ],
};
