import Link from "next/link";
import { ArrowUpRight, Scissors, Palette, Sparkles, Heart, Clock } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { unsplash, photo } from "@/data/images";
import { featuredServices, inr } from "@/data/services";
import { stylists } from "@/data/stylists";
import { testimonials } from "@/data/testimonials";
import { faqPreview } from "@/data/faqs";

const experiencePillars = [
  { icon: Clock, title: "Unhurried consultation", body: "Every visit begins with a real conversation about your hair, your routine, and what you actually want." },
  { icon: Scissors, title: "Personalized styling", body: "No templates. Your cut and color are designed around your face, texture, and lifestyle." },
  { icon: Sparkles, title: "Attention to detail", body: "From sectioning to the final mirror, we sweat the small things so the finish feels effortless." },
  { icon: Heart, title: "Professional care", body: "Healthy hair first. We protect your hair’s integrity through every service we offer." },
];

const serviceIcons: Record<string, typeof Scissors> = {
  Haircuts: Scissors,
  "Hair Coloring": Palette,
  Styling: Sparkles,
  "Hair Treatments": Heart,
};

const transformationImages = [
  { k: photo.balayage, alt: "Soft dimensional balayage result", tall: true },
  { k: photo.copperColor, alt: "Rich copper hair color" },
  { k: photo.blondeHighlights, alt: "Bright blonde highlights" },
  { k: photo.glossyWaves, alt: "Glossy healthy waves" },
  { k: photo.brunetteGloss, alt: "Glossy brunette tone", tall: true },
  { k: photo.longWaves, alt: "Long layered style with movement" },
];

