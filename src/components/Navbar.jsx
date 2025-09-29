import React from "react";
import { Sparkles } from "lucide-react";
import { HOTEL } from "../config";


export default function Navbar({ menuOpen, setMenuOpen, waHref }) {
return (
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
<a href="#home" className="flex items-center gap-2">
<div className="grid h-9 w-9 place-content-center rounded-xl bg-slate-900 text-white font-bold">
{HOTEL.logoText[0]}
</div>
<div>
<div className="text-lg font-bold leading-tight">{HOTEL.name}</div>
<div className="text-xs text-slate-500">{HOTEL.tagline}</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
{[
["Rooms", "#rooms"],
["Why Us", "#why-us"],
["Amenities", "#amenities"],
["Gallery", "#gallery"],
["Location", "#location"],
["Contact", "#contact"],
].map(([label, href]) => (
<a key={label} href={href} className="text-sm font-medium hover:text-slate-900/80">
{label}
</a>
))}
<a
href={waHref}
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
>
<Sparkles className="h-4 w-4" /> Book Now
</a>
</nav>
<button
onClick={() => setMenuOpen((v) => !v)}
className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border"
aria-label="Toggle menu"
>
<div className="h-0.5 w-5 bg-slate-900" />
</button>
</div>
{menuOpen && (
<div className="md:hidden border-t bg-white">
<div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
{[
["Rooms", "#rooms"],
["Why Us", "#why-us"],
["Amenities", "#amenities"],
["Gallery", "#gallery"],
["Location", "#location"],
["Contact", "#contact"],
].map(([label, href]) => (
<a
key={label}
href={href}
onClick={() => setMenuOpen(false)}
className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-50"
>
{label}
</a>
))}
<a
href={waHref}
target="_blank"
rel="noreferrer"
className="block rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
>
Book Now
</a>
</div>
</div>
)}
</header>
);
}