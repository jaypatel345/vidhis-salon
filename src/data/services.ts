/**
 * VIDHI'S SALON — SERVICE MENU & PRICING
 * ------------------------------------------------------------------
 * Services & indicative starting pricing tailored for Vidhi's Salon
 * (Lal Bahadur Shastri Road, Bardoli, Gujarat).
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
    title: "Haircuts & Styling",
    blurb:
      "Precision cuts, feathering, blowouts, and custom styling tailored to your face shape, hair texture, and daily lifestyle.",
    image: photo.stylingStationsReal,
    services: [
      {
        slug: "womens-haircut-styling",
        name: "Women’s Haircut & Styling",
        description:
          "Consultation-led haircut, soothing hair wash, blow-dry, and signature styling to flatter your facial structure.",
        priceFrom: 350,
        duration: "45 min",
        image: photo.salonInteriorReal,
        featured: true,
      },
      {
        slug: "layer-feather-cut",
        name: "Advanced Layer & Feather Cut",
        description:
          "Multi-layered graduation and texturing for voluminous movement, healthy bounce, and effortless styling.",
        priceFrom: 550,
        duration: "60 min",
        image: photo.womanProfile,
        featured: true,
      },
      {
        slug: "signature-blowout-ironing",
        name: "Signature Blowout & Thermal Styling",
        description:
          "Hydrating wash, heat defense prep, and glossy bouncy blowout or sleek flat-iron finish for any special outing.",
        priceFrom: 450,
        duration: "45 min",
        image: photo.blowoutMotion,
      },
      {
        slug: "split-ends-trimming",
        name: "Split Ends Removal & Deep Conditioning Wash",
        description:
          "Precision health trim to preserve your hair length while removing dry, split ends, followed by a nourishing mask.",
        priceFrom: 300,
        duration: "30 min",
      },
      {
        slug: "mens-haircut",
        name: "Men’s Grooming & Haircut",
        description:
          "Clean clipper and scissor fade, sideburn shaping, and styled finish with premium grooming products.",
        priceFrom: 200,
        duration: "30 min",
        image: photo.menCut,
      },
      {
        slug: "kids-haircut",
        name: "Kids Haircut",
        description:
          "Gentle, patient haircutting experience for younger guests in a comfortable environment.",
        priceFrom: 180,
        duration: "25 min",
      },
    ],
  },
  {
    id: "treatments-color",
    title: "Color & Hair Treatments",
    blurb:
      "Transformative hair therapies using leading professional brands (L'Oréal, Matrix, Schwarzkopf) for silky, healthy, radiant hair.",
    image: photo.treatmentAreaReal,
    services: [
      {
        slug: "keratin-smoothing",
        name: "Keratin Protein Smoothing Treatment",
        description:
          "Intensive formaldehyde-safe protein infusion that tames unruly frizz, eliminates curl bulk, and grants mirror-like shine for up to 4–6 months.",
        priceFrom: 3500,
        duration: "180 min",
        featured: true,
        image: photo.glossyWaves,
      },
      {
        slug: "hair-botox-nourishing",
        name: "Hair Botox & Deep Repair Therapy",
        description:
          "Anti-aging deep conditioner that reconstructs damaged hair fibres, restores natural elasticity, and revitalizes chemically treated hair.",
        priceFrom: 3800,
        duration: "150 min",
        image: photo.treatmentCare,
      },
      {
        slug: "loreal-hair-spa",
        name: "L'Oréal Professional Hair Spa",
        description:
          "Relaxing scalp massage, deep steam conditioning, and custom ampoules targeting dandruff, hair fall, or extreme dryness.",
        priceFrom: 850,
        duration: "60 min",
        featured: true,
        image: photo.treatmentAreaReal,
      },
      {
        slug: "global-hair-color",
        name: "Global Hair Color (Ammonia-Free)",
        description:
          "Rich, uniform color coverage from roots to tips with nourishing conditioning oils for radiant shine and grey coverage.",
        priceFrom: 2200,
        duration: "120 min",
        image: photo.copperColor,
      },
      {
        slug: "balayage-highlights",
        name: "Balayage & Dimensional Highlights",
        description:
          "Seamless hand-painted streaks and sun-kissed ombre ribbons for rich dimension, personalized to your skin tone.",
        priceFrom: 2800,
        duration: "180 min",
        image: photo.balayage,
      },
      {
        slug: "root-touchup",
        name: "Root Touch-Up & Regrowth Tint",
        description:
          "Fast, 100% grey coverage matched seamlessly to your existing hair color with gentle scalp protection.",
        priceFrom: 900,
        duration: "60 min",
        image: photo.brunetteGloss,
      },
    ],
  },
  {
    id: "facials-skincare",
    title: "Facials & Skin Care",
    blurb:
      "Clinical and herbal skin therapies designed to revitalize dull skin, remove sun tan, and unlock youthful, luminous radiance.",
    image: photo.stylingStationsReal,
    services: [
      {
        slug: "bridal-glow-facial",
        name: "Vidhi’s Signature Bridal Glow Facial",
        description:
          "Exclusive multi-step luxury facial with ultrasonic infusion, oxygenating serum, and collagen peel-off mask for breathtaking photo-ready luminosity.",
        priceFrom: 2500,
        duration: "90 min",
        featured: true,
        image: photo.smilingWoman,
      },
      {
        slug: "o3-luxury-facial",
        name: "O3+ Radiance / Diamond Glow Facial",
        description:
          "Premium brightening treatment that evens skin tone, reduces pigmentation, and delivers an instant luminous glass-skin finish.",
        priceFrom: 1800,
        duration: "75 min",
        image: photo.portraitRed,
      },
      {
        slug: "herbal-fruit-facial",
        name: "Herbal & Organic Fruit Facial",
        description:
          "Gentle Ayurvedic and fruit enzyme therapy for sensitive skin, clearing impurities while deeply hydrating.",
        priceFrom: 950,
        duration: "60 min",
      },
      {
        slug: "deep-pore-cleanup",
        name: "Deep Cleansing Herbal Clean-Up",
        description:
          "Steam extraction, blackhead clearing, gentle exfoliation, and soothing pack for clear, breathing skin.",
        priceFrom: 550,
        duration: "45 min",
      },
      {
        slug: "face-dtan-bleach",
        name: "Raaga D-Tan & Oxy-Bleach Therapy",
        description:
          "Instant tan reversal and mild pigmentation lightening using dermatologist-approved soothing milk & honey formulations.",
        priceFrom: 450,
        duration: "35 min",
      },
      {
        slug: "back-polishing",
        name: "Full Back Polishing & Glow Ritual",
        description:
          "Exfoliating scrub, hydrating massage, and detox pack for spotless back and shoulders — ideal before wedding functions.",
        priceFrom: 850,
        duration: "45 min",
      },
    ],
  },
  {
    id: "grooming-waxing",
    title: "Grooming & Body Care",
    blurb:
      "Impeccable hygiene, gentle waxing formulations, detailed threading, and pampering hand & foot spa rituals.",
    image: photo.salonInteriorReal,
    services: [
      {
        slug: "rica-liposoluble-waxing",
        name: "Rica Italian Waxing (Full Arms & Legs)",
        description:
          "Colophony-free Italian liposoluble wax that is gentle on sensitive skin, extracts fine hair from roots, and delays regrowth.",
        priceFrom: 850,
        duration: "50 min",
        featured: true,
      },
      {
        slug: "honey-waxing-full",
        name: "Full Arms & Legs Honey Waxing",
        description:
          "Hygienic, smooth hair removal with herbal soothing lotion application post-waxing.",
        priceFrom: 450,
        duration: "40 min",
      },
      {
        slug: "threading-eyebrow-face",
        name: "Eyebrow Shaping & Full Face Threading",
        description:
          "High-precision organic cotton threading for clean eyebrow arches, upper lip, chin, and forehead.",
        priceFrom: 180,
        duration: "25 min",
      },
      {
        slug: "luxury-rose-pedicure",
        name: "Luxury Rose & Mint Spa Pedicure",
        description:
          "Warm botanical foot soak, sea salt scrub, cracked heel buffering, cuticle therapy, massage, and nail lacquer.",
        priceFrom: 550,
        duration: "50 min",
      },
      {
        slug: "deluxe-spa-manicure",
        name: "Deluxe Anti-Tan Spa Manicure",
        description:
          "Restorative hand exfoliation, cuticle grooming, nourishing mask, tension-relief massage, and buff finish.",
        priceFrom: 450,
        duration: "40 min",
      },
    ],
  },
  {
    id: "bridal-makeovers",
    title: "Bridal & Occasion Makeover",
    blurb:
      "Celebrate your most memorable days with master artistry: long-wear HD makeup, royal bridal hairstyles, and flawless saree draping.",
    image: photo.heroBridal,
    services: [
      {
        slug: "full-bridal-makeover",
        name: "Signature HD Bridal Makeover",
        description:
          "Complete wedding day bridal experience: high-definition water-resistant bridal makeup, royal hair design with fresh flowers/accessories, jewelry setting, lash extension, and bridal saree/lehenga draping.",
        priceFrom: 9500,
        duration: "180 min",
        featured: true,
        image: photo.heroBridal,
      },
      {
        slug: "pre-bridal-radiance-package",
        name: "Pre-Bridal Radiance & Care Package",
        description:
          "Complete pre-wedding grooming spread over 2 sessions: luxury facial, full body D-Tan & waxing, spa manicure & pedicure, and hair spa.",
        priceFrom: 5500,
        duration: "240 min",
      },
      {
        slug: "engagement-reception-glam",
        name: "Engagement & Sangeet Makeover",
        description:
          "Contemporary soft-glam or dramatic party look with contouring, premium lashes, and modern textured hairstyling.",
        priceFrom: 4200,
        duration: "120 min",
        image: photo.heroBridal,
      },
      {
        slug: "party-makeup-styling",
        name: "Occasion & Party Makeup with Hairstyling",
        description:
          "Sophisticated makeup and festive hairstyling tailored for wedding guests, family functions, and celebrations.",
        priceFrom: 1800,
        duration: "75 min",
      },
      {
        slug: "saree-dupatta-draping",
        name: "Professional Saree & Dupatta Draping",
        description:
          "Perfect Gujarati seedha pallu, ulta pallu, lehenga drape, or modern pre-pleated drape with stay-put pinning.",
        priceFrom: 400,
        duration: "30 min",
      },
    ],
  },
];

/** All featured services across categories, for the homepage. */
export const featuredServices = serviceCategories
  .flatMap((c) => c.services.map((s) => ({ ...s, category: c.title })))
  .filter((s) => s.featured);
