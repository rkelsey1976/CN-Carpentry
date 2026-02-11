import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Message Sent | Thank You",
  description: "Thank you for contacting CN Carpentry. We will get back to you within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ContactSuccess() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4 bg-stone-50 dark:bg-stone-800 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6" aria-hidden="true">✅</div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 mb-4">
            Your message has been sent successfully. We aim to respond to all
            enquiries within 24 hours.
          </p>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Need an urgent response? Call us directly on{" "}
            <a
              href="tel:07948643391"
              aria-label="Call CN Carpentry on 07948 643391"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              07948 643391
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full transition font-semibold"
            >
              Back To Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-700 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-primary-50 dark:hover:bg-stone-700 transition font-semibold"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
