import type { Metadata } from "next";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Maison Aurélle in a few simple steps — choose a service, stylist, date, and time. Front-end booking demonstration.",
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
          title="Book an appointment"
          description="Tell us what you’d like and when — it takes under a minute. This is a front-end demonstration; a team member confirms every request before it becomes a real booking."
        />
        <div className="mx-auto mt-14 max-w-3xl border border-espresso/12 bg-ivory p-6 sm:p-10">
          <BookingForm />
        </div>
      </Container>
    </Section>
  );
}
