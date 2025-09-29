// FILE: src/components/Gallery.jsx
import React from "react";
import SectionTitle from "./SectionTitle";
import { GALLERY } from "../config";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title="Gallery" subtitle="A glimpse of your next getaway" />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {GALLERY.map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="aspect-[1/1] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
