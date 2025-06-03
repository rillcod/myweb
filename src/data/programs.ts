import { Monitor, Cat, Globe, Palette, Bot, Rocket } from 'lucide-react';

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
    id: 'jss3-tech-academy',
    title: 'JSS3 Tech Academy',
    description: 'Special 12-week intensive program for JSS3 graduates. Launch your tech journey with hands-on training in programming, digital skills, and career preparation.',
    icon: Rocket,
    color: 'indigo',
    ageRange: 'JSS3 Graduates',
    duration: '12 weeks',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      {
        title: 'Digital Foundations (Week 1-3)',
        topics: [
          'Computer fundamentals and productivity tools',
          'Internet research and digital literacy',
          'Typing proficiency and documentation',
          'Basic graphic design with Canva',
          'Digital communication and collaboration'
        ]
      },
      {
        title: 'Programming Essentials (Week 4-7)',
        topics: [
          'Introduction to HTML and CSS',
          'Basic JavaScript programming',
          'Simple web project development',
          'Problem-solving with code',
          'Version control basics'
        ]
      },
      {
        title: 'Career Skills (Week 8-10)',
        topics: [
          'Digital portfolio creation',
          'Professional email writing',
          'Online presence management',
          'Basic entrepreneurship skills',
          'Project presentation techniques'
        ]
      },
      {
        title: 'Advanced Projects (Week 11-12)',
        topics: [
          'Personal website development',
          'Group project collaboration',
          'Final project presentation',
          'Career path planning',
          'Future learning roadmap'
        ]
      }
    ],
    projects: [
      {
        title: 'Digital Portfolio',
        description: 'Create a professional online portfolio showcasing your skills and projects'
      },
      {
        title: 'Tech Blog',
        description: 'Build a simple blog about technology using HTML, CSS, and basic JavaScript'
      },
      {
        title: 'Business Card Website',
        description: 'Develop a personal business card website with contact information and social links'
      }
    ],
    learningOutcomes: [
      'Proficiency in basic web development',
      'Strong digital literacy skills',
      'Professional online presence',
      'Project management abilities',
      'Career readiness in technology',
      'Collaborative work experience'
    ],
    prerequisites: [
      'Completed JSS3',
      'Basic computer literacy',
      'Interest in technology',
      'Access to a computer/laptop'
    ]
  },
  // ... (keep all existing programs)
  {
    id: 'ict-fundamentals',
    title: 'ICT Fundamentals',
    // ... (rest of the existing program data)
  },
  // ... (all other existing programs)
];