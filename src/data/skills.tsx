import { Code, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';
import { type SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Layout />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
  },
  {
    title: 'Backend Development',
    icon: <Server />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
  },
  {
    title: 'Database',
    icon: <Database />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma']
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone />,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
  },
  {
    title: 'Programming Languages',
    icon: <Code />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Swift']
  },
  {
    title: 'Tools & DevOps',
    icon: <Settings />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux']
  }
];
