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
    id: "grocifier-store",
    title: "Grocifier-StoreBy-Abbasi",
    subtitle: "Online Grocery & Fresh Produce Web Store",
    category: ["all", "javascript", "ui"],
    description: "An interactive online grocery storefront allowing users to browse fresh produce categories, filter items, add groceries to cart, and compute dynamic order totals in real-time.",
    fullDescription: "A responsive and interactive grocery shopping web application developed using modern JavaScript, HTML5, and CSS3. Features rich category browsing (Fruits, Vegetables, Dairy, Bakery), real-time cart quantity controls, checkout total computation, and responsive mobile-first layouts.",
    features: [
      "Category-based grocery navigation and real-time product filtering",
      "Interactive shopping cart with live item counter and subtotal calculation",
      "Item quantity increments, decrements, and removal handling",
      "Checkout modal with customer delivery details validation",
      "Mobile-first responsive grid system across all viewports"
    ],
    technologies: ["JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "DOM APIs"],
    image: ecommerceImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007/Grocifier-StoreBy-Abbasi",
    liveDemoUrl: "#",
    architectureHighlights: [
      "Modular JavaScript functions for DOM manipulation and shopping cart state",
      "Responsive CSS layout with smooth hover transitions and badge animations",
      "Client-side input verification for order forms and delivery notes"
    ]
  },
  {
    id: "ecommerce-react",
    title: "E-Commerece-Web-by-Abbasi-react",
    subtitle: "Component-Driven React Storefront Platform",
    category: ["all", "react", "javascript", "ui"],
    description: "Built a modern, multi-page component-driven e-commerce application using React JS. Features dynamic product filtering, reactive cart drawer state management, and clean responsive UI.",
    fullDescription: "A production-style e-commerce storefront frontend developed with React JS. Emphasizes component reusability, props-driven state synchronization, dynamic catalog filtering, responsive product showcase grids, and sleek drawer cart interactions.",
    features: [
      "Dynamic product catalog filtering by price, rating, and categories",
      "Interactive cart drawer with synchronized item counts and price summary",
      "Reusable product card components with zoom previews and quick-add actions",
      "Multi-step checkout workflow with shipping and payment form validation",
      "Clean responsive layout with custom modern CSS styling"
    ],
    technologies: ["React JS", "JavaScript ES6+", "CSS3", "HTML5", "React Hooks"],
    image: componentsImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007/E-Commerece-Web-by-Abbasi-react",
    liveDemoUrl: "#",
    architectureHighlights: [
      "React hooks (useState, useEffect, useMemo) for synchronized cart state",
      "Decoupled architecture separating layout, catalog, and drawer modal components",
      "Modular CSS styling with fluid responsive breakpoints"
    ]
  },
  {
    id: "ecommerce-vanilla",
    title: "E-Commerece",
    subtitle: "Interactive Web Storefront & Shopping Cart",
    category: ["all", "javascript", "ui"],
    description: "Developed a responsive e-commerce web storefront with rich product listings, category filters, interactive cart drawer, and seamless checkout flow using modern JavaScript.",
    fullDescription: "A clean and responsive commercial web storefront designed to deliver high user engagement. Features an interactive product showcase, cart management workflows, modal product views, and responsive styling across mobile and desktop devices.",
    features: [
      "Featured product grid with interactive preview modals",
      "Real-time shopping cart state management with live badge updates",
      "Category filtering and keyword product search",
      "Responsive layout structure adhering to modern UI design standards",
      "Form validation for checkout and customer inquiry submissions"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive UI"],
    image: landingImg,
    githubUrl: "https://github.com/Ahmad-abbasi-007/E-Commerece",
    liveDemoUrl: "#",
    architectureHighlights: [
      "Event-driven JavaScript design pattern with clean separation of concerns",
      "Semantic HTML5 markup with accessible form elements",
      "Cross-browser tested CSS layout for fluid rendering across viewports"
    ]
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    subtitle: "Modern Interactive Developer Showcase",
    category: ["all", "react", "typescript", "javascript"],
    description: "Designed and developed a fully responsive personal portfolio showcasing frontend skills, projects, and contact information. Implemented smooth animations, interactive terminal, and ATS printable CV modal.",
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
    githubUrl: "https://github.com/Ahmad-abbasi-007/Ahmad-Raza-Portfolio",
    liveDemoUrl: "#",
    architectureHighlights: [
      "Custom hook for viewport scroll progress tracking",
      "Centralized state management for dark/light theme persistence",
      "Fully responsive CSS grid and flexbox layout across 320px to 4K displays"
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
  title: "Automated Merit List Generation System for both Graduate and Undergraduate Students",
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
      title: "Dual Academic Tier Support (Graduate & Undergraduate)",
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
