import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4 bg-stone-50 dark:bg-stone-800 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-8xl font-bold text-primary-600 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full transition font-semibold"
            >
              Back To Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-700 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-primary-50 dark:hover:bg-stone-700 transition font-semibold"
            >
              Contact Us
            </Link>
          </div>
          <div className="border-t border-stone-200 dark:border-stone-700 pt-8">
            <p className="text-stone-600 dark:text-stone-400 mb-4 font-medium">
              Looking for one of these?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/services"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 px-5 py-2 rounded-full border border-stone-200 dark:border-stone-700 hover:border-primary-500 hover:text-primary-600 transition text-sm font-medium"
              >
                Our Services
              </Link>
              <Link
                href="/areas"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 px-5 py-2 rounded-full border border-stone-200 dark:border-stone-700 hover:border-primary-500 hover:text-primary-600 transition text-sm font-medium"
              >
                Areas We Cover
              </Link>
              <Link
                href="/services/fitted-wardrobes"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 px-5 py-2 rounded-full border border-stone-200 dark:border-stone-700 hover:border-primary-500 hover:text-primary-600 transition text-sm font-medium"
              >
                Fitted Wardrobes
              </Link>
              <Link
                href="/services/media-walls"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 px-5 py-2 rounded-full border border-stone-200 dark:border-stone-700 hover:border-primary-500 hover:text-primary-600 transition text-sm font-medium"
              >
                Media Walls
              </Link>
              <Link
                href="/services/van-conversions"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 px-5 py-2 rounded-full border border-stone-200 dark:border-stone-700 hover:border-primary-500 hover:text-primary-600 transition text-sm font-medium"
              >
                Van Conversions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
