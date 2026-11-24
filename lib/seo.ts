// Single source for site identity used by metadata, JSON-LD and llms.txt.
// Everything here restates facts already on the site; don't add claims that
// aren't shown on a page.

export const SITE_URL = "https://prarambha.xyz";
export const SITE_NAME = "Prarambha.xyz";

export const PERSON = {
  name: "Prarambha Bashyal",
  alternateName: ["Vishma Bashyal", "MisterBashyal"],
  jobTitle: "Founder, Butwal Hacks",
  description:
    "15-year-old ecosystem founder and open-source builder from Butwal, Nepal. Founder of Butwal Hacks, top-5 contributor and maintainer at GNOME Nepal, and founder of NextEra Development.",
  email: "prarambha@butwalhacks.com",
  image: "/pfp.jpg",
  city: "Butwal",
  country: "Nepal",
  sameAs: [
    "https://github.com/Prarambha369",
    "https://linkedin.com/in/misterbashyal",
  ],
  knowsAbout: [
    "C++",
    "Python",
    "TypeScript",
    "Next.js",
    "Linux",
    "Open source",
    "Hackathon organizing",
    "Community building",
  ],
} as const;

export const ORGS = [
  {
    id: "butwal-hacks",
    name: "Butwal Hacks",
    url: "https://butwalhacks.com",
    description: "Rupandehi's first student-led tech ecosystem.",
  },
  {
    id: "nextera-development",
    name: "NextEra Development",
    url: "https://github.com/NextEra-Development",
    description: "Independent open-source studio building privacy-first tools.",
  },
] as const;

export const personId = `${SITE_URL}/#person`;
export const websiteId = `${SITE_URL}/#website`;
export const orgId = (id: string) => `${SITE_URL}/#org-${id}`;

/** Serialises JSON-LD safely for an inline <script> (escapes "<" so no tag can close early). */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
