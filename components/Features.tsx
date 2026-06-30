"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, SkipForward, Star, Flame, BarChart3, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Bell,
    color: "bg-brand-50 text-brand-500",
    title: "Smart Reminders",
    body: "Get notified exactly when each task is due — at the time you set, not all at once.",
  },
  {
    icon: SkipForward,
    color: "bg-amber-50 text-amber-500",
    title: "Delay Without Guilt",
    body: 'Push back a task in one tap: 10 min, 30 min, an hour, or tonight. Promptly reschedules automatically.',
  },
  {
    icon: Star,
    color: "bg-orange-50 text-accent",
    title: "Reward Bank",
    body: "Every completed task earns screen time. Your reward bank grows as you get things done.",
  },
  {
    icon: Flame,
    color: "bg-red-50 text-red-500",
    title: "Day Streaks",
    body: "Build momentum day by day. Your streak grows as your habits strengthen.",
  },
  {
    icon: BarChart3,
    color: "bg-green-50 text-green-500",
    title: "History & Insights",
    body: "Track your completion rate, day streaks, and see which tasks you delay most.",
  },
  {
    icon: Users,
    color: "bg-purple-50 text-purple-500",
    title: "Family Mode",
    body: "Parents can manage tasks and screen time for their kids. Chore-linked screen time, done right.",
    badge: "Coming soon",
  },
];

export default function Features() {
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
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Everything you need.{" "}
            <span className="text-gradient">Nothing you don&apos;t.</span>
          </motion.h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${f.color}`}>
                <f.icon className="w-5 h-5" />
              </div>

              <div className="relative flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                {f.badge && (
                  <span className="shrink-0 text-[11px] font-semibold text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100 mt-0.5">
                    {f.badge}
                  </span>
                )}
              </div>
              <p className="relative text-gray-500 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
