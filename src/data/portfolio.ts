import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Umaiz Sufiyan',
  monogram: 'US.',
  title: 'Student Developer & AI Builder',
  role: 'Developer • AI Builder • Technology Enthusiast',
  tagline: 'Building intelligent software, AI-powered experiences, and experimental digital products.',
  status: 'Open to Collaborations & Projects',
  location: 'Global / Remote',
  githubUsername: 'sufiyan-sabeel',
  githubUrl: 'https://github.com/sufiyan-sabeel',
  instagramUsername: '@umaizsufiyan.78',
  instagramUrl: 'https://instagram.com/umaizsufiyan.78',
  portraitImage: '/src/assets/images/umaiz_portrait_1786864188838.jpg',
  about: {
    heading: 'BUILDING WITH CURIOSITY.',
    subheading: 'Student Developer & AI Solutions Enthusiast',
    bio: [
      "I am a student developer driven by an innate fascination for how software and artificial intelligence intersect to solve real problems. My journey is centered around exploring cutting-edge computing paradigms, building functional applications, and experimenting with emerging technologies.",
      "From crafting responsive web applications to engineering AI workflows, developer automation utilities, and exploring mobile architectures, I focus on clean code, thoughtful user experience, and practical engineering solutions."
    ],
    focusMetrics: [
      { label: 'FOCUS', value: 'AI + Software', description: 'Intelligent systems & software engineering' },
      { label: 'BUILDING', value: 'Digital Products', description: 'Practical apps & modern interfaces' },
      { label: 'INTEREST', value: 'Future Technology', description: 'Autonomous agents & experimental tech' },
      { label: 'APPROACH', value: 'Continuous Learning', description: 'Curiosity-led technical exploration' },
    ],
    interests: [
      'Artificial Intelligence & Machine Learning',
      'Full-Stack Web Engineering',
      'Android & Mobile App Architecture',
      'Workflow Automation & Scripting',
      'Developer Tooling & Productivity',
      'Generative AI & Agentic Systems',
      'Experimental UI & Cinematic Design'
    ]
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-agent-engine',
    title: 'Autonomous AI Agent Workflow',
    category: 'AI',
    description: 'An experimental framework for chaining multi-turn AI reasoning tasks, context memory retrieval, and structured tool orchestration.',
    highlight: 'Multi-agent coordination and contextual task execution',
    technologies: ['TypeScript', 'Generative AI', 'Node.js', 'API Integration'],
    status: 'Active',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'modern-web-platform',
    title: 'Cinematic Web Application Framework',
    category: 'Web',
    description: 'A high-performance modern web application featuring responsive dual-tone atmospheric UI, reactive state management, and smooth micro-interactions.',
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
    technologies: ['JavaScript', 'Node.js', 'Git Automation', 'REST APIs'],
    status: 'In Progress',
    githubUrl: 'https://github.com/sufiyan-sabeel',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'mobile-app-concept',
    title: 'Android & Cross-Platform Experiment',
    category: 'Mobile',
    description: 'Exploratory mobile interface leveraging native device capabilities, clean architecture patterns, and offline-first state synchronization.',
    highlight: 'Adaptive layouts and smooth gesture handling',
    technologies: ['Android', 'Mobile UI', 'APIs', 'State Machine'],
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
    subtitle: 'Core programming languages and frontend ecosystems',
    skills: [
      { name: 'JavaScript', tag: 'ES6+' },
      { name: 'TypeScript', tag: 'Typed JS' },
      { name: 'React', tag: 'UI Library' },
      { name: 'HTML5', tag: 'Semantic' },
      { name: 'CSS3', tag: 'Modern Styling' },
      { name: 'Tailwind CSS', tag: 'Utility-first' },
      { name: 'Node.js', tag: 'Runtime' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & INTELLIGENCE',
    subtitle: 'Machine learning concepts, generative models, and agent architectures',
    skills: [
      { name: 'Artificial Intelligence', tag: 'Core Concepts' },
      { name: 'AI Applications', tag: 'Practical Systems' },
      { name: 'AI Agents', tag: 'Autonomous Logic' },
      { name: 'Generative AI', tag: 'LLMs & Diffusion' },
      { name: 'Prompt Engineering', tag: 'Context Design' },
      { name: 'LLM Integration', tag: 'API Workflows' }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS & ECOSYSTEM',
    subtitle: 'Version control, developer utilities, and deployment workflows',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'REST APIs', tag: 'Integration' },
      { name: 'Developer Tools', tag: 'DevEx' },
      { name: 'Vite', tag: 'Build Tooling' },
      { name: 'VS Code', tag: 'Editor & Config' }
    ]
  }
];
