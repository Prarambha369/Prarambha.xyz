export interface ExperienceEntry {
  role: string;
  org: string;
  orgUrl: string | null;
  type: string;
  start: string;
  end: string;
  location: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Founder & Community Lead',
    org: 'Butwal Hacks',
    orgUrl: 'https://butwalhacks.com',
    type: 'Self-employed',
    start: 'Mar 2025',
    end: 'Present',
    location: 'Butwal, Nepal · Hybrid',
    description: "Founded Rupandehi's first student-led tech ecosystem. Daydream Butwal (40 teens, 24hr game jam) and HackDay Butwal (50 university students, MLH + Google Gemini).",
  },
  {
    role: 'Open-Source Maintainer',
    org: 'GNOME Nepal',
    orgUrl: 'https://nepal.gnome.org',
    type: 'Volunteer · Part-time',
    start: 'Aug 2024',
    end: 'Present',
    location: 'Remote',
    description: 'Top-5 contributor. Manage community platforms, co-host city events in Butwal, volunteered at UbuCon Asia 2025 in Kathmandu.',
  },
  {
    role: 'Founder',
    org: 'NextEra Development',
    orgUrl: null,
    type: 'Self-employed',
    start: 'Feb 2022',
    end: 'Present',
    location: 'Butwal, Nepal · Remote',
    description: 'Independent OSS studio. Current projects: MisterTube (browser extension), Tiger-Bot (Discord automation).',
  },
  {
    role: 'Club President & Founder',
    org: 'Hack Club Butwal',
    orgUrl: 'https://hackclub.com',
    type: 'Part-time',
    start: 'Apr 2025',
    end: 'Sep 2025',
    location: 'Butwal, Nepal',
    description: 'Established and led student developer community. Ran Boba, Swirl, HackCraft workshops. Seeded Butwal Hacks.',
  },
  {
    role: 'Web Developer & Student Mentor',
    org: 'ICT Club of Kalika',
    orgUrl: null,
    type: 'Part-time',
    start: 'Aug 2024',
    end: 'Jul 2025',
    location: 'Butwal, Nepal',
    description: 'Built school website for annual fest. Mentored Grade IX students on web development fundamentals.',
  },
];
