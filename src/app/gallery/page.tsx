import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { photo } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Maison Aurélle portfolio — haircuts, balayage, highlights, colour, blowouts, bridal styling, and salon interiors. Filter by category and view full-size.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-12 lg:pb-14">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="The gallery"
            description="A curated look at our work across colour, cutting, styling, and the space itself. Filter by category and tap any image to view it full-size. These are editorial images representing our aesthetic — not specific client case studies."
          />
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <Gallery />
        </Container>
      </Section>

      <CTASection
        image={photo.glossyWaves}
        eyebrow="Like what you see?"
        title="Let’s create yours"
        description="Book a consultation and we’ll design a look tailored to you."
      />
    </>
  );
}
