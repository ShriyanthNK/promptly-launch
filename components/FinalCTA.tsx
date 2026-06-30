"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EmailForm from "./EmailForm";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="waitlist"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-[#0f0e1e]"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* App icon */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-400 rounded-[28px] blur-xl opacity-50" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.png"
                alt="Promptly"
                width={80}
                height={80}
                className="relative rounded-[22px] shadow-xl"
              />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            You&apos;re already thinking
            <br />
            about downloading it.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-brand-200 text-lg mb-10 leading-relaxed">
            Join the waitlist and be the first to know the moment Promptly
            hits the App Store. No spam — just one email when it&apos;s live.
          </motion.p>

          <motion.div variants={fadeUp} className="max-w-md mx-auto">
            <EmailForm
              size="large"
              placeholder="your@email.com"
              buttonText="Notify Me"
              dark={true}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 text-brand-300/60 text-sm">
            Currently under App Store review · iOS first · Free to start
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
