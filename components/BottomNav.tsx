"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

export const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Briefcase, label: "Work", href: "/work" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-surface/80 backdrop-blur-xl border border-border p-2 rounded-full flex items-center gap-1 shadow-2xl">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="p-3 text-text-2 hover:text-primary hover:bg-white/5 rounded-full transition-all group relative"
              >
                <item.icon size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-bg px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
