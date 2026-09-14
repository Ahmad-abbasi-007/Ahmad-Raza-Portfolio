import type { ContactInfo, EducationItem, Project, Skill, StrengthItem } from '../types/portfolio';
import portfolioImg from '../assets/projects/portfolio.jpg';
import ecommerceImg from '../assets/projects/ecommerce.jpg';
import landingImg from '../assets/projects/landing.jpg';
import componentsImg from '../assets/projects/components.jpg';
import fypImg from '../assets/projects/fyp-scholarship.png';
import fentixCertImg from '../assets/certificates/fentix-internship-certificate.jpg';
import profileImg from '../assets/profile.jpg';

export { profileImg };

export const contactData: ContactInfo = {
  name: "Ahmad Raza",
  role: "Frontend Web Developer",
  location: "Lahore, Pakistan",
  email: "ar3359499@gmail.com",
  phone: "+92 307 8777025",
  githubUsername: "Ahmad-abbasi-007",
  githubUrl: "https://github.com/Ahmad-abbasi-007",
  linkedinUrl: "https://linkedin.com/in/ahmad-raza-8b23a7264",
  bioSummary: "I build responsive, interactive, and user-friendly web experiences with modern frontend technologies."
};

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    "I am a motivated Frontend Web Developer and recent Computer Science graduate from COMSATS University Islamabad (Abbottabad Campus). I specialize in building responsive, accessible, and user-friendly web applications using React JS, JavaScript, HTML5, CSS3, and TypeScript.",
    "My focus is on crafting clean, modular component architectures, delivering smooth user interactions, and maintaining high UI standards across all device breakpoints.",
    "As an enthusiastic developer seeking my first professional frontend developer role, I bring a solid foundation in computer science fundamentals, strong problem-solving skills, and a commitment to continuous learning in modern web technologies."
  ],
  focusAreas: [
    "Frontend Development",
    "Responsive Design",
    "React Development",
    "Reusable Components",
    "Modern UI/UX",
    "Continuous Learning"
  ],
  highlights: [
    {
      title: "Frontend Developer",
      tagline: "Modern Web Standards",
      description: "Crafting semantic, accessible, and responsive web layouts with clean structure.",
      icon: "Code2"
    },
    {
      title: "React Enthusiast",
      tagline: "Component Architecture",
      description: "Building scalable single-page apps with hooks, state flow, and modular design.",
      icon: "Atom"
    },
    {
      title: "CS Graduate",
      tagline: "COMSATS Islamabad (Abbottabad)",
      description: "Strong theoretical grounding in data structures, algorithms, and software engineering.",
      icon: "GraduationCap"
    },
    {
      title: "Problem Solver",
      tagline: "Pixel-Perfect & Debugging",
      description: "Persistent drive to troubleshoot complex UI bugs and optimize frontend performance.",
      icon: "Sparkles"
    }
  ]
};

