import { type ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}
