export type SkillCategory = 'frontend' | 'ui' | 'backend' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  iconName: string;
  accentColor: string;
  isLearning?: boolean;
}

export type ProjectCategory = 'all' | 'react' | 'javascript' | 'typescript' | 'ui';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  architectureHighlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  bioSummary: string;
}