const instagramImages = [
  photo.womanProfile, photo.curlTexture, photo.updo,
  photo.blowoutMotion, photo.blondePortrait, photo.womanField,
];

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative isolate min-h-[88svh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={unsplash(photo.heroStyled, { w: 2200, q: 75 })}
            alt="Model with beautifully styled, glossy hair"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/75 via-espresso/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
        </div>
        <Container className="flex min-h-[88svh] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-champagne">Modern-luxury hair atelier · Mumbai</p>
              <h1 className="display-1 mt-5 text-ivory">
                Hair designed around the person wearing it.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                At Maison Aurélle, we craft colour, cuts, and styling that feel
                unmistakably yours — with the patience, artistry, and care of a
                true atelier.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/booking" variant="light" size="lg">
                  Book an Appointment
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — INTRODUCTION */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="img-zoom col-span-3 overflow-hidden">
                  <SmartImage
                    src={unsplash(photo.stylistWorking, { w: 900 })}
                    alt="Stylist working with a client at Maison Aurélle"
                    width={900}
                    height={1150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="img-zoom col-span-2 mt-12 overflow-hidden">
                  <SmartImage
                    src={unsplash(photo.productShelf, { w: 600 })}
                    alt="Premium hair care products on the salon shelf"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="The Maison"
                title="A quieter kind of luxury"
                description="We built Maison Aurélle as an antidote to the rushed salon chair. Here, your appointment is a considered experience — one stylist, your undivided time, and a result shaped entirely around you."
              />
              <p className="mt-6 max-w-xl leading-relaxed text-mocha">
                Our philosophy is simple: beautiful hair starts with understanding
                it. We take the time to learn your texture, your history, and the
                way you live before we ever reach for scissors or colour. The
                result is hair that works on a Monday morning as well as it does
                under the lights.
              </p>
              <div className="mt-8">
                <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-espresso link-underline">
                  Our story
                  <ArrowUpRight size={16} className="text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 — FEATURED SERVICES */}
      <Section tone="cream">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Signature services"
              description="A focused menu of the work we love most — explore the full list for everything we offer."
            />
            <Button href="/services" variant="outline" className="shrink-0">
              View full menu
            </Button>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-espresso/12 bg-espresso/12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => {
              const Icon = serviceIcons[s.category] ?? Sparkles;
              return (
                <Reveal key={s.slug} delay={i * 60} className="group flex flex-col bg-ivory p-8 transition-colors hover:bg-cream/50">
                  <Icon size={26} className="text-bronze" strokeWidth={1.4} />
                  <p className="mt-5 text-[0.65rem] uppercase tracking-[0.18em] text-stone">{s.category}</p>
                  <h3 className="mt-1 font-display text-2xl text-espresso">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mocha">{s.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-4">
                    <span className="text-sm text-espresso">
                      <span className="text-stone">from</span> {inr(s.priceFrom)}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-stone">{s.duration}</span>
                  </div>
                  <Link href="/booking" className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-bronze link-underline">
                    Book this <ArrowUpRight size={14} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4 — SIGNATURE EXPERIENCE */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Experience"
            title="What makes a Maison visit different"
            description="Four commitments that shape every appointment, from the moment you sit down to the final look in the mirror."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {experiencePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                  <p.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl text-espresso">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5 — TRANSFORMATIONS */}
      <Section tone="espresso">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="The Work"
            title="A look at the craft"
            description="A selection of styles from our portfolio. These editorial images represent the work we love — not specific client case studies."
          />
          <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {transformationImages.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 60} className="img-zoom overflow-hidden">
                <SmartImage
                  src={unsplash(img.k, { w: 700 })}
                  alt={img.alt}
                  width={700}
                  height={img.tall ? 950 : 720}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="light">View full gallery</Button>
          </div>
        </Container>
      </Section>

      {/* 6 — MEET THE STYLISTS */}
      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Team"
              title="Meet the stylists"
              description="A small, specialist team — each with a distinct point of view. Profiles shown are sample brand content."
            />
            <Button href="/stylists" variant="outline" className="shrink-0">Meet everyone</Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stylists.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href="/stylists" className="group block">
                  <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-cream">
                    <SmartImage
                      src={unsplash(s.image, { w: 600 })}
                      alt={`Portrait of ${s.name}`}
                      fill
                      sizes="(max-width:640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-espresso">{s.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-bronze">{s.title}</p>
                  <p className="mt-2 text-sm text-mocha">{s.specialties.join(" · ")}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7 — TESTIMONIALS */}
      <Section tone="espresso">
        <Container>
          <p className="eyebrow mb-10 text-center text-champagne">In their words · sample testimonials</p>
          <Testimonials items={testimonials} />
        </Container>
      </Section>

      {/* 8 — SALON ATMOSPHERE */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <SectionHeading
                eyebrow="The Space"
                title="Designed to slow you down"
                description="Warm light, natural materials, and calm — our studio is built to feel less like a salon and more like a retreat you happen to leave with beautiful hair."
              />
              <ul className="mt-8 space-y-4">
                {["Private styling stations with natural light","Dedicated consultation space","Complimentary refreshments","Thoughtful, unhurried scheduling"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-mocha">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="img-zoom overflow-hidden">
                <SmartImage
                  src={unsplash(photo.salonInterior, { w: 1100 })}
                  alt="Interior of the Maison Aurélle salon"
                  width={1100}
                  height={820}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9 — SPECIAL OFFER / MEMBERSHIP */}
      <Section tone="cream">
        <Container>
          <div className="relative overflow-hidden border border-bronze/25 bg-ivory p-10 sm:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow text-bronze">New guest offer</p>
                <h2 className="display-3 mt-4 text-espresso">
                  Enjoy 15% off your first colour service
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-mocha">
                  Booking with us for the first time? We’d love to welcome you with
                  15% off any colour service — balayage, highlights, gloss, or
                  full colour. A lovely way to experience the atelier.
                </p>
                <p className="mt-4 text-xs text-stone">
                  Sample promotional offer with editable terms. New guests only; cannot be combined with other offers; valid on first colour visit. The salon owner can adjust or remove these terms.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button href="/booking" size="lg">Claim this offer</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10 — INSTAGRAM GALLERY */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="@maisonaurelle"
            title="From the studio"
            description="A glimpse of life at the atelier. Follow along for colour inspiration and behind-the-chair moments."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="img-zoom group relative aspect-square overflow-hidden bg-cream"
                aria-label="View on Instagram (sample link)"
              >
                <SmartImage
                  src={unsplash(img, { w: 500 })}
                  alt="Hair and salon imagery from the studio"
                  fill
                  sizes="(max-width:640px) 50vw, 16vw"
                  loading="lazy"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-espresso/40 group-hover:opacity-100">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-stone">
            Instagram link is a sample — connect a real profile before launch.
          </p>
        </Container>
      </Section>

      {/* 11 — FAQ PREVIEW */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Good to know"
                title="Questions, answered"
                description="A few of the things guests ask most often."
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">All FAQs</Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={faqPreview} idPrefix="home-faq" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 12 — FINAL CTA */}
      <CTASection image={photo.womanField} />
    </>
  );
}
