import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { SITE_URL, personId } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects: ecosystems, open-source tools, and systems built by Prarambha Bashyal.",
  alternates: { canonical: "/work" },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Prarambha Bashyal",
  url: `${SITE_URL}/work`,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": p.githubUrl ? "SoftwareSourceCode" : "CreativeWork",
      name: p.title,
      description: p.description,
      dateCreated: String(p.year),
      keywords: p.tags.join(", "),
      creator: { "@id": personId },
      ...(p.githubUrl ? { codeRepository: p.githubUrl, programmingLanguage: p.stack } : {}),
      ...(p.liveUrl ? { url: p.liveUrl } : p.githubUrl ? { url: p.githubUrl } : {}),
      ...(p.banner ? { image: `${SITE_URL}${p.banner}` } : {}),
    },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={projectsSchema} />
      {children}
    </>
  );
}
