import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { faqGroups } from "@/data/faqs";
import { photo } from "@/data/images";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking, consultations, colour preparation, timing, cancellations, bridal, pricing, and payment at Maison Aurélle.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Help"
            title="Frequently asked questions"
            description="Everything you might want to know before your visit. All policies below are reasonable sample defaults marked for the salon owner to review and adjust before launch."
          />

          <div className="mx-auto mt-16 max-w-3xl space-y-16">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <h2 className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-bronze">
                  {group.category}
                </h2>
                <FAQAccordion
                  items={group.items}
                  idPrefix={`faq-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        image={photo.brunetteGloss}
        eyebrow="Still have a question?"
        title="We’re happy to help"
        description="Reach out and a member of the team will get back to you."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/booking"
        secondaryLabel="Book an Appointment"
      />
    </>
  );
}
