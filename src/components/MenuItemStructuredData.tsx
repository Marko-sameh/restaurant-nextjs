export default function MenuItemStructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://indianrestaurant.com';
  
  const menuData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Indian Restaurant Menu",
    "description": "Authentic Indian cuisine featuring breakfast, lunch, and dinner options",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Breakfast",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-1`,
            "name": "Fresh Chicken Veggies",
            "description": "Fresh ingredients with traditional spices and aromatic herbs",
            "image": `${siteUrl}/images/dish/1.png`,
            "offers": {
              "@type": "Offer",
              "price": "188",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/NonVegetarianDiet"
          },
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-2`,
            "name": "Grilled Chicken",
            "description": "Perfectly grilled with aromatic herbs and special sauce",
            "image": `${siteUrl}/images/dish/2.png`,
            "offers": {
              "@type": "Offer",
              "price": "135",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/NonVegetarianDiet"
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Lunch",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-3`,
            "name": "Paneer Noodles",
            "description": "Delicious vegetarian noodles with fresh paneer cubes",
            "image": `${siteUrl}/images/dish/3.png`,
            "offers": {
              "@type": "Offer",
              "price": "73",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/VegetarianDiet"
          },
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-4`,
            "name": "Chicken Noodles",
            "description": "Spicy chicken noodles with vegetables and special sauce",
            "image": `${siteUrl}/images/dish/4.png`,
            "offers": {
              "@type": "Offer",
              "price": "143",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/NonVegetarianDiet"
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Dinner",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-5`,
            "name": "Bread Boiled Egg",
            "description": "Healthy breakfast option with fresh bread and eggs",
            "image": `${siteUrl}/images/dish/5.png`,
            "offers": {
              "@type": "Offer",
              "price": "37",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/NonVegetarianDiet"
          },
          {
            "@type": "MenuItem",
            "@id": `${siteUrl}/#menu-item-6`,
            "name": "Immunity Dish",
            "description": "Boost your immunity with this special nutritious dish",
            "image": `${siteUrl}/images/dish/6.png`,
            "offers": {
              "@type": "Offer",
              "price": "60",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "120 calories"
            },
            "suitableForDiet": "https://schema.org/VegetarianDiet"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(menuData) }}
    />
  );
}
