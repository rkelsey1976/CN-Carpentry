import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Carpentry Services in Bath",
  description:
    "Full range of carpentry services in Bath & surrounding areas. Fitted wardrobes, media walls, alcove units, van conversions, door hanging, flooring, decking & more. Free quotes.",
  alternates: {
    canonical: "https://www.cncarpentry.co.uk/services",
  },
};

export default function ServicesPage() {
  const generalServices = services.filter((s) => s.category === "general");
  const bespokeServices = services.filter((s) => s.category === "bespoke");

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">
            Our Carpentry Services
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            From everyday repairs to bespoke fitted furniture, we cover it all
            across Bath, Keynsham, Bradford-on-Avon &amp; surrounding areas.
          </p>
        </div>
      </section>

      {/* Bespoke Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3">
            Bespoke Services
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-10">
            Custom-built furniture and installations designed around your space.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bespokeServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-stone-800 rounded-2xl p-6 border-t-4 border-primary-600 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-primary-600 transition">
                  {service.shortTitle}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-16 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3">
            General Carpentry
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-10">
            Reliable day-to-day carpentry services done right.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-stone-900 rounded-2xl p-6 border-t-4 border-primary-500 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-primary-600 transition">
                  {service.shortTitle}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 px-4 bg-accent">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-2xl font-bold">8+</p>
            <p className="text-stone-400 text-sm">Services Offered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-stone-400 text-sm">Satisfaction Guaranteed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">24hr</p>
            <p className="text-stone-400 text-sm">Quote Turnaround</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Fully</p>
            <p className="text-stone-400 text-sm">Insured &amp; Covered</p>
          </div>
        </div>
      </section>

      {/* Areas cross-link */}
      <section className="py-10 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-stone-600 dark:text-stone-300 mb-4">
            All services available across{" "}
            <Link href="/areas/bath" className="text-primary-600 hover:underline font-medium">Bath</Link>,{" "}
            <Link href="/areas/keynsham" className="text-primary-600 hover:underline font-medium">Keynsham</Link>,{" "}
            <Link href="/areas/bradford-on-avon" className="text-primary-600 hover:underline font-medium">Bradford-on-Avon</Link>,{" "}
            <Link href="/areas/frome" className="text-primary-600 hover:underline font-medium">Frome</Link>{" "}
            &amp; surrounding areas.
          </p>
          <Link href="/areas" className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition">
            View all areas we cover &rarr;
          </Link>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Give us a call or send a message and we will advise you on the best approach for your project"
      />

      <Footer />
    </div>
  );
}
