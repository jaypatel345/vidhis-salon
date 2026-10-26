import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { unsplash, photo } from "@/data/images";
import { site, contactInfo } from "@/data/site";
import { MapPin, Phone, Star, ShieldCheck, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `The story, values, and team behind ${site.name} — Bardoli's beloved salon for hair care, skin therapies, and bridal artistry.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Hygiene & Safety",
    body: "We maintain rigorous sterilization of all scissors, brushes, and tools, accompanied by single-use disposables for all waxing, facial, and cleanup treatments.",
  },
  {
    icon: Heart,
    title: "Client-First Consultation",
    body: "No rushed services or generic packages. We inspect your hair texture and skin undertones first, recommending what genuinely enhances your natural beauty.",
  },
  {
    icon: Sparkles,
    title: "Authentic Professional Formulations",
    body: "We never compromise on product quality. We exclusively stock genuine salon-grade products from L'Oréal Professionnel, Matrix, O3+, and Rica Italian Wax.",
  },
  {
    icon: Star,
    title: "Celebrated Bridal Heritage",
    body: "From intricate traditional Gujarati bridal looks to modern dewy reception glam, our bridal studio has prepared brides for their most cherished ceremonies for years.",
  },
];

const process = [
  {
    step: "01",
    title: "Warm Consultation",
    body: "We begin with a friendly conversation to understand your occasion, your routine, and your desired outcome.",
  },
  {
    step: "02",
    title: "Personalized Approach",
    body: "We recommend the ideal treatment — whether it's precision haircutting, custom balayage, or a targeted anti-tan facial.",
  },
  {
    step: "03",
    title: "Meticulous Execution",
    body: "Our certified beauticians work with patience, precision, and gentle care in our serene air-conditioned space.",
  },
  {
    step: "04",
    title: "Radiant Finish & Home Care",
    body: "We complete your look with signature styling and give you practical home maintenance advice to keep your glow lasting.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[65svh] overflow-hidden bg-espresso">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={unsplash(photo.interiorWarm, { w: 2000, q: 72 })}
            alt="Warm, inviting interior of Vidhi's Salon, Bardoli"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-espresso/40" />
        </div>
        <Container className="flex min-h-[65svh] flex-col justify-end py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-espresso/60 px-3.5 py-1 text-xs text-champagne backdrop-blur-sm">
              <Star size={12} className="fill-champagne text-champagne" />
              <span>4.9 / 5.0 Star Rated Salon in Bardoli</span>
            </div>
            <p className="eyebrow text-champagne">Our Heritage</p>
            <h1 className="display-1 mt-4 text-ivory">
              Dedicated to the art of personal beauty
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy & Story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Story"
                title="Crafted with passion in the heart of Bardoli"
                description={`Vidhi's Salon (also locally known as Vidhi Beauty Parlour) was created with a clear purpose: to bring high-end hair artistry, clinical skin care, and royal bridal makeovers to women in Bardoli with genuine warmth and affordability.`}
              />
              <div className="mt-6 space-y-5 leading-relaxed text-mocha">
                <p>
                  Conveniently situated in “Vardan”, directly opposite Gopal Nagar
                  on Lal Bahadur Shastri Road, our salon has become the preferred
                  destination for discerning women seeking quality grooming without
                  haste. Whether preparing for a milestone wedding ceremony, an
                  auspicious festival, or regular self-care, every visitor is
                  treated like family.
                </p>
                <p>
                  Led by founder Vidhi Patel, our team of trained beauticians
                  combines continuous education in modern techniques with deep
                  respect for traditional Gujarati aesthetics. We specialize in
                  long-lasting HD bridal makeup, painless Rica waxing, precision
                  hair layering, and restorative hair smoothing (Keratin and Hair
                  Botox) that withstands Gujarat’s climate.
                </p>
                <p>
                  Today, with over 140+ five-star reviews on Google and local
                  business directories, we remain grateful for the trust placed in
                  us by generations of clients across Bardoli, Baben, Ten Road, and
                  neighboring towns.
                </p>
              </div>

              {/* Verified Location Box */}
              <div className="mt-8 rounded-sm border border-bronze/25 bg-cream/40 p-6">
                <h3 className="font-display text-xl text-espresso">
                  Salon Landmark &amp; Accessibility
                </h3>
                <div className="mt-3 flex items-start gap-3 text-sm text-mocha">
                  <MapPin size={18} className="mt-0.5 text-bronze shrink-0" />
                  <div>
                    <strong className="text-espresso">{contactInfo.addressLine1}</strong>
                    <br />
                    {contactInfo.addressLine2}
                    <div className="mt-1 text-xs text-stone">
                      Landmark: Opposite Gopal Nagar main gate · Near Swaminarayan Temple
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-bronze">
                  <a href={`tel:${contactInfo.phoneHref}`} className="flex items-center gap-1.5 link-underline">
                    <Phone size={13} /> {contactInfo.phoneDisplay}
                  </a>
                  <span>·</span>
                  <a
                    href={contactInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Get Google Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="img-zoom overflow-hidden shadow-md">
                <SmartImage
                  src={unsplash(photo.cutting, { w: 800 })}
                  alt="Precision styling at Vidhi's Salon, Bardoli"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="cream">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Principles"
            title="What we stand for"
            description="Every treatment at Vidhi's Salon is guided by these commitments to quality and care."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="bg-ivory p-8 border border-espresso/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze/15 text-bronze mb-5">
                  <v.icon size={20} />
                </span>
                <h3 className="font-display text-xl text-espresso">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title="The Vidhi’s Salon experience"
            description="Step by step, how we ensure every appointment exceeds your expectations."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60} className="border-t border-espresso/15 pt-6">
                <span className="font-display text-3xl text-bronze">{p.step}</span>
                <h3 className="mt-3 font-display text-xl text-espresso">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mocha">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        image={photo.colorStation}
        eyebrow="Visit Vidhi’s Salon"
        title="We’d love to welcome you"
        description="Book your hair, skin, or bridal consultation today. Call or WhatsApp +91 99251 72388."
        primaryHref="/booking"
        primaryLabel="Book an Appointment"
        secondaryHref="/contact"
        secondaryLabel="Contact & Directions"
      />
    </>
  );
}
