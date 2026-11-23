export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  problem: string;
  solution: string;
  contribution: string;
  architecture: string;
  results?: string;
  githubUrl?: string;
  accent: 'cyan' | 'lavender' | 'blue' | 'mint';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  dateLabel: string;
  highlights: string[];
  accent: 'cyan' | 'lavender' | 'blue' | 'mint';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  accent: 'cyan' | 'lavender' | 'blue' | 'mint';
}

export const profile = {
  name: 'Ankit Dhanorkar',
  roles: [
    'Software Developer',
    'Python Engineer',
    'VFX Pipeline Developer',
    'Automation Specialist',
  ],
  headline: 'Building Intelligent Software & Creative Technology.',
  tagline:
    'I design and develop scalable software, intelligent automation tools, and efficient production workflows that bridge technology and creativity.',
  intro:
    'I am a Software Developer and VFX Pipeline Engineer specializing in Python, automation, custom applications, and scalable workflow solutions. I combine technical engineering expertise with hands-on creative production experience to develop practical tools that improve efficiency, streamline operations, and solve complex challenges.',
  philosophy:
    'Great software and great pipelines share the same foundation: clean architecture, clear abstractions, and empathy for the people who use them. I build tools that remove friction from creative and business workflows alike.',
  organization: 'Bubble Creations Digital Studio',
  email: 'dhanorkarankit04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ankit-dhanorkar',
  github: 'https://github.com/ankitdhanorkar',
  location: 'India',
  resumeUrl: '/resume.pdf',
};

export const aboutHighlights = [
  'Python application development',
  'VFX pipeline engineering',
  'Production workflow optimization',
  'Business application development',
  'Technical problem-solving',
  'Team leadership',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: ['Python', 'JavaScript', 'SQL', 'Bash'],
    accent: 'cyan',
  },
  {
    title: 'Backend Engineering',
    icon: 'Server',
    skills: ['Django', 'REST API development', 'PostgreSQL', 'MySQL'],
    accent: 'blue',
  },
  {
    title: 'Desktop Applications',
    icon: 'AppWindow',
    skills: ['PyQt5', 'PySide2', 'Qt Widgets', 'QTreeView', 'QFileSystemModel'],
    accent: 'lavender',
  },
  {
    title: 'DevOps & Infrastructure',
    icon: 'Container',
    skills: ['Docker', 'Redis', 'Celery', 'Nginx', 'Linux', 'Git'],
    accent: 'mint',
  },
  {
    title: 'VFX & Pipeline',
    icon: 'Clapperboard',
    skills: [
      'Nuke Python API',
      'Pipeline automation',
      'OpenEXR',
      'OpenImageIO',
      'Production validation',
    ],
    accent: 'cyan',
  },
  {
    title: 'AI & Automation',
    icon: 'Sparkles',
    skills: ['AI-assisted development', 'Intelligent workflow automation', 'Custom tools'],
    accent: 'lavender',
  },
];

