"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PhoneFrame from "./PhoneFrame";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Clock, Zap, BarChart3, ArrowRight } from "lucide-react";
import EmailForm from "./EmailForm";

const measures = [
  { icon: Clock, label: "Your phone habits" },
  { icon: Zap, label: "Your task structure" },
  { icon: BarChart3, label: "Your focus patterns" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-50" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-accent-light rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
          >
            {/* Who it's for */}
            <motion.p
              variants={fadeUp}
              className="text-base font-semibold text-brand-500 mb-3 tracking-wide"
            >
              For students &amp; anyone who loses hours to their phone before getting anything done.
            </motion.p>

            {/* Hook headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight mb-5"
            >
              Feeling frustrated that{" "}
              <span className="text-gradient">you keep scrolling</span>{" "}
              even though you want to be productive?
            </motion.h1>

            {/* Subheadline driving to quiz */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Answer 10 questions to find out exactly why — and get a personalized plan to fix it.
            </motion.p>

            {/* What we measure */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {measures.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-600"
                >
                  <m.icon className="w-4 h-4 text-brand-500" />
                  {m.label}
                </div>
              ))}
            </motion.div>

            {/* CTA block */}
            <motion.div variants={fadeUp}>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 active:scale-[0.97] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25"
              >
                Start the free assessment <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1 mt-4 mb-6">
                {["Takes 2 minutes", "Completely free", "Instant results", "No spam"].map((a) => (
                  <span key={a} className="text-sm text-gray-400 flex items-center gap-1.5">
                    <span className="text-green-500">✓</span> {a}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-400 mb-2 text-center lg:text-left">Or just get notified when we launch:</p>
              <div className="max-w-sm mx-auto lg:mx-0">
                <EmailForm placeholder="your@email.com" buttonText="Notify Me" />
              </div>
            </motion.div>

            {/* App Store status */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mt-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-100" />
              <span className="text-sm text-gray-500">Currently under App Store review</span>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as never }}
          >
            <div className="phone-glow animate-float">
              <PhoneFrame
                src="/screenshots/today.png"
                alt="Promptly task list"
                size="lg"
              />
            </div>

            <motion.div
              className="absolute -left-12 top-1/4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-lg">⭐</div>
              <div>
                <p className="text-xs text-gray-500 leading-none mb-0.5">Just earned</p>
                <p className="text-sm font-bold text-gray-900">+15 min</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-10 bottom-1/4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-xs text-gray-500 leading-none mb-0.5">Day streak</p>
                <p className="text-sm font-bold text-gray-900">7 days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
