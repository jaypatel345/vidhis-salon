/**
 * VIDHI'S SALON — TEAM & ARTISTS
 * ------------------------------------------------------------------
 * The professional beauty, hair, and bridal team at Vidhi's Salon,
 * Lal Bahadur Shastri Road, Bardoli, Gujarat.
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
    specialties: ["Bridal Makeup", "Skin Aesthetics", "Occasion Styling"],
    expertise: [
      "HD & Traditional Gujarati Bridal Makeup",
      "Customized Skin Rejuvenation",
      "Celebration & Festive Hair Styling",
    ],
    bio: "Vidhi founded Vidhi's Salon with a singular commitment: to make every client feel celebrated, elegant, and confident. With over a decade of hands-on expertise in Bardoli, she is revered for her radiant bridal transformations, unhurried personal consultations, and mastery in crafting timeless looks.",
    image: photo.stylistPortrait1,
  },
  {
    slug: "sneha-mehta",
    name: "Sneha Mehta",
    title: "Senior Hair Stylist & Chemical Treatment Specialist",
    specialties: ["Keratin Smoothing", "Precision Haircuts", "Global Color"],
    expertise: [
      "Keratin & Hair Botox Therapies",
      "Balayage & Streaks",
      "Frizz-Control & Restyling Cuts",
    ],
    bio: "Sneha treats hair styling as a blend of science and art. Specializing in advanced hair transformations, she brings out natural movement and silky texture even from the most rebellious hair types, using only premium salon-grade formulas.",
    image: photo.stylistPortrait3,
  },
  {
    slug: "pooja-sharma",
    name: "Pooja Sharma",
    title: "Skin Therapist & Facial Aesthetician",
    specialties: ["O3+ Facials", "Bridal Glow Therapies", "D-Tan Treatments"],
    expertise: [
      "Targeted Skin Brightening",
      "Herbal & Ayurvedic Clean-ups",
      "Relaxing Anti-Stress Massage",
    ],
    bio: "Pooja is dedicated to the health and natural vitality of your skin. Her soothing facial sessions and customized clean-ups have earned loyal clients across Bardoli who trust her deep knowledge of Indian skin textures.",
    image: photo.smilingWoman,
  },
  {
    slug: "kavita-desai",
    name: "Kavita Desai",
    title: "Nail Artist & Grooming Specialist",
    specialties: ["Rica Waxing", "Spa Pedicures", "Eyebrow Architecture"],
    expertise: [
      "Gentle Liposoluble Waxing",
      "Rose Foot Spa & Reflexology",
      "High-Precision Threading",
    ],
    bio: "Kavita’s meticulous eye for detail transforms routine beauty maintenance into a pampering ritual. Known for her gentle touch and gentle speed, she ensures every visit is relaxing, hygienic, and completely painless.",
    image: photo.stylistPortrait2,
  },
];
