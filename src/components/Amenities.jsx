import React from "react";
import {
  Car,
  Snowflake,
  Utensils,
  Flower2,
  Camera,
  Clock,
  WashingMachine,
  Sprout,
} from "lucide-react";
import { AMENITIES } from "../config";
import SectionTitle from "./SectionTitle";

// Map amenity keys to icons
const ICONS = {
  ac: Snowflake,
  parking: Car,
  restaurant: Utensils,
  yoga: Sprout,          // meditation / yoga
  garden: Flower2,      // lush green garden
  cctv: Camera,
  checkin: Clock,
  laundry: WashingMachine,
};

export default function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle
        title="Amenities"
        subtitle="Everything you need for a seamless stay"
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {AMENITIES.map(({ key, label }) => {
          const Icon = ICONS[key] || Flower2; // fallback
          return (
            <div
              key={key}
              className="flex flex-col items-center gap-2 rounded-2xl border bg-white p-6 text-center shadow-sm"
            >
              <Icon className="h-6 w-6" />
              <div className="text-sm font-medium">{label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
