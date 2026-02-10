import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold">
                <span aria-hidden="true">📍</span> Serving Bath, Keynsham, Bradford-on-Avon, Frome & Beyond
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 dark:text-white leading-tight">
                Craftsmanship in Every
                <span className="text-primary-600 dark:text-primary-400"> Detail</span>
              </h1>
              <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
                Professional carpentry and joinery services in Bath & surrounding areas. From door hanging to bespoke media walls and van conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:07948643391" aria-label="Call CN Carpentry on 07948 643391 for a free quote" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition transform hover:-translate-y-1 font-semibold text-center">
                  <span aria-hidden="true">📞</span> Call For Free Quote
                </a>
                <a href="#portfolio" className="border-2 border-primary-600 text-primary-700 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-primary-50 dark:hover:bg-stone-800 transition font-semibold text-center">
                  View Our Work
                </a>
              </div>
            </div>
            <div className="relative h-[450px]">
              <Image
                src="/van-conversion.png"
                alt="CN Carpentry - Van Conversion"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-800 rounded-xl shadow-xl p-4">
                <p className="text-primary-600 font-bold text-lg">Van Conversions</p>
                <p className="text-stone-600 text-sm">A service unique to us!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-8 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🛡️", title: "Fully Insured", subtitle: "Public liability covered" },
              { icon: "💬", title: "Free Quotes", subtitle: "No obligation estimates" },
              { icon: "⏱️", title: "24hr Response", subtitle: "Quick quote turnaround" },
              { icon: "⭐", title: "5-Star Rated", subtitle: "Trusted by customers" },
            ].map((item, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
                <p className="font-bold text-sm md:text-base">{item.title}</p>
                <p className="text-stone-400 text-xs md:text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "General Carpentry",
                description: "Door hanging & adjustments, skirting & architrave fitting, flooring, decking & fencing, and home repairs.",
                icon: "🔨"
              },
              {
                title: "Bespoke Services",
                description: "Fitted wardrobes, alcove units, media walls, custom shelving, window seats, and bespoke cabinetry.",
                icon: "🪑"
              },
              {
                title: "Specialist Work",
                description: "Van racking, camper conversions, under-stair storage, worktops, and custom bookcases.",
                icon: "🚐"
              }
            ].map((service, index) => (
              <Link key={index} href="/services" className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-primary-600 block">
                <div className="text-5xl mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-primary-600 font-semibold text-sm mt-3 inline-block">View services &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-accent dark:bg-accent-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Work
            </h2>
            <p className="text-xl text-slate-300">
              See some of our recent projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Media Wall */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/carpentry-work-1.png"
                alt="Custom Built-in Media Wall"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Custom Media Wall</h3>
                  <p className="text-stone-300 text-sm">Built-in unit with integrated lighting</p>
                </div>
              </div>
            </div>

            {/* Media Wall with Storage */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/alcove-unit-1.png"
                alt="Bespoke Media Wall"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Bespoke Media Wall</h3>
                  <p className="text-stone-300 text-sm">Custom fitted TV unit with drawers</p>
                </div>
              </div>
            </div>

            {/* Alcove Shelving */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/alcove-shelving.png"
                alt="Fitted Alcove Shelving"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Fitted Alcove Shelving</h3>
                  <p className="text-stone-300 text-sm">Open shelving with cabinet storage</p>
                </div>
              </div>
            </div>

            {/* Van Conversion */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/van-conversion.png"
                alt="Van Conversion Cabinetry"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Van Conversion</h3>
                  <p className="text-stone-300 text-sm">Custom camper interior with LED lighting</p>
                </div>
              </div>
            </div>

            {/* Social CTA */}
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-accent flex items-center justify-center">
              <div className="text-center p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">View More Projects</h3>
                <p className="text-white/90 mb-6">Follow us on social media for our latest work</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://www.instagram.com/cn_carpentry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow CN Carpentry on Instagram (opens in new tab)"
                    className="inline-block bg-white text-accent px-6 py-3 rounded-full hover:bg-stone-100 transition font-semibold"
                  >
                    <span aria-hidden="true">📸</span> Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61561476107137" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow CN Carpentry on Facebook (opens in new tab)"
                    className="inline-block bg-white text-accent px-6 py-3 rounded-full hover:bg-stone-100 transition font-semibold"
                  >
                    <span aria-hidden="true">👍</span> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Van Conversion Spotlight */}
      <section className="py-20 px-4 bg-accent relative overflow-hidden">
        {/* Subtle wood grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                80deg,
                transparent,
                transparent 3px,
                rgba(139, 118, 85, 0.5) 3px,
                rgba(139, 118, 85, 0.5) 4px
              ),
              repeating-linear-gradient(
                82deg,
                transparent,
                transparent 7px,
                rgba(160, 140, 100, 0.3) 7px,
                rgba(160, 140, 100, 0.3) 8px
              ),
              repeating-linear-gradient(
                78deg,
                transparent,
                transparent 13px,
                rgba(120, 100, 70, 0.4) 13px,
                rgba(120, 100, 70, 0.4) 15px
              )
            `,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="/van-conversion.png"
                alt="Van Conversion by CN Carpentry"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Unique Service
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Van Racking & Camper Conversions
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                Something most carpenters don&apos;t offer! We specialise in custom van racking solutions for tradespeople and full camper van conversions with bespoke cabinetry, LED lighting, and professional finishes.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom van racking for tradespeople",
                  "Full camper van interior fit-outs",
                  "Bespoke cabinetry & worktops",
                  "Integrated LED lighting",
                  "Professional finish throughout"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-stone-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full transition font-semibold">
                Get A Van Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="/alcove-shelving.png"
                alt="Fitted Alcove Shelving by CN Carpentry"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">
                Why Choose CN Carpentry?
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                We combine general carpentry skills with bespoke craftsmanship, giving you one reliable tradesperson for any job - big or small. No project is too complex or too simple.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Fully insured with public liability cover", icon: "🛡️" },
                  { text: "Free no-obligation quotes within 24 hours", icon: "💬" },
                  { text: "Serving Bath, Keynsham, Bradford-on-Avon & beyond", icon: "📍" },
                  { text: "General repairs through to bespoke installations", icon: "🔨" },
                  { text: "Clean, tidy, and respectful of your home", icon: "✨" },
                  { text: "Quality guaranteed on all work", icon: "⭐" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <span className="text-stone-700 dark:text-stone-300 text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Complete Service List
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">
              Professional carpentry services tailored to your needs
            </p>
          </div>
          
          {/* General Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3" aria-hidden="true">🔨</span> General Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Door Hanging & Adjustments", slug: "door-hanging" },
                { name: "Skirting & Architrave Fitting", slug: "skirting-architrave" },
                { name: "Flooring Installation", slug: "flooring" },
                { name: "Decking & Fencing", slug: "decking-fencing" },
                { name: "Home Repairs", slug: null },
                { name: "Van Racking", slug: "van-conversions" },
              ].map((service, index) => (
                service.slug ? (
                  <Link key={index} href={`/services/${service.slug}`} className="bg-white dark:bg-stone-900 p-4 rounded-xl hover:shadow-lg transition border-l-4 border-primary-600 block group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <p className="text-stone-700 dark:text-stone-300 font-medium group-hover:text-primary-600 transition">{service.name}</p>
                      </div>
                      <span className="text-primary-600 text-sm">&rarr;</span>
                    </div>
                  </Link>
                ) : (
                  <div key={index} className="bg-white dark:bg-stone-900 p-4 rounded-xl hover:shadow-lg transition border-l-4 border-primary-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">{service.name}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Bespoke Services */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3" aria-hidden="true">🪑</span> Bespoke Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Fitted Wardrobes", slug: "fitted-wardrobes" },
                { name: "Alcove Units", slug: "alcove-units" },
                { name: "Media Walls", slug: "media-walls" },
                { name: "Custom Shelving & Bookcases", slug: null },
                { name: "Window Seats", slug: null },
                { name: "Under-Stair Storage", slug: null },
                { name: "Bespoke Cabinetry", slug: null },
                { name: "Worktops", slug: null },
                { name: "Camper Conversions", slug: "van-conversions" },
              ].map((service, index) => (
                service.slug ? (
                  <Link key={index} href={`/services/${service.slug}`} className="bg-white dark:bg-stone-900 p-4 rounded-xl hover:shadow-lg transition border-l-4 border-primary-600 block group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <p className="text-stone-700 dark:text-stone-300 font-medium group-hover:text-primary-600 transition">{service.name}</p>
                      </div>
                      <span className="text-primary-600 text-sm">&rarr;</span>
                    </div>
                  </Link>
                ) : (
                  <div key={index} className="bg-white dark:bg-stone-900 p-4 rounded-xl hover:shadow-lg transition border-l-4 border-primary-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">{service.name}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full transition font-semibold">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">
              Don&apos;t just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Had a full media wall built with integrated lighting and storage. The attention to detail was incredible - every edge perfect, every shelf level. Couldn't be happier with the result.",
                author: "Sarah M.",
                location: "Bath",
                service: "Media Wall",
                rating: 5
              },
              {
                text: "Called for a quote on Monday, had it by Tuesday, and work started the following week. Professional, punctual, left the place spotless. Will definitely use CN Carpentry again.",
                author: "David R.",
                location: "Keynsham",
                service: "Alcove Units",
                rating: 5
              },
              {
                text: "Transformed our bedroom with beautiful fitted wardrobes that use every inch of space. Also did our skirting boards throughout the house. Great to have one tradesperson for everything.",
                author: "Emma L.",
                location: "Bradford-on-Avon",
                service: "Fitted Wardrobes",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl border-t-4 border-primary-500">
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary-500 text-xl" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-4 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="text-stone-900 dark:text-white font-semibold">- {testimonial.author}</p>
                  <p className="text-primary-600 text-sm font-medium">{testimonial.service} &middot; {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What areas do you cover?",
                a: "We serve Bath and all surrounding areas including Keynsham, Bradford-on-Avon, Frome, Midsomer Norton, Radstock, Corsham, Melksham, Trowbridge, and more. If you're unsure, just give us a call."
              },
              {
                q: "Do you offer free quotes?",
                a: "Yes! All quotes are completely free with no obligation. We aim to get back to you within 24 hours. Just call 07948 643391 or fill in our contact form."
              },
              {
                q: "Are you insured?",
                a: "Yes, we are fully insured with public liability cover, so you can have complete peace of mind."
              },
              {
                q: "How long does a typical project take?",
                a: "It depends on the scope. A door hanging might take a few hours, fitted alcove units around 3-5 days, and a full media wall or van conversion 1-2 weeks. We'll always give you a clear timeline upfront."
              },
              {
                q: "Do you supply the materials or do I need to?",
                a: "We can handle everything - from sourcing quality materials to the final install. Or if you've already purchased materials, we're happy to work with those too."
              },
              {
                q: "What makes you different from other carpenters in Bath?",
                a: "We offer both general carpentry and bespoke services under one roof, which most don't. We're also one of the few carpenters offering van racking and camper conversions. You get one reliable tradesperson for any job."
              },
              {
                q: "Do you guarantee your work?",
                a: "Absolutely. We take pride in every project and guarantee the quality of our workmanship. If something isn't right, we'll put it right."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white dark:bg-stone-900 rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-stone-900 dark:text-white text-lg hover:text-primary-600 transition">
                  {faq.q}
                  <span className="text-primary-600 text-2xl ml-4 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="px-6 pb-6 text-stone-600 dark:text-stone-300 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Areas We Cover
          </h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Based in Bath, we serve homeowners across Somerset, Wiltshire &amp; beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: "Bath", slug: "bath" },
              { name: "Keynsham", slug: "keynsham" },
              { name: "Bradford-on-Avon", slug: "bradford-on-avon" },
              { name: "Frome", slug: "frome" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition border border-white/20"
              >
                {area.name} &rarr;
              </Link>
            ))}
          </div>
          <p className="text-stone-400 text-sm mb-4">
            Plus Midsomer Norton, Radstock, Corsham, Melksham, Trowbridge &amp; more
          </p>
          <Link href="/areas" className="text-primary-400 hover:text-primary-300 font-semibold transition">
            View all areas we cover &rarr;
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get a free, no-obligation quote within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07948643391"
              aria-label="Call CN Carpentry on 07948 643391"
              className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-stone-100 transition font-semibold text-lg"
            >
              <span aria-hidden="true">📞</span>&nbsp; Call 07948 643391
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-primary-700 transition font-semibold text-lg"
            >
              Get A Free Quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
