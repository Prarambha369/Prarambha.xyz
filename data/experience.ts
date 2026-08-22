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
    role: 'Organizing Committee Member',
    org: 'Hack4Safety 2083 (Lumbini Province Police)',
    orgUrl: null,
    type: 'Government Innovation',
    start: '2026',
    end: '2026',
    location: 'Butwal Training Center, Nepal',
    description: "Organizing committee for Nepal's first-ever government hackathon presented by Lumbini Province Police. Co-led 36-hour event bringing together developers nationwide for cybercrime, emergency response, and public safety solutions.",
  },
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
    role: 'Open-Source Maintainer & Volunteer',
    org: 'GNOME Nepal & UbuCon Asia 2025',
    orgUrl: 'https://nepal.gnome.org',
    type: 'Volunteer · Part-time',
    start: 'Aug 2024',
    end: 'Present',
    location: 'Remote / Kathmandu',
    description: 'Top-5 contributor maintaining GNOME Nepal. Volunteered for UbuCon Asia 2025 in Kathmandu, co-hosted GNOME Nepal x PizzaDAO Pizza Party in Butwal.',
  },
  {
    role: 'Founder',
    org: 'NextEra Development',
    orgUrl: null,
    type: 'Self-employed',
    start: 'Feb 2022',
    end: 'Present',
    location: 'Butwal, Nepal · Remote',
    description: 'Independent OSS studio building privacy-first tools: MisterTube browser extension and Tiger-Bot Discord automation.',
  },
  {
    role: 'Club President & Founder',
    org: 'Hack Club Butwal',
    orgUrl: 'https://hackclub.com',
    type: 'Part-time',
    start: 'Apr 2025',
    end: 'Sep 2025',
    location: 'Butwal, Nepal',
    description: 'Established student developer community. Ran Boba, Swirl, and HackCraft workshops for beginner developers.',
  },
];
