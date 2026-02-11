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
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-primary-700 transition font-semibold text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
