/**
 * TESTIMONIALS — SAMPLE / EDITABLE PLACEHOLDER CONTENT
 * ------------------------------------------------------------------
 * These are illustrative sample testimonials, NOT verified customer
 * reviews. Do not present them as genuine reviews. Replace with real,
 * consented client feedback before launch.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The consultation alone changed how I think about my hair. I left with color that genuinely looks like mine — just better.",
    name: "Ananya D.",
    context: "Sample client · Balayage",
  },
  {
    quote:
      "First salon where a stylist actually listened before picking up the scissors. My restyle still looks intentional months later.",
    name: "Rahul M.",
    context: "Sample client · Restyle",
  },
  {
    quote:
      "They styled my hair for my wedding and it held through a very long, very warm day. I felt completely myself.",
    name: "Isabel F.",
    context: "Sample client · Bridal",
  },
  {
    quote:
      "Calm, considered, and never rushed. The blowout is worth every rupee and the gloss makes it last.",
    name: "Meera K.",
    context: "Sample client · Blowout & Gloss",
  },
];
