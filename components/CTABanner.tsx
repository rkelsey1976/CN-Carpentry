interface CTABannerProps {
  title?: string;
  subtitle?: string;
  phone?: string;
}

export default function CTABanner({
  title = "Ready To Get Started?",
  subtitle = "Get a free, no-obligation quote within 24 hours",
  phone = "07948643391",
}: CTABannerProps) {
  return (
    <section className="py-16 px-4 bg-primary-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-100 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phone}`}
            aria-label="Call CN Carpentry on 07948 643391"
            className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-stone-100 transition font-semibold text-lg"
          >
            Call 07948 643391
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-primary-700 transition font-semibold text-lg"
          >
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
