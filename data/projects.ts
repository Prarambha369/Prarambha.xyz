// Generated from a scan of github.com/Prarambha369 and github.com/NextEra-Development
// (Nov 2026). Practice repos, config repos and unmodified forks are intentionally left out.

export type ProjectCategory =
  | "Community"
  | "Apps"
  | "Extensions"
  | "Games"
  | "Bots & CLI"
  | "Hardware";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  stack: string[];
  year: number;
  liveUrl: string | null;
  githubUrl: string | null;
  status: "live" | "oss" | "in-development" | "concept" | "archived";
  /** Extra outbound link, e.g. the competition a pitch was submitted to or an upstream project. */
  reference?: { label: string; url: string };
  featured?: boolean;
  /** Short proof point shown on cards, e.g. "360 downloads". */
  highlight?: string;
}

export const projects: Project[] = [
  // ── Featured ────────────────────────────────────────────────────────────
  {
    id: "butwal-hacks",
    title: "Butwal Hacks",
    category: "Community",
    tags: ["Community", "Platform", "Next.js"],
    description:
      "Rupandehi's first student-led tech ecosystem, and the platform behind it: an ORCID-style public identity for young builders in Nepal, a place to run hackathons, and a record of work they can prove.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    year: 2025,
    liveUrl: "https://butwalhacks.com",
    githubUrl: "https://github.com/Prarambha369/Butwal-Hacks",
    status: "live",
    featured: true,
    highlight: "90+ participants · MLH + Google Gemini",
  },
  {
    id: "hisab-sathi",
    title: "Hisab Sathi",
    category: "Apps",
    tags: ["Android", "Kotlin", "Offline-first"],
    description:
      "Private, SMS-powered expense tracker for Nepal. Parses transaction SMS from Nepali banks and wallets into a searchable money timeline with budgets, a cash wallet and an on-device AI assistant. A Nepal-focused adaptation of the open-source PennyWise AI tracker.",
    stack: ["Kotlin", "Android", "On-device AI"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/Hisab-Sathi",
    status: "in-development",
    featured: true,
    reference: { label: "Based on PennyWise AI", url: "https://github.com/sarim2000/pennywiseai-tracker" },
  },
  {
    id: "mistertube",
    title: "MisterTube",
    category: "Extensions",
    tags: ["Browser Extension", "OSS"],
    description:
      "YouTube without the noise. Hides Shorts, strips Home recommendations, adds a full-width feed, playlist-aware watch page and focus mode. Ships as Firefox (MV2) and Chrome (MV3) builds under NextEra Development.",
    stack: ["JavaScript", "CSS", "WebExtensions"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/NextEra-Development/MisterTube-V3",
    status: "oss",
    featured: true,
  },
  {
    id: "chikem-mod",
    title: "Chikem Mod",
    category: "Games",
    tags: ["Minecraft", "Fabric", "Java"],
    description:
      "Fabric mod for Minecraft adding four rideable chicken types (Swiftwing, Dashclaw, Featherfall, Lucky Beak), custom items and multiplayer-compatible mechanics. Published on Modrinth.",
    stack: ["Java", "Fabric API"],
    year: 2026,
    liveUrl: "https://modrinth.com/mod/chikem-mod",
    githubUrl: "https://github.com/Prarambha369/chikemMod",
    status: "live",
    featured: true,
    highlight: "360+ downloads on Modrinth",
  },

  // ── Community & events ──────────────────────────────────────────────────
  {
    id: "hackday-butwal",
    title: "HackDay Butwal",
    category: "Community",
    tags: ["Hackathon", "MLH", "React"],
    description:
      "Site for HackDay Butwal, a one-day beginner-friendly hackathon run with Major League Hacking and Google Gemini on January 17, 2026. Now an archive of the theme, winners, judges and sponsors, with an AI chat assistant.",
    stack: ["React", "Vite", "TypeScript", "Supabase"],
    year: 2026,
    liveUrl: "https://hackday.butwalhacks.com",
    githubUrl: "https://github.com/Prarambha369/hackday",
    status: "live",
  },
  {
    id: "cyberutsav-lumbini",
    title: "CyberUtsav Lumbini",
    category: "Community",
    tags: ["Cybersecurity", "Event", "Next.js"],
    description:
      "Pre-registration portal for the Lumbini provincial chapter of CyberUtsav, Nepal's biggest student hackathon series. Co-organized by Butwal Hacks; winners advance to the Kathmandu grand finale.",
    stack: ["Next.js", "TypeScript"],
    year: 2026,
    liveUrl: "https://cyber-utsav-lumbini-butwal.vercel.app",
    githubUrl: "https://github.com/Prarambha369/CyberUtsavLumbini",
    status: "live",
  },
  {
    id: "hack-club-butwal",
    title: "Hack Club Butwal",
    category: "Community",
    tags: ["Hack Club", "Website"],
    description:
      "Website for the Hack Club Butwal student chapter, formerly served at butwal.hackclub.com. The club ran Boba, Swirl and HackCraft workshops and seeded Butwal Hacks.",
    stack: ["Next.js", "Theme UI"],
    year: 2025,
    liveUrl: null, // site is offline (Vercel 404; butwal.hackclub.com has no DNS)
    githubUrl: "https://github.com/Prarambha369/hcbutwal",
    status: "archived",
  },

  // ── Apps & tools ────────────────────────────────────────────────────────
  {
    id: "sahuji-cashier",
    title: "Sahuji Cashier",
    category: "Apps",
    tags: ["C++", "POS", "Security"],
    description:
      "Console point-of-sale system for small businesses: inventory with low-stock alerts, billing, customer records and admin/user roles. Offline-first and privacy-focused.",
    stack: ["C++"],
    year: 2025,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/Sahuji-Cashier",
    status: "oss",
    highlight: "15 stars · most-starred repo",
  },
  {
    id: "color-wheel",
    title: "ColorWheel",
    category: "Apps",
    tags: ["React", "Canvas", "Math"],
    description:
      "Interactive color wheel drawn from 36,000 individually colored dots, one hue per degree. Pick any point to get HSL, RGB and Hex values.",
    stack: ["React", "Vite", "Canvas"],
    year: 2025,
    liveUrl: "https://color-wheel-prarambha.vercel.app/",
    githubUrl: "https://github.com/Prarambha369/ColorWheel",
    status: "live",
  },
  {
    id: "mrfonts",
    title: "MrFonts",
    category: "Apps",
    tags: ["Web", "Fonts"],
    description:
      "Showcase of custom fonts with one-click copyable HTML snippets and a light/dark theme, backed by a small font database.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/MrFonts/",
    githubUrl: "https://github.com/Prarambha369/MrFonts",
    status: "live",
  },
  {
    id: "ai-blog",
    title: "AI Blog Generator",
    category: "Apps",
    tags: ["Python", "LLM"],
    description:
      "Command-line app that drafts blog posts from a topic and title using OpenAI's GPT-4o, with optional emoji styling.",
    stack: ["Python", "OpenAI API"],
    year: 2025,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/aiblog",
    status: "oss",
  },

  // ── Extensions ──────────────────────────────────────────────────────────
  {
    id: "battery-safety",
    title: "Battery Safety",
    category: "Extensions",
    tags: ["GNOME Shell", "Linux"],
    description:
      "GNOME Shell extension for battery health: live charge, capacity and temperature in the top bar, charge thresholds (conservation 40–80%, balanced 20–90%) and TLP profile switching.",
    stack: ["JavaScript", "GNOME Shell", "TLP"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/battery-safety",
    status: "oss",
  },
  {
    id: "pirate-translator",
    title: "Pirate Translator",
    category: "Extensions",
    tags: ["Bookmarklet", "Fun"],
    description:
      "Bookmarklet that turns any webpage into pirate speak: 250+ slang replacements, random exclamations, optional sea shanty and saved preferences.",
    stack: ["JavaScript"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/pirateDictionary/",
    githubUrl: "https://github.com/Prarambha369/pirateDictionary",
    status: "live",
  },

  // ── Bots ────────────────────────────────────────────────────────────────
  {
    id: "tiger-bot",
    title: "Tiger-Bot",
    category: "Bots & CLI",
    tags: ["Discord", "Node.js"],
    description:
      "Multipurpose Discord bot for server management, moderation and giveaways, built on discord.js under NextEra Development.",
    stack: ["JavaScript", "discord.js"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/NextEra-Development/Tiger-Bot",
    status: "oss",
  },

  // ── Games ───────────────────────────────────────────────────────────────
  {
    id: "bagh-chal",
    title: "Bagh-Chal",
    category: "Games",
    tags: ["Nepal", "Board game"],
    description:
      "Nepal's traditional tigers-and-goats strategy game, implemented three ways with identical rules: a web version, a Python Tkinter GUI and a C++ console build.",
    stack: ["JavaScript", "Python", "C++"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/Bagh-Chal/",
    githubUrl: "https://github.com/Prarambha369/Bagh-Chal",
    status: "live",
  },
  {
    id: "shiny-octo",
    title: "Shiny Octo",
    category: "Games",
    tags: ["Browser game"],
    description: "Flappy-style one-button arcade game for the web.",
    stack: ["JavaScript", "Canvas"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/shiny-octo/",
    githubUrl: "https://github.com/Prarambha369/shiny-octo",
    status: "live",
  },

  // ── Hardware ────────────────────────────────────────────────────────────
  {
    id: "river-to-farm",
    title: "River-to-Farm",
    category: "Hardware",
    tags: ["Climate Tech", "IoT", "Pitch"],
    description:
      "Concept for a low-cost river monitoring and early-alert system for farmers along the Tinau River basin in Rupandehi District. Pitched to The Earth Prize 2026, the global sustainability competition for students aged 13–19 run by The Earth Foundation.",
    stack: ["IoT sensors", "Data"],
    year: 2026,
    liveUrl: null,
    githubUrl: null,
    status: "concept",
    reference: { label: "The Earth Prize", url: "https://www.theearthprize.org/" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ProjectCategory[] = Array.from(
  new Set(projects.map((p) => p.category)),
);

// ── Merged upstream contributions (outside my own account) ────────────────
export interface Contribution {
  repo: string;
  url: string;
  summary: string;
  prs: number;
}

export const contributions: Contribution[] = [
  {
    repo: "GNOME-Nepal/discord-bot",
    url: "https://github.com/GNOME-Nepal/discord-bot/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Core commands, event system for UbuCon Asia 2025, Dockerfile and fixes.",
    prs: 9,
  },
  {
    repo: "GNOME-Nepal/website",
    url: "https://github.com/GNOME-Nepal/website/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Core Team application form, navbar link, Discord guide and author pages.",
    prs: 2,
  },
  {
    repo: "GNOME-Nepal/contributors",
    url: "https://github.com/GNOME-Nepal/contributors/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Automated Discord embed system for contributor announcements.",
    prs: 2,
  },
  {
    repo: "NextEra-Development/MisterTube-V2",
    url: "https://github.com/NextEra-Development/MisterTube-V2/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Full repair for live YouTube layouts, service-worker fix and the Firefox MV2 port.",
    prs: 4,
  },
  {
    repo: "hackclub/dns",
    url: "https://github.com/hackclub/dns/pull/1804",
    summary: "Provisioned butwal.hackclub.com for the Hack Club Butwal chapter.",
    prs: 1,
  },
];

// Snapshot from GitHub (Nov 2026).
export const githubStats = {
  contributionsLastYear: 868,
  originalRepos: 34,
  mergedPRs: 22,
};
