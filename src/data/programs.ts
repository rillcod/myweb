import { Monitor, Cat, Globe, Palette, Bot } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  ageRange: string;
  duration: string;
  skillLevel: string;
  curriculum: {
    title: string;
    topics: string[];
  }[];
  projects: {
    title: string;
    description: string;
  }[];
  learningOutcomes: string[];
  prerequisites: string[];
}

export const programs: Program[] = [
  {
    id: 'ict-fundamentals',
    title: 'ICT Fundamentals',
    description: 'Master the basics of computers and technology through hands-on learning and exciting projects.',
    icon: Monitor,
    color: 'blue',
    ageRange: '5-8 years',
    duration: '8 weeks',
    skillLevel: 'Beginner',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  },
  {
    id: 'scratch-programming',
    title: 'Scratch Programming',
    description: 'Learn to code through fun, visual programming using Scratch to create games and animations.',
    icon: Cat,
    color: 'orange',
    ageRange: '8-12 years',
    duration: '10 weeks',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  },
  {
    id: 'web-development',
    title: 'HTML/CSS Programming',
    description: 'Build your own websites and learn the fundamentals of web development.',
    icon: Globe,
    color: 'purple',
    ageRange: '10-15 years',
    duration: '12 weeks',
    skillLevel: 'Intermediate',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    description: 'Learn Python programming through practical projects and fun exercises.',
    icon: 'PythonIcon',
    color: 'green',
    ageRange: '12-15 years',
    duration: '14 weeks',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Learn to create beautiful and responsive websites using modern design principles and tools.',
    icon: Palette,
    color: 'pink',
    ageRange: '12-15 years',
    duration: '12 weeks',
    skillLevel: 'Intermediate',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  },
  {
    id: 'robotics',
    title: 'Robotics Programming',
    description: 'Learn to build and program robots using modern robotics platforms.',
    icon: Bot,
    color: 'cyan',
    ageRange: '10-15 years',
    duration: '12 weeks',
    skillLevel: 'Intermediate',
    curriculum: [/* existing curriculum */],
    projects: [/* existing projects */],
    learningOutcomes: [/* existing outcomes */],
    prerequisites: [/* existing prerequisites */]
  }
];