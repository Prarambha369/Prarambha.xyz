import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Butwal Hacks, GNOME Nepal, and building tech infrastructure from Butwal, Nepal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
