import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Sample terms and conditions for the Maison Aurélle website prototype. Editable placeholder content — not legal advice.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="Sample date — update before launch"
      intro={`These sample Terms & Conditions outline the basis on which ${site.name} would provide services and on which this website is made available. Replace with your reviewed terms before launch.`}
      sections={[
        {
          heading: "Appointments and bookings",
          body: [
            "Appointment requests made through this website are treated as requests, not confirmed bookings. A booking is confirmed only when the salon acknowledges it directly.",
            "We ask guests to arrive on time. Late arrivals may result in a shortened or rescheduled service so we can honour other guests’ appointments.",
          ],
        },
        {
          heading: "Cancellations and rescheduling",
          body: [
            "We request at least 24 hours’ notice to cancel or reschedule. Certain longer services may require a deposit to secure the booking. These are sample terms the salon should confirm.",
          ],
        },
        {
          heading: "Pricing",
          body: [
            "All prices shown on this website are illustrative starting prices in INR and may change. Final pricing depends on hair length, thickness, product usage, and consultation, and will be confirmed before service.",
          ],
        },
        {
          heading: "Services and results",
          body: [
            "We take great care with every service, but individual results can vary based on hair condition, history, and home maintenance. We will always give honest guidance on what is achievable.",
          ],
        },
        {
          heading: "Website use",
          body: [
            "This website and its content are provided for general information. Imagery is illustrative and does not document specific client results. Sample business details are placeholders pending the salon’s real information.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "To the extent permitted by law, this prototype website is provided “as is” without warranties. A live site should include liability terms reviewed by a qualified professional.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about these sample terms can be directed to ${site.name} via the Contact page.`,
          ],
        },
      ]}
    />
  );
}
