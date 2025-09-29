import React from "react";
import SectionTitle from "./SectionTitle";
import {
  MapPin,
  Utensils,
  Flower2,
  Camera,
  Clock,
  ShieldCheck,
  Wifi,
  Car,
  Dumbbell
} from "lucide-react";

const BULLETS = [
  { icon: MapPin,   title: "Prime Location",           desc: "Close to business hubs and attractions—easy access with a calm, green pocket of the city." },
  { icon: Utensils, title: "In-house Restaurant",      desc: "Fresh meals, room service on request, and local favorites." },
  { icon: Flower2,  title: "Rooftop Yoga",             desc: "Meditation & yoga sessions on a breezy rooftop with a lush green view." },
  { icon: Camera,   title: "CCTV & 24×7 Reception",    desc: "Always-on support and security for peace of mind." },
  { icon: Wifi,     title: "Work-ready",               desc: "Reliable Wi-Fi and quiet rooms to focus." },
  { icon: Car,      title: "Free Parking",             desc: "On-site parking so you can arrive and relax." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Premium gradient + large soft glow backgrounds */}
      {/* <div className="absolute inset-0 -z-20 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.15),transparent_70%)]" />
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.15),transparent_70%)]" /> */}

      <div className="mx-auto max-w-7xl px-4 py-20 relative">
        <div className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
            Why Choose Our Hotel
          </h2>
          <p className="mt-3 text-stone-600">
            Comfort, convenience, and care—every time you stay
          </p>
        </div>

        {/* Highlight chips */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Clock,   label: "24×7 Check-in" },
            { icon: Camera,  label: "CCTV Covered" },
            { icon: Flower2, label: "Rooftop Yoga" },
            { icon: Utensils,label: "In-house Restaurant" },
            { icon: Car,     label: "Free Parking" },
            { icon: Dumbbell,label: "Spacious Rooms" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-rose-200/60 bg-white/80 px-3 py-2 text-sm text-stone-800 shadow-sm backdrop-blur"
            >
              <Icon className="h-4 w-4 text-rose-700" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Two-column content */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {/* left: narrative */}
          <div className="rounded-2xl border border-stone-200/70 bg-white/80 p-6 shadow-lg backdrop-blur">
            <h3 className="font-display text-2xl font-semibold text-stone-900">
              Designed for work & family
            </h3>
            <p className="mt-2 text-stone-600">
              Whether you’re here for meetings or a family break, our spacious rooms and reliable Wi-Fi keep everything smooth.
              Early check-in, late checkout, or special requests—we try our best to accommodate.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BULLETS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-rose-700" />
                    <div className="font-semibold text-stone-900">{title}</div>
                  </div>
                  <p className="mt-1 text-sm text-stone-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/80 p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
                <div className="font-semibold text-stone-900">Transparent Pricing</div>
              </div>
              <p className="mt-1 text-sm text-stone-700">
                No hidden surprises—fair, simple pricing, and clear communication.
                For Luxury and Exotic rooms, please contact us for the best seasonal rates.
              </p>
            </div>
          </div>

          {/* right: image card */}
          <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white/80 shadow-lg backdrop-blur">
            <img
              src="/why-us.jpg" /* replace with a nice hotel image */
              alt="Hotel highlight"
              className="h-full w-full max-h-[540px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
              <div className="text-sm text-white/90">
                Calm neighborhood • Easy access • Thoughtful service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
