"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import EmailForm from "./EmailForm";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

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
                alt="Pactly"
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
            Find out your
            <br />
            productivity score.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-brand-200 text-lg mb-8 leading-relaxed">
            Take the free 2-minute assessment and get personalized insights on exactly why you keep losing time to your phone — and what Pactly will do about it.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-600 font-bold text-lg px-8 py-4 rounded-xl transition-all active:scale-[0.97]"
            >
              Take the free assessment <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-brand-300/60 text-sm">Or just leave your email:</p>
            <div className="w-full max-w-md">
              <EmailForm
                size="default"
                placeholder="your@email.com"
                buttonText="Notify Me"
                dark={true}
              />
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-brand-300/60 text-sm">
            Currently under App Store review · iOS first · Free to start
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
