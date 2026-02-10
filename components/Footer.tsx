import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">CN Carpentry</h3>
            <p className="text-stone-400 mb-3">Craftsmanship in every detail</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-stone-700 px-2 py-1 rounded">Fully Insured</span>
              <span className="bg-stone-700 px-2 py-1 rounded">Free Quotes</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/areas" className="hover:text-white transition">Areas</Link></li>
              <li><Link href="/#portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-stone-400">
              <li><Link href="/services/fitted-wardrobes" className="hover:text-white transition">Fitted Wardrobes</Link></li>
              <li><Link href="/services/media-walls" className="hover:text-white transition">Media Walls</Link></li>
              <li><Link href="/services/alcove-units" className="hover:text-white transition">Alcove Units</Link></li>
              <li><Link href="/services/van-conversions" className="hover:text-white transition">Van Conversions</Link></li>
              <li><Link href="/services/door-hanging" className="hover:text-white transition">Door Hanging</Link></li>
              <li><Link href="/services/flooring" className="hover:text-white transition">Flooring</Link></li>
              <li><Link href="/services/decking-fencing" className="hover:text-white transition">Decking &amp; Fencing</Link></li>
              <li><Link href="/services/skirting-architrave" className="hover:text-white transition">Skirting &amp; Architrave</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Areas</h4>
            <ul className="space-y-2 text-stone-400">
              <li><Link href="/areas/bath" className="hover:text-white transition">Bath</Link></li>
              <li><Link href="/areas/keynsham" className="hover:text-white transition">Keynsham</Link></li>
              <li><Link href="/areas/bradford-on-avon" className="hover:text-white transition">Bradford-on-Avon</Link></li>
              <li><Link href="/areas/frome" className="hover:text-white transition">Frome</Link></li>
              <li><Link href="/areas" className="hover:text-white transition">All Areas &rarr;</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400">
              <li>Bath &amp; Surrounding Areas</li>
              <li>
                <a href="tel:07948643391" aria-label="Call CN Carpentry on 07948 643391" className="hover:text-white transition">
                  07948 643391
                </a>
              </li>
              <li>
                <a href="mailto:cn.carpentry@yahoo.com" aria-label="Email CN Carpentry at cn.carpentry@yahoo.com" className="hover:text-white transition">
                  cn.carpentry@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cn_carpentry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow CN Carpentry on Instagram (opens in new tab)"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61561476107137"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow CN Carpentry on Facebook (opens in new tab)"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 pt-8">
          <p className="text-center text-stone-400 mb-3">
            &copy; {new Date().getFullYear()} CN Carpentry. All rights reserved.
          </p>
          <p className="text-center text-stone-400 text-sm">
            Serving Bath, Keynsham, Bradford-on-Avon, Frome, Midsomer Norton,
            Radstock, Corsham, Melksham, Trowbridge &amp; surrounding areas
          </p>
          <p className="text-center text-stone-400 text-xs mt-4">
            Website by{" "}
            <a
              href="https://seo-kings.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SEO Kings - website design and SEO (opens in new tab)"
              className="text-stone-300 hover:text-primary-400 transition underline underline-offset-2"
            >
              SEO Kings
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
