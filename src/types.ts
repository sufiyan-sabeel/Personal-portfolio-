export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'Web' | 'Tools' | 'Mobile';
  description: string;
  highlight: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Active';
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name?: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count?: number;
  html_url: string;
  clone_url?: string;
  default_branch?: string;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
  size?: number;
}
