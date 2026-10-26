import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for salon services and appointment bookings at ${site.name} in Bardoli, Gujarat.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms &amp; Policies"
      title="Terms &amp; Conditions"
      updated="October 2026"
      intro={`These Terms & Conditions outline the guidelines and operational policies for scheduling and receiving services at ${site.name} (${contactInfo.alternateName}) in Bardoli, Gujarat.`}
      sections={[
        {
          heading: "Appointments & Confirmations",
          body: [
            "Online appointment requests submitted via this website are treated as booking requests. Your slot is confirmed once our staff verifies availability via WhatsApp or phone call.",
            "We request guests to arrive promptly at their scheduled time. In case of delay, please inform us in advance so we can adjust our schedule accordingly without causing inconvenience to other clients.",
          ],
        },
        {
          heading: "Bridal & Special Occasion Bookings",
          body: [
            "Due to high demand during wedding and festive seasons in Bardoli, bridal makeovers, pre-bridal packages, and group styling require an advance token deposit to lock in your date and time.",
            "Any adjustments to bridal timelines must be communicated at least 7 days before the ceremony.",
          ],
        },
        {
          heading: "Pricing & Quotations",
          body: [
            "All routine prices listed on our menu are standard. Chemical treatments (Keratin smoothing, Hair Botox, Global Color, Balayage) have base starting prices in INR (₹) that may vary depending on hair length, density, and product volume.",
            "An accurate quote is always communicated during your initial hair inspection before service begins.",
          ],
        },
        {
          heading: "Allergies & Skin Sensitivities",
          body: [
            "Please notify your aesthetician or stylist about any known skin allergies, sensitivities, or ongoing dermatological treatments prior to facial, bleaching, or hair color procedures so we can perform a preliminary patch test.",
          ],
        },
        {
          heading: "Salon Etiquette & Hygiene",
          body: [
            "We are committed to maintaining a calm, hygienic, and relaxing environment for all guests. We appreciate your cooperation in keeping our studio serene.",
          ],
        },
        {
          heading: "Contact Information",
          body: [
            `For any questions regarding appointments or our policies, reach out directly to ${site.name}:`,
            `Address: ${contactInfo.addressLine1}, ${contactInfo.addressLine2}`,
            `Phone: ${contactInfo.phoneDisplay} | WhatsApp: +91 99251 72388`,
          ],
        },
      ]}
    />
  );
}
