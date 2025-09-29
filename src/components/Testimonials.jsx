// FILE: src/components/Testimonials.jsx
// ==============================
import React from "react";
import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { TESTIMONIALS } from "../config";


export default function Testimonials() {
return (
<section className="mx-auto max-w-7xl px-4 py-16">
<SectionTitle title="Guest Reviews" subtitle="Loved by travelers like you" />
<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{TESTIMONIALS.map((t) => (
<div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-content-center rounded-full bg-slate-900 text-white font-semibold">
{t.name[0]}
</div>
<div>
<div className="font-semibold">{t.name}</div>
<div className="flex items-center gap-0.5 text-amber-500">
{Array.from({ length: t.rating }).map((_, i) => (
<Star key={i} className="h-4 w-4 fill-current" />
))}
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-600">“{t.text}”</p>
</div>
))}
</div>
</section>
);
}