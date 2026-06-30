"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, duration = 1.8 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0f0e1e] py-24 sm:py-32"
    >
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-[#0f0e1e] to-[#0f0e1e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4"
        >
          The average person
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-baseline justify-center gap-3 mb-4"
        >
          <span className="text-[96px] sm:text-[128px] font-black leading-none text-accent tabular-nums">
            <CountUp target={106} />
          </span>
          <span className="text-3xl sm:text-4xl font-bold text-white">days</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-5"
        >
          That&apos;s how much time you spend on your phone every year.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Promptly doesn&apos;t take your phone away. It makes you{" "}
          <strong className="text-white">earn that time</strong> by doing
          things that actually matter first.
        </motion.p>
      </div>
    </section>
  );
}
