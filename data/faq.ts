// Shown on /about and emitted as FAQPage structured data. Answers must only
// restate what the site already says elsewhere.

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Who is Prarambha Bashyal?",
    a: "Prarambha (Vishma) Bashyal is a 15-year-old ecosystem founder and open-source builder from Butwal, Nepal. He founded Butwal Hacks, maintains GNOME Nepal as a top-5 contributor, and builds privacy-first tools through NextEra Development.",
  },
  {
    q: "What is Butwal Hacks?",
    a: "Butwal Hacks is Rupandehi's first student-led tech ecosystem, founded in March 2025. It runs free hackathons, workshops and mentorship for students in Lumbini Province, including Daydream Butwal and HackDay Butwal.",
  },
  {
    q: "Which events has Prarambha organized?",
    a: "Daydream Butwal, a 24-hour game jam for teens on October 10–11, 2025; HackDay Butwal, a Major League Hacking and Google Gemini student hackathon on January 17, 2026; and Hack4Safety 2083 with Lumbini Province Police, where he served on the organizing committee.",
  },
  {
    q: "What open-source projects has he built?",
    a: "Hisab Sathi, an on-device expense tracker for Nepal; MisterTube, a YouTube cleanup extension for Chrome and Firefox; Chikem Mod for Minecraft; Battery Safety for GNOME Shell; Tiger-Bot for Discord; and merged contributions to GNOME Nepal's Discord bot and website.",
  },
  {
    q: "How can I work with Prarambha?",
    a: "He is open to remote internships, open-source collaboration, event sponsorships and ecosystem partnerships. Email prarambha@butwalhacks.com; he usually replies within 48 hours (Nepal time, UTC+5:45).",
  },
];
