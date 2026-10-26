"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, ArrowUpRight, Play } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { reels, type Reel } from "@/data/reels";
import { contactInfo } from "@/data/site";

function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ReelCard({ reel }: { reel: Reel; index: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay when in view using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Browser autoplay policy fallback
            });
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-espresso border border-espresso/15 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-champagne/50"
    >
      {/* Background Video (Autoplay, Loop, PlaysInline) */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Subtle Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/30 pointer-events-none" />

      {/* Top Bar: Instagram Badge + Sound Toggle */}
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between z-10">
        <a
          href={reel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 rounded-full bg-espresso/70 px-2.5 py-1 text-[0.68rem] font-medium text-ivory backdrop-blur-md transition-colors hover:bg-espresso hover:text-champagne border border-ivory/10"
          aria-label={`View ${reel.title} on Instagram`}
        >
          <InstagramIcon size={12} className="text-champagne" />
          <span>Reel</span>
        </a>

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Unmute audio" : "Mute audio"}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-espresso/70 text-ivory backdrop-blur-md transition-all hover:bg-espresso hover:text-champagne border border-ivory/10"
        >
          {muted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-champagne" />}
        </button>
      </div>

      {/* Paused Overlay Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-espresso/30 pointer-events-none">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso/80 text-champagne backdrop-blur-sm border border-champagne/40">
            <Play size={20} className="fill-champagne ml-0.5" />
          </div>
        </div>
      )}

      {/* Bottom Info: Category, Title & Instagram Link */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <span className="inline-block rounded bg-champagne/20 px-2 py-0.5 text-[0.62rem] uppercase tracking-wider font-semibold text-champagne backdrop-blur-sm">
          {reel.category}
        </span>
        <h3 className="mt-1.5 font-display text-base font-normal leading-snug text-ivory line-clamp-2">
          {reel.title}
        </h3>

        <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-ivory/15">
          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-wider text-ivory/80 transition-colors hover:text-champagne font-medium"
          >
            <span>Watch on Insta</span>
            <ArrowUpRight size={12} />
          </a>
          <span className="text-[0.65rem] text-ivory/50">@vidhis_hair.skin.makeup</span>
        </div>
      </div>
    </div>
  );
}

export function ReelsSection() {
  return (
    <Section tone="espresso" className="overflow-hidden">
      <Container>
        {/* Section Heading with direct Instagram link */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            tone="light"
            eyebrow={contactInfo.instagramHandle}
            title="Video of Instagram Reels"
            description="Experience our signature bridal transformations, L'Oréal hair smoothing results, and festive makeup artistry in motion."
          />

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <Button
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="sm"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon size={15} />
              <span>Follow on Instagram</span>
              <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>

        {/* 5-Column Responsive Reel Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 lg:gap-5">
          {reels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-ivory/60">
          <span>Tap any reel to pause or unmute sound · Follow </span>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne font-medium underline underline-offset-4 hover:text-ivory"
          >
            {contactInfo.instagramHandle}
          </a>
          <span> for daily bridal stories and updates</span>
        </div>
      </Container>
    </Section>
  );
}
