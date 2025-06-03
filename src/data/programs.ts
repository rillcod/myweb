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
    curriculum: [
      {
        title: 'Computer Basics',
        topics: [
          'Understanding computer parts',
          'Using mouse and keyboard',
          'Basic computer operations',
          'File management'
        ]
      },
      {
        title: 'Digital Safety',
        topics: [
          'Internet safety',
          'Protecting personal information',
          'Responsible computer use',
          'Screen time management'
        ]
      },
      {
        title: 'Digital Creativity',
        topics: [
          'Basic digital art',
          'Simple document creation',
          'Introduction to presentations',
          'Educational games'
        ]
      }
    ],
    projects: [
      {
        title: 'My Digital Art Gallery',
        description: 'Create digital artwork using basic drawing tools'
      },
      {
        title: 'My First Presentation',
        description: 'Make a simple presentation about favorite animals'
      }
    ],
    learningOutcomes: [
      'Confident computer operation',
      'Basic digital literacy',
      'Safe internet practices',
      'Creative digital expression'
    ],
    prerequisites: [
      'No prior experience required',
      'Basic reading ability',
      'Interest in technology'
    ]
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
    curriculum: [
      {
        title: 'Scratch Basics',
        topics: [
          'Understanding the Scratch interface',
          'Sprites and backgrounds',
          'Basic motion and control',
          'Events and triggers'
        ]
      },
      {
        title: 'Animation & Stories',
        topics: [
          'Character animation',
          'Dialogue and interaction',
          'Scene transitions',
          'Sound effects and music'
        ]
      },
      {
        title: 'Game Development',
        topics: [
          'Game mechanics',
          'Score tracking',
          'Collision detection',
          'User interaction'
        ]
      }
    ],
    projects: [
      {
        title: 'Interactive Story',
        description: 'Create an animated story with multiple characters and scenes'
      },
      {
        title: 'Simple Game',
        description: 'Design and build a basic game with scoring and levels'
      }
    ],
    learningOutcomes: [
      'Basic programming concepts',
      'Problem-solving skills',
      'Creative thinking',
      'Project planning'
    ],
    prerequisites: [
      'Basic computer skills',
      'Reading and writing ability',
      'Basic math knowledge'
    ]
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
    curriculum: [
      {
        title: 'HTML Fundamentals',
        topics: [
          'Basic HTML structure',
          'Text formatting',
          'Links and images',
          'Lists and tables'
        ]
      },
      {
        title: 'CSS Styling',
        topics: [
          'Colors and backgrounds',
          'Fonts and text styling',
          'Layouts and positioning',
          'Responsive design basics'
        ]
      },
      {
        title: 'Web Projects',
        topics: [
          'Personal portfolio',
          'Blog design',
          'Simple landing pages',
          'Interactive elements'
        ]
      }
    ],
    projects: [
      {
        title: 'Personal Website',
        description: 'Create a multi-page personal website showcasing your interests'
      },
      {
        title: 'Mini Blog',
        description: 'Design and build a simple blog with multiple posts'
      }
    ],
    learningOutcomes: [
      'HTML/CSS proficiency',
      'Web design principles',
      'Digital portfolio creation',
      'Responsive design understanding'
    ],
    prerequisites: [
      'Basic computer skills',
      'Typing ability',
      'Interest in web design'
    ]
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
    curriculum: [
      {
        title: 'Python Basics',
        topics: [
          'Variables and data types',
          'Control structures',
          'Functions and modules',
          'Basic algorithms'
        ]
      },
      {
        title: 'Data Structures',
        topics: [
          'Lists and tuples',
          'Dictionaries',
          'Sets',
          'File handling'
        ]
      },
      {
        title: 'Advanced Concepts',
        topics: [
          'Object-oriented programming',
          'Error handling',
          'Simple GUI applications',
          'Basic game development'
        ]
      }
    ],
    projects: [
      {
        title: 'Text Adventure Game',
        description: 'Create an interactive text-based adventure game'
      },
      {
        title: 'Simple Calculator',
        description: 'Build a calculator application with GUI'
      }
    ],
    learningOutcomes: [
      'Python programming skills',
      'Problem-solving abilities',
      'Algorithm development',
      'Software design concepts'
    ],
    prerequisites: [
      'Basic programming concepts',
      'Good math skills',
      'Logical thinking ability'
    ]
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
    curriculum: [
      {
        title: 'Robotics Basics',
        topics: [
          'Robot components',
          'Basic electronics',
          'Sensor types',
          'Motor control'
        ]
      },
      {
        title: 'Programming Robots',
        topics: [
          'Basic movement',
          'Sensor integration',
          'Autonomous behavior',
          'Remote control'
        ]
      },
      {
        title: 'Advanced Projects',
        topics: [
          'Line following',
          'Obstacle avoidance',
          'Robot challenges',
          'Custom projects'
        ]
      }
    ],
    projects: [
      {
        title: 'Line Follower Robot',
        description: 'Build a robot that can follow a line path'
      },
      {
        title: 'Obstacle Course Robot',
        description: 'Create a robot that can navigate obstacles'
      }
    ],
    learningOutcomes: [
      'Robotics fundamentals',
      'Programming skills',
      'Problem-solving',
      'Engineering concepts'
    ],
    prerequisites: [
      'Basic programming knowledge',
      'Interest in robotics',
      'Basic math skills'
    ]
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
    curriculum: [
      {
        title: 'Design Fundamentals',
        topics: [
          'Color theory and typography',
          'Layout and composition',
          'User interface design',
          'Responsive design principles'
        ]
      },
      {
        title: 'Tools and Technologies',
        topics: [
          'HTML5 and CSS3',
          'CSS frameworks (Tailwind, Bootstrap)',
          'Design tools (Figma basics)',
          'Browser developer tools'
        ]
      },
      {
        title: 'Advanced Concepts',
        topics: [
          'CSS animations and transitions',
          'Flexbox and Grid layouts',
          'Mobile-first design',
          'Web accessibility'
        ]
      }
    ],
    projects: [
      {
        title: 'Personal Portfolio',
        description: 'Design and build a responsive personal portfolio website'
      },
      {
        title: 'Business Website',
        description: 'Create a professional business website with multiple pages'
      }
    ],
    learningOutcomes: [
      'Understanding of design principles',
      'Proficiency in HTML/CSS',
      'Responsive design skills',
      'UI/UX best practices'
    ],
    prerequisites: [
      'Basic computer skills',
      'HTML/CSS fundamentals',
      'Creative mindset'
    ]
  }
];