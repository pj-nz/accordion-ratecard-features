import { 
  Rocket, Code, TestTube2, Database, Cloud, Lock, 
  HeadphoneIcon, LayoutTemplate, Sparkles, Database2, Users, Brain 
} from 'lucide-react';

export const leftColumnItems = [
  {
    id: 'project-delivery',
    title: 'Project Delivery',
    content: 'Project managers, scrum masters, business analysts, and program managers delivering successful IT initiatives.',
    icon: Rocket
  },
  {
    id: 'software-development',
    title: 'Software Development',
    content: 'Full-stack, frontend, mobile developers, and software engineers building cutting-edge solutions.',
    icon: Code
  },
  {
    id: 'testing-qa',
    title: 'Testing/Quality Assurance',
    content: 'Test engineers, automation specialists, and QA leads ensuring software quality.',
    icon: TestTube2
  },
  {
    id: 'data-analytics',
    title: 'Data and Analytics',
    content: 'Data analysts, engineers, scientists, and database administrators driving insights.',
    icon: Database
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud and Infrastructure',
    content: 'Cloud engineers, infrastructure specialists, and platform experts.',
    icon: Cloud
  },
  {
    id: 'security',
    title: 'Security',
    content: 'Security consultants, architects, and analysts protecting digital assets.',
    icon: Lock
  }
];

export const rightColumnItems = [
  {
    id: 'service-management',
    title: 'IT Service Management',
    content: 'Service desk analysts, change managers, and IT service professionals.',
    icon: HeadphoneIcon
  },
  {
    id: 'architecture',
    title: 'Architecture',
    content: 'Enterprise, solution, and technical architects designing scalable solutions.',
    icon: LayoutTemplate
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    content: 'AI/ML engineers, researchers, and data scientists innovating with AI.',
    icon: Sparkles
  },
  {
    id: 'oracle-specialist',
    title: 'Oracle Specialist',
    content: 'Oracle consultants, developers, and administrators managing enterprise solutions.',
    icon: Database2
  },
  {
    id: 'change-management',
    title: 'Change Management',
    content: 'Change consultants, managers, and analysts facilitating organizational transformation.',
    icon: Users
  },
  {
    id: 'other-roles',
    title: 'Other Roles',
    content: 'Technical writers, trainers, and specialized IT professionals.',
    icon: Brain
  }
];