import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  home: [
    { name: "Home A", href: "/" },
    { name: "Home B", href: "/home-b" },
    { name: "Home C", href: "/home-c" },
  ],
  about: [
    { name: "About A", href: "/about" },
    { name: "About B", href: "/about-b" },
    { name: "About C", href: "/about-c" },
  ],
  work: [
    { name: "Work A", href: "/work" },
    { name: "Work B", href: "/work-b" },
    { name: "Work C", href: "/work-c" },
  ],
  template: [
    { name: "Style Guide", href: "/style-guide" },
    { name: "Changelog", href: "/changelog" },
    { name: "Instructions", href: "/instructions" },
    { name: "License", href: "/license" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-24 pb-12">
      <div className="container-width px-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 space-y-8">
            <Link href="/" className="font-display font-bold text-3xl tracking-tighter">
              /PRARAMBHA<span className="text-primary">_</span>
            </Link>
            <p className="text-text-2 max-w-sm text-lg">
              Building the tech infrastructure that didn't exist in Butwal, Nepal.
              Ecosystem founder & OSS builder.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-bg border border-border hover:border-primary transition-colors text-text-2 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-bg border border-border hover:border-primary transition-colors text-text-2 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-bg border border-border hover:border-primary transition-colors text-text-2 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-bg border border-border hover:border-primary transition-colors text-text-2 hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="label-mono mb-6 text-text">Home</h4>
            <ul className="space-y-4">
              {footerLinks.home.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-2 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-mono mb-6 text-text">About</h4>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-2 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-mono mb-6 text-text">Template</h4>
            <ul className="space-y-4">
              {footerLinks.template.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-2 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-h3 font-bold tracking-tighter">hello@prarambha.xyz</span>
            <span className="label-mono">FOR INQUIRIES & COLLABORATIONS</span>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-text-muted label-mono">
            <span>© 2026 DESIGNED & BUILT BY PRARAMBHA</span>
            <span>BUTWAL, NEPAL // UTC+5:45</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
