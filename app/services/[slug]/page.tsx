import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.cncarpentry.co.uk/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.cncarpentry.co.uk/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  // Service-specific JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Carpenter",
      name: "CN Carpentry",
      telephone: "07948643391",
      areaServed: [
        { "@type": "City", name: "Bath" },
        { "@type": "City", name: "Keynsham" },
        { "@type": "City", name: "Bradford-on-Avon" },
        { "@type": "City", name: "Frome" },
      ],
    },
    areaServed: {
      "@type": "City",
      name: "Bath",
    },
    image: `https://www.cncarpentry.co.uk${service.image}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {service.category === "bespoke"
                  ? "Bespoke Service"
                  : "General Carpentry"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.heroHeading}
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                {service.heroSubheading}
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
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left column - content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Inline image between text and features */}
              {service.gallery.length > 0 && (
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={service.gallery[0].src}
                    alt={service.gallery[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      {service.gallery[0].caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-stone-700 dark:text-stone-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo Gallery */}
              {service.gallery.length > 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
                    Our Work
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.gallery.slice(1).map((photo, index) => (
                      <div
                        key={index}
                        className="relative h-48 sm:h-56 rounded-xl overflow-hidden group"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition">
                          <p className="text-white text-xs sm:text-sm font-medium">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
                  Common Questions About {service.shortTitle}
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="bg-white dark:bg-stone-800 rounded-xl shadow-sm group"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-stone-900 dark:text-white hover:text-primary-600 transition">
                        {faq.q}
                        <span className="text-primary-600 text-2xl ml-4 group-open:rotate-45 transition-transform" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-stone-600 dark:text-stone-300 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - sidebar */}
            <div className="space-y-6">
              {/* Quick contact card */}
              <div className="bg-accent text-white rounded-2xl p-6 sticky top-28">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  Get A Free Quote
                </h3>
                <p className="text-stone-300 text-sm mb-5">
                  Call us or send a message for a free, no-obligation quote on
                  your {service.shortTitle.toLowerCase()} project.
                </p>
                <a
                  href="tel:07948643391"
                  aria-label="Call CN Carpentry on 07948 643391"
                  className="block bg-primary-600 hover:bg-primary-500 text-white text-center px-6 py-3 rounded-full transition font-semibold mb-3"
                >
                  07948 643391
                </a>
                <a
                  href="mailto:cn.carpentry@yahoo.com"
                  aria-label="Email CN Carpentry at cn.carpentry@yahoo.com"
                  className="block border border-stone-600 text-white text-center px-6 py-3 rounded-full hover:bg-stone-700 transition font-semibold mb-5"
                >
                  Email Us
                </a>

                <div className="border-t border-stone-600 pt-4 space-y-2 text-sm text-stone-400">
                  <p>Fully insured</p>
                  <p>Free no-obligation quotes</p>
                  <p>24hr response time</p>
                  <p>Bath &amp; surrounding areas</p>
                </div>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="bg-white dark:bg-stone-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={`/services/${rel.slug}`}
                          className="flex items-center justify-between text-stone-700 dark:text-stone-300 hover:text-primary-600 transition font-medium"
                        >
                          {rel.shortTitle}
                          <span className="text-primary-600">&rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-12 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
            {service.shortTitle} Across Bath &amp; Beyond
          </h2>
          <p className="text-stone-600 dark:text-stone-300 mb-6 max-w-2xl mx-auto">
            We provide {service.shortTitle.toLowerCase()} services across Bath
            and all surrounding areas. Whether you are in the city centre or a
            nearby town, we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Bath", slug: "bath" },
              { name: "Keynsham", slug: "keynsham" },
              { name: "Bradford-on-Avon", slug: "bradford-on-avon" },
              { name: "Frome", slug: "frome" },
              { name: "Midsomer Norton", slug: null },
              { name: "Radstock", slug: null },
              { name: "Corsham", slug: null },
              { name: "Melksham", slug: null },
              { name: "Trowbridge", slug: null },
            ].map((area) =>
              area.slug ? (
                <Link
                  key={area.name}
                  href={`/areas/${area.slug}`}
                  className="bg-white dark:bg-stone-900 px-4 py-2 rounded-full text-sm font-medium text-primary-600 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-stone-700 transition"
                >
                  {area.name} &rarr;
                </Link>
              ) : (
                <span
                  key={area.name}
                  className="bg-white dark:bg-stone-900 px-4 py-2 rounded-full text-sm font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-600"
                >
                  {area.name}
                </span>
              )
            )}
          </div>
          <Link
            href="/areas"
            className="inline-block mt-6 text-primary-600 hover:text-primary-700 font-semibold text-sm transition"
          >
            View all areas we cover &rarr;
          </Link>
        </div>
      </section>

      <CTABanner
        title={`Ready For Your ${service.shortTitle} Project?`}
        subtitle="Get a free, no-obligation quote within 24 hours"
      />

      <Footer />
    </div>
  );
}
