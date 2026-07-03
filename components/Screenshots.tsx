"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import { fadeUp, staggerContainer } from "@/lib/animations";

const screens = [
  { src: "/screenshots/splash.png", alt: "Pactly welcome screen", label: "Welcome" },
  { src: "/screenshots/today.png", alt: "Today task list", label: "Today" },
  { src: "/screenshots/rewards.png", alt: "Reward bank", label: "Rewards" },
  { src: "/screenshots/history.png", alt: "History & insights", label: "History" },
];

export default function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            See it in action
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Beautiful by default.{" "}
            <span className="text-gradient">Effective by design.</span>
          </motion.h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 sm:justify-center snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.src}
              className="snap-center shrink-0 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <PhoneFrame src={screen.src} alt={screen.alt} size="sm" />
              <span className="text-sm font-medium text-gray-400">{screen.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
