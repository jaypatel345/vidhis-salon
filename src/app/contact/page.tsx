import type { Metadata } from "next";
import { MapPin, Phone, Mail, Navigation, Clock, Star, ExternalLink, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site, contactInfo, openingHours } from "@/data/site";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Bardoli, Gujarat. Address: "Vardan", Opp. Gopal Nagar, Lal Bahadur Shastri Road. Phone / WhatsApp: +91 99251 72388. Hours and directions.`,
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[0].items[3],
  faqGroups[3].items[0],
];

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-12 lg:pb-14">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-espresso/5 px-3 py-1 text-xs text-espresso">
              <span className="flex text-champagne">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-champagne text-champagne" />
                ))}
              </span>
              <span className="font-semibold">{contactInfo.rating.score} ★ on Google</span>
              <span className="text-stone">({contactInfo.rating.reviewCount}+ Reviews)</span>
            </div>
            <SectionHeading
              as="h1"
              eyebrow="Get in touch"
              title="Visit or contact Vidhi’s Salon"
              description="Have questions about our bridal packages, keratin hair treatments, or want to reserve your chair? Call, message, or drop by our Bardoli studio."
            />
          </div>
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <ContactRow icon={MapPin} label="Salon address">
                  <strong className="text-espresso">{contactInfo.addressLine1}</strong>
                  <br />
                  {contactInfo.addressLine2}
                  <br />
                  <span className="text-xs text-bronze font-medium">
                    Opposite Gopal Nagar · Near Swaminarayan Temple
                  </span>
                  <br />
                  <span className="text-stone">{contactInfo.region}</span>
                </ContactRow>

                <ContactRow icon={Phone} label="Call / WhatsApp">
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${contactInfo.phoneHref}`}
                      className="font-medium text-espresso link-underline text-base"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                    <a
                      href={contactInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#128C7E] font-medium hover:underline"
                    >
                      <MessageCircle size={14} />
                      Click here to chat directly on WhatsApp
                    </a>
                  </div>
                </ContactRow>

                <ContactRow icon={Mail} label="Email us">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="link-underline break-all text-espresso"
                  >
                    {contactInfo.email}
                  </a>
                </ContactRow>

                <ContactRow icon={Clock} label="Salon opening hours">
                  <ul className="space-y-1">
                    {openingHours.map((o) => (
                      <li key={o.day} className="flex justify-between gap-6 text-xs">
                        <span>{o.day}</span>
                        <span className="text-stone font-medium">{o.hours}</span>
                      </li>
                    ))}
                  </ul>
                </ContactRow>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    href={contactInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation size={15} /> Get directions
                  </Button>
                  <Button
                    href={contactInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                  >
                    WhatsApp Booking
                  </Button>
                </div>

                <div className="rounded-sm border border-bronze/25 bg-ivory p-4 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-espresso">Google Search Listing:</span>
                    <a
                      href={contactInfo.googleShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bronze font-medium underline inline-flex items-center gap-1"
                    >
                      View on Google <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="text-stone leading-relaxed">
                    Search for <em>Vidhi&apos;s Salon</em> or <em>Vidhi Beauty Parlour Bardoli</em> to read all client reviews, view photos, and see live local updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="border border-espresso/12 bg-cream/40 p-6 sm:p-8">
                <h2 className="font-display text-2xl text-espresso">
                  Send an inquiry
                </h2>
                <p className="mt-2 mb-6 text-sm text-mocha">
                  Fill in your details below and our team will get back to you promptly.
                  For urgent appointments, please call or WhatsApp +91 99251 72388.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section tone="cream" className="py-0 sm:py-0 lg:py-0">
        <div className="relative h-[380px] w-full sm:h-[460px]">
          <iframe
            title="Google Maps showing Vidhi's Salon location on Lal Bahadur Shastri Road, Bardoli"
            src={contactInfo.mapEmbedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4 text-xs text-stone">
            <span>
              📍 <strong>Vidhi&apos;s Salon:</strong> &ldquo;Vardan&rdquo;, Opp. Gopal Nagar, Lal Bahadur Shastri Road, Bardoli, Gujarat 394601
            </span>
            <a
              href={contactInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze underline font-medium"
            >
              Open in Google Maps App →
            </a>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Quick answers"
                title="Visiting &amp; Contact FAQs"
                description="Helpful information before heading to the salon."
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">
                  View all FAQs
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={contactFaqs} idPrefix="contact-faq" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze/40 text-bronze">
        <Icon size={18} strokeWidth={1.6} />
      </span>
      <div>
        <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
          {label}
        </h3>
        <div className="mt-1.5 text-sm leading-relaxed text-espresso">
          {children}
        </div>
      </div>
    </div>
  );
}
