"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const current = items[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <blockquote>
        <p className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-[2.4rem]">
          <span className="text-champagne">“</span>
          {current.quote}
          <span className="text-champagne">”</span>
        </p>
        <footer className="mt-8">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-ivory">
            {current.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/50">
            {current.context}
          </p>
        </footer>
      </blockquote>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="rounded-full border border-ivory/25 p-3 text-ivory/80 transition-colors hover:border-ivory hover:text-ivory"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-champagne" : "w-2 bg-ivory/30 hover:bg-ivory/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="rounded-full border border-ivory/25 p-3 text-ivory/80 transition-colors hover:border-ivory hover:text-ivory"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
