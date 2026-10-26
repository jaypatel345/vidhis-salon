import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} (${contactInfo.alternateName}) in Bardoli, Gujarat.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal &amp; Privacy"
      title="Privacy Policy"
      updated="October 2026"
      intro={`This Privacy Policy outlines how ${site.name} (“we”, “our”, or “us”) collects, uses, and safeguards client information submitted through our website or direct communications.`}
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you request an appointment, submit an inquiry, or message us via WhatsApp or phone, we collect details such as your full name, phone number, email address, preferred appointment date, time, and service notes.",
            "We only collect information that you knowingly and voluntarily provide to facilitate your salon booking and customer service experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "Your contact details are used strictly to coordinate, confirm, or reschedule your appointments at our salon in Bardoli.",
            "To send you appointment confirmations, service reminders, or answer specific beauty/bridal inquiries.",
            "We respect your privacy and never sell, rent, or trade your personal information to third parties.",
          ],
        },
        {
          heading: "Communication Preferences",
          body: [
            "We communicate primarily via direct phone calls or WhatsApp for appointment scheduling and consultation. You may request to cease receiving updates from us at any time.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We employ appropriate security measures to safeguard all client information submitted online or stored locally.",
          ],
        },
        {
          heading: "Contacting Us",
          body: [
            `If you have any questions regarding this Privacy Policy or your personal details, please contact ${site.name} at:`,
            `Address: ${contactInfo.addressLine1}, ${contactInfo.addressLine2}`,
            `Phone: ${contactInfo.phoneDisplay} | Email: ${contactInfo.email}`,
          ],
        },
      ]}
    />
  );
}
