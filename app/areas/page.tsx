import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "CN Carpentry serves Bath, Keynsham, Bradford-on-Avon, Frome, Midsomer Norton, Radstock, Corsham, Trowbridge & all surrounding areas. Professional carpentry services wherever you are. Free quotes. Call 07948 643391.",
  alternates: {
    canonical: "https://www.cncarpentry.co.uk/areas",
  },
};

const additionalAreas = [
  "Melksham",
  "Westbury",
  "Saltford",
  "Pensford",
  "Peasedown St John",
  "Paulton",
  "Timsbury",
  "Norton St Philip",
  "Shepton Mallet",
  "Beckington",
  "Rode",
  "Welton",
  "Westfield",
  "Clandown",
];

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Areas We Cover" },
            ]}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">
            Areas We Cover
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Based in Bath, we provide professional carpentry services across
            Somerset, Wiltshire &amp; the surrounding countryside.
          </p>
        </div>
      </section>

      {/* Main areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3">
            Our Main Service Areas
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-10">
            Click an area to see the services we offer there.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group relative rounded-2xl overflow-hidden h-72 block"
              >
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {area.name}
                  </h3>
                  <p className="text-stone-300 text-sm mb-3 line-clamp-2">
                    {area.description}
                  </p>
                  <span className="text-primary-400 font-semibold text-sm group-hover:underline">
                    View services &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All areas covered */}
      <section className="py-16 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3">
            We Also Cover
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-10 max-w-2xl mx-auto">
            Beyond our main areas, we serve many surrounding towns and villages.
            If you don&apos;t see your area listed, give us a call - we can
            probably help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalAreas.map((area) => (
              <span
                key={area}
                className="bg-white dark:bg-stone-900 px-5 py-2.5 rounded-full text-sm font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-600"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 px-4 bg-accent">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-2xl font-bold">Bath Based</p>
            <p className="text-stone-400 text-sm">Local to you</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20+ Miles</p>
            <p className="text-stone-400 text-sm">Radius covered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">24hr</p>
            <p className="text-stone-400 text-sm">Quote turnaround</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Fully</p>
            <p className="text-stone-400 text-sm">Insured &amp; covered</p>
          </div>
        </div>
      </section>

      {/* Services cross-link */}
      <section className="py-10 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-stone-600 dark:text-stone-300 mb-4">
            We offer fitted wardrobes, media walls, alcove units, van conversions, flooring &amp; more across all areas.
          </p>
          <Link href="/services" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition font-semibold">
            Browse All Services &rarr;
          </Link>
        </div>
      </section>

      <CTABanner
        title="Not Sure If We Cover Your Area?"
        subtitle="Give us a call and we will let you know - we cover more than you might think"
      />

      <Footer />
    </div>
  );
}
