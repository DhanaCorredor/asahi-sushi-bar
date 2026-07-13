import { site } from "@/data/site";

/**
 * Datos estructurados (JSON-LD) schema.org/Restaurant.
 * Ayuda a Google a mostrar horario, ubicación, teléfono y estrellas en los
 * resultados de búsqueda y en el panel de negocio local.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    description: site.concept,
    url: site.url,
    telephone: site.phone.tel,
    image: `${site.url}/og.png`,
    logo: `${site.url}/brand/logo-horizontal-light.png`,
    priceRange: site.priceRange,
    servesCuisine: [...site.cuisine],
    slogan: site.tagline,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.address.maps,
    sameAs: [site.instagram.url, site.ubereats],
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.days],
      opens: h.opens,
      closes: h.closes,
    })),
    menu: `${site.url}/carta`,
    hasMenu: `${site.url}/carta`,
    areaServed: "Leganés, Madrid",
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: site.ubereats,
        inLanguage: "es-ES",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
