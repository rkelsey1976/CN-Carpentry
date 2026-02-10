import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us | Get A Free Quote",
  description:
    "Get a free, no-obligation carpentry quote from CN Carpentry in Bath. Call 07948 643391 or fill in our contact form. We respond within 24 hours.",
  openGraph: {
    title: "Contact CN Carpentry | Free Quotes in Bath",
    description:
      "Get a free, no-obligation carpentry quote. Call 07948 643391 or fill in our contact form. Serving Bath, Keynsham, Bradford-on-Avon & Frome.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
            Get A Free Quote
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Call us, email us, or fill in the form below. We aim to respond to
            all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  <span aria-hidden="true">📞</span> Call Us
                </h2>
                <a
                  href="tel:07948643391"
                  aria-label="Call CN Carpentry on 07948 643391"
                  className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition"
                >
                  07948 643391
                </a>
                <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">
                  Mon - Fri, 7am - 6pm
                </p>
              </div>

              {/* Email */}
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  <span aria-hidden="true">✉️</span> Email Us
                </h2>
                <a
                  href="mailto:cn.carpentry@yahoo.com"
                  aria-label="Email CN Carpentry at cn.carpentry@yahoo.com"
                  className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition break-all"
                >
                  cn.carpentry@yahoo.com
                </a>
                <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">
                  We reply within 24 hours
                </p>
              </div>

              {/* Location */}
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  <span aria-hidden="true">📍</span> Areas We Cover
                </h2>
                <p className="text-stone-600 dark:text-stone-300">
                  Bath, Keynsham, Bradford-on-Avon, Frome, Midsomer Norton,
                  Radstock, Corsham, Melksham, Trowbridge &amp; surrounding areas
                </p>
              </div>

              {/* Social */}
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  <span aria-hidden="true">📱</span> Follow Our Work
                </h2>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/cn_carpentry"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow CN Carpentry on Instagram (opens in new tab)"
                    className="block text-primary-600 hover:text-primary-700 font-semibold transition"
                  >
                    Instagram - @cn_carpentry
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61561476107137"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow CN Carpentry on Facebook (opens in new tab)"
                    className="block text-primary-600 hover:text-primary-700 font-semibold transition"
                  >
                    Facebook - CN Carpentry &amp; Building
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6 bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-xl border-t-4 border-primary-600">
                <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
                  Request A Free Quote
                </h2>
                <p className="text-stone-600 dark:text-stone-400 mb-6">
                  Tell us about your project and we&apos;ll get back to you with a
                  no-obligation quote.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="sr-only">
                      Select Service
                    </label>
                    <select
                      id="contact-service"
                      className="w-full px-6 py-4 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    >
                      <option>Select Service</option>
                      <option>Door Hanging &amp; Adjustments</option>
                      <option>Skirting &amp; Architrave</option>
                      <option>Flooring</option>
                      <option>Fitted Wardrobes</option>
                      <option>Alcove Units</option>
                      <option>Media Wall</option>
                      <option>Van Racking/Camper Conversion</option>
                      <option>Decking &amp; Fencing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 font-semibold text-lg"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
