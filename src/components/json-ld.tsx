import { business, formatPrice, hasRealEmail, hasRealPhone, startingPrices } from "@/config/business";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.businessName,
    description:
      "Outdoor Halloween and Christmas decorating for homeowners in Oregon's Willamette Valley, including simple Hanukkah window displays.",
    areaServed: [
      ...business.serviceAreas.map((name) => ({
        "@type": "City",
        name,
        containedInPlace: {
          "@type": "State",
          name: "Oregon",
        },
      })),
      {
        "@type": "AdministrativeArea",
        name: business.regionName,
      },
    ],
    priceRange: `${formatPrice(startingPrices.holidayHelp)}+`,
    knowsAbout: [
      "Halloween decorating",
      "Outdoor Christmas light installation",
      "Hanukkah window displays",
      "Holiday decorating",
      "Holiday decoration takedown",
    ],
  };

  if (siteUrl) data.url = siteUrl;
  if (hasRealPhone()) data.telephone = business.phone;
  if (hasRealEmail()) data.email = business.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
