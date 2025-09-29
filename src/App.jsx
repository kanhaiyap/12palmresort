// ==============================
// FILE: src/App.jsx
// ==============================
import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import WhyUs from "./components/WhyUs";

import { HOTEL } from "./config";


export default function App() {
const [menuOpen, setMenuOpen] = useState(false);


const waHref = useMemo(() => {
const msg = encodeURIComponent(
`Hello ${HOTEL.name}, I'd like to book a room. Please share availability and rates.`
);
const num = HOTEL.whatsapp.replace(/\s|\+/g, "");
return `https://wa.me/${num}?text=${msg}`;
}, []);


return (
<div className="min-h-screen text-slate-900">
{/* <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900"> */}
<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} waHref={waHref} />
<Hero waHref={waHref} />
<WhyUs />
<Rooms waHref={waHref} />
<Amenities />
<Gallery />
<Testimonials />
<Location />
<Contact waHref={waHref} />
<Footer />
<MobileBar waHref={waHref} />
</div>
);
}