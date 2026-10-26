/**
 * GALLERY — REAL PHOTOS FROM GOOGLE LISTING & SALON WORK
 * ------------------------------------------------------------------
 * Contains authentic original photos from Vidhi's Salon, Bardoli
 * (Google Maps / Knowledge Graph listing) alongside client transformations.
 */

import { photo, type PhotoKey } from "./images";

export type GalleryCategory =
  | "Interiors"
  | "Bridal"
  | "Haircuts"
  | "Treatments"
  | "Color";

export type GalleryItem = {
  image: PhotoKey;
  category: GalleryCategory;
  alt: string;
  isOriginal?: boolean;
  /** relative aspect for masonry rhythm */
  tall?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "Interiors",
  "Bridal",
  "Haircuts",
  "Treatments",
  "Color",
];

export const galleryItems: GalleryItem[] = [
  {
    image: photo.heroBridal,
    category: "Bridal",
    alt: "Vidhi's Salon — Signature Bridal Makeover (Original Google Photo)",
    isOriginal: true,
    tall: true,
  },
  {
    image: photo.salonInteriorReal,
    category: "Interiors",
    alt: "Vidhi's Salon — Studio Interior & Styling Chairs (Original Google Photo)",
    isOriginal: true,
  },
  {
    image: photo.bridalStylingReal,
    category: "Bridal",
    alt: "Vidhi's Salon — Royal Bridal Hairstyle & Draping (Original Google Photo)",
    isOriginal: true,
    tall: true,
  },
  {
    image: photo.stylingStationsReal,
    category: "Interiors",
    alt: "Vidhi's Salon — Mirror Styling Stations & Lighting (Original Google Photo)",
    isOriginal: true,
  },
  {
    image: photo.treatmentAreaReal,
    category: "Treatments",
    alt: "Vidhi's Salon — Hair Treatment & Care Station (Original Google Photo)",
    isOriginal: true,
  },
  {
    image: photo.storefrontReal,
    category: "Interiors",
    alt: "Vidhi's Salon — Entrance & Salon Floor (Original Listing Photo)",
    isOriginal: true,
  },
  {
    image: photo.mirrorSetupReal,
    category: "Interiors",
    alt: "Vidhi's Salon — Makeup & Styling Section (Original Listing Photo)",
    isOriginal: true,
  },
  {
    image: photo.washStationReal,
    category: "Treatments",
    alt: "Vidhi's Salon — Reclining Hair Wash Station (Original Listing Photo)",
    isOriginal: true,
  },
  {
    image: photo.balayage,
    category: "Color",
    alt: "Sun-kissed Balayage & Highlights",
  },
  {
    image: photo.longWaves,
    category: "Haircuts",
    alt: "Precision Layered Haircut with Natural Volume",
    tall: true,
  },
  {
    image: photo.glossyWaves,
    category: "Treatments",
    alt: "Keratin Protein Smoothing & Gloss Finish",
  },
  {
    image: photo.updo,
    category: "Bridal",
    alt: "Festive Occasion Updo & Hair Styling",
  },
  {
    image: photo.copperColor,
    category: "Color",
    alt: "Rich Ammonia-Free Global Hair Color",
  },
  {
    image: photo.womanProfile,
    category: "Haircuts",
    alt: "Custom Hair Feathering & Restyle Cut",
    tall: true,
  },
];