export const projects: Project[] = [
  {
    id: 'shotsnap',
    title: 'ShotSnap',
    category: 'VFX Pipeline / Python Automation',
    shortDescription:
      'Custom production workflow utility developed to support efficient shot-related operations.',
    technologies: ['Python', 'Pipeline Integration'],
    problem:
      'Repetitive shot-related operations in production consumed valuable artist time and introduced inconsistency across the pipeline.',
    solution:
      'ShotSnap automates shot operations through a Python-based utility integrated into the production pipeline, reducing manual steps and standardizing output.',
    contribution: 'Designed and developed the tool end-to-end, including pipeline integration and artist-facing workflow.',
    architecture:
      'Standalone Python utility communicating with the production pipeline via its Python API. Modular functions for each operation, with a thin CLI layer for artist use.',
    githubUrl: undefined,
    accent: 'cyan',
  },
  {
    id: 'file-explorer',
    title: 'Custom File Explorer',
    category: 'Desktop Software',
    shortDescription:
      'Custom file management application built with Python and Qt technologies.',
    technologies: ['Python', 'PyQt', 'PySide'],
    problem:
      'Production teams needed a file browser tailored to studio conventions that standard OS explorers could not provide.',
    solution:
      'A Qt-based desktop file explorer with custom views, tree navigation, and filesystem modeling tuned for studio workflows.',
    contribution: 'Built the full application — UI, tree model integration, and custom navigation behavior.',
    architecture:
      'Python with PyQt/PySide. QFileSystemModel backed by QTreeView for hierarchical navigation, with custom widgets for studio-specific actions.',
    githubUrl: undefined,
    accent: 'lavender',
  },
  {
    id: 'shot-validation',
    title: 'Shot Validation Tools',
    category: 'Pipeline Automation',
    shortDescription:
      'Automated validation tools designed to improve consistency and reduce repetitive production checks.',
    technologies: ['Python', 'Production Pipeline Scripting'],
    problem:
      'Manual validation checks were slow, inconsistent, and prone to human error across shots.',
    solution:
      'A suite of automated validation scripts that check shots against production rules and report issues before they reach downstream departments.',
    contribution: 'Authored the validation rules and integrated the tools into the pipeline for automatic execution.',
    architecture:
      'Python scripts run at pipeline checkpoints. Each validator is a small module with a consistent interface; results aggregate into a single report.',
    githubUrl: undefined,
    accent: 'blue',
  },
  {
    id: 'attendance-app',
    title: 'Attendance Management Application',
    category: 'Business Software',
    shortDescription:
      'Application developed to support attendance tracking and operational workflows.',
    technologies: ['Python', 'Django', 'SQLite'],
    problem:
      'Manual attendance tracking was error-prone and offered no operational oversight.',
    solution:
      'A business application for tracking attendance and supporting related operational workflows, with a clean data model and reporting.',
    contribution: 'Designed the data model and built the application logic and interface.',
    architecture:
      'Django application with a relational data model, server-rendered views, and reporting endpoints.',
    githubUrl: undefined,
    accent: 'mint',
  },
  {
    id: 'vendor-client-budget',
    title: 'Vendor & Client Budget Management',
    category: 'Business Application',
    shortDescription:
      'Software developed to support vendor/client budget tracking and related management workflows.',
    technologies: ['Python', 'Django', 'SQL'],
    problem:
      'Tracking vendor and client budgets across projects lacked a centralized, reliable system.',
    solution:
      'A budget management application that centralizes vendor and client financial workflows with structured tracking and reporting.',
    contribution: 'Developed the application architecture, data model, and core workflows.',
    architecture:
      'Django-based application with a normalized SQL schema, role-aware views, and exportable reporting.',
    githubUrl: undefined,
    accent: 'lavender',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'VFX Pipeline Developer',
    organization: 'Bubble Creations Digital Studio',
    dateLabel: '[Dates to be confirmed]',
    highlights: [
      'Python scripting and Nuke automation for production pipelines',
      'Custom tool development to streamline artist workflows',
      'Production workflow improvements and pipeline integration',
    ],
    accent: 'cyan',
  },
  {
    role: 'Head of Paint Department',
    organization: '[Organization to be confirmed]',
    dateLabel: '[Dates to be confirmed]',
    highlights: [
      'Team leadership and production coordination',
      'Workflow improvement and process standardization',
      'Technical problem-solving across the department',
    ],
    accent: 'lavender',
  },
  {
    role: 'Prep/Paint Supervisor',
    organization: '[Organization to be confirmed]',
    dateLabel: '[Dates to be confirmed]',
    highlights: [
      'Artist support and quality management',
      'Production troubleshooting and issue resolution',
      'Cross-functional collaboration with other departments',
    ],
    accent: 'blue',
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: '[Institution to be confirmed]',
    dateLabel: 'Completion status and dates to be confirmed',
  },
  {
    degree: '[Relevant Technical Certification]',
    institution: '[Provider to be confirmed]',
    dateLabel: '[Date to be confirmed]',
  },
];
