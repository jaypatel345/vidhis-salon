/**
 * SAMPLE BUSINESS DETAILS — DEMO CONTENT
 * ------------------------------------------------------------------
 * Every value below is illustrative placeholder content for a
 * fictional salon. Replace with the real salon's verified details
 * before launch. None of this represents a real, verified business.
 */

export const site = {
  name: "Maison Aurélle",
  tagline: "Hair Atelier",
  shortDescription:
    "A modern-luxury hair atelier where personal style is designed with intention, artistry, and care.",
  // NOTE: sample URL — update to the live domain before launch.
  url: "https://maison-aurelle.example.com",
  locale: "en_IN",
} as const;

export const contactInfo = {
  // SAMPLE — not a real address. Replace before launch.
  addressLine1: "14 Linden Court, Ground Floor",
  addressLine2: "Bandra West, Mumbai 400050",
  region: "Maharashtra, India",
  // SAMPLE phone/email — replace with verified business contacts.
  phoneDisplay: "+91 98XXX XXX00",
  phoneHref: "+919800000000",
  email: "hello@maison-aurelle.example.com",
  // Placeholder map location (approximate Bandra West coordinates) — reconfigure to the real address.
  mapQuery: "Bandra West, Mumbai",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Bandra%20West%2C%20Mumbai&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Bandra%20West%2C%20Mumbai",
} as const;

export const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "10:00 – 19:00" },
  { day: "Wednesday", hours: "10:00 – 19:00" },
  { day: "Thursday", hours: "10:00 – 20:00" },
  { day: "Friday", hours: "10:00 – 20:00" },
  { day: "Saturday", hours: "09:00 – 20:00" },
  { day: "Sunday", hours: "10:00 – 17:00" },
] as const;

export const socialLinks = [
  // SAMPLE handles — connect to real profiles before launch.
  { label: "Instagram", href: "https://instagram.com", handle: "@maisonaurelle" },
  { label: "Pinterest", href: "https://pinterest.com", handle: "Maison Aurélle" },
  { label: "Facebook", href: "https://facebook.com", handle: "Maison Aurélle" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Stylists", href: "/stylists" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
