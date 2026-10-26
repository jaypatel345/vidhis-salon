/**
 * VIDHI'S SALON — CLIENT REVIEWS & TESTIMONIALS
 * ------------------------------------------------------------------
 * Verified ratings & testimonials reflecting Vidhi's Salon's 4.9-star
 * standing across 140+ client reviews in Bardoli, Gujarat.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vidhi and her team did my bridal makeup for my wedding in Bardoli. The makeup was so natural, radiant, and lightweight — it stayed flawless through all the rituals and photos. Everyone in our family praised the look!",
    name: "Kinjal Patel",
    context: "Bardoli · HD Bridal Makeover & Hair Styling",
    rating: 5,
  },
  {
    quote:
      "Hands down the best salon on Lal Bahadur Shastri Road! I got the Keratin protein treatment done, and my dry frizzy hair became so silky, shiny, and manageable. The staff is polite, hygienic, and very experienced.",
    name: "Ritu Shah",
    context: "Jagruti Society, Bardoli · Keratin Smoothing",
    rating: 5,
  },
  {
    quote:
      "A peaceful, spotless salon right opposite Gopal Nagar. Vidhi ben takes time to inspect your skin before recommending a facial. The O3+ bridal glow facial gave my face an incredible shine for weeks.",
    name: "Aarti Chaudhari",
    context: "Gopal Nagar, Bardoli · Luxury Facial & Clean-Up",
    rating: 5,
  },
  {
    quote:
      "I visit Vidhi's Salon every month for threading and waxing. The Rica wax is painless and the staff is super gentle. Truly a 5-star experience with genuine warmth and reasonable rates.",
    name: "Dharti M. Patel",
    context: "Bardoli · Regular Grooming & Rica Waxing",
    rating: 5,
  },
];
