import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => {
  return (
    <div className={`mb-16 space-y-4 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <Reveal>
        <label className="label-mono text-primary">// {label}</label>
      </Reveal>
      <Reveal delay={0.3}>
        <h2 className="text-h1 leading-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.4}>
          <p className={`text-text-2 text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
