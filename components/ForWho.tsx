"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Home } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const audiences = [
  {
    icon: GraduationCap,
    iconClass: "text-brand-100 bg-brand-600/30",
    label: "College Students",
    labelClass: "text-brand-100 bg-brand-600/30",
    headline: "Stuck in a scroll loop instead of studying?",
    body: "Earn your feed time after the work is done. Pactly keeps you on track through assignments, exams, and everything in between.",
  },
  {
    icon: Brain,
    iconClass: "text-brand-500 bg-brand-500/20",
    label: "ADHD & Focus Struggles",
    labelClass: "text-brand-500 bg-brand-500/15",
    headline: "External cues and real rewards make all the difference.",
    body: "Pactly gives you both. Timely reminders, a structured day, and a tangible payoff for following through.",
  },
  {
    icon: Home,
    iconClass: "text-brand-100 bg-brand-600/30",
    label: "Families",
    labelClass: "text-brand-100 bg-brand-600/30",
    headline: "Screen time your kids actually work toward.",
    body: "Assign tasks, set rewards, and make digital time something that's earned — not just handed out. No fights, just a clear system.",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-brand-800">
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
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
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
              className="bg-brand-700 rounded-2xl p-8 border border-brand-600/40 hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${a.iconClass}`}>
                <a.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full ${a.labelClass}`}>
                {a.label}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-3 leading-snug">
                {a.headline}
              </h3>
              <p className="text-brand-100 opacity-60 text-sm leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
