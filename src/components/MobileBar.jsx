// FILE: src/components/MobileBar.jsx
// ==============================
import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { HOTEL } from "../config";


export default function MobileBar({ waHref }) {
return (
<div className="fixed inset-x-0 bottom-0 z-40 mx-auto mb-3 max-w-3xl px-3 md:hidden">
<div className="grid grid-cols-3 gap-2 rounded-2xl border bg-white p-2 shadow-xl">
<a href={`tel:${HOTEL.phone}`} className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold">
<Phone className="h-4 w-4" /> Call
</a>
<a href={waHref} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
<MessageCircle className="h-4 w-4" /> WhatsApp
</a>
<a href={HOTEL.gmapsLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold">
<MapPin className="h-4 w-4" /> Map
</a>
</div>
</div>
);
}