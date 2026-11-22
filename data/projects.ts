// Generated from a scan of github.com/Prarambha369 and github.com/NextEra-Development
// (rescanned 23 Nov 2026). Practice repos, config repos and unmodified forks are intentionally left out.

export type ProjectCategory =
  | "Community"
  | "Apps"
  | "Extensions"
  | "Games"
  | "Bots & CLI"
  | "Hardware";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectVariant {
  /** e.g. "Chrome, Edge, Brave · Manifest V3" */
  name: string;
  /** Why this build exists and who should pick it. */
  why: string;
  download: ProjectLink;
  setupUrl: string;
  sourceUrl: string;
}

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
  /** A real build to install (release page, store listing). Shown as the primary button. */
  download?: ProjectLink;
  /** Where the install / run-locally steps live, usually a README section. */
  setupUrl?: string;
  /** Repo default branch, used for the "Source .zip" link. Defaults to "main". */
  defaultBranch?: string;
  /** Square logo in public/projects/. Cards fall back to a monogram. */
  logo?: string;
  /** 16:9 banner or screenshot in public/projects/. Cards fall back to a generated banner. */
  banner?: string;
  /** "contain" for banners that aren't 16:9 (letterboxed instead of cropped). */
  bannerFit?: "cover" | "contain";
  /** One-line runtime requirements, e.g. "Android 8.0+". */
  requirements?: string;
  /** Separate builds of the same project, e.g. per browser. Replaces the single download/setup links. */
  variants?: ProjectVariant[];
  featured?: boolean;
  /** Short proof point shown on cards, e.g. "360 downloads". */
  highlight?: string;
}

