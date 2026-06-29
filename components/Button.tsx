"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon-link";
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
  const baseStyles = "inline-flex items-center justify-center font-bold text-label-mono tracking-widest uppercase transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary: "bg-primary text-bg px-8 py-4 hover:bg-white",
    secondary: "bg-surface-2 text-text px-8 py-4 border border-border hover:border-primary",
    ghost: "text-text hover:text-primary py-2 px-0 border-b border-transparent hover:border-primary",
    "icon-link": "text-text hover:text-primary gap-2",
  };

  const classes = cn(baseStyles, variants[variant], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </>
  );

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
