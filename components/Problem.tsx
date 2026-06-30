"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, ListTodo, BookOpen } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    icon: Smartphone,
    title: "You open your phone \"for a second.\"",
    body: "Forty minutes later you haven't started. You don't even know how it happened.",
  },
  {
    icon: ListTodo,
    title: "Your to-do list is twelve items long.",
    body: "You've been staring at it all day. Nothing got checked off. The list just got longer.",
  },
  {
    icon: BookOpen,
    title: "You promised yourself you'd study first.",
    body: "You didn't. Will-power alone isn't a system — and you already know that.",
  },
];

export default function Problem() {
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
            Sound familiar?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            You&apos;re not lazy.{" "}
            <span className="text-gradient">You just need a system.</span>
          </motion.h2>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to solution */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-card border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <span className="text-gray-600 font-medium">You struggle with phone distractions</span>
            </div>
            <span className="hidden sm:block text-gray-300">·</span>
            <div className="flex items-center gap-3">
              <span className="text-amber-500 text-xl">◎</span>
              <span className="text-gray-600 font-medium">Your goal: be more productive</span>
            </div>
            <span className="hidden sm:block text-gray-300">·</span>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-brand-500 font-semibold">Promptly is built exactly for this</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
