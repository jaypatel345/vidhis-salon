/**
 * FAQ CONTENT — SAMPLE POLICIES (FOR OWNER REVIEW)
 * ------------------------------------------------------------------
 * The policies below (cancellation windows, deposits, timing, payment
 * methods) are reasonable sample defaults. The salon owner should
 * review and adjust every answer to match real operating policy
 * before launch.
 */

export type FAQ = { question: string; answer: string };

export type FAQGroup = { category: string; items: FAQ[] };

export const faqGroups: FAQGroup[] = [
  {
    category: "Appointments",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can request an appointment through the Book an Appointment page, or call the salon during opening hours. Our online flow is a demonstration that collects your preferences — a team member confirms every request before it becomes a confirmed booking.",
      },
      {
        question: "Are consultations available?",
        answer:
          "Yes. We recommend a consultation before any major color change, color correction, or restyle. Consultations are quick, relaxed, and help us plan the right approach — and in the case of correction work, they’re required before we book the service.",
      },
      {
        question: "How long do appointments take?",
        answer:
          "Each service lists an estimated duration on the Services page. Color and highlight work can run longer depending on your hair’s length, density, and starting point — we’ll always give you a realistic estimate when you book.",
      },
      {
        question: "What if I arrive late?",
        answer:
          "We hold your slot for up to 15 minutes. Beyond that, we may need to shorten or reschedule your service so we don’t run into the next guest’s time. A courtesy call if you’re running behind is always appreciated. (Sample policy — confirm before launch.)",
      },
    ],
  },
  {
    category: "Color & Treatments",
    items: [
      {
        question: "How should I prepare for a color appointment?",
        answer:
          "Come with clean, dry, product-free hair unless advised otherwise, and bring reference photos if you have a direction in mind. Avoid washing immediately beforehand only if your stylist has asked you to. If you’ve colored at home recently, let us know — it affects how we plan the service.",
      },
      {
        question: "Which treatment is right for me?",
        answer:
          "It depends on your hair’s condition and history. Deep conditioning restores moisture, bond-repair rebuilds strength after color or heat, and scalp care rebalances the foundation. A short Hair & Scalp Consultation is the best way to choose — we’ll recommend only what your hair actually needs.",
      },
    ],
  },
  {
    category: "Bridal",
    items: [
      {
        question: "How do bridal appointments work?",
        answer:
          "We begin with a consultation to design your look, then recommend a trial ahead of the day so there are no surprises. Day-of styling can take place in the salon or on location by arrangement. We suggest booking bridal services well in advance of your date.",
      },
    ],
  },
  {
    category: "Policies & Payment",
    items: [
      {
        question: "What is your cancellation and rescheduling policy?",
        answer:
          "We kindly ask for at least 24 hours’ notice to cancel or reschedule so we can offer the time to another guest. Some longer color or bridal services may require a deposit to secure the booking. (Sample policy — the salon owner should confirm exact windows and deposit terms before launch.)",
      },
      {
        question: "How is pricing determined?",
        answer:
          "All prices shown are illustrative starting prices in INR. Final pricing depends on hair length, thickness, product usage, and what’s agreed during consultation. We’ll always confirm an estimate with you before we begin.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major cards, UPI, and cash. Specific accepted methods may vary — please confirm with the salon. (Sample policy for owner review.)",
      },
    ],
  },
];

/** Flattened selection for homepage preview. */
export const faqPreview: FAQ[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[3].items[0],
  faqGroups[1].items[0],
];
