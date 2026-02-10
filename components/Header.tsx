"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-accent/95 backdrop-blur-md z-50 border-b border-accent-light shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div
              className="rounded-full p-0.5 overflow-hidden"
              style={{ backgroundColor: "rgb(227, 227, 227)" }}
            >
              <Image
                src="/cn-logo.png"
                alt="CN Carpentry Logo"
                width={70}
                height={70}
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-2xl font-bold text-white">CN Carpentry</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              Services
            </Link>
            <Link
              href="/areas"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              Areas
            </Link>
            <Link
              href="/#portfolio"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/#about"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-primary-400 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link
            href="/contact"
            className="hidden md:inline-block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-500 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/areas", label: "Areas" },
              { href: "/#portfolio", label: "Portfolio" },
              { href: "/#about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/90 hover:text-primary-400 transition font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary-600 text-white px-6 py-3 rounded-full text-center hover:bg-primary-500 transition font-semibold mt-3"
            >
              Get A Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
