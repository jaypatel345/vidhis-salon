/**
 * VIDHI'S SALON — BUSINESS DETAILS
 * ------------------------------------------------------------------
 * Verified information sourced from Google Maps / Google Search listing:
 * Share Link: https://share.google/NFCkcM0IBWwtg1kay
 * Knowledge Graph: /g/1vyn2b0z
 * Location: Bardoli, Gujarat, India
 */

export const site = {
  name: "Vidhi's Salon",
  tagline: "Hair, Beauty & Bridal Studio · Bardoli",
  shortDescription:
    "Bardoli’s premier salon for precision haircutting, luxury hair spa & keratin treatments, rejuvenating facials, and exquisite bridal makeovers.",
  url: "https://vidhis-salon.vercel.app",
  locale: "en_IN",
} as const;

export const contactInfo = {
  salonName: "Vidhi's Salon",
  alternateName: "Vidhi Beauty Parlour",
  addressBuilding: "“Vardan”, Opposite Gopal Nagar",
  addressStreet: "Lal Bahadur Shastri Road, Near Swaminarayan Temple",
  addressArea: "Jagruti Society / Janta Nagar Society",
  city: "Bardoli",
  district: "Surat",
  state: "Gujarat",
  postalCode: "394601",
  country: "India",
  addressLine1: "“Vardan”, Opposite Gopal Nagar, Lal Bahadur Shastri Road",
  addressLine2: "Near Swaminarayan Temple, Jagruti Society, Bardoli 394601",
  region: "Gujarat, India",
  phoneDisplay: "+91 99251 72388",
  phoneHref: "+919925172388",
  whatsappNumber: "919925172388",
  whatsappHref: "https://wa.me/919925172388",
  email: "vidhisalon.bardoli@gmail.com",
  googleShareUrl: "https://share.google/NFCkcM0IBWwtg1kay",
  googleKnowledgeGraphUrl:
    "https://www.google.com/search?kgmid=/g/1vyn2b0z&q=Vidhi%27s+Salon",
  mapQuery:
    "Vidhi's Salon, Lal Bahadur Shastri Road, Jagruti Society, Bardoli, Gujarat 394601",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Vidhi's+Salon+Lal+Bahadur+Shastri+Road+Bardoli+Gujarat+394601&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Vidhi%27s+Salon%2C+Lal+Bahadur+Shastri+Road%2C+Bardoli%2C+Gujarat+394601",
  rating: {
    score: 4.9,
    reviewCount: 140,
    source: "Google & Justdial Reviews",
  },
} as const;

export const openingHours = [
  { day: "Monday", hours: "09:30 – 19:00" },
  { day: "Tuesday", hours: "09:30 – 19:00" },
  { day: "Wednesday", hours: "09:30 – 19:00" },
  { day: "Thursday", hours: "09:30 – 19:00" },
  { day: "Friday", hours: "09:30 – 19:00" },
  { day: "Saturday", hours: "09:30 – 19:00" },
  { day: "Sunday", hours: "10:00 – 14:00 (Bridal by appointment)" },
] as const;

export const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919925172388",
    handle: "+91 99251 72388",
  },
  {
    label: "Google Profile",
    href: "https://share.google/NFCkcM0IBWwtg1kay",
    handle: "Vidhi's Salon on Google",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    handle: "@vidhisalon.bardoli",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Stylists", href: "/stylists" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
