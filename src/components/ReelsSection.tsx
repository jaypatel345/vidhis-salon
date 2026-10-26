"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, ArrowUpRight, Play } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { reels, type Reel } from "@/data/reels";
import { contactInfo } from "@/data/site";

// Offsets in seconds so all videos do not loop in identical lockstep
const START_OFFSETS = [0.0, 3.2, 5.8, 1.8, 4.4];

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

function ReelCard({
  reel,
  index,
  sectionVisible,
  activeAudioId,
  onToggleAudio,
}: {
  reel: Reel;
  index: number;
  sectionVisible: boolean;
  activeAudioId: string | null;
  onToggleAudio: (id: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const isCurrentAudio = activeAudioId === reel.id;

  // Staggered initial offset to keep videos distinct and natural
  const initialOffset = START_OFFSETS[index % START_OFFSETS.length];

  // Sync muted state with global audio controller
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isCurrentAudio;
    }
  }, [isCurrentAudio]);

  // Lazy load video only when section approaches the viewport
  useEffect(() => {
    if (!sectionVisible || !videoRef.current) return;

    const video = videoRef.current;

    // Apply staggered initial start time once metadata is ready
    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
      try {
        if (initialOffset > 0 && initialOffset < video.duration) {
          video.currentTime = initialOffset;
        }
      } catch {
        // Ignored for non-seekable streams
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy fallback
        });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [sectionVisible, initialOffset]);

  // Pause playback when card scrolled out of view to save battery and memory
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting && sectionVisible) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [sectionVisible]);

  const handleToggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleAudio(reel.id);
  };

  const handleCardClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-espresso border border-espresso/20 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-champagne/50"
    >
      {/* 1. Instant Poster Image (Always visible with 0 network delay) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={reel.posterSrc}
        alt={reel.title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoLoaded && isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Video Element (Only streams when section enters viewport) */}
      {sectionVisible && (
        <video
          ref={videoRef}
          src={reel.videoSrc}
          poster={reel.posterSrc}
          loop
          muted={!isCurrentAudio}
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}

      {/* 3. Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/35 pointer-events-none" />

      {/* 4. Top Controls Bar: Instagram Pill + Sound Toggle */}
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between z-10">
        <a
          href={reel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 rounded-full bg-espresso/70 px-2.5 py-1 text-[0.68rem] font-medium text-ivory backdrop-blur-md transition-colors hover:bg-espresso hover:text-champagne border border-ivory/10"
          aria-label={`View on Instagram: ${reel.title}`}
        >
          <InstagramIcon size={12} className="text-champagne" />
          <span>Reel</span>
        </a>

        {/* Audio Toggle Button with visual feedback */}
        <button
          type="button"
          onClick={handleToggleSound}
          aria-label={isCurrentAudio ? "Mute audio" : "Unmute audio with sound"}
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs backdrop-blur-md transition-all border ${
            isCurrentAudio
              ? "bg-champagne text-espresso font-semibold border-champagne"
              : "bg-espresso/70 text-ivory border-ivory/15 hover:bg-espresso hover:text-champagne"
          }`}
        >
          {isCurrentAudio ? (
            <>
              <Volume2 size={12} className="text-espresso animate-pulse" />
              <span className="text-[0.62rem] uppercase tracking-wider">Audio On</span>
            </>
          ) : (
            <VolumeX size={13} className="text-ivory/80" />
          )}
        </button>
      </div>

      {/* 5. Paused Indicator */}
      {!isPlaying && videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-espresso/35 pointer-events-none z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso/80 text-champagne backdrop-blur-sm border border-champagne/40">
            <Play size={20} className="fill-champagne ml-0.5" />
          </div>
        </div>
      )}

      {/* 6. Bottom Information: Category, Title, Instagram Link */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 z-10 pointer-events-none">
        <span className="inline-block rounded bg-champagne/20 px-2 py-0.5 text-[0.62rem] uppercase tracking-wider font-semibold text-champagne backdrop-blur-sm">
          {reel.category}
        </span>
        <h3 className="mt-1 font-display text-sm sm:text-base font-normal leading-snug text-ivory line-clamp-2">
          {reel.title}
        </h3>

        <div className="mt-2 flex items-center justify-between pt-2 border-t border-ivory/15 pointer-events-auto">
          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-wider text-ivory/80 transition-colors hover:text-champagne font-medium"
          >
            <span>Watch on Insta</span>
            <ArrowUpRight size={11} />
          </a>
          <span className="text-[0.62rem] text-ivory/50">@vidhis_hair.skin.makeup</span>
        </div>
      </div>
    </div>
  );
}

export function ReelsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // Lazy load trigger: only mount video sources when section is within 300px
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggleAudio = useCallback((id: string) => {
    setActiveAudioId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <Section tone="espresso" className="overflow-hidden">
      <div ref={sectionRef}>
        <Container>
          {/* Header */}
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

          {/* Sound & Autoplay Status Banner */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ivory/10 bg-ivory/5 px-4 py-2.5 text-xs text-ivory/70 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-champagne animate-pulse" />
              <span>
                Playing without sound by default (browser policy) · Tap <strong>🔊 Audio</strong> on any reel to listen with voice
              </span>
            </div>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne font-medium hover:underline inline-flex items-center gap-1 text-[0.72rem] uppercase tracking-wider"
            >
              <span>Watch full reels on Instagram</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* 5-Column Responsive Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 lg:gap-5">
            {reels.map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                index={index}
                sectionVisible={sectionVisible}
                activeAudioId={activeAudioId}
                onToggleAudio={handleToggleAudio}
              />
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs text-ivory/60">
            <span>Follow </span>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne font-medium underline underline-offset-4 hover:text-ivory"
            >
              {contactInfo.instagramHandle}
            </a>
            <span> for daily bridal stories, client transformations, and beauty updates in Bardoli</span>
          </div>
        </Container>
      </div>
    </Section>
  );
}
