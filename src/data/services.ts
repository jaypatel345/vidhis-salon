/**
 * SERVICE MENU — SAMPLE PRICING (DEMO)
 * ------------------------------------------------------------------
 * Prices are illustrative, shown in INR, and marked "from" because
 * final pricing depends on hair length, density, product use, and
 * consultation. The salon owner should review and customize all
 * prices, durations, and descriptions before launch.
 */

import { photo, type PhotoKey } from "./images";

export type Service = {
  slug: string;
  name: string;
  description: string;
  priceFrom: number; // INR
  duration: string;
  image?: PhotoKey;
  featured?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  image: PhotoKey;
  services: Service[];
};

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haircuts",
    title: "Haircuts",
    blurb:
      "Precision cutting shaped to your face, hair texture, and the way you actually live day to day.",
    image: photo.cutting,
    services: [
      {
        slug: "womens-haircut",
        name: "Women’s Haircut",
        description:
          "A consultation-led cut and finish tailored to your texture, growth patterns, and styling routine.",
        priceFrom: 2400,
        duration: "60 min",
        image: photo.longWaves,
        featured: true,
      },
      {
        slug: "mens-haircut",
        name: "Men’s Haircut",
        description:
          "Tailored cutting and detailing with a clean, considered finish — scissor or clipper work.",
        priceFrom: 1500,
        duration: "45 min",
        image: photo.menCut,
      },
      {
        slug: "restyle-haircut",
        name: "Restyle Haircut",
        description:
          "A fuller consultation for a meaningful change of shape, length, or direction.",
        priceFrom: 3200,
        duration: "75 min",
        image: photo.womanProfile,
      },
      {
        slug: "fringe-trim",
        name: "Fringe Trim",
        description:
          "A quick refresh to keep your fringe sitting exactly where it should between cuts.",
        priceFrom: 500,
        duration: "20 min",
      },
      {
        slug: "childrens-haircut",
        name: "Children’s Haircut",
        description:
          "A gentle, unhurried cut for younger guests (12 and under) in a calm setting.",
        priceFrom: 900,
        duration: "30 min",
      },
    ],
  },
  {
    id: "coloring",
    title: "Hair Coloring",
    blurb:
      "Dimensional, lived-in color built on healthy hair — from quiet root work to full transformations.",
    image: photo.colorStation,
    services: [
      {
        slug: "root-touch-up",
        name: "Root Touch-Up",
        description:
          "Seamless regrowth coverage matched precisely to your existing color.",
        priceFrom: 2800,
        duration: "75 min",
        image: photo.brunetteGloss,
      },
      {
        slug: "full-color",
        name: "Full Color",
        description:
          "All-over, single-process color for rich, even, long-wearing results.",
        priceFrom: 3800,
        duration: "120 min",
        featured: true,
        image: photo.copperColor,
      },
      {
        slug: "gloss-toner",
        name: "Gloss / Toner",
        description:
          "A shine-boosting, tone-refining treatment that neutralizes brass and adds depth.",
        priceFrom: 1800,
        duration: "45 min",
        image: photo.glossyWaves,
      },
      {
        slug: "partial-highlights",
        name: "Partial Highlights",
        description:
          "Face-framing and crown placement to brighten and add movement where it reads most.",
        priceFrom: 4500,
        duration: "120 min",
        image: photo.blondeHighlights,
      },
      {
        slug: "full-highlights",
        name: "Full Highlights",
        description:
          "Full-head foils for luminous, all-over dimension and a brighter base.",
        priceFrom: 6500,
        duration: "180 min",
      },
      {
        slug: "balayage",
        name: "Balayage",
        description:
          "Hand-painted, sun-grown color with a soft grow-out and effortless dimension.",
        priceFrom: 7500,
        duration: "210 min",
        featured: true,
        image: photo.balayage,
      },
      {
        slug: "color-correction-consultation",
        name: "Color Correction Consultation",
        description:
          "An in-depth assessment and plan for complex color change. Required before correction work is booked.",
        priceFrom: 800,
        duration: "30 min",
      },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    blurb:
      "Finish that lasts — for an ordinary Tuesday, a milestone evening, or the morning you say ‘I do’.",
    image: photo.blowoutMotion,
    services: [
      {
        slug: "signature-blowout",
        name: "Signature Blowout",
        description:
          "Our pressing-and-shaping blow-dry for smooth, voluminous, camera-ready hair.",
        priceFrom: 1600,
        duration: "45 min",
        featured: true,
        image: photo.blowoutMotion,
      },
      {
        slug: "event-styling",
        name: "Event Styling",
        description:
          "Red-carpet-ready waves, sleek looks, or structured upstyles for a special occasion.",
        priceFrom: 2800,
        duration: "60 min",
        image: photo.updo,
      },
      {
        slug: "bridal-hair-consultation",
        name: "Bridal Hair Consultation",
        description:
          "A relaxed sit-down to design your look, discuss timing, and plan a trial.",
        priceFrom: 1500,
        duration: "45 min",
      },
      {
        slug: "bridal-styling",
        name: "Bridal Styling",
        description:
          "Day-of styling crafted to hold through the longest, most photographed day of your life.",
        priceFrom: 9500,
        duration: "120 min",
        image: photo.bridalUpdo,
      },
    ],
  },
  {
    id: "treatments",
    title: "Hair Treatments",
    blurb:
      "Restorative care that treats the hair and the scalp — the foundation of everything else.",
    image: photo.treatmentCare,
    services: [
      {
        slug: "deep-conditioning",
        name: "Deep Conditioning",
        description:
          "An intensive moisture treatment to soften, smooth, and revive dry or stressed hair.",
        priceFrom: 1400,
        duration: "30 min",
        image: photo.washStation,
      },
      {
        slug: "bond-repair-treatment",
        name: "Bond-Repair Treatment",
        description:
          "A strengthening service that helps rebuild internal bonds weakened by color or heat.",
        priceFrom: 2200,
        duration: "45 min",
        featured: true,
        image: photo.treatmentCare,
      },
      {
        slug: "scalp-care",
        name: "Scalp Care",
        description:
          "A clarifying, soothing scalp ritual to rebalance and support healthier growth.",
        priceFrom: 1800,
        duration: "40 min",
      },
      {
        slug: "hair-scalp-consultation",
        name: "Hair & Scalp Consultation",
        description:
          "A focused assessment of condition and routine, with a tailored care plan to take home.",
        priceFrom: 600,
        duration: "30 min",
      },
    ],
  },
];

/** All featured services across categories, for the homepage. */
export const featuredServices = serviceCategories
  .flatMap((c) => c.services.map((s) => ({ ...s, category: c.title })))
  .filter((s) => s.featured);
