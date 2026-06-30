"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Home } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const audiences = [
  {
    icon: GraduationCap,
    iconClass: "text-brand-500 bg-brand-50",
    label: "College Students",
    headline: "Stuck in a scroll loop instead of studying?",
    body: "Earn your feed time after the work is done. Promptly keeps you on track through assignments, exams, and everything in between.",
    accent: "bg-brand-50 border-brand-100",
    accentLabel: "text-brand-500 bg-brand-50",
  },
  {
    icon: Brain,
    iconClass: "text-accent bg-accent-light",
    label: "ADHD & Focus Struggles",
    headline: "External cues and real rewards make all the difference.",
    body: "Promptly gives you both. Timely reminders, a structured day, and a tangible payoff for following through.",
    accent: "bg-orange-50 border-orange-100",
    accentLabel: "text-accent bg-accent-light",
  },
  {
    icon: Home,
    iconClass: "text-purple-500 bg-purple-50",
    label: "Families",
    headline: "Screen time your kids actually work toward.",
    body: "Assign tasks, set rewards, and make digital time something that's earned — not just handed out. No fights, just a clear system.",
    accent: "bg-purple-50 border-purple-100",
    accentLabel: "text-purple-500 bg-purple-50",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-[#FAFAFA]">
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
            Who it&apos;s for
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Built for anyone who wants{" "}
            <span className="text-gradient">to get more done.</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {audiences.map((a) => (
            <motion.div
              key={a.label}
              variants={fadeUp}
              className={`rounded-2xl p-8 border hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-card-hover ${a.accent}`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${a.iconClass}`}>
                <a.icon className="w-5 h-5" />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full ${a.accentLabel}`}
              >
                {a.label}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 leading-snug">
                {a.headline}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
