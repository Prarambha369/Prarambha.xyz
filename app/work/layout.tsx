import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects: ecosystems, open-source tools, and systems built by Prarambha Bashyal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
