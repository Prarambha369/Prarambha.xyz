// /llms.txt: a plain-text summary of the site for AI answer engines
// (https://llmstxt.org). Generated from the same data as the pages.
import { events } from "@/data/events";
import { faq } from "@/data/faq";
import { contributions, projects } from "@/data/projects";
import { PERSON, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${PERSON.name}`,
    "",
    `> ${PERSON.description}`,
    "",
    `Location: ${PERSON.city}, ${PERSON.country} (UTC+5:45). Contact: ${PERSON.email}.`,
    `Profiles: ${PERSON.sameAs.join(", ")}`,
    "",
    "## Pages",
    `- [Home](${SITE_URL}/): overview, featured projects, experience`,
    `- [Work](${SITE_URL}/work): all projects with source, downloads and setup guides`,
    `- [Events](${SITE_URL}/events): hackathons, game jams and community events`,
    `- [Open source](${SITE_URL}/oss): upstream contributions and GitHub stats`,
    `- [About](${SITE_URL}/about): story, skills, timeline and FAQ`,
    `- [Contact](${SITE_URL}/contact): email and profiles`,
    "",
    "## Projects",
    ...projects.map(
      (p) =>
        `- [${p.title}](${p.liveUrl ?? p.githubUrl ?? `${SITE_URL}/work`}) (${p.category}, ${p.year}): ${p.description}`,
    ),
    "",
    "## Events",
    ...events.map((e) => `- ${e.title} (${e.dateLabel}, ${e.city}), ${e.role}: ${e.description}`),
    "",
    "## Upstream contributions",
    ...contributions.map((c) => `- [${c.repo}](${c.url}): ${c.summary}`),
    "",
    "## FAQ",
    ...faq.flatMap((f) => [`### ${f.q}`, f.a, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