export const projects: Project[] = [
  // ── Featured ────────────────────────────────────────────────────────────
  {
    id: "butwal-hacks",
    logo: "/projects/butwal-hacks-logo.webp",
    banner: "/projects/butwal-hacks-banner.webp",
    title: "Butwal Hacks",
    category: "Community",
    tags: ["Community", "Platform", "Next.js"],
    description:
      "Rupandehi's first student-led tech ecosystem, and the platform behind it: an ORCID-style public identity for young builders in Nepal, a place to run hackathons, and a record of work they can prove.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    year: 2025,
    liveUrl: "https://butwalhacks.com",
    githubUrl: "https://github.com/Prarambha369/Butwal-Hacks",
    status: "live",
    setupUrl: "https://github.com/Prarambha369/Butwal-Hacks#quick-start",
    featured: true,
  },
  {
    id: "hisab-sathi",
    logo: "/projects/hisab-sathi-logo.webp",
    banner: "/projects/hisab-sathi-banner.webp",
    bannerFit: "contain",
    title: "Hisab Sathi",
    category: "Apps",
    tags: ["Android", "Kotlin", "Offline-first"],
    description:
      "100% private, on-device expense tracker for Nepal. Parses Nepali bank SMS and PDF statements into a clean, searchable money timeline with budgets, a cash wallet and local AI assistance. A Nepal-focused adaptation of the open-source PennyWise AI tracker.",
    stack: ["Kotlin", "Android", "On-device AI"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/Hisab-Sathi",
    status: "oss",
    setupUrl: "https://github.com/Prarambha369/Hisab-Sathi#quick-start",
    requirements: "Android 8.0+ · install the standard APK",
    featured: true,
    reference: { label: "Based on PennyWise AI", url: "https://github.com/sarim2000/pennywiseai-tracker" },
    // Stable tag page: APK file names include the commit hash and change every build.
    download: { label: "Download APK", url: "https://github.com/Prarambha369/Hisab-Sathi/releases/tag/prebeta-latest" },
  },
  {
    id: "mistertube",
    logo: "/projects/mistertube-logo.webp",
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
    variants: [
      {
        name: "Chrome, Edge, Brave · V3",
        why: "Chromium browsers only accept Manifest V3 extensions now, so V3 is the build for them. Load it unpacked in Developer mode.",
        download: { label: "Download for Chrome", url: "https://github.com/NextEra-Development/MisterTube-V3/archive/refs/heads/master.zip" },
        setupUrl: "https://github.com/NextEra-Development/MisterTube-V3#-installation",
        sourceUrl: "https://github.com/NextEra-Development/MisterTube-V3",
      },
      {
        name: "Firefox · V2",
        why: "Firefox still runs Manifest V2, so V2 is the same extension packaged for it. It is not on addons.mozilla.org yet, so it loads as a temporary add-on that Firefox removes on restart.",
        download: { label: "Download for Firefox", url: "https://github.com/NextEra-Development/MisterTube-V2/archive/refs/heads/main.zip" },
        setupUrl: "https://github.com/NextEra-Development/MisterTube-V2#-installation",
        sourceUrl: "https://github.com/NextEra-Development/MisterTube-V2",
      },
    ],
    featured: true,
  },
  {
    id: "chikem-mod",
    logo: "/projects/chikem-mod-logo.webp",
    banner: "/projects/chikem-mod-banner.webp",
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
    download: { label: "Download .jar", url: "https://github.com/Prarambha369/chikemMod/releases/latest" },
    setupUrl: "https://github.com/Prarambha369/chikemMod#for-players",
    requirements: "Minecraft 26.3 · Fabric Loader 0.20.1+ · Fabric API · Java 25",
    featured: true,
    highlight: "360+ downloads on Modrinth",
  },

  // ── Community & events ──────────────────────────────────────────────────
  {
    id: "hackday-butwal",
    logo: "/projects/hackday-butwal-logo.webp",
    banner: "/projects/hackday-butwal-banner.webp",
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
    setupUrl: "https://github.com/Prarambha369/hackday#getting-started",
    highlight: "50 university students · MLH + Google Gemini",
  },
  {
    id: "cyberutsav-lumbini",
    banner: "/projects/cyberutsav-lumbini-banner.webp",
    logo: "/projects/cyberutsav-lumbini-logo.webp",
    title: "CyberUtsav Lumbini",
    category: "Community",
    tags: ["Cybersecurity", "Event", "Next.js"],
    description:
      "Pre-registration portal for CyberUtsav Lumbini, the Lumbini provincial chapter of Nepal's biggest student hackathon: free, 3 days in Butwal on January 15–17, 2027. Co-organized by Butwal Hacks; winning teams go straight to the Kathmandu Grand Finale.",
    stack: ["Next.js", "TypeScript"],
    year: 2026,
    liveUrl: "https://lumbini.cyberutsav.com",
    githubUrl: "https://github.com/Prarambha369/CyberUtsavLumbini",
    status: "live",
    setupUrl: "https://github.com/Prarambha369/CyberUtsavLumbini#-quick-start",
  },
  {
    id: "hack-club-butwal",
    logo: "/projects/hack-club-butwal-logo.webp",
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
    setupUrl: "https://github.com/Prarambha369/hcbutwal#readme",
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
    setupUrl: "https://github.com/Prarambha369/Sahuji-Cashier#1-installation",
    requirements: "A C++ compiler (g++ or clang)",
    highlight: "15 stars · most-starred repo",
  },
  {
    id: "color-wheel",
    banner: "/projects/color-wheel-banner.webp",
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
    setupUrl: "https://github.com/Prarambha369/ColorWheel#getting-started",
  },
  {
    id: "mrfonts",
    banner: "/projects/mrfonts-banner.webp",
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
    setupUrl: "https://github.com/Prarambha369/MrFonts#installation",
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
    setupUrl: "https://github.com/Prarambha369/aiblog#installation",
    requirements: "Python 3 · OpenAI API key",
  },

  {
    id: "sports-hub",
    banner: "/projects/sports-hub-banner.webp",
    title: "Kick Sports",
    category: "Apps",
    tags: ["Sports", "News", "Open data"],
    description:
      "Sports news and scores hub built only on licensed, public data: BBC Sport and ESPN headlines refreshed every 3 hours by a GitHub Action, latest results and next fixtures from TheSportsDB, and highlights from the leagues' own YouTube channels.",
    stack: ["JavaScript", "Python", "GitHub Actions", "TheSportsDB API"],
    year: 2026,
    liveUrl: "https://prarambha369.github.io/sports-hub/",
    githubUrl: "https://github.com/Prarambha369/sports-hub",
    status: "live",
    setupUrl: "https://github.com/Prarambha369/sports-hub#installation",
  },
  {
    id: "nekyll",
    title: "Nekyll",
    category: "Apps",
    tags: ["Jekyll", "Theme", "Nepal"],
    description:
      "Minimal Jekyll theme in the colors of the Nepali flag: one clean layout, readable typography, no JavaScript and a single stylesheet of CSS variables that is easy to recolor.",
    stack: ["Jekyll", "Liquid", "CSS"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/Nekyll",
    status: "oss",
    setupUrl: "https://github.com/Prarambha369/Nekyll#getting-started",
    requirements: "Ruby 3.0+ and Bundler, or Docker",
  },
  {
    id: "muisckm",
    logo: "/projects/muisckm-logo.webp",
    banner: "/projects/muisckm-banner.webp",
    title: "Muisckm",
    category: "Apps",
    tags: ["Music", "Hack Club", "YSWS"],
    description:
      "Generative music in the browser, built for a Hack Club You Ship We Ship program. Tone.js handles synthesis and sequencing, and the track can be exported as a WAV file.",
    stack: ["JavaScript", "Tone.js"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/muisckm/",
    githubUrl: "https://github.com/Prarambha369/muisckm",
    status: "live",
    setupUrl: "https://github.com/Prarambha369/muisckm#readme",
  },
  {
    id: "pebo-codes",
    title: "Pebo.Codes",
    category: "Apps",
    tags: ["Client work", "Portfolio"],
    description:
      "Portfolio site built for a client under NextEra Development, hand-written in HTML and CSS.",
    stack: ["HTML", "CSS"],
    year: 2024,
    liveUrl: null, // pebo.codes no longer resolves
    githubUrl: "https://github.com/NextEra-Development/pebo.codes",
    status: "archived",
    setupUrl: "https://github.com/NextEra-Development/pebo.codes#installation",
  },

  // ── Extensions ──────────────────────────────────────────────────────────
  {
    id: "battery-safety",
    logo: "/projects/battery-safety-logo.webp",
    banner: "/projects/battery-safety-banner.webp",
    bannerFit: "contain",
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
    download: { label: "Download extension", url: "https://github.com/Prarambha369/battery-safety/releases/latest" },
    setupUrl: "https://github.com/Prarambha369/battery-safety#installation",
    requirements: "GNOME Shell 45–51 · TLP 1.4+ · a laptop with charge thresholds",
  },
  {
    id: "pirate-translator",
    banner: "/projects/pirate-translator-banner.webp",
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
    setupUrl: "https://github.com/Prarambha369/pirateDictionary#step-by-step-usage-guide",
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
    setupUrl: "https://github.com/NextEra-Development/Tiger-Bot#installation",
    requirements: "Node.js · MongoDB · a Discord bot token",
  },

  {
    id: "mrstream-cli",
    title: "mrstream-cli",
    category: "Bots & CLI",
    tags: ["CLI", "Shell", "Media"],
    description:
      "Terminal-native sports event browser and stream launcher written in POSIX shell. Modular and opt-in, with mpv and fzf for fast command-line browsing and playback.",
    stack: ["Shell", "mpv", "fzf"],
    year: 2026,
    liveUrl: null,
    githubUrl: "https://github.com/Prarambha369/mrstream-cli",
    status: "oss",
    setupUrl: "https://github.com/Prarambha369/mrstream-cli#quick-install-script",
    requirements: "curl, fzf and mpv · Linux, macOS or Termux",
  },

  // ── Games ───────────────────────────────────────────────────────────────
  {
    id: "bagh-chal",
    banner: "/projects/bagh-chal-banner.webp",
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
    setupUrl: "https://github.com/Prarambha369/Bagh-Chal#running-the-game",
  },
  {
    id: "shiny-octo",
    banner: "/projects/shiny-octo-banner.webp",
    title: "Shiny Octo",
    category: "Games",
    tags: ["Browser game"],
    description: "Flappy-style one-button arcade game for the web.",
    stack: ["JavaScript", "Canvas"],
    year: 2025,
    liveUrl: "https://prarambha369.github.io/shiny-octo/",
    githubUrl: "https://github.com/Prarambha369/shiny-octo",
    status: "live",
    setupUrl: "https://github.com/Prarambha369/shiny-octo#readme",
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
  /** Replaces the "n PRs" label, e.g. for work that landed as direct commits or a PR still in review. */
  badge?: string;
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
    repo: "NextEra-Development/Tiger-Bot",
    url: "https://github.com/NextEra-Development/Tiger-Bot/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Common moderation and utility commands, untracked runtime giveaway data and README fixes.",
    prs: 2,
  },
  {
    repo: "NextEra-Development/MisterTube-V3",
    url: "https://github.com/NextEra-Development/MisterTube-V3/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Scan-and-fix cleanup of the Manifest V3 build, verified loadable in Chrome.",
    prs: 1,
  },
  {
    repo: "hackclub/daydream",
    url: "https://github.com/hackclub/daydream/commits?author=Prarambha369",
    summary: "Butwal city page for Daydream, Hack Club's global game jam: schedule, RSVP and sponsor redirect.",
    prs: 0,
    badge: "3 commits",
  },
  {
    repo: "hackclub/dns",
    url: "https://github.com/hackclub/dns/pull/1804",
    summary: "Provisioned butwal.hackclub.com for the Hack Club Butwal chapter.",
    prs: 1,
  },
  {
    repo: "hackclub/dinosaurs",
    url: "https://github.com/hackclub/dinosaurs/pulls?q=is%3Apr+author%3APrarambha369+is%3Amerged",
    summary: "Added a dinosaur to Hack Club's community dino gallery.",
    prs: 1,
  },
  {
    repo: "Aryan20/Logomenu",
    url: "https://github.com/Aryan20/Logomenu/pull/120",
    summary: "Optional text label for the GNOME panel menu button.",
    prs: 1,
    badge: "PR in review",
  },
];

// Snapshot from GitHub (Nov 2026). contributionsLastYear is the trailing
// 12-month total from the profile contribution graph; originalRepos counts
// public, non-fork repositories (no licence filter); mergedPRs counts merged
// pull requests to repositories owned by others.
export const githubStats = {
  snapshot: "Nov 2026",
  contributionsLastYear: 886,
  originalRepos: 34,
  mergedPRs: 23,
};
