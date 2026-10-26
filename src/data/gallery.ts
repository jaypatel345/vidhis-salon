/**
 * GALLERY — CURATED EDITORIAL IMAGERY
 * ------------------------------------------------------------------
 * These photographs illustrate the styles and atmosphere of the
 * salon. They are editorial/stock imagery and do NOT document
 * specific real client results.
 */

import { photo, type PhotoKey } from "./images";

export type GalleryCategory =
  | "Haircuts"
  | "Balayage"
  | "Highlights"
  | "Color"
  | "Blowouts"
  | "Bridal"
  | "Interiors";

export type GalleryItem = {
  image: PhotoKey;
  category: GalleryCategory;
  alt: string;
  /** relative aspect for masonry rhythm */
  tall?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "Haircuts",
  "Balayage",
  "Highlights",
  "Color",
  "Blowouts",
  "Bridal",
  "Interiors",
];

export const galleryItems: GalleryItem[] = [
  { image: photo.longWaves, category: "Haircuts", alt: "Long layered haircut with soft movement", tall: true },
  { image: photo.balayage, category: "Balayage", alt: "Sun-grown balayage with soft dimensional ends" },
  { image: photo.blondeHighlights, category: "Highlights", alt: "Bright blonde highlights with natural depth" },
  { image: photo.copperColor, category: "Color", alt: "Rich copper all-over hair color" },
  { image: photo.blowoutMotion, category: "Blowouts", alt: "Voluminous blowout styled with movement", tall: true },
  { image: photo.bridalUpdo, category: "Bridal", alt: "Soft romantic bridal updo" },
  { image: photo.salonInterior, category: "Interiors", alt: "Warm, considered salon interior" },
  { image: photo.womanProfile, category: "Haircuts", alt: "Precision cut shown in profile" },
  { image: photo.brunetteGloss, category: "Color", alt: "Glossy brunette color with depth", tall: true },
  { image: photo.glossyWaves, category: "Blowouts", alt: "Glossy, healthy waves after styling" },
  { image: photo.updo, category: "Bridal", alt: "Structured occasion upstyle" },
  { image: photo.curlTexture, category: "Haircuts", alt: "Defined natural curl texture close-up" },
  { image: photo.menCut, category: "Haircuts", alt: "Clean tailored men’s haircut" },
  { image: photo.longWaves, category: "Highlights", alt: "Face-framing highlights on long hair", tall: true },
  { image: photo.interiorWarm, category: "Interiors", alt: "Styling area with warm natural light" },
  { image: photo.blondePortrait, category: "Balayage", alt: "Lived-in blonde balayage portrait" },
  { image: photo.mirrorStation, category: "Interiors", alt: "Mirror styling station detail" },
  { image: photo.womanField, category: "Blowouts", alt: "Healthy long hair with natural shine", tall: true },
];
