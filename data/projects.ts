export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  status: 'live' | 'oss' | 'in-development';
}

export const projects: Project[] = [
  {
    id: 'butwal-hacks',
    title: 'Butwal Hacks',
    tags: ['Community', 'Ecosystem'],
    description: "Rupandehi's first student-led tech ecosystem. Two events (Daydream Butwal + HackDay Butwal), 90 participants, partnerships with MLH and Google Gemini — founded at 15 with no institutional backing.",
    stack: [],
    liveUrl: 'https://butwalhacks.com',
    githubUrl: null,
    status: 'live',
  },
  {
    id: 'mistertube',
    title: 'MisterTube',
    tags: ['Browser Extension', 'OSS'],
    description: 'YouTube without the noise. Hides Shorts everywhere, strips Home recommendations, adds focus mode. Cross-browser: Firefox (MV2) + Chrome (MV3).',
    stack: ['JavaScript', 'CSS', 'Browser APIs'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369',
    status: 'oss',
  },
  {
    id: 'tiger-bot',
    title: 'Tiger-Bot',
    tags: ['Discord', 'Python'],
    description: 'Discord server management and community automation bot, deployed across 25+ servers through community-driven development.',
    stack: ['Python', 'Discord API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369',
    status: 'oss',
  },
  {
    id: 'river-to-farm',
    title: 'River-to-Farm',
    tags: ['Climate Tech', 'Hardware'],
    description: 'Low-cost river monitoring and early-alert system for farmers along the Tinau River basin in Rupandehi District. Submitted to The Earth Prize 2026.',
    stack: ['Python', 'IoT', 'Data'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-development',
  },
  {
    id: 'sahuji-cashier',
    title: 'Sahuji Cashier',
    tags: ['C++', 'Desktop'],
    description: 'Point-of-sale system built in C++ for local businesses in Butwal. Focused on simplicity, offline-first operation, and privacy.',
    stack: ['C++'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369',
    status: 'oss',
  },
];
