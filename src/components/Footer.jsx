// FILE: src/components/Footer.jsx
import React from "react";
import { HOTEL } from "../config";

export default function Footer() {
  // SEO: structured data for ownership (publisher) & developer (creator)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: HOTEL.name,
    url:
      typeof window !== "undefined"
        ? window.location.origin
        : "https://kanhaiyap.github.io/12palmresort/",
    publisher: {
      "@type": "Organization",
      name: "Navyanshi Enterprise",
    },
    creator: {
      "@type": "Organization",
      name: "Aarohita Vigyan Private Limited",
      url: "https://haritaahar.com/",
      sameAs: ["https://haritaahar.com/"],
    },
  };

  return (
    <footer className="border-t bg-transparent">
      {/* JSON-LD to help Google understand org relationships */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <div className="text-sm">
            © {new Date().getFullYear()} <strong>Navyanshi Enterprise</strong>. All rights reserved.
          </div>

          <div className="text-xs text-stone-600">
            Site developed by{" "}
            <a
              href="https://haritaahar.com/"
              target="_blank"
              rel="noopener"
              className="font-medium hover:underline"
              title="Aarohita Vigyan Private Limited — Web Development & Digital Engineering"
            >
              Aarohita Vigyan Private Limited
            </a>
            .
          </div>
        </div>

        {/* Optional: internal links row to improve crawlability */}
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-500 sm:justify-start" aria-label="Footer">
          <a href="#rooms" className="hover:underline">Rooms</a>
          <span>•</span>
          <a href="#amenities" className="hover:underline">Amenities</a>
          <span>•</span>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <span>•</span>
          <a href="#location" className="hover:underline">Location</a>
          <span>•</span>
          <a href={`tel:${HOTEL.phone}`} className="hover:underline">Call: {HOTEL.phone}</a>
        </nav>
      </div>
    </footer>
  );
}
