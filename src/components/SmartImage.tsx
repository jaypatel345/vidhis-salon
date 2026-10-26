"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * Elegant warm-espresso shimmer blurDataURL for instant luxury placeholder
 * rendering before the image finishes downloading.
 */
const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23221b18'/%3E%3Crect width='100%25' height='100%25' fill='%23c5a059' opacity='0.18' filter='url(%23b)'/%3E%3C/svg%3E";

/**
 * SmartImage wraps next/image with:
 * 1. Instant shimmer blurDataURL placeholder (no white flash / no empty pop-in)
 * 2. Smooth fade-in cross-transition on decode
 * 3. Branded fallback if an image ever fails to load
 */
export function SmartImage({
  className,
  alt,
  wrapperClassName,
  placeholder,
  blurDataURL,
  onLoad,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-sand",
          wrapperClassName
        )}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-2xl text-stone/70">{site.name}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      placeholder={placeholder ?? "blur"}
      blurDataURL={blurDataURL ?? DEFAULT_BLUR_DATA_URL}
      className={cn(
        className,
        "transition-opacity duration-500 ease-out",
        !loaded && !props.priority ? "opacity-90" : "opacity-100"
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
