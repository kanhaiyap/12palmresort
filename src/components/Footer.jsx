// FILE: src/components/Footer.jsx
// ==============================
import React from "react";
import { HOTEL } from "../config";


export default function Footer() {
return (
<footer className="border-t bg-transparent">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
<div className="text-sm">© {new Date().getFullYear()} {HOTEL.name}. All rights reserved.</div>
</div>
</footer>
);
}