import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.cncarpentry.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CN Carpentry - Bath | Professional Carpentry & Joinery",
    template: "%s | CN Carpentry Bath",
  },
  description:
    "Professional carpentry services in Bath, Keynsham, Bradford-on-Avon & surrounding areas. Fitted wardrobes, media walls, alcove units, van conversions, door hanging & more. Fully insured. Free quotes. Call 07948 643391",
  keywords: [
    "carpenter bath",
    "carpentry bath",
    "joiner bath",
    "fitted wardrobes bath",
    "media wall bath",
    "alcove units bath",
    "van conversion bath",
    "camper conversion bath",
    "door hanging bath",
    "skirting fitting bath",
    "decking bath",
    "flooring bath",
    "bespoke carpentry bath",
    "joinery bath",
    "carpenter keynsham",
    "carpenter bradford on avon",
    "carpenter frome",
    "carpenter midsomer norton",
    "fitted furniture bath",
    "custom shelving bath",
    "under stair storage bath",
    "window seat bath",
  ],
  authors: [{ name: "CN Carpentry" }],
  creator: "CN Carpentry",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "CN Carpentry",
    title: "CN Carpentry - Professional Carpentry & Joinery in Bath",
    description:
      "Bespoke carpentry services in Bath & surrounding areas. Fitted wardrobes, media walls, alcove units, van conversions & more. Fully insured. Free quotes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CN Carpentry - Professional Carpentry in Bath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CN Carpentry - Professional Carpentry & Joinery in Bath",
    description:
      "Bespoke carpentry services in Bath & surrounding areas. Fitted wardrobes, media walls, van conversions & more. Call 07948 643391",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: "your-verification-code",
  },
};

// JSON-LD Structured Data for the entire site
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Carpenter",
      "@id": `${BASE_URL}/#business`,
      name: "CN Carpentry",
      url: BASE_URL,
      telephone: "07948643391",
      email: "cn.carpentry@yahoo.com",
      description:
        "Professional carpentry and joinery services in Bath & surrounding areas. Specialising in fitted wardrobes, media walls, alcove units, van conversions, door hanging, flooring, decking and bespoke cabinetry.",
      image: `${BASE_URL}/cn-logo.png`,
      logo: `${BASE_URL}/cn-logo.png`,
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Bank Transfer",
      areaServed: [
        {
          "@type": "City",
          name: "Bath",
          containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
        },
        { "@type": "City", name: "Keynsham" },
        { "@type": "City", name: "Bradford-on-Avon" },
        { "@type": "City", name: "Frome" },
        { "@type": "City", name: "Midsomer Norton" },
        { "@type": "City", name: "Radstock" },
        { "@type": "City", name: "Corsham" },
        { "@type": "City", name: "Melksham" },
        { "@type": "City", name: "Trowbridge" },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.3811,
        longitude: -2.3590,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bath",
        addressRegion: "Somerset",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.instagram.com/cn_carpentry",
        "https://www.facebook.com/profile.php?id=61561476107137",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Carpentry Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "General Carpentry",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door Hanging & Adjustments" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skirting & Architrave Fitting" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decking & Fencing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Repairs" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Van Racking" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Bespoke Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fitted Wardrobes" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alcove Units" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Walls" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Shelving & Bookcases" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Seats" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Under-Stair Storage" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bespoke Cabinetry" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Worktops" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Camper Conversions" } },
            ],
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah M." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Had a full media wall built with integrated lighting and storage. The attention to detail was incredible.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "David R." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Called for a quote on Monday, had it by Tuesday, and work started the following week. Professional, punctual, left the place spotless.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Emma L." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Transformed our bedroom with beautiful fitted wardrobes that use every inch of space.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CN Carpentry",
      description: "Professional carpentry and joinery services in Bath",
      publisher: { "@id": `${BASE_URL}/#business` },
    },
  ],
};

// FAQ structured data for the homepage
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Bath and all surrounding areas including Keynsham, Bradford-on-Avon, Frome, Midsomer Norton, Radstock, Corsham, Melksham, Trowbridge, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free quotes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All quotes are completely free with no obligation. We aim to get back to you within 24 hours. Just call 07948 643391 or fill in our contact form.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are fully insured with public liability cover, so you can have complete peace of mind.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the scope. A door hanging might take a few hours, fitted alcove units around 3-5 days, and a full media wall or van conversion 1-2 weeks. We always give you a clear timeline upfront.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply the materials or do I need to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can handle everything - from sourcing quality materials to the final install. Or if you have already purchased materials, we are happy to work with those too.",
      },
    },
    {
      "@type": "Question",
      name: "What makes CN Carpentry different from other carpenters in Bath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer both general carpentry and bespoke services under one roof. We are also one of the few carpenters offering van racking and camper conversions. You get one reliable tradesperson for any job.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We take pride in every project and guarantee the quality of our workmanship. If something is not right, we will put it right.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="icon" href="/cn-logo.png" />
        <link rel="apple-touch-icon" href="/cn-logo.png" />
        <meta name="geo.region" content="GB-SOM" />
        <meta name="geo.placename" content="Bath" />
        <meta name="geo.position" content="51.3811;-2.3590" />
        <meta name="ICBM" content="51.3811, -2.3590" />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
