"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * SmartImage wraps next/image and shows an elegant branded fallback
 * if the remote image fails to load (never a broken image box).
 */
export function SmartImage({
  className,
  alt,
  wrapperClassName,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [errored, setErrored] = useState(false);

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
        <span className="font-display text-2xl text-stone/70">Maison Aurélle</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
