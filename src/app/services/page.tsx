import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { unsplash, photo } from "@/data/images";
import { serviceCategories, inr } from "@/data/services";
import { faqGroups } from "@/data/faqs";
import { site, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Explore the full service menu at ${site.name} in Bardoli, Gujarat — precision haircuts, Keratin protein smoothing, O3+ facials, Rica waxing, and royal bridal makeovers. Competitive starting prices in INR.`,
  alternates: { canonical: "/services" },
};

const pricingFaqs = [
  faqGroups[3].items[1],
  faqGroups[1].items[0],
  faqGroups[2].items[0],
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-espresso">
        <div className="absolute inset-0 -z-10 opacity-40">
          <SmartImage
            src={unsplash(photo.colorStation, { w: 2000, q: 70 })}
            alt="Vidhi's Salon styling and treatment station"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        <Container className="py-24 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-champagne">The Menu</p>
            <h1 className="display-1 mt-5 text-ivory">Services &amp; pricing</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              Explore our full service menu in hair care, chemical treatments,
              revitalizing facials, gentle waxing, and signature bridal
              makeovers at our studio in Bardoli.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Category quick-nav */}
      <div className="sticky top-[73px] z-30 border-b border-espresso/10 bg-ivory/90 backdrop-blur-md">
        <Container>
          <nav
            aria-label="Service categories"
            className="flex gap-6 overflow-x-auto py-4"
          >
            {serviceCategories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em] text-espresso/70 transition-colors hover:text-bronze"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Categories */}
      {serviceCategories.map((cat, idx) => (
        <Section
          key={cat.id}
          id={cat.id}
          tone={idx % 2 === 1 ? "cream" : "ivory"}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Sticky category intro + image */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-40">
                  <p className="eyebrow text-bronze">0{idx + 1}</p>
                  <h2 className="display-3 mt-3 text-espresso">{cat.title}</h2>
                  <p className="mt-4 leading-relaxed text-mocha">{cat.blurb}</p>
                  <div className="img-zoom mt-8 hidden overflow-hidden shadow-sm lg:block">
                    <SmartImage
                      src={unsplash(cat.image, { w: 700 })}
                      alt={`${cat.title} at ${site.name}`}
                      width={700}
                      height={520}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service list */}
              <div className="lg:col-span-8">
                <ul className="divide-y divide-espresso/12 border-t border-espresso/12">
                  {cat.services.map((s) => (
                    <li key={s.slug}>
                      <Reveal className="flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:justify-between">
                        <div className="sm:max-w-md">
                          <h3 className="font-display text-2xl text-espresso">
                            {s.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-mocha">
                            {s.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-row items-baseline justify-between gap-6 sm:flex-col sm:items-end sm:justify-start">
                          <div className="text-right">
                            <span className="text-sm font-semibold text-espresso">
                              <span className="text-stone font-normal text-xs">from</span>{" "}
                              {inr(s.priceFrom)}
                            </span>
                            <span className="block text-xs uppercase tracking-[0.14em] text-stone">
                              {s.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <a
                              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                                `Hello Vidhi's Salon, I would like to book or ask about: ${s.name}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-wider text-[#128C7E] font-medium hover:underline"
                            >
                              <MessageCircle size={13} /> WhatsApp
                            </a>
                            <Button href="/booking" size="sm" variant="outline">
                              Book
                            </Button>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* FAQ */}
      <Section tone="espresso">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-champagne">Good to know</p>
              <h2 className="display-3 mt-3 text-ivory">Service &amp; pricing FAQs</h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                Transparent guidance on product choices, consultations, and timing.
              </p>
              <div className="mt-8">
                <Button href="/faq" variant="light">
                  All FAQs
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion
                items={pricingFaqs}
                idPrefix="pricing-faq"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        image={photo.colorStation}
        eyebrow="Ready to visit?"
        title="Reserve your chair in Bardoli"
        description="Book online or contact us directly on WhatsApp / Phone."
        primaryHref="/booking"
        primaryLabel="Book an Appointment"
        secondaryHref={`tel:${contactInfo.phoneHref}`}
        secondaryLabel={`Call ${contactInfo.phoneDisplay}`}
      />
    </>
  );
}
