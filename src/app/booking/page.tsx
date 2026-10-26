import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";
import { site, contactInfo } from "@/data/site";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Schedule your hair, skin, or bridal appointment at ${site.name} in Bardoli, Gujarat. Quick online reservation with instant WhatsApp confirmation.`,
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Appointments"
          title="Reserve your appointment"
          description={`Select your preferred treatment, artist, date, and time. We will prepare your booking summary for instant confirmation with ${site.name}.`}
        />

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-bronze" />
            <span>Opp. Gopal Nagar, Lal Bahadur Shastri Rd, Bardoli</span>
          </div>
          <span>·</span>
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="flex items-center gap-1.5 text-espresso font-medium hover:text-bronze"
          >
            <Phone size={13} className="text-bronze" />
            <span>Call: {contactInfo.phoneDisplay}</span>
          </a>
          <span>·</span>
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#128C7E] font-medium hover:underline"
          >
            <MessageCircle size={14} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-3xl border border-espresso/12 bg-ivory p-6 sm:p-10 shadow-sm">
          <BookingForm />
        </div>
      </Container>
    </Section>
  );
}
