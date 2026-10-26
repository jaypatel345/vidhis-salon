/**
 * GALLERY — REAL PHOTOS FROM GOOGLE LISTING & SALON WORK
 * ------------------------------------------------------------------
 * Contains authentic original photos from Vidhi's Salon, Bardoli
 * (Google Maps / Knowledge Graph listing) alongside client transformations.
 * Every photo is unique with zero duplicates.
 */

import { photo, type PhotoKey } from "./images";

export type GalleryCategory =
  | "Interiors"
  | "Bridal"
  | "Treatments"
  | "Artistry";

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
  "Treatments",
  "Artistry",
];

export const galleryItems: GalleryItem[] = [
  {
    image: photo.salonInteriorReal,
    category: "Interiors",
    alt: "Vidhi's Salon — Studio Interior & Styling Chairs (Original Google Photo)",
    isOriginal: true,
  },
  {
    image: photo.heroBridal,
    category: "Bridal",
    alt: "Vidhi's Salon — Signature Bridal Makeover (Original Google Photo)",
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
    alt: "Vidhi's Salon — Hair Treatment & Reclining Spa Station (Original Google Photo)",
    isOriginal: true,
  },
  {
    image: photo.bridalStylingReal,
    category: "Bridal",
    alt: "Vidhi's Salon — Traditional Gujarati Bridal Styling & Draping (Original Google Photo)",
    isOriginal: true,
    tall: true,
  },
  {
    image: photo.lorealDisplayReal,
    category: "Treatments",
    alt: "Vidhi's Salon — L'Oréal Professionnel Partner Salon Product Display",
    isOriginal: true,
  },
  {
    image: photo.bridalDetailReal,
    category: "Artistry",
    alt: "Vidhi's Salon — Bridal Eye Makeup & Traditional Adornments (Original Google Photo)",
    isOriginal: true,
  },
];
