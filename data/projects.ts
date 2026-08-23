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
    description: "Rupandehi's first student-led tech ecosystem. Organized Daydream Butwal and HackDay Butwal (partnered with MLH & Google Gemini), bringing hands-on hackathons to youth outside the Valley.",
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://butwalhacks.com',
    githubUrl: null,
    status: 'live',
  },
  {
    id: 'hisab-sathi',
    title: 'Hisab Sathi',
    tags: ['FinTech', 'AI', 'Kotlin'],
    description: '100% private, on-device financial tracking manager that parses Nepali bank SMS and PDF statements into a clean, searchable timeline with local AI assistance.',
    stack: ['Kotlin', 'Android', 'On-Device AI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369/Hisab-Sathi',
    status: 'oss',
  },
  {
    id: 'misterstream-cli',
    title: 'mrstream-cli',
    tags: ['CLI', 'Shell', 'Media'],
    description: 'Terminal-based CLI for live sports streaming. Ethical, modular, and integrated with mpv and fzf for seamless command-line video playback.',
    stack: ['Shell', 'mpv', 'fzf', 'Bash'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369/mrstream-cli',
    status: 'oss',
  },
  {
    id: 'mistertube',
    title: 'MisterTube',
    tags: ['Browser Extension', 'OSS'],
    description: 'YouTube without the distraction noise. Strips Shorts and Home recommendations while providing focus mode. Supports Manifest V2 (Firefox) and Manifest V3 (Chrome).',
    stack: ['JavaScript', 'CSS', 'Browser Extension APIs'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369/MisterTube-V2',
    status: 'oss',
  },
  {
    id: 'bagh-chal',
    title: 'Bagh-Chal',
    tags: ['Game', 'Nepali Culture'],
    description: 'Open-source digital adaptation of Bagh-Chal, the traditional strategy board game of Nepal, built to preserve and digitize local cultural games.',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369/Bagh-Chal',
    status: 'oss',
  },
  {
    id: 'tiger-bot',
    title: 'Tiger-Bot',
    tags: ['Discord', 'Python'],
    description: 'Discord server management and community automation bot, deployed across 25+ servers through community-driven open-source development.',
    stack: ['Python', 'Discord API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Prarambha369/Tiger-Bot',
    status: 'oss',
  },
  {
    id: 'river-to-farm',
    title: 'River-to-Farm',
    tags: ['Climate Tech', 'Hardware'],
    description: 'Low-cost river monitoring and early-alert system for farmers along the Tinau River basin in Rupandehi District. Submitted to The Earth Prize 2026.',
    stack: ['Python', 'IoT', 'Data Science'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-development',
  },
];
