import Link from "next/link";
import {
  ArrowUpRight,
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Clock,
  Star,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
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
import { site, contactInfo } from "@/data/site";

const experiencePillars = [
  {
    icon: Clock,
    title: "Unhurried Consultation",
    body: "Every visit begins with a genuine conversation about your hair texture, skin type, and the result you want.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Professional Brands",
    body: "We exclusively formulate with trusted salon brands like L'Oréal Professionnel, Matrix, O3+, and Rica Italian Wax.",
  },
  {
    icon: Sparkles,
    title: "Pristine Hygiene & Comfort",
    body: "Strictly sterilized tools, single-use disposables, and a serene air-conditioned studio designed for relaxation.",
  },
  {
    icon: Heart,
    title: "Master Bridal Artistry",
    body: "Signature HD bridal makeup, traditional Gujarati draping, and customized pre-wedding skin therapies.",
  },
];

const serviceIcons: Record<string, typeof Scissors> = {
  "Haircuts & Styling": Scissors,
  "Color & Hair Treatments": Palette,
  "Facials & Skin Care": Sparkles,
  "Grooming & Body Care": Heart,
  "Bridal & Occasion Makeover": Sparkles,
};

const transformationImages = [
  { k: photo.salonInteriorReal, alt: "Vidhi's Salon Studio Interior & Styling Chairs (Original Google Photo)" },
  { k: photo.heroBridal, alt: "Signature Bridal Makeover (Original Google Photo)", tall: true },
  { k: photo.stylingStationsReal, alt: "Mirror Styling Stations & Lighting (Original Google Photo)" },
  { k: photo.treatmentAreaReal, alt: "Hair Care & Scalp Spa Station (Original Google Photo)" },
  { k: photo.bridalStylingReal, alt: "Traditional Gujarati Bridal Styling & Makeover (Original Google Photo)", tall: true },
  { k: photo.lorealDisplayReal, alt: "L'Oréal Professionnel Partner Salon Retail Display" },
];

const instagramImages = [
  photo.salonInteriorReal,
  photo.heroBridal,
  photo.stylingStationsReal,
  photo.treatmentAreaReal,
  photo.bridalStylingReal,
  photo.lorealDisplayReal,
];

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative isolate min-h-[90svh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={photo.salonInteriorReal}
            alt="Vidhi's Salon — Studio Interior & Styling Chairs, Bardoli"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/65 to-espresso/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/35" />
        </div>
        <Container className="flex min-h-[90svh] flex-col justify-center py-20 lg:py-28">
          <div className="max-w-2xl">
            <Reveal>
              {/* Trust Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-espresso/60 px-3.5 py-1 text-xs text-champagne backdrop-blur-sm">
                <span className="flex text-champagne">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-champagne text-champagne" />
                  ))}
                </span>
                <span className="font-semibold text-ivory">4.9 / 5.0 Rating</span>
                <span className="text-ivory/60">·</span>
                <span className="text-ivory/90">140+ Google Reviews</span>
              </div>

              <p className="eyebrow text-champagne">
                Hair, Beauty &amp; Bridal Studio · Bardoli, Gujarat
              </p>
              <h1 className="display-1 mt-4 text-ivory">
                Where beauty, elegance &amp; personal care meet.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
                Welcome to {site.name} (Vidhi Beauty Parlour). Located opposite
                Gopal Nagar on Lal Bahadur Shastri Road, we craft precision cuts,
                keratin smoothing, rejuvenating facials, and unforgettable
                bridal makeovers with master artistry and sincere warmth.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button href="/booking" variant="light" size="lg">
                  Book an Appointment
                </Button>
                <Button
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso"
                >
                  WhatsApp Booking
                </Button>
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-ivory/90 hover:text-champagne transition-colors"
                >
                  <Phone size={15} className="text-champagne" />
                  {contactInfo.phoneDisplay}
                </a>
              </div>

              {/* Location pill */}
              <div className="mt-8 flex items-center gap-2 text-xs text-ivory/70">
                <MapPin size={14} className="text-bronze shrink-0" />
                <span>Opp. Gopal Nagar, Lal Bahadur Shastri Rd, Bardoli</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — INTRODUCTION & LOCAL HERITAGE */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="img-zoom col-span-3 overflow-hidden shadow-sm">
                  <SmartImage
                    src={unsplash(photo.stylingStationsReal, { w: 900 })}
                    alt="Original styling stations at Vidhi's Salon, Bardoli"
                    width={900}
                    height={1150}
                    sizes="(max-width: 1024px) 60vw, 30vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="img-zoom col-span-2 mt-12 overflow-hidden shadow-sm">
                  <SmartImage
                    src={unsplash(photo.heroBridal, { w: 600 })}
                    alt="Signature bridal artistry at Vidhi's Salon, Bardoli"
                    width={600}
                    height={800}
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="About Vidhi's Salon"
                title="Bardoli’s trusted destination for hair, skin & bridal excellence"
                description="Conveniently situated in 'Vardan' opposite Gopal Nagar on Lal Bahadur Shastri Road, Vidhi's Salon has earned its place as one of Bardoli’s highest-rated parlours."
              />
              <p className="mt-6 max-w-xl leading-relaxed text-mocha">
                Founded with a deep commitment to personalized beauty, we believe
                that great hair and glowing skin are built on understanding the
                individual. Whether you are stepping in for a quick organic
                threading touch-up, an intensive Keratin protein hair treatment,
                or planning your once-in-a-lifetime wedding look, we give you our
                undivided attention.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-espresso font-medium">
                  <CheckCircle2 size={18} className="text-bronze shrink-0" />
                  <span>5.0 / 4.9 Stars on Justdial &amp; Google Search (140+ Reviews)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-espresso font-medium">
                  <CheckCircle2 size={18} className="text-bronze shrink-0" />
                  <span>Only genuine L&apos;Oréal, O3+, and Rica Italian formulations</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-espresso font-medium">
                  <CheckCircle2 size={18} className="text-bronze shrink-0" />
                  <span>Experienced beauticians specializing in Gujarati Bridal Makeovers</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-espresso link-underline"
                >
                  Our story &amp; team
                  <ArrowUpRight
                    size={16}
                    className="text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href={contactInfo.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.14em] text-bronze link-underline"
                >
                  View on Google Search
                </a>
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
              eyebrow="Our Services"
              title="Signature treatments"
              description="A curated menu of our most popular services in hair care, skin rejuvenation, and bridal makeover."
            />
            <Button href="/services" variant="outline" className="shrink-0">
              View full menu
            </Button>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-espresso/12 bg-espresso/12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 6).map((s, i) => {
              const Icon = serviceIcons[s.category] ?? Sparkles;
              return (
                <Reveal
                  key={s.slug}
                  delay={i * 60}
                  className="group flex flex-col bg-ivory p-8 transition-colors hover:bg-cream/50"
                >
                  <Icon size={26} className="text-bronze" strokeWidth={1.4} />
                  <p className="mt-5 text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                    {s.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-espresso">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mocha">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-4">
                    <span className="text-sm font-medium text-espresso">
                      <span className="text-stone font-normal">from</span> {inr(s.priceFrom)}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-stone">
                      {s.duration}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-bronze link-underline"
                    >
                      Book this <ArrowUpRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Vidhi's Salon, I would like to enquire about ${s.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.7rem] uppercase tracking-wider text-stone hover:text-espresso"
                    >
                      WhatsApp
                    </a>
                  </div>
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
            title="Why clients choose Vidhi’s Salon"
            description="Four core commitments that define every appointment at our Bardoli studio."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {experiencePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                  <p.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl text-espresso">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5 — TRANSFORMATIONS & BRIDAL GLAMOUR */}
      <Section tone="espresso">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Our Work"
            title="Real transformations &amp; bridal art"
            description="A glimpse of our hair styling, smooth balayage color, glowing facials, and festive occasion styling."
          />
          <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {transformationImages.map((img, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 60}
                className="img-zoom overflow-hidden"
              >
                <SmartImage
                  src={unsplash(img.k, { w: 700 })}
                  alt={img.alt}
                  width={700}
                  height={img.tall ? 950 : 720}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="light">
              View complete gallery
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6 — MEET THE TEAM */}
      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Team"
              title="Meet our beauty specialists"
              description="Led by Vidhi Patel, our dedicated beauticians bring passion, certified skills, and warm hospitality to every chair."
            />
            <Button href="/stylists" variant="outline" className="shrink-0">
              Meet everyone
            </Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stylists.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href="/stylists" className="group block">
                  <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-cream">
                    <SmartImage
                      src={unsplash(s.image, { w: 600 })}
                      alt={`Portrait of ${s.name}`}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-espresso">
                    {s.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-bronze">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm text-mocha">
                    {s.specialties.join(" · ")}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7 — TESTIMONIALS */}
      <Section tone="espresso">
        <Container>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-ivory/5 px-4 py-1.5 text-xs text-champagne mb-4">
              <span className="flex text-champagne">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-champagne text-champagne" />
                ))}
              </span>
              <span>Rated 4.9 / 5.0 by 140+ local clients</span>
            </div>
            <p className="eyebrow text-champagne">
              Client Feedback · Lal Bahadur Shastri Road, Bardoli
            </p>
          </div>
          <Testimonials items={testimonials} />
        </Container>
      </Section>

      {/* 8 — SALON ATMOSPHERE & LOCATION */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <SectionHeading
                eyebrow="The Studio"
                title="Your comfort in the heart of Bardoli"
                description="Easily accessible on Lal Bahadur Shastri Road, right opposite Gopal Nagar and near the Swaminarayan Temple. We have created a serene, clean space where you can unwind and leave looking your absolute best."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Convenient location opposite Gopal Nagar with easy street parking",
                  "Air-conditioned, impeccably clean, and peaceful environment",
                  "Dedicated bridal and private draping section",
                  "Personalized consultation with Vidhi Patel for every major treatment",
                  "Complimentary water & warm Gujarati hospitality",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-mocha"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={contactInfo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                >
                  <MapPin size={15} /> Get Directions
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  View Map &amp; Hours
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="img-zoom overflow-hidden shadow-md">
                <SmartImage
                  src={unsplash(photo.treatmentAreaReal, { w: 1100 })}
                  alt="Original interior of Vidhi's Salon treatment area, Bardoli"
                  width={1100}
                  height={820}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9 — BRIDAL & NEW GUEST OFFER */}
      <Section tone="cream">
        <Container>
          <div className="relative overflow-hidden border border-bronze/25 bg-ivory p-8 sm:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow text-bronze">Special Welcome Offer</p>
                <h2 className="display-3 mt-4 text-espresso">
                  Book your Bridal or Hair Treatment &amp; receive 15% off
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-mocha">
                  Planning for an upcoming wedding, festive occasion, or looking
                  to transform your hair with Keratin smoothing? Mention this offer
                  when booking to enjoy special privilege pricing or complimentary
                  hair spa rituals.
                </p>
                <p className="mt-4 text-xs text-stone">
                  Applicable for new guests or advance bridal package bookings at
                  Vidhi&apos;s Salon, Bardoli. Call +91 99251 72388 for consultation details.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right flex flex-col gap-3">
                <Button href="/booking" size="lg">
                  Claim Offer &amp; Book
                </Button>
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Vidhi's Salon! I would like to claim the 15% Welcome Offer for my appointment."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.16em] text-bronze link-underline text-center"
                >
                  Claim via WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10 — INSTAGRAM / GALLERY SHOWCASE */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="@vidhisalon.bardoli"
            title="Artistry from our studio"
            description="Follow along for bridal inspiration, before-and-after smoothing results, and everyday glam."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href={contactInfo.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="img-zoom group relative aspect-square overflow-hidden bg-cream"
                aria-label="View on Google Search"
              >
                <SmartImage
                  src={unsplash(img, { w: 500 })}
                  alt="Vidhi's Salon beauty, hair and bridal work"
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
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-stone">
            <a
              href={contactInfo.googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze link-underline font-medium uppercase tracking-wider"
            >
              ⭐ View Google Reviews &amp; Photos for Vidhi&apos;s Salon
            </a>
          </div>
        </Container>
      </Section>

      {/* 11 — FAQ PREVIEW */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Help &amp; Info"
                title="Common questions"
                description="Everything you need to know about visiting Vidhi’s Salon in Bardoli."
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">
                  All FAQs
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={faqPreview} idPrefix="home-faq" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 12 — FINAL CTA */}
      <CTASection
        image={photo.salonInteriorReal}
        eyebrow="Book Your Visit"
        title="Experience the art of personalized beauty"
        description="Book your appointment today or message us on WhatsApp. We look forward to welcoming you at Vidhi's Salon on Lal Bahadur Shastri Road, Bardoli."
        primaryHref="/booking"
        primaryLabel="Book an Appointment"
        secondaryHref={`tel:${contactInfo.phoneHref}`}
        secondaryLabel={`Call ${contactInfo.phoneDisplay}`}
      />
    </>
  );
}
