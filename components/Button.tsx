"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary";
  href?: string;
  external?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  href,
  external,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium px-5 py-2.5 rounded-full text-sm transition-colors duration-150";

  const variants = {
    primary: "bg-primary text-black hover:bg-[#FF8040]",
    ghost: "border border-primary text-primary hover:bg-primary/10",
    secondary: "border border-border-2 text-text hover:border-text-muted",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
