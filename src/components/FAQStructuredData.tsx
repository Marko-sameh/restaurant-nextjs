export default function FAQStructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://indianrestaurant.com';
  
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your opening hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open Monday to Thursday from 9:00 AM to 10:00 PM, and Friday to Sunday from 11:00 AM to 10:00 PM. We serve breakfast, lunch, and dinner with authentic Indian cuisine."
        }
      },
      {
        "@type": "Question",
        "name": "How long does food delivery take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our typical delivery time is 30-45 minutes within Mumbai city limits. We offer free delivery for orders over ₹500. You can track your order in real-time through our website."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of food delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery is ₹20 for orders under ₹500. We offer FREE delivery for all orders above ₹500 within Mumbai. Delivery charges may vary for locations outside the city limits."
        }
      },
      {
        "@type": "Question",
        "name": "What is your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a full refund if you're not satisfied with your order. Please contact us within 30 minutes of delivery at +91-8866998866. Refunds are processed within 5-7 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have both vegetarian and non-vegetarian options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a wide variety of both vegetarian and non-vegetarian dishes. Our menu includes vegan options, paneer dishes, chicken, lamb, and seafood. All dishes are clearly marked as veg or non-veg."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accept online payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we accept multiple payment methods including Cash on Delivery, Credit/Debit Cards, UPI, and all major digital wallets. All online transactions are secure and encrypted."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
