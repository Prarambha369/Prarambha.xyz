import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Butwal Hacks, GNOME Nepal, and building tech infrastructure from Butwal, Nepal.",
  alternates: { canonical: "/about" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
