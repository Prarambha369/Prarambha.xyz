"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  images: { url: string; alt: string }[];
}

export const Slider = ({ images }: SliderProps) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative aspect-video bg-surface-2 border border-border overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index].url}
          alt={images[index].alt}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prev} className="p-3 bg-bg/80 border border-border text-white hover:bg-primary hover:border-primary transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="p-3 bg-bg/80 border border-border text-white hover:bg-primary hover:border-primary transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-primary w-8" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};
