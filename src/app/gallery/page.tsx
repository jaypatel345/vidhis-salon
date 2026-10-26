import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { photo } from "@/data/images";
import { site, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio & Gallery",
  description: `Browse the work portfolio of ${site.name} in Bardoli, Gujarat — precision haircutting, bridal hairstyling, Keratin hair smoothing, radiant facials, and salon atmosphere.`,
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
            title="The Salon Gallery"
            description={`Explore our craft across hair transformations, royal bridal styling, restorative hair treatments, and the warm atmosphere of our studio at ${site.name}, Lal Bahadur Shastri Road, Bardoli.`}
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
        eyebrow="Ready for your transformation?"
        title="Let’s create your signature look"
        description="Book your appointment today at Vidhi's Salon on Lal Bahadur Shastri Road, Bardoli."
        primaryHref="/booking"
        primaryLabel="Book an Appointment"
        secondaryHref={`tel:${contactInfo.phoneHref}`}
        secondaryLabel={`Call ${contactInfo.phoneDisplay}`}
      />
    </>
  );
}
