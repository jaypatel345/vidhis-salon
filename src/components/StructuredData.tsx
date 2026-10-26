import { site, contactInfo, openingHours } from "@/data/site";

/**
 * LocalBusiness structured data for Vidhi's Salon, Bardoli.
 * Enhances Google Search rich snippet and local SEO rankings.
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
    .filter((o) => !o.hours.startsWith("Closed"))
    .map((o) => {
      const cleanHours = o.hours.split(" (")[0];
      const [opens, closes] = cleanHours.split(" – ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[o.day],
        opens: opens?.trim() || "09:30",
        closes: closes?.trim() || "19:00",
      };
    });

  const data = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon"],
    name: site.name,
    alternateName: contactInfo.alternateName,
    description: site.shortDescription,
    url: site.url,
    telephone: contactInfo.phoneDisplay,
    email: contactInfo.email,
    priceRange: "₹₹",
    sameAs: [
      contactInfo.googleShareUrl,
      contactInfo.googleKnowledgeGraphUrl,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.addressLine1,
      addressLocality: contactInfo.city,
      addressRegion: contactInfo.state,
      postalCode: contactInfo.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1215",
      longitude: "73.1118",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(contactInfo.rating.score),
      reviewCount: String(contactInfo.rating.reviewCount),
      bestRating: "5",
      worstRating: "1",
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
