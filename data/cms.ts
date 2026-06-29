import { Project, BlogPost, TeamMember, WorkCategory } from './types';

export const workCategories: WorkCategory[] = [
  { name: 'Ecosystem', slug: 'ecosystem', description: 'Building tech communities and infrastructure.' },
  { name: 'Open Source', slug: 'open-source', description: 'Tools built for the community.' },
  { name: 'Climate Tech', slug: 'climate-tech', description: 'Solving environmental challenges with tech.' },
];

export const projects: Project[] = [
  {
    id: 'butwal-hacks',
    title: 'Butwal Hacks',
    category: 'ecosystem',
    coverImage: '/placeholder-work.jpg',
    client: 'Self-initiated',
    year: '2024',
    services: ['Community Building', 'Event Management', 'Partnerships'],
    heroMedia: { type: 'image', url: '/placeholder-hero.jpg' },
    goals: 'Rupandehi\'s first student-led tech ecosystem.',
    process: 'Founded at 15 with no institutional backing.',
    results: '90 participants, partnerships with MLH and Google Gemini.',
    gallery: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
    featured: true,
  },
  // ... more projects can be added here
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Building Tech in Butwal',
    slug: 'building-tech-in-butwal',
    author: 'Prarambha Bashyal',
    publishedDate: '2024-05-20',
    category: 'Ecosystem',
    cover: '/placeholder-blog.jpg',
    excerpt: 'The story of how I started Butwal Hacks and why it matters.',
    body: 'Content coming soon...',
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Prarambha Bashyal',
    slug: 'prarambha-bashyal',
    role: 'Founder',
    photo: '/placeholder-team.jpg',
    bio: '15-year-old builder from Butwal, Nepal.',
    socialLinks: [
      { platform: 'github', url: 'https://github.com/Prarambha369' },
    ],
    order: 1,
  }
];
