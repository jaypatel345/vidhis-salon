/**
 * STYLIST PROFILES — SAMPLE BRAND CONTENT (FICTIONAL)
 * ------------------------------------------------------------------
 * These team members are fictional and their biographies are
 * editable sample copy. Replace with the salon's real team,
 * portraits, and credentials before launch. No stated experience
 * or training here represents a verified real person.
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
    slug: "elena-vasquez",
    name: "Elena Vásquez",
    title: "Creative Director & Master Colorist",
    specialties: ["Balayage", "Dimensional Color", "Color Correction"],
    expertise: [
      "Hand-painted lived-in color",
      "Blonde specialist",
      "Complex corrections",
    ],
    bio: "Elena founded Maison Aurélle on a simple belief: color should look like it grew out of you, not onto you. She is drawn to soft, sunlit dimension and the quiet technical work of correction — the kind guests don’t see but always feel. She leads the atelier’s color education.",
    image: photo.stylistPortrait1,
  },
  {
    slug: "marcus-bennett",
    name: "Marcus Bennett",
    title: "Senior Stylist & Cutting Specialist",
    specialties: ["Precision Cutting", "Men’s Grooming", "Restyles"],
    expertise: ["Editorial cutting", "Textured crops", "Curtain fringes"],
    bio: "Marcus treats a haircut as architecture — balance, weight, and the way hair falls when you stop thinking about it. He’s known for restyles that feel bold in the chair and effortless by the weekend, and for a men’s grooming service that’s become quietly sought-after.",
    image: photo.stylistPortrait2,
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Stylist & Texture Specialist",
    specialties: ["Curly & Textured Hair", "Blowouts", "Glossing"],
    expertise: ["Curl shaping", "Frizz management", "Shine treatments"],
    bio: "Priya’s chair is where curls and waves come to be understood rather than tamed. She shapes texture to its natural rhythm and finishes with the kind of gloss that catches the light. Her signature blowouts have a devoted following.",
    image: photo.stylistPortrait3,
  },
  {
    slug: "sofia-lindqvist",
    name: "Sofia Lindqvist",
    title: "Bridal & Event Stylist",
    specialties: ["Bridal Hair", "Upstyles", "Occasion Styling"],
    expertise: ["Soft romantic updos", "Long-wear styling", "On-location work"],
    bio: "Sofia designs looks for the days that matter most. Her approach to bridal is calm, collaborative, and precise — a trial that actually looks like the day, and a finish engineered to hold from first light to last dance.",
    image: photo.smilingWoman,
  },
];
