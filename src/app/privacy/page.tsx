import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sample privacy policy for the Maison Aurélle website prototype. Editable placeholder content — not legal advice.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Sample date — update before launch"
      intro={`This Privacy Policy explains, in sample form, how ${site.name} would collect, use, and protect personal information submitted through this website. Replace each section with your real, reviewed policy.`}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you use our appointment or contact forms, we may collect details such as your name, email address, phone number, and any notes you choose to provide.",
            "In this prototype, form submissions are processed in your browser and are not transmitted to or stored by a server. A live deployment would describe exactly what is collected and where it is stored.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "Information would be used to respond to enquiries, arrange and confirm appointments, and provide the services you request.",
            "We would not sell your personal information. Any sharing with service providers (for example, a scheduling platform) would be limited to what is necessary to deliver the service.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "A live site may use essential cookies and, optionally, privacy-respecting analytics to understand how the site is used. You would be able to manage non-essential cookies where applicable.",
          ],
        },
        {
          heading: "Data retention and security",
          body: [
            "We would retain personal information only as long as necessary for the purposes described here or as required by law, and apply reasonable safeguards to protect it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on your location, you may have rights to access, correct, or request deletion of your personal information. A live policy would explain how to exercise these rights.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about this sample policy can be directed to ${site.name} using the details on our Contact page. Replace with a monitored privacy contact before launch.`,
          ],
        },
      ]}
    />
  );
}
