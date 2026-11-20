import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open-source work and philosophy: GNOME Nepal maintainer and builder in public.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
