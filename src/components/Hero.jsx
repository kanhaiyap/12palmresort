import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { HOTEL } from "../config";


const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export default function Hero({ waHref }) {
return (
<section id="home" className="relative">
<div className="absolute inset-0">
<img
src={HOTEL.heroImage}
alt="Hotel Hero"
className="h-[60vh] w-full object-cover object-center sm:h-[70vh]"
loading="eager"
/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
</div>
<div className="relative mx-auto flex h-[60vh] max-w-7xl items-end sm:h-[70vh]">
<div className="p-6 sm:p-10">
<motion.h1
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="text-3xl font-bold text-white drop-shadow sm:text-5xl"
>
Escape to Comfort & Style
</motion.h1>
<motion.p
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="mt-3 max-w-xl text-sm text-white/90 sm:text-base"
>
Contemporary rooms, thoughtful amenities, and warm hospitality — right in the heart of the city.
</motion.p>
<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="mt-6 flex flex-wrap gap-3"
>
<a
href={waHref}
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:opacity-90"
>
<MessageCircle className="h-4 w-4" /> WhatsApp Booking
</a>
<a
href={`tel:${HOTEL.phone}`}
className="inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
>
<Phone className="h-4 w-4" /> Call Now
</a>
</motion.div>
</div>
</div>
</section>
);
}