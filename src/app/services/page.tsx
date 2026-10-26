import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { unsplash, photo } from "@/data/images";
import { serviceCategories, inr } from "@/data/services";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore the full Maison Aurélle service menu — haircuts, colour, balayage, highlights, styling, bridal, and restorative treatments. Illustrative starting prices in INR.",
  alternates: { canonical: "/services" },
};

const pricingFaqs = [faqGroups[3].items[1], faqGroups[0].items[2], faqGroups[1].items[0]];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-espresso">
        <div className="absolute inset-0 -z-10 opacity-40">
          <SmartImage
            src={unsplash(photo.colorStation, { w: 2000, q: 70 })}
            alt=""
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
              A considered menu of cutting, colour, styling, and care. Prices
              shown are illustrative starting points — your final quote is always
              confirmed in consultation.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Category quick-nav */}
      <div className="sticky top-[73px] z-30 border-b border-espresso/10 bg-ivory/90 backdrop-blur-md">
        <Container>
          <nav aria-label="Service categories" className="flex gap-6 overflow-x-auto py-4">
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
        <Section key={cat.id} id={cat.id} tone={idx % 2 === 1 ? "cream" : "ivory"}>
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Sticky category intro + image */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-40">
                  <p className="eyebrow text-bronze">0{idx + 1}</p>
                  <h2 className="display-3 mt-3 text-espresso">{cat.title}</h2>
                  <p className="mt-4 leading-relaxed text-mocha">{cat.blurb}</p>
                  <div className="img-zoom mt-8 hidden overflow-hidden lg:block">
                    <SmartImage
                      src={unsplash(cat.image, { w: 700 })}
                      alt={`${cat.title} at Maison Aurélle`}
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
                          <h3 className="font-display text-2xl text-espresso">{s.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-mocha">{s.description}</p>
                          <Link
                            href="/booking"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-bronze link-underline"
                          >
                            Book this service <ArrowUpRight size={14} />
                          </Link>
                        </div>
                        <div className="flex shrink-0 items-center gap-6 sm:flex-col sm:items-end sm:gap-1">
                          <span className="font-display text-2xl text-espresso">
                            <span className="text-sm text-stone">from </span>
                            {inr(s.priceFrom)}
                          </span>
                          <span className="text-xs uppercase tracking-[0.14em] text-stone">{s.duration}</span>
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

      {/* Pricing note */}
      <Section tone="espresso" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
            <Info size={24} className="shrink-0 text-champagne" />
            <div>
              <h2 className="font-display text-2xl text-ivory">A note on pricing</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-ivory/75">
                All prices are illustrative starting prices shown in INR and marked
                “from”. Final pricing may vary depending on hair length, thickness,
                density, product usage, and what’s agreed during your consultation.
                We’ll always confirm a clear estimate before beginning any service.
                These figures are sample values the salon owner can fully customize.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Before you book"
                title="Service questions"
                description="A few quick answers to help you choose."
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">All FAQs</Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={pricingFaqs} idPrefix="services-faq" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        image={photo.colorStation}
        title="Ready to book your service?"
        description="Choose your service and preferred stylist in a few simple steps."
      />
    </>
  );
}
