import React from "react";
import { motion } from "framer-motion";


const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export default function SectionTitle({ title, subtitle }) {
return (
<div className="mx-auto max-w-2xl text-center">
<motion.h2
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="text-3xl font-semibold tracking-tight sm:text-4xl"
>
{title}
</motion.h2>
{subtitle && (
<motion.p
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="mt-3 text-base text-muted-foreground"
>
{subtitle}
</motion.p>
)}
</div>
);
}