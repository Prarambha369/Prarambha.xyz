"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

export const Lightbox = ({ src, alt }: { src: string, alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-pointer overflow-hidden bg-surface-2 border border-border"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Maximize2 className="text-white" size={32} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
