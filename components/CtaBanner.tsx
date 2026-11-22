import React from "react";
import { Button } from "./Button";

interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

/** Closing call-to-action strip used at the end of pages. */
export const CtaBanner = ({ eyebrow, title, body, primary, secondary }: CtaBannerProps) => (
  <section className="py-20 px-6 border-t border-border bg-primary/5">
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">{title}</h2>
      {body && <p className="text-text-2 leading-relaxed mb-8">{body}</p>}
      <div className="flex flex-wrap justify-center gap-4">
        <Button href={primary.href} external={primary.external}>
          {primary.label}
        </Button>
        {secondary && (
          <Button variant="secondary" href={secondary.href} external={secondary.external}>
            {secondary.label}
          </Button>
        )}
      </div>
    </div>
  </section>
);
