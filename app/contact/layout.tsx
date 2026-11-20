import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about remote internships, open-source collaboration, and ecosystem partnerships.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
