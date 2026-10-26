import type { Metadata } from "next";
import { MapPin, Phone, Mail, Navigation, Clock } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { contactInfo, openingHours, socialLinks } from "@/data/site";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Maison Aurélle. Find our address, phone, email, opening hours, and send a message. Sample contact details for demonstration.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [faqGroups[0].items[0], faqGroups[0].items[3], faqGroups[3].items[2]];

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-12 lg:pb-14">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Get in touch"
            title="Contact the atelier"
            description="Questions, special requests, or just want to say hello? We’d love to hear from you. All contact details below are sample placeholders for this demo — replace with the salon’s real, verified information before launch."
          />
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <ContactRow icon={MapPin} label="Visit us">
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                  <br />
                  <span className="text-stone">{contactInfo.region}</span>
                </ContactRow>
                <ContactRow icon={Phone} label="Call us">
                  <a href={`tel:${contactInfo.phoneHref}`} className="link-underline">
                    {contactInfo.phoneDisplay}
                  </a>
                </ContactRow>
                <ContactRow icon={Mail} label="Email us">
                  <a href={`mailto:${contactInfo.email}`} className="link-underline break-all">
                    {contactInfo.email}
                  </a>
                </ContactRow>
                <ContactRow icon={Clock} label="Opening hours">
                  <ul className="space-y-1">
                    {openingHours.map((o) => (
                      <li key={o.day} className="flex justify-between gap-6">
                        <span>{o.day}</span>
                        <span className="text-stone">{o.hours}</span>
                      </li>
                    ))}
                  </ul>
                </ContactRow>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation size={15} /> Get directions
                  </Button>
                  <Button href="/booking" variant="outline">Book appointment</Button>
                </div>

                <div className="flex gap-5 pt-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium uppercase tracking-[0.16em] text-espresso/70 link-underline hover:text-bronze"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="border border-espresso/12 bg-cream/40 p-6 sm:p-8">
                <h2 className="font-display text-2xl text-espresso">Send a message</h2>
                <p className="mt-2 mb-6 text-sm text-mocha">
                  We typically reply within one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section tone="cream" className="py-0 sm:py-0 lg:py-0">
        <div className="relative h-[380px] w-full sm:h-[460px]">
          <iframe
            title="Map showing the approximate salon location (sample)"
            src={contactInfo.mapEmbedSrc}
            className="h-full w-full border-0 grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <Container>
          <p className="py-4 text-center text-xs text-stone">
            Map shows an approximate sample location. Configure the exact address before launch.
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Quick answers"
                title="Contact FAQs"
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">View all FAQs</Button>
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
        <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">{label}</h3>
        <div className="mt-1.5 text-sm leading-relaxed text-espresso">{children}</div>
      </div>
    </div>
  );
}
