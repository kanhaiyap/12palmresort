// FILE: src/components/Location.jsx
import React, { useMemo } from "react";
import SectionTitle from "./SectionTitle";
import { HOTEL } from "../config";
import { MapPin, Phone } from "lucide-react";

export default function Location() {
  const embedSrc = useMemo(() => {
    // Force a name/address search so Google shows the place, not raw coordinates
    const q = (HOTEL.placeQuery && HOTEL.placeQuery.trim())
      || `${HOTEL.name} ${HOTEL.address}`;
    return `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;
  }, []);

  const mapsHref =
    HOTEL.gmapsLink ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      HOTEL.placeQuery || `${HOTEL.name} ${HOTEL.address}`
    )}`;

  return (
    <section id="location" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title="Find Us" subtitle={HOTEL.address} />
      <div className="mt-8 overflow-hidden rounded-2xl border shadow-sm">
        <iframe
          title="Google Map"
          width="100%"
          height="420"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={embedSrc}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-sm font-semibold shadow"
        >
          <MapPin className="h-4 w-4" /> Open in Google Maps
        </a>
        <a
          href={`tel:${HOTEL.phone}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" /> Call Reception
        </a>
      </div>
    </section>
  );
}
