/**
 * VIDHI'S SALON — TEAM & ARTISTS
 * ------------------------------------------------------------------
 * The professional beauty, hair, and bridal team at Vidhi's Salon,
 * Lal Bahadur Shastri Road, Bardoli, Gujarat.
 *
 * All photos are authentic, real salon interior and bridal portfolio
 * assets — zero stock photos of random models.
 */

import { photo, type PhotoKey } from "./images";

export type Stylist = {
  slug: string;
  name: string;
  title: string;
  specialties: string[];
  expertise: string[];
  bio: string;
  image: PhotoKey;
};

export const stylists: Stylist[] = [
  {
    slug: "vidhi-patel",
    name: "Vidhi Patel",
    title: "Founder, Creative Director & Master Bridal Artist",
    specialties: ["Bridal Makeup", "Gujarati Draping", "Skin Aesthetics"],
    expertise: [
      "HD & Traditional Gujarati Bridal Artistry",
      "Unhurried Personal Consultation",
      "Customized Skin Rejuvenation & Glow",
    ],
    bio: "Vidhi founded Vidhi's Salon (Vidhi Beauty Parlour & Spa) with a singular commitment: to make every client feel celebrated, elegant, and confident. With over a decade of hands-on expertise in Bardoli, she is renowned for her radiant bridal transformations, meticulous attention to detail, and mastery in crafting timeless celebration looks.",
    image: photo.heroBridal,
  },
  {
    slug: "hair-care-team",
    name: "Hair Care & Styling Team",
    title: "L'Oréal Professionnel Certified Specialists",
    specialties: ["L'Oréal X-Tenso", "Keratin Smoothing", "Precision Haircuts"],
    expertise: [
      "Frizz-Control & Chemical Smoothing",
      "Global Hair Color & Streaks",
      "Deep Conditioning Hair Spa Therapies",
    ],
    bio: "Our salon team brings specialized training in L'Oréal Professionnel products and modern hair cutting techniques. Working at our illuminated styling stations, our stylists combine scientific hair diagnostic skills with artistic finesse to give your hair healthy volume, radiant shine, and effortless movement.",
    image: photo.stylingStationsReal,
  },
  {
    slug: "skin-spa-team",
    name: "Skin & Spa Therapists",
    title: "Aesthetic Care & Pampering Specialists",
    specialties: ["O3+ Bridal Facials", "D-Tan Brightening", "Rica Waxing"],
    expertise: [
      "Targeted Skin Glow Therapies",
      "Gentle Liposoluble Rica Waxing",
      "Relaxing Rose Foot Spa & Pedicures",
    ],
    bio: "Our dedicated skin aestheticians ensure every facial and body therapy is a soothing, deeply restorative ritual. Utilizing trusted brands like O3+, Matrix, and Rica in a serene, private environment, our therapists care for your skin with the highest standards of hygiene and warmth.",
    image: photo.treatmentAreaReal,
  },
];