export const skillsData: Skill[] = [
  // Frontend
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    description: "Semantic structure, web accessibility (a11y), SEO standards, and modern web APIs.",
    iconName: "FileCode",
    accentColor: "#E34F26"
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    description: "Flexbox, CSS Grid, media queries, animations, custom properties, and responsive design.",
    iconName: "Palette",
    accentColor: "#1572B6"
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    description: "Modern asynchronous JS, DOM manipulation, closures, promises, and functional patterns.",
    iconName: "FileJson",
    accentColor: "#F7DF1E"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description: "Type safety, interfaces, generics, union types, and robust React prop definitions.",
    iconName: "FileCode2",
    accentColor: "#3178C6"
  },
  {
    id: "react",
    name: "React JS",
    category: "frontend",
    description: "Hooks (useState, useEffect, useMemo), custom hooks, component lifecycle, and state flow.",
    iconName: "Atom",
    accentColor: "#61DAFB"
  },

  // UI Frameworks
  {
    id: "mui",
    name: "MUI (Material UI)",
    category: "ui",
    description: "Theme customization, responsive system sx props, data display, and accessible components.",
    iconName: "Layers",
    accentColor: "#007FFF"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "ui",
    description: "Responsive 12-column grid system, utility classes, modals, carousels, and rapid UI prototyping.",
    iconName: "LayoutGrid",
    accentColor: "#7952B3"
  },

  // Backend / Runtime
  {
    id: "nodejs",
    name: "Node JS",
    category: "backend",
    description: "JavaScript runtime environment, npm ecosystem, package management, and REST API understanding.",
    iconName: "Server",
    accentColor: "#339933"
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    description: "Version control, branching workflows, merging, commit discipline, and conflict resolution.",
    iconName: "GitBranch",
    accentColor: "#F05032"
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    description: "Remote repository hosting, project collaboration, code reviews, and portfolio publishing.",
    iconName: "GithubIcon",
    accentColor: "#94A3B8"
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    description: "Primary development IDE with custom extensions, debugging tools, and snippet productivity.",
    iconName: "Terminal",
    accentColor: "#007ACC"
  },
  {
    id: "npm",
    name: "npm",
    category: "tools",
    description: "Package dependency management, script automation, build pipeline execution, and package configuration.",
    iconName: "PackageCheck",
    accentColor: "#CB3837"
  }
];

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    subtitle: "Modern Interactive Developer Showcase",
    category: ["all", "react", "javascript"],
    description: "Designed and developed a fully responsive personal portfolio showcasing frontend skills, projects, and contact information. Implemented smooth animations and interactive UI elements to enhance the user experience across different device sizes.",
    fullDescription: "A production-grade developer portfolio engineered to demonstrate modern frontend engineering capabilities. Features smooth section transitions, an interactive terminal showcase, dynamic theme adaptation, responsive navigation, and accessible interactive modals.",
    features: [
      "Modular React component structure with typed interfaces",
      "Interactive code sandbox terminal showcasing clean React logic",
      "Dark-first responsive design with fluid CSS transitions",
      "Dynamic project filtering and full deep-dive project modals",
      "Direct interactive CV viewer & printable resume format",
      "Interactive contact form with real-time validation and toast feedback"
    ],
    technologies: ["React JS", "JavaScript ES6+", "HTML5", "CSS3", "TypeScript"],
    image: portfolioImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007",
    liveDemoUrl: "#",
    architectureHighlights: [
      "Custom hook for viewport scroll progress tracking",
      "Centralized state management for dark/light theme persistence",
      "Fully responsive CSS grid and flexbox layout across 320px to 4K displays"
    ]
  },
  {
    id: "ecommerce-ui",
    title: "Responsive E-Commerce UI",
    subtitle: "Multi-page Storefront & Cart Experience",
    category: ["all", "react", "ui", "javascript"],
    description: "Built a multi-page e-commerce frontend with product listing, cart, and checkout UI components using React JS and MUI. Applied reusable component architecture and React state management for dynamic product filtering and cart interactions.",
    fullDescription: "An intuitive and modern e-commerce storefront frontend that emphasizes user journey and smooth cart interactions. Integrates Material UI's component system with custom theme tokens for a refined modern aesthetic.",
    features: [
      "Dynamic catalog filtering by price range, categories, and keyword search",
      "Interactive sliding cart drawer with real-time total computation",
      "Reusable product card grid with hover zoom previews and badges",
      "Multi-step checkout interface with validation for shipping details",
      "MUI theme customization with sleek dark and light color tokens"
    ],
    technologies: ["React JS", "MUI (Material UI)", "CSS3", "JavaScript"],
    image: ecommerceImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007",
    architectureHighlights: [
      "React state orchestration for dynamic cart additions and quantity updates",
      "Component decoupling between layout, product items, and cart side-drawer",
      "Accessible ARIA dialogs and drawer accessibility attributes"
    ]
  },
  {
    id: "landing-pages",
    title: "Interactive Web Landing Pages",
    subtitle: "Pixel-Perfect Responsive Client Showcases",
    category: ["all", "ui", "javascript"],
    description: "Created multiple pixel-perfect, mobile-responsive landing pages focusing on layout, typography, and cross-browser compatibility. Integrated JavaScript-driven features including modals, carousels, and form validation.",
    fullDescription: "A series of high-converting web landing pages tailored for business and agency needs. Focused on performance, visual polish, precise typography hierarchy, and smooth micro-interactions across legacy and modern web browsers.",
    features: [
      "Fluid 12-column Bootstrap grid layouts optimized for 320px to large screens",
      "Custom JavaScript modal dialogs and interactive image carousels",
      "Dynamic form validation with instantaneous user feedback",
      "Optimized assets and web typography with fast render metrics",
      "Cross-browser tested across Chrome, Firefox, Safari, and Edge"
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6+"],
    image: landingImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007",
    architectureHighlights: [
      "Semantic HTML5 landmark tags (<header>, <main>, <section>, <article>, <footer>)",
      "BEM naming convention for clean, collision-free CSS class hierarchies",
      "Mobile-first responsive media queries"
    ]
  },
  {
    id: "component-library",
    title: "React Component Library",
    subtitle: "Modular & Type-Safe UI Design System",
    category: ["all", "react", "typescript", "ui"],
    description: "Built a collection of reusable, typed React components including buttons, inputs, cards, and modals using TypeScript. Demonstrated understanding of props, hooks, and component composition.",
    fullDescription: "A developer-first UI component system built in React and TypeScript. Enforces strict TypeScript prop interfaces, compound component patterns, accessible keyboard interactions, and consistent styling tokens across common UI primitives.",
    features: [
      "Comprehensive component suite: Button, Input, Modal, Badge, Dropdown, Card",
      "Strict TypeScript typings with generic prop interfaces and variant props",
      "Accessible keyboard navigation (ESC close, Tab trapping, ARIA states)",
      "Variant system supporting primary, secondary, outline, and danger modes",
      "Interactive showcase sandbox allowing live prop manipulation"
    ],
    technologies: ["React JS", "TypeScript", "MUI", "CSS3"],
    image: componentsImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007",
    architectureHighlights: [
      "Compound component design pattern for modular modal dialogs and menus",
      "Polymorphic 'as' prop support for flexible semantic rendering",
      "Zero runtime type errors through rigorous compile-time type validation"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "fentix-internship",
    degree: "INTERNSHIP COMPLETION CERTIFICATE",
    institution: "FENTIX TECH",
    location: "Abbottabad, Pakistan (Remote)",
    period: "May 2026 – June 2026",
    isCertificate: true,
    certificateImage: fentixCertImg,
    certificateId: "FT-WDI-2026-0122",
    badgeText: "VERIFIED CERTIFICATE",
    description: "Successfully completed a two-month remote internship as a Web Development Intern at Fentix Tech, Abbottabad, Khyber Pakhtunkhwa, Pakistan.",
    highlights: [
      "Role: Web Development Intern at Fentix Tech",
      "Recognized for: Professional Skills, Technical Expertise & Project Achievement",
      "Official Certificate ID: FT-WDI-2026-0122 • Completed: 29 June 2026"
    ]
  },
  {
    id: "bs-cs",
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad — Abbottabad Campus",
    location: "Abbottabad, Pakistan",
    period: "2022 – 2026",
    description: "Focused on frontend web development, software engineering principles, and modern web technologies.",
    highlights: [
      "Core coursework: Web Technologies, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Software Design & Architecture",
      "Practical focus on building modern interactive web applications and mastering the JavaScript/React ecosystem",
      "Collaborative project development emphasizing version control, clean code standards, and agile practices"
    ]
  },
  {
    id: "fsc",
    degree: "FSc (Intermediate)",
    institution: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    period: "2020 – 2022",
    description: "Higher secondary education with strong analytical and scientific problem-solving focus.",
    highlights: [
      "Developed strong foundations in mathematics, logical reasoning, and analytical thinking",
      "Initiated first explorations into computer programming and web technologies"
    ]
  },
  {
    id: "matric",
    degree: "Matriculation (Computer Science)",
    institution: "Lahore Board of Secondary Education",
    location: "Lahore, Pakistan",
    period: "2018 – 2020",
    description: "Secondary school certificate with Computer Science foundation.",
    highlights: [
      "Basic programming concepts, computer hardware fundamentals, and information technology basics"
    ]
  }
];

export const strengthsData: StrengthItem[] = [
  {
    id: "responsive",
    title: "Responsive & Mobile-First Development",
    description: "Building layouts that adapt fluidly across all screen sizes (320px to 4K), prioritizing mobile usability and performance.",
    iconName: "Smartphone",
    tag: "Layout & CSS"
  },
  {
    id: "components",
    title: "Component-Based Architecture",
    description: "Strong understanding of React reusable components, functional hooks, props composition, and clean state management.",
    iconName: "Boxes",
    tag: "React & Architecture"
  },
  {
    id: "ui-frameworks",
    title: "UI Framework Proficiency",
    description: "Hands-on experience styling and structuring modern applications with Material UI (MUI) and Bootstrap utility systems.",
    iconName: "LayoutTemplate",
    tag: "MUI & Bootstrap"
  },
  {
    id: "problem-solving",
    title: "Problem-Solving Mindset",
    description: "Consistent hands-on practice solving real-world frontend challenges, debugging DOM issues, and refining user flows.",
    iconName: "BrainCircuit",
    tag: "Engineering Approach"
  },
  {
    id: "continuous-learner",
    title: "Continuous Learner",
    description: "Currently expanding knowledge of TypeScript, advanced React patterns, modern design systems, and Node JS backend integration.",
    iconName: "TrendingUp",
    tag: "Growth Mindset"
  }
];

export const fypProjectData = {
  id: "fyp-scholarship-system",
  sectionBadge: "FINAL YEAR PROJECT (FYP)",
  title: "Automated Merit List Generation System for both Graduate and UnderGraduate Students",
  shortTitle: "COMSATS Scholarship & Automated Merit System",
  institution: "COMSATS University Islamabad (Abbottabad Campus)",
  role: "Lead Frontend & System Developer",
  liveUrl: "https://comsats-scholarship-system.vercel.app/",
  image: fypImg,
  tagline: "Empowering students through automated, transparent scholarship evaluation & real-time merit publishing.",
  summary: "A production-grade web application engineered to automate the complete lifecycle of scholarship applications, multi-variable merit ranking calculations, and roster publication for both Undergraduate (BS) and Graduate (MS/PhD) academic programs.",
  features: [
    {
      title: "Automated Merit Computation Engine",
      description: "Eliminates manual discrepancies by automatically calculating academic weights, CGPA thresholds, and quotas according to institutional guidelines."
    },
    {
      title: "Dual Academic Tier Support (Graduate & UnderGraduate)",
      description: "Dedicated calculation pathways tailored specifically for both Undergraduate and Graduate degree requirements and scholarship schemes."
    },
    {
      title: "Role-Based Portals (Student & Admin)",
      description: "Secure student dashboard for application tracking alongside powerful administrative controls for merit approval, criteria configuration, and list publishing."
    },
    {
      title: "Real-time Verification & Exporting",
      description: "Dynamic student search, instant quota filtering, live merit status updates, and transparent merit generation."
    }
  ],
  technologies: [
    "React JS",
    "JavaScript ES6+",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "RESTful APIs",
    "Vercel Cloud"
  ],
  highlights: [
    { label: "Target Audience", value: "Undergraduate & Graduate" },
    { label: "Generation Speed", value: "Real-time & Automated" },
    { label: "Deployment", value: "Vercel Production" },
    { label: "Status", value: "Live & Deployed" }
  ]
};
