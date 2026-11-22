import type { Metadata } from "next";
import { Zilla_Slab, DM_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ORGS, PERSON, SITE_NAME, SITE_URL, orgId, personId, websiteId } from "@/lib/seo";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  title: {
    default: 'Prarambha Bashyal — Ecosystem Founder & OSS Builder',
    template: '%s — Prarambha Bashyal',
  },
  description: 'Founder of Butwal Hacks, GNOME Nepal maintainer, and open-source builder from Butwal, Nepal. 15 years old. Building the tech infrastructure that didn\'t exist in his city.',
  openGraph: {
    title: 'Prarambha Bashyal',
    description: 'Ecosystem Founder · Open-Source Builder · Butwal, Nepal',
    url: 'https://prarambha.xyz',
    siteName: 'Prarambha.xyz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prarambha Bashyal',
    description: 'Ecosystem Founder · OSS Builder · Butwal, Nepal',
  },
  keywords: [
    'Prarambha Bashyal', 'Butwal Hacks', 'GNOME Nepal',
    'Nepal developer', 'open source Nepal', 'student developer Nepal',
    'NextEra Development', 'MisterBashyal', 'HackDay Butwal', 'Daydream Butwal',
    'Hack4Safety 2083', 'Hisab Sathi', 'MisterTube', 'hackathon Nepal'
  ],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: PERSON.name,
      alternateName: PERSON.alternateName,
      url: SITE_URL,
      image: `${SITE_URL}${PERSON.image}`,
      jobTitle: PERSON.jobTitle,
      description: PERSON.description,
      email: `mailto:${PERSON.email}`,
      address: { '@type': 'PostalAddress', addressLocality: PERSON.city, addressCountry: 'NP' },
      knowsAbout: PERSON.knowsAbout,
      sameAs: PERSON.sameAs,
      worksFor: ORGS.map((o) => ({ '@id': orgId(o.id) })),
    },
    ...ORGS.map((o) => ({
      '@type': 'Organization',
      '@id': orgId(o.id),
      name: o.name,
      url: o.url,
      description: o.description,
      founder: { '@id': personId },
    })),
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={siteSchema} />
      </head>
      <body className={`${zilla.variable} ${dmMono.variable} font-sans bg-bg text-text min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:p-4 focus:bg-surface focus:text-primary focus:border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg rounded-md"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1} className="flex-grow scroll-mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
