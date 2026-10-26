import { site, contactInfo, openingHours } from "@/data/site";

/**
 * LocalBusiness structured data.
 * NOTE: All values are PLACEHOLDER demo content. No fake ratings or
 * reviews are included. Replace address/phone/geo with verified
 * business data before launch.
 */
export function StructuredData() {
  const dayMap: Record<string, string> = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  };

  const openingHoursSpecification = openingHours
    .filter((o) => o.hours !== "Closed")
    .map((o) => {
      const [opens, closes] = o.hours.split(" – ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[o.day],
        opens,
        closes,
      };
    });

  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    telephone: contactInfo.phoneDisplay,
    email: contactInfo.email,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.addressLine1,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400050",
      addressCountry: "IN",
    },
    openingHoursSpecification,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
