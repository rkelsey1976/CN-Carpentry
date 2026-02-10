import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { areas, getAreaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://www.cncarpentry.co.uk/areas/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://www.cncarpentry.co.uk/areas/${area.slug}`,
      images: [{ url: area.image, alt: area.imageAlt }],
    },
  };
}

export default function AreaPage({ params }: PageProps) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();

  const areaServices = area.popularServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  // JSON-LD scoped to this area
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Carpenter",
    name: "CN Carpentry",
    description: area.metaDescription,
    telephone: "07948643391",
    email: "cn.carpentry@yahoo.com",
    url: `https://www.cncarpentry.co.uk/areas/${area.slug}`,
    areaServed: {
      "@type": "City",
      name: area.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.slug === "bradford-on-avon" ? "Wiltshire" : "Somerset",
      addressCountry: "GB",
    },
    sameAs: ["https://www.instagram.com/cn_carpentry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Carpentry Services in ${area.name}`,
      itemListElement: areaServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s!.shortTitle,
          url: `https://www.cncarpentry.co.uk/services/${s!.slug}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Areas", href: "/areas" },
              { label: area.name },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Service Area
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {area.heroHeading}
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                {area.heroSubheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07948643391"
                  aria-label="Call CN Carpentry on 07948 643391 for a free quote"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full transition font-semibold"
                >
                  Call For Free Quote
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition font-semibold"
                >
                  Send A Message
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the area */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
              Carpentry Services in {area.name}
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
              {area.description}
            </p>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              {area.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-16 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-3">
            Services Available in {area.name}
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-10">
            We offer the full range of carpentry services to {area.name}{" "}
            homeowners.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areaServices.map(
              (service) =>
                service && (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="relative h-40">
                      <Image
                        src={service.image}
                        alt={`${service.shortTitle} in ${area.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-1 group-hover:text-primary-600 transition">
                        {service.shortTitle}
                      </h3>
                      <p className="text-stone-500 dark:text-stone-400 text-sm line-clamp-2">
                        {service.shortTitle} in {area.name} &amp; surrounding
                        areas
                      </p>
                    </div>
                  </Link>
                )
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition font-semibold">
              View All Our Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us for this area */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">
                Why Choose CN Carpentry in {area.name}?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    text: `Local to ${area.name} - quick response, no long travel charges`,
                    icon: "📍",
                  },
                  {
                    text: "Free no-obligation quotes within 24 hours",
                    icon: "💬",
                  },
                  {
                    text: "Fully insured with public liability cover",
                    icon: "🛡️",
                  },
                  {
                    text: "Both general carpentry and bespoke services",
                    icon: "🔨",
                  },
                  {
                    text: "Clean, tidy, and respectful of your home",
                    icon: "✨",
                  },
                  {
                    text: "Quality guaranteed on every job",
                    icon: "⭐",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <span className="text-stone-700 dark:text-stone-300 text-lg">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src={area.image}
                alt={`CN Carpentry serving ${area.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {area.nearbyAreas.map((nearby) => {
              const linkedArea = areas.find(
                (a) => a.name.toLowerCase() === nearby.toLowerCase()
              );
              return linkedArea ? (
                <Link
                  key={nearby}
                  href={`/areas/${linkedArea.slug}`}
                  className="bg-white dark:bg-stone-900 px-5 py-2.5 rounded-full text-sm font-medium text-primary-600 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-stone-700 transition"
                >
                  {nearby} &rarr;
                </Link>
              ) : (
                <span
                  key={nearby}
                  className="bg-white dark:bg-stone-900 px-5 py-2.5 rounded-full text-sm font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-600"
                >
                  {nearby}
                </span>
              );
            })}
          </div>

          {/* Links to other main area pages */}
          {otherAreas.length > 0 && (
            <div className="text-center">
              <p className="text-stone-500 dark:text-stone-400 text-sm mb-3">
                View our other main service areas:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {otherAreas.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/areas/${other.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline"
                  >
                    Carpenter in {other.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title={`Need A Carpenter in ${area.name}?`}
        subtitle="Get a free, no-obligation quote within 24 hours"
      />

      <Footer />
    </div>
  );
}
