"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { src: string; alt: string };

// Thumbnail strip that opens photos in an in-page viewer (native <dialog>:
// Esc closes, focus is trapped). Arrow keys move between photos.
export const EventGallery = ({ title, photos }: { title: string; photos: Photo[] }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const photo = index === null ? null : photos[index];
  const navBtn =
    "absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 border border-border-2 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  return (
    <>
      <ul className="flex flex-wrap gap-2 mb-5" aria-label={`More photos from ${title}`}>
        {photos.map((g, i) => (
          <li key={g.src}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`View photo: ${g.alt}`}
              className="relative block w-16 h-12 rounded-md overflow-hidden border border-border hover:border-primary/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image src={g.src} alt="" fill sizes="4rem" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${title} photos`}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto p-0 bg-transparent max-w-[min(92vw,72rem)] w-full backdrop:bg-black/85"
      >
        {photo && (
          <figure className="relative">
            <div className="relative w-full h-[80vh]">
              <Image src={photo.src} alt={photo.alt} fill sizes="92vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-text-2">
              {photo.alt}
              <span className="ml-2 font-mono text-[11px] text-text-muted">
                {index! + 1} / {photos.length}
              </span>
            </figcaption>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className={`${navBtn} left-2`}
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${navBtn} right-2`}>
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              autoFocus
              className="absolute top-2 right-2 p-2 rounded-full bg-bg/70 border border-border-2 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
};
