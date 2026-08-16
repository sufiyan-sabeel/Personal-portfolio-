import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Umaiz Sufiyan',
  websiteTitle: 'vault portfolio - Umaiz Sufiyan an developer',
  role: 'Student Developer • AI Builder',
  title: 'Student Developer / AI Builder',
  eyebrow: 'VAULT PORTFOLIO — UMAIZ SUFIYAN AN DEVELOPER',
  mainStatement: 'Building intelligent software and digital experiences.',
  supportingText: 'I explore AI, software development, automation, and modern digital products.',
  githubUsername: 'sufiyan-sabeel',
  githubUrl: 'https://github.com/sufiyan-sabeel',
  instagramUsername: '@umaizsufiyan.78',
  instagramUrl: 'https://instagram.com/umaizsufiyan.78',
  portraitImage: '/src/assets/images/developer_suit_portrait_1786898335371.jpg',
  about: {
    title: 'ABOUT',
    bio: "I'm Umaiz Sufiyan, a student developer exploring AI, software, automation, and modern digital experiences. I enjoy turning ideas into working technology."
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-agent-engine',
    title: 'Autonomous AI Agent Workflow',
    category: 'AI',
    description: 'An experimental framework for chaining multi-turn AI reasoning tasks, context memory retrieval, and structured tool orchestration.',
    highlight: 'Multi-agent coordination and contextual task execution',
    technologies: ['TypeScript', 'Generative AI', 'Node.js', 'APIs'],
    status: 'Active',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'modern-web-platform',
    title: 'Cinematic Web Application',
    category: 'Web',
    description: 'A high-performance modern web application featuring responsive dark atmospheric UI, reactive state management, and smooth micro-interactions.',
    highlight: 'Sub-60fps fluid UI transitions and component modularity',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    status: 'Completed',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'dev-automation-tools',
    title: 'Developer Productivity & Automation Suite',
    category: 'Tools',
    description: 'A modular CLI and automation toolkit designed to streamline repetitive coding workflows, linting verification, and API testing.',
    highlight: 'Accelerated development cycles and automated scripts',
    technologies: ['JavaScript', 'Node.js', 'Git', 'APIs'],
    status: 'In Progress',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'mobile-app-concept',
    title: 'Mobile Architecture & UI Experiment',
    category: 'Mobile',
    description: 'Exploratory mobile interface leveraging reactive state machines, clean component architecture, and responsive gesture handling.',
    highlight: 'Adaptive layouts and smooth gesture handling',
    technologies: ['React Native / Mobile UI', 'TypeScript', 'APIs'],
    status: 'Prototype',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: false
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'development',
    title: 'DEVELOPMENT',
    subtitle: 'Core programming languages & frontend frameworks',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' }
    ]
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Machine intelligence & generative workflows',
    skills: [
      { name: 'Artificial Intelligence' },
      { name: 'Generative AI' },
      { name: 'AI Applications' },
      { name: 'AI Agents' }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS',
    subtitle: 'Version control & integration interfaces',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'APIs' }
    ]
  }
];
