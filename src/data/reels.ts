/**
 * VIDHI'S SALON — INSTAGRAM REELS
 * ------------------------------------------------------------------
 * Authentic client transformations and artistry captured on video
 * from official Instagram account: @vidhis_hair.skin.makeup
 * https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en
 */

export type Reel = {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  instagramUrl: string;
};

export const reels: Reel[] = [
  {
    id: "reel-1",
    title: "Signature Bridal Makeover & Glamour",
    category: "Bridal Artistry",
    videoSrc: "/videos/reels/reel-1.mp4",
    posterSrc: "/images/reels/reel-1.jpg",
    instagramUrl: "https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en",
  },
  {
    id: "reel-2",
    title: "Radiant Skin Preparation & Glow",
    category: "Skin Aesthetics",
    videoSrc: "/videos/reels/reel-2.mp4",
    posterSrc: "/images/reels/reel-2.jpg",
    instagramUrl: "https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en",
  },
  {
    id: "reel-3",
    title: "Royal Gujarati Bridal Draping & Adornments",
    category: "Bridal Couture",
    videoSrc: "/videos/reels/reel-3.mp4",
    posterSrc: "/images/reels/reel-3.jpg",
    instagramUrl: "https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en",
  },
  {
    id: "reel-4",
    title: "L'Oréal Hair Smoothing & Silk Gloss",
    category: "Hair Transformation",
    videoSrc: "/videos/reels/reel-4.mp4",
    posterSrc: "/images/reels/reel-4.jpg",
    instagramUrl: "https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en",
  },
  {
    id: "reel-5",
    title: "Festive Occasion Styling & Elegant Updo",
    category: "Hair & Makeup",
    videoSrc: "/videos/reels/reel-5.mp4",
    posterSrc: "/images/reels/reel-5.jpg",
    instagramUrl: "https://www.instagram.com/vidhis_hair.skin.makeup/?hl=en",
  },
];
