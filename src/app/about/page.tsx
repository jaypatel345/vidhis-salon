import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { unsplash, photo } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story and philosophy behind Maison Aurélle — a modern-luxury hair atelier built around unhurried consultation, personalized care, and healthy hair.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Healthy hair first", body: "We never compromise the integrity of your hair for a short-term result. Condition is the foundation of everything we do." },
  { title: "Listen, then create", body: "A great outcome starts with understanding. We ask, we look, we plan — before we ever begin." },
  { title: "Craft over speed", body: "We schedule with room to breathe so every service gets the time and attention it deserves." },
  { title: "Honest guidance", body: "We recommend what your hair actually needs — not the longest possible service list." },
];

const process = [
  { step: "01", title: "Consultation", body: "We begin by understanding your hair, its history, and the look you’re after — with honest guidance on what will work." },
  { step: "02", title: "The plan", body: "Together we agree on an approach, timing, and a clear estimate. No surprises once you’re in the chair." },
  { step: "03", title: "The craft", body: "Your stylist works with care and precision, checking in as the look takes shape." },
  { step: "04", title: "The finish", body: "We style, show you how to recreate it at home, and plan your next visit when you’re ready." },
];

export default function AboutPage() {
  return (
    <>
      {/* Editorial hero */}
      <section className="relative isolate min-h-[70svh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={unsplash(photo.interiorWarm, { w: 2000, q: 72 })}
            alt="Warm, light-filled interior of the Maison Aurélle atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/40" />
        </div>
        <Container className="flex min-h-[70svh] flex-col justify-end py-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-champagne">Our Story</p>
            <h1 className="display-1 mt-5 text-ivory">An atelier, not an assembly line</h1>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Philosophy"
                title="Beautiful hair is personal"
                description="Maison Aurélle began with a frustration: salons that moved too fast to really see the person in the chair."
              />
              <div className="mt-6 space-y-5 text-mocha leading-relaxed">
                <p>
                  We wanted to build something slower and more considered — a place
                  where a haircut or colour is designed around you specifically:
                  your features, your texture, the way your hair behaves, and the
                  reality of how much time you have in the morning.
                </p>
                <p>
                  That belief shapes everything, from how we schedule to how we
                  train. One guest at a time, unhurried, with a stylist who has the
                  space to do their best work. The result should feel like you —
                  only more like yourself.
                </p>
                <p className="text-sm text-stone">
                  Maison Aurélle is a fictional sample brand created for this
                  website. Replace this story with the salon’s real history before
                  launch.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="img-zoom overflow-hidden">
                <SmartImage
                  src={unsplash(photo.cutting, { w: 800 })}
                  alt="A stylist cutting hair with precision"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="cream">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Approach"
            title="How a visit unfolds"
            description="A consistent, considered process — from the first conversation to your next appointment."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-espresso/12 bg-espresso/12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70} className="bg-ivory p-8">
                <span className="font-display text-4xl text-bronze/50">{p.step}</span>
                <h3 className="mt-4 font-display text-xl text-espresso">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Atmosphere split */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="img-zoom overflow-hidden">
              <SmartImage
                src={unsplash(photo.salonChairs, { w: 900 })}
                alt="Styling chairs in the salon"
                width={900}
                height={680}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom overflow-hidden">
              <SmartImage
                src={unsplash(photo.washStation, { w: 900 })}
                alt="A relaxing shampoo and wash station"
                width={900}
                height={680}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="espresso">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="What we stand for"
            title="Our service standards"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="border-t border-ivory/15 pt-6">
                <h3 className="font-display text-2xl text-ivory">{v.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ivory/70">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection image={photo.stylistWorking} />
    </>
  );
}
