export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://indianrestaurant.com';
  
  const restaurantData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    "name": "Indian Restaurant",
    "description": "Authentic Indian cuisine with fresh ingredients and traditional recipes. Experience the rich flavors of India in every dish.",
    "url": siteUrl,
    "telephone": "+91-8866998866",
    "email": "info@indianrestaurant.com",
    "priceRange": "$$",
    "servesCuisine": ["Indian", "Asian", "Vegetarian", "Vegan Options"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Restaurant Street",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "menu": `${siteUrl}/#menu`,
    "acceptsReservations": true,
    "image": [
      `${siteUrl}/images/main-b.jpg`,
      `${siteUrl}/images/about.jpg`,
      `${siteUrl}/images/bt1.jpg`
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
    "currenciesAccepted": "INR",
    "hasMenu": {
      "@type": "Menu",
      "name": "Main Menu",
      "description": "Our full menu featuring breakfast, lunch, and dinner options",
      "url": `${siteUrl}/#menu`
    },
    "sameAs": [
      "https://www.facebook.com/indianrestaurant",
      "https://www.instagram.com/indianrestaurant",
      "https://www.youtube.com/indianrestaurant"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu",
        "item": `${siteUrl}/#menu`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${siteUrl}/#about`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteUrl}/#contact`
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Indian Restaurant",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Authentic Indian cuisine with fresh ingredients and traditional recipes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Restaurant Street",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8866998866",
      "contactType": "customer service",
      "email": "info@indianrestaurant.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/indianrestaurant",
      "https://www.instagram.com/indianrestaurant",
      "https://www.youtube.com/indianrestaurant"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}