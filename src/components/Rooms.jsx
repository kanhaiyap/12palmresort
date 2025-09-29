import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Badge from "./Badge";
import { ROOMS } from "../config";

// Auto-import all images at build time (works only under /src)
const luxuryImages = Object.values(
  import.meta.glob("../assets//luxury/*.jpeg", { eager: true, as: "url" })
);
const axecutiveImages = Object.values(
  import.meta.glob("../assets/executive/*.jpeg", { eager: true, as: "url" })
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Decide which image set to use for a room by name
function imagesFor(room) {
  const key = room.name.toLowerCase();
  if (key.includes("luxury")) return luxuryImages;
  if (key.includes("exotic") || key.includes("executive")) {
    return axecutiveImages;
  }
  return [];
}

// A tiny, dependency-free carousel for each room card
function RoomCarousel({ images, alt }) {
  const [i, setI] = useState(0);
  const total = images.length;

  // guard for no images
  if (!total) {
    return (
      <div className="grid h-56 w-full place-content-center bg-slate-100 text-sm text-slate-500">
        No images found
      </div>
    );
  }

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <div className="relative">
      <img
        src={images[i]}
        alt={`${alt} ${i + 1}`}
        className="h-56 w-full object-cover"
      />
      {/* arrows */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>
          {/* dots */}
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${idx === i ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Rooms({ waHref }) {
  return (
    <section id="rooms" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title="Rooms & Suites" subtitle="Pick your perfect stay" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {ROOMS.map((r) => {
          const imgs = useMemo(() => imagesFor(r), [r.name]);
          const priceBlock = r.price
            ? (
              <>
                <div className="font-bold">₹{r.price.toLocaleString()}/night</div>
                <div className="text-xs text-slate-500">Taxes extra</div>
              </>
            ) : (
              <div className="font-bold text-rose-600">Contact for price</div>
            );

          return (
            <motion.div
              key={r.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <RoomCarousel images={imgs} alt={r.name} />

              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <div className="text-right text-sm">{priceBlock}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {r.badges.map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
