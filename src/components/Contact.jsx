// FILE: src/components/Contact.jsx
// ==============================
import React from "react";
import SectionTitle from "./SectionTitle";


export default function Contact({ waHref }) {
return (
<section id="contact" className="mx-auto max-w-7xl px-4 py-16">
<SectionTitle title="Get In Touch" subtitle="Questions or special requests? We’re here to help." />
<div className="mx-auto mt-8 max-w-2xl rounded-2xl border bg-white p-6 shadow-sm">
<form action={`mailto:reservations@example.com`} method="post">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="text-sm font-medium">Name</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name" required />
</div>
<div>
<label className="text-sm font-medium">Phone</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="+91…" required />
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium">Message</label>
<textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} placeholder="Dates, room type…" />
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button type="submit" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
Send
</button>
<a href={waHref} target="_blank" rel="noreferrer" className="rounded-2xl border bg-white px-5 py-2.5 text-sm font-semibold shadow">
WhatsApp Us
</a>
</div>
</form>
</div>
</section>
);
}

