import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { unsplash, photo } from "@/data/images";
import { stylists } from "@/data/stylists";
import { site, contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Stylists & Artists",
  description: `Meet the dedicated beauty specialists at ${site.name} in Bardoli, Gujarat. Led by founder & bridal artist Vidhi Patel with expertise in hair smoothing, skin treatments, and bridal styling.`,
  alternates: { canonical: "/stylists" },
};

export default function StylistsPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="The Team"
            title="The artists behind the chair"
            description={`Meet our team of skilled, certified beauticians and hair specialists at ${site.name}, Bardoli. Each brings focused expertise and genuine dedication to your care.`}
          />
        </Container>
      </Section>

      {/* Alternating profiles */}
      <Section tone="cream" className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {stylists.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={s.slug}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Portrait */}
                  <div className={cn("lg:col-span-5", flip && "lg:order-2")}>
                    <div className="img-zoom relative aspect-[4/5] overflow-hidden bg-sand shadow-sm">
                      <SmartImage
                        src={unsplash(s.image, { w: 900 })}
                        alt={`Portrait of ${s.name}, ${s.title}`}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute left-5 top-5 font-display text-6xl text-ivory/80">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
                    <p className="eyebrow text-bronze">{s.title}</p>
                    <h2 className="display-2 mt-2 text-espresso">{s.name}</h2>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full border border-espresso/15 bg-ivory px-3 py-1 text-xs text-espresso"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-mocha">
                      {s.bio}
                    </p>

                    <div className="mt-6 border-t border-espresso/12 pt-6">
                      <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone">
                        Key Expertise
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-mocha">
                        {s.expertise.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <Check size={16} className="text-bronze" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button href="/booking">Book with {s.name.split(" ")[0]}</Button>
                      <a
                        href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Vidhi's Salon, I would like to book a consultation with ${s.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#128C7E] font-semibold hover:underline"
                      >
                        <MessageCircle size={15} /> WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        image={photo.heroBridal}
        eyebrow="Consultation"
        title="Find the right artist for your look"
        description="Not sure which specialist is best for your hair or bridal requirements? Reach out to us directly for personalized guidance."
        primaryHref="/booking"
        primaryLabel="Book an Appointment"
        secondaryHref="/contact"
        secondaryLabel="Contact the Studio"
      />
    </>
  );
}
