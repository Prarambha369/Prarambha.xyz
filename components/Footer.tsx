import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <Link href="/" className="font-display font-bold text-xl tracking-tight">
            Prarambha<span className="text-primary">.</span>xyz
          </Link>
          <p className="text-text-muted text-sm max-w-xs">
            Built with Next.js. Deployed on Vercel. Open source.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Prarambha369" target="_blank" rel="noopener noreferrer" className="text-text-2 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/misterbashyal" target="_blank" rel="noopener noreferrer" className="text-text-2 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:prarambha@butwalhacks.com" className="text-text-2 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">
        <span>© 2026 Prarambha Bashyal · Butwal, Nepal</span>
        <span>UTC+5:45</span>
      </div>
    </footer>
  );
};
