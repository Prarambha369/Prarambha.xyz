import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span className={cn(
      "font-mono text-[11px] px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary",
      className
    )}>
      {children}
    </span>
  );
};
