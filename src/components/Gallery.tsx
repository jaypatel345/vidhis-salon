"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { unsplash } from "@/data/images";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  // Keyboard controls for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const filters: Filter[] = ["All", ...galleryCategories];
  const active = lightbox !== null ? filtered[lightbox] : null;

  return (
    <>
      {/* Filters */}
      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex flex-wrap items-center gap-2 sm:gap-3"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300",
              filter === f
                ? "border-espresso bg-espresso text-ivory"
                : "border-espresso/25 text-espresso/70 hover:border-espresso/60 hover:text-espresso"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.image}-${item.category}-${i}`}
            onClick={() => setLightbox(i)}
            className="img-zoom group relative block w-full overflow-hidden bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            aria-label={`View image: ${item.alt}`}
          >
            <SmartImage
              src={unsplash(item.image, { w: 800, q: 70 })}
              alt={item.alt}
              width={800}
              height={item.tall ? 1100 : 900}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover"
            />
            {item.isOriginal && (
              <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-espresso/85 px-2.5 py-0.5 text-[0.62rem] font-semibold tracking-wider text-champagne border border-champagne/40 backdrop-blur-sm">
                ⭐ Original Photo
              </span>
            )}
            <span className="pointer-events-none absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
            <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 rounded-full bg-ivory/95 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-espresso opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-mocha">No images in this category yet.</p>
      )}

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${active.alt}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeRef}
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 rounded-full border border-ivory/30 p-2.5 text-ivory transition-colors hover:bg-ivory hover:text-espresso"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 p-3 text-ivory transition-colors hover:bg-ivory hover:text-espresso sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <figure
            className="relative max-h-[86svh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={unsplash(active.image, { w: 1400, q: 80 })}
              alt={active.alt}
              width={1400}
              height={active.tall ? 1900 : 1000}
              className="mx-auto max-h-[80svh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 text-center text-sm text-ivory/70">
              {active.alt}
              <span className="mx-2 text-ivory/30">·</span>
              <span className="uppercase tracking-[0.14em] text-champagne">
                {active.category}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 p-3 text-ivory transition-colors hover:bg-ivory hover:text-espresso sm:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
