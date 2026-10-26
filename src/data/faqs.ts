/**
 * VIDHI'S SALON — FAQS & VISITOR INFORMATION
 * ------------------------------------------------------------------
 * Frequently asked questions for clients visiting Vidhi's Salon on
 * Lal Bahadur Shastri Road, Bardoli, Gujarat.
 */

export type FAQ = { question: string; answer: string };

export type FAQGroup = { category: string; items: FAQ[] };

export const faqGroups: FAQGroup[] = [
  {
    category: "Appointments & Location",
    items: [
      {
        question: "Where is Vidhi's Salon located in Bardoli?",
        answer:
          "We are located at “Vardan”, directly Opposite Gopal Nagar, on Lal Bahadur Shastri Road, near the Swaminarayan Temple in Jagruti Society / Janta Nagar Society, Bardoli, Gujarat 394601. Landmark: Opposite Gopal Nagar gate.",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "You can request an appointment using our online booking form, send us a WhatsApp message at +91 99251 72388, or call us directly. We recommend advance booking for weekends, festive dates, and bridal services.",
      },
      {
        question: "Do you accept walk-in clients?",
        answer:
          "Yes, walk-ins are welcome for routine services like threading, waxing, haircuts, and clean-ups depending on chair availability. However, calling ahead at +91 99251 72388 ensures no waiting time.",
      },
      {
        question: "What are your salon timings?",
        answer:
          "We are open Monday through Saturday from 9:30 AM to 7:00 PM. On Sundays, we are open from 10:00 AM to 2:00 PM, and remain available outside regular hours for pre-booked bridal and occasion makeovers.",
      },
    ],
  },
  {
    category: "Hair & Skin Treatments",
    items: [
      {
        question: "Which hair smoothing treatment is best for frizzy hair?",
        answer:
          "Our Keratin Protein Smoothing and Hair Botox treatments are the most popular choices. Keratin eliminates frizz and provides a straight, silky finish, while Hair Botox focuses on deep internal repair and nourishment. During your consultation, we examine your hair texture and advise the most suitable formula.",
      },
      {
        question: "What skincare products and brands do you use?",
        answer:
          "We exclusively use authentic, dermatologist-tested professional brands including L'Oréal Professionnel, Matrix, O3+, Lotus Herbals, Raaga Professional, and Rica Italian Wax for maximum safety and radiant results.",
      },
      {
        question: "How many days before a function should I get a facial?",
        answer:
          "For maximum radiance on your event day, we recommend scheduling your facial 2 to 3 days prior. This allows your skin cells to absorb the serums and settle into an effortless natural glow.",
      },
    ],
  },
  {
    category: "Bridal & Festive Makeovers",
    items: [
      {
        question: "How in advance should I book my bridal makeup?",
        answer:
          "For wedding and engagement dates (especially during peak wedding and festive seasons), we recommend booking 1 to 3 months in advance to reserve your preferred date and time slot with Vidhi Patel.",
      },
      {
        question: "Do you offer pre-bridal grooming packages?",
        answer:
          "Yes! We offer customized pre-bridal care packages including gold/diamond facials, full-body polishing, Rica waxing, hair spa, and luxury manicure-pedicure sessions customized to the bride's wedding schedule.",
      },
      {
        question: "Do you assist with saree and lehenga draping?",
        answer:
          "Yes, professional draping is included in all our bridal and occasion packages. We specialize in traditional Gujarati seedha pallu, ulta pallu, and contemporary designer lehenga draping.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Cash, and Card payments.",
      },
      {
        question: "Are prices fixed or do they vary?",
        answer:
          "Routine grooming and facial prices are standard. Chemical hair treatments (Keratin, Botox, Global Color, Balayage) have base starting prices that depend slightly on your hair length, density, and product requirement, which we always confirm upfront before beginning.",
      },
    ],
  },
];

/** Preview for the homepage (first 4 essentials) */
export const faqPreview: FAQ[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[1].items[0],
  faqGroups[2].items[0],
];
