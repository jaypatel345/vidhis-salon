import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { faqGroups } from "@/data/faqs";
import { photo } from "@/data/images";
import { site, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Common questions and answers regarding appointments, hair treatments, bridal makeup, timings, and location at ${site.name} on Lal Bahadur Shastri Road, Bardoli.`,
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
            eyebrow="Help &amp; Guidance"
            title="Frequently asked questions"
            description={`Everything you need to know about preparing for your appointment, visiting our Bardoli salon, and our service policies.`}
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
        image={photo.stylingStationsReal}
        eyebrow="Have another question?"
        title="We’re always here to assist"
        description="Feel free to call or WhatsApp us anytime during business hours."
        primaryHref="/contact"
        primaryLabel="Contact the Studio"
        secondaryHref={`tel:${contactInfo.phoneHref}`}
        secondaryLabel={`Call ${contactInfo.phoneDisplay}`}
      />
    </>
  );
}
